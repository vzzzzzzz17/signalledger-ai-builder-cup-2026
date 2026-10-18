# SignalLedger Submission Form Guide

Use this sheet while completing the competition form. The canonical team names are **Zhangwei** and **Chen Jiaoyi**.

## 1. Team Details

- **Team name:** SignalLedger
- **Team leader:** Zhangwei
- **Team member:** Chen Jiaoyi
- **Project name:** SignalLedger
- **Theme/category:** BFSI: Intelligent Risk, Fraud & Financial Experiences

## 2. One-Line Pitch

> SignalLedger is the professional context layer for social trading communities, helping users understand who said what, what was disclosed, and how a realistic follower path may differ from the author's visible result.

## 3. Problem Statement

> Social trading moves faster than accountability. KOL posts, public market commentary, and community calls are fragmented across platforms. Users often see a successful narrative without seeing the original wording, risk disclosure, later corrections, or the difference between the author's visible result and a delayed follower's realized path.

## 4. Solution Description

> SignalLedger is a KOL-first community layer for social trading. It preserves source-linked public commentary, structures each market claim into a Context Card, compares the author's visible result with a realistic follower-impact scenario, and lets authors add context as a new version without rewriting history. It is designed to improve understanding, not to provide investment advice or price predictions.

## 5. Main Features

- KOL-first Discover feed with search and market filters.
- Source-linked public author records from public RSS feeds.
- Context Card: claim, asset, direction, horizon, risk disclosure, evidence quality, and promotional pressure.
- Follower Impact: visible narrative versus delayed-entry follower path.
- Author Profile: disclosure habits, correction behavior, and longitudinal context.
- Review Queue and author appeal/add-context flow.
- English/Chinese interface.
- Public-data labels, delayed market snapshots, and investment-advice disclaimer.

## 6. Innovation / Differentiation

> Most trading products optimize for speed, engagement, or prediction. SignalLedger builds a durable reputation and accountability layer around the people influencing decisions. Its core distinction is separating an author's visible outcome from a realistic follower path, while preserving immutable versions of what was said and what was later added. Over time, source-linked history, corrections, disclosure habits, and follower-impact records can compound into a cross-platform trust graph.

## 7. Google AI / Google Cloud Technology

> The application is deployed with Firebase Hosting and Cloud Run in the Google Cloud project `signalledger-ai-builder-cup`. When a user explicitly clicks Analyze, the Cloud Run API calls Vertex AI Gemini 2.5 Flash to structure a pasted market-call text into asset, direction, time horizon, evidence, risk disclosure, promotional pressure, and flags. A real production request was verified through both Firebase Hosting and the direct Cloud Run endpoint with `live: true`. Public RSS feeds, delayed Nasdaq/CoinGecko snapshots, caching, and the frontend are connected through the Google Cloud architecture.

**Technologies:** Firebase Hosting, Cloud Run, Node.js, Vertex AI Gemini path, JavaScript, public RSS, Nasdaq delayed quotes, CoinGecko public snapshots.

## 8. Expected Impact

> SignalLedger helps users pause before acting on a high-velocity market post. It makes source, risk, evidence, corrections, and follower impact visible in one place. For communities and platforms, it provides a neutral context layer that can improve trust without suppressing discussion or turning the product into a stock-picking service.

## 9. Demo Links

- **Cloud Run prototype:** https://signalledger-api-991291718418.us-central1.run.app
- **Firebase product mirror:** https://signalledger-ai-builder-cup.web.app
- **Video player:** https://signalledger-ai-builder-cup.web.app/demo-video.html?v=final
- **Direct video file:** https://signalledger-ai-builder-cup.web.app/SignalLedger-Demo-Video-Zhangwei-Chen-Jiaoyi.mp4
- **GitHub repository:** https://github.com/vzzzzzzz17/signalledger-ai-builder-cup-2026
- **Solution deck:** `SignalLedger-Official-Submission-Template.pptx`

If the form requests a video file upload, download the direct MP4 link and upload the file. It is 2:53 and includes voiceover plus baked-in subtitles.

## 10. Paste-Ready Brief Description (under 1024 characters)

> SignalLedger is a KOL-first context layer for social trading communities. It preserves source-linked public market commentary, structures each post into a Context Card, and compares an author's visible result with a realistic delayed follower path. Users can review the original claim, risk disclosure, evidence quality, promotional pressure, source link, historical profile, and later author additions without rewriting history. The product is deployed with Firebase Hosting and Cloud Run. When a user clicks Analyze, Cloud Run calls Vertex AI Gemini 2.5 Flash to extract structured context from pasted market-call text. SignalLedger uses public RSS sources, delayed Nasdaq/CoinGecko snapshots, caching, and clearly labeled synthetic scenarios. It does not provide investment advice or price predictions.

## 11. Submission File

Upload this PDF file, not the PPTX:

`SignalLedger-Official-Submission-Template.pdf`

The official template has been filled, the instruction/empty slides have been removed, and the links page includes the public demo, repository, and video link. The PDF is 13 pages and approximately 585 KB, under the 5 MB upload limit.

## 12. Disclosures / Compliance

Use these statements when the form asks about data, privacy, or financial advice:

> SignalLedger does not provide investment advice, price predictions, or trading instructions.

> The public Demo uses source-linked public commentary, public delayed market snapshots, synthetic scenarios, and clearly labeled fallback data. No employer-private data, internal screenshots, credentials, OAuth JSON files, or restricted platform data are included.

> Public-source authors are represented through source-linked commentary and are not presented as endorsing SignalLedger. When a source is not a direct trade call, the product does not invent a trading outcome.

## 13. Final Manual Checklist

- [ ] Enter `SignalLedger` as the team and project name.
- [ ] Enter `Zhangwei` exactly as the team leader name.
- [ ] Enter `Chen Jiaoyi` exactly as the team member name.
- [ ] Paste the one-line pitch and solution description above.
- [ ] Select or enter the BFSI theme/category.
- [ ] Prototype Link: paste `https://signalledger-api-991291718418.us-central1.run.app`.
- [ ] Upload `SignalLedger-Official-Submission-Template.pdf`.
- [ ] Paste the GitHub repository URL.
- [ ] Demo Video Link: paste `https://signalledger-ai-builder-cup.web.app/demo-video.html?v=final`.
- [ ] Paste the brief description from section 10.
- [ ] Confirm the GitHub repository is public in an incognito browser window.
- [ ] Do not upload credentials, employer-private information, or the Google OAuth JSON file.
- [ ] Take a final screenshot of the submitted confirmation page.
