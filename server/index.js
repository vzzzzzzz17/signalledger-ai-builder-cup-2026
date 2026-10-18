import http from "node:http";
import { GoogleAuth } from "google-auth-library";

const port = Number(process.env.PORT || 8080);
const projectId = process.env.GOOGLE_CLOUD_PROJECT || process.env.GCLOUD_PROJECT;
const location = process.env.VERTEX_LOCATION || "us-central1";
const model = process.env.VERTEX_MODEL || "gemini-2.5-flash";
const liveAiEnabled = process.env.ENABLE_LIVE_AI === "true";
const stockSymbols = ["NVDA", "TSLA", "PLTR", "COIN", "MSTR", "AAPL", "MSFT", "AMD", "JPM", "SPY"];
let marketCache = { expiresAt: 0, payload: null };

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

async function fetchJson(url, timeoutMs = 3500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal, headers: { "User-Agent": "SignalLedger/1.0" } });
    if (!response.ok) throw new Error(`Upstream returned ${response.status}`);
    return response.json();
  } finally {
    clearTimeout(timer);
  }
}

function parseNumber(value) {
  const number = Number(String(value || "").replace(/[$,%+,]/g, ""));
  return Number.isFinite(number) ? number : null;
}

async function fetchNasdaqQuote(symbol) {
  const data = await fetchJson(`https://api.nasdaq.com/api/quote/${symbol}/info?assetclass=stocks`);
  const primary = data.data?.primaryData;
  if (!primary?.lastSalePrice) return null;
  return {
    symbol,
    price: parseNumber(primary.lastSalePrice),
    change: parseNumber(primary.netChange),
    changePct: parseNumber(primary.percentageChange),
    asOf: primary.lastTradeTimestamp || null,
    source: "Nasdaq delayed quote",
  };
}

async function fetchCryptoQuotes() {
  const data = await fetchJson("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,dogecoin&vs_currencies=usd&include_24hr_change=true");
  return {
    BTC: { symbol: "BTC", price: data.bitcoin?.usd || null, changePct: data.bitcoin?.usd_24h_change || null, source: "CoinGecko public snapshot" },
    ETH: { symbol: "ETH", price: data.ethereum?.usd || null, changePct: data.ethereum?.usd_24h_change || null, source: "CoinGecko public snapshot" },
    SOL: { symbol: "SOL", price: data.solana?.usd || null, changePct: data.solana?.usd_24h_change || null, source: "CoinGecko public snapshot" },
    DOGE: { symbol: "DOGE", price: data.dogecoin?.usd || null, changePct: data.dogecoin?.usd_24h_change || null, source: "CoinGecko public snapshot" },
  };
}

async function marketSnapshot() {
  if (marketCache.payload && marketCache.expiresAt > Date.now()) return marketCache.payload;
  const quotes = {};
  const stocks = await Promise.all(stockSymbols.map(async (symbol) => {
    try {
      return await fetchNasdaqQuote(symbol);
    } catch {
      return null;
    }
  }));
  stocks.filter(Boolean).forEach((quote) => { quotes[quote.symbol] = quote; });
  try {
    Object.assign(quotes, await fetchCryptoQuotes());
  } catch {
    // A delayed quote is optional; the UI keeps its documented offline snapshot.
  }
  const payload = { ok: true, asOf: new Date().toISOString(), quotes, source: "Public delayed market snapshots" };
  marketCache = { payload, expiresAt: Date.now() + 5 * 60 * 1000 };
  return payload;
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

function offlineAnalysis(text) {
  const upper = text.toUpperCase();
  const highPressure = /起飞|爆|稳赚|必|别错过|do not miss|fly|no-brainer/i.test(text);
  const hasRisk = /止损|stop|risk|invalidation|风险/i.test(text);
  const asset = upper.includes("BTC") ? "BTC" : upper.includes("TSLA") ? "TSLA" : "Unknown";
  return {
    asset,
    market: asset === "BTC" ? "Crypto" : "US Stock",
    direction: /跌|short|空/i.test(text) ? "Bearish" : "Bullish",
    action: highPressure ? "High-pressure call" : "Unclear",
    horizon: "Unknown",
    riskScore: hasRisk ? 45 : 8,
    promotionalPressure: highPressure ? 90 : 48,
    evidenceQuality: "Not independently verified",
    stopLoss: /止损|stop/i.test(text) ? "Mentioned" : "None",
    summary: "Offline demo context. Live Gemini analysis is disabled to keep this deployment within free usage.",
    flags: [highPressure ? "Promotional pressure" : "Needs evidence review", hasRisk ? "Risk language detected" : "No clear risk condition"],
  };
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") return send(res, 204, {});
  if (req.method === "GET" && req.url === "/health") return send(res, 200, { ok: true, service: "signalledger-api" });
  if (req.method === "GET" && req.url === "/api/market-snapshot") {
    try {
      return send(res, 200, await marketSnapshot());
    } catch (error) {
      console.error(error);
      return send(res, 502, { ok: false, error: "Market snapshot unavailable" });
    }
  }
  if (req.method !== "POST" || req.url !== "/api/analyze") return send(res, 404, { error: "Not found" });

  try {
    const body = JSON.parse(await readBody(req));
    const text = String(body.text || "").trim();
    if (!text) return send(res, 400, { error: "text is required" });
    if (text.length > 8_000) return send(res, 413, { error: "text is too long" });
    const analysis = liveAiEnabled ? await analyzeWithVertex(text) : offlineAnalysis(text);
    return send(res, 200, { ok: true, live: liveAiEnabled, analysis, model: liveAiEnabled ? model : "offline-context" });
  } catch (error) {
    console.error(error);
    return send(res, 502, { ok: false, error: "AI analysis unavailable" });
  }
});

server.listen(port, () => console.log(`SignalLedger API listening on ${port}`));
