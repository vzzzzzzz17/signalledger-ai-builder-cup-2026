import http from "node:http";
import { GoogleAuth } from "google-auth-library";

const port = Number(process.env.PORT || 8080);
const projectId = process.env.GOOGLE_CLOUD_PROJECT || process.env.GCLOUD_PROJECT;
const location = process.env.VERTEX_LOCATION || "us-central1";
const model = process.env.VERTEX_MODEL || "gemini-2.5-flash";

const headers = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Content-Type": "application/json; charset=utf-8",
};

function send(res, status, body) {
  res.writeHead(status, headers);
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 100_000) reject(new Error("Request body is too large"));
    });
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });
}

function promptFor(text) {
  return `You are SignalLedger, a neutral context layer for a trading community. Analyze the public-style market post below. Do not predict prices or give investment advice. Return JSON only with these keys: asset, market, direction, action, horizon, riskScore (0-100 where higher means clearer risk disclosure), promotionalPressure (0-100), evidenceQuality, stopLoss, summary, flags (array of short strings). Preserve uncertainty; use "Unknown" when the post does not support a field.\n\nPost:\n${text}`;
}

async function vertexAccessToken() {
  const auth = new GoogleAuth({ scopes: "https://www.googleapis.com/auth/cloud-platform" });
  const client = await auth.getClient();
  const token = await client.getAccessToken();
  return typeof token === "string" ? token : token?.token;
}

async function analyzeWithVertex(text) {
  if (!projectId) throw new Error("GOOGLE_CLOUD_PROJECT is not configured");
  const token = await vertexAccessToken();
  const endpoint = `https://${location}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${location}/publishers/google/models/${model}:generateContent`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: promptFor(text) }] }],
      generationConfig: { temperature: 0.1, responseMimeType: "application/json" },
    }),
  });
  if (!response.ok) throw new Error(`Vertex AI returned ${response.status}`);
  const data = await response.json();
  const output = data.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("");
  if (!output) throw new Error("Vertex AI returned no text");
  return JSON.parse(output.replace(/^```json\s*|\s*```$/g, ""));
}

async function analyze(text) {
  return analyzeWithVertex(text);
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") return send(res, 204, {});
  if (req.method === "GET" && req.url === "/health") return send(res, 200, { ok: true, service: "signalledger-api" });
  if (req.method !== "POST" || req.url !== "/api/analyze") return send(res, 404, { error: "Not found" });

  try {
    const body = JSON.parse(await readBody(req));
    const text = String(body.text || "").trim();
    if (!text) return send(res, 400, { error: "text is required" });
    if (text.length > 8_000) return send(res, 413, { error: "text is too long" });
    return send(res, 200, { ok: true, analysis: await analyze(text), model });
  } catch (error) {
    console.error(error);
    return send(res, 502, { ok: false, error: "AI analysis unavailable" });
  }
});

server.listen(port, () => console.log(`SignalLedger API listening on ${port}`));
