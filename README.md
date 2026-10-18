# SignalLedger

SignalLedger is a KOL-first intelligence layer for trading communities.

Users follow the authors shaping the conversation, while SignalLedger adds professional context beside each actionable call:

- what the author actually claimed;
- whether risk was disclosed;
- whether evidence was provided;
- how the author has behaved historically;
- how a realistic follower may have performed after seeing the post;
- whether the author can add context without rewriting history.

This project is being prepared for Google Cloud AI Builder Cup 2026 under the BFSI theme.

## Current Prototype

The current version is a polished clickable prototype with an optional Gemini-powered analysis path:

Live demo: https://signalledger-ai-builder-cup.web.app

```text
demo/index.html
```

Open it directly in a browser. The Discover feed loads automatically.

The demo includes:

- English / Chinese language toggle.
- Source-linked public author feeds plus three scenario author profiles.
- KOL-first Discover feed with market filters and author search.
- Community post view.
- Context card for each market call.
- Follower execution gap analysis.
- Author behavior profile.
- Platform review queue.
- Author appeal / add-context flow.
- Offline fallback for a stable recorded demo.

## Important Disclaimer

SignalLedger does not provide trading advice, price predictions, or personalized investment recommendations.

The prototype uses source-linked public commentary, clearly labeled scenario content, and delayed public market snapshots. It does not use employer-private data, internal screenshots, private moderation rules, or non-public user metrics.

## Google Cloud Architecture

- Frontend: Firebase Hosting.
- AI extraction API: Cloud Run.
- Model: Gemini / Vertex AI Gemini.
- Storage: Cloud Storage for uploaded screenshots.
- Database: Firestore for posts, context receipts, author profiles, and appeal records.
- Analytics: BigQuery for historical behavior aggregation.

The submission deployment uses Firebase Hosting for the frontend and Cloud Run for the `/api/analyze` endpoint. When a user explicitly clicks Analyze, Cloud Run calls Gemini 2.5 Flash through Vertex AI using its service account, so no model key is exposed in the browser. Firebase rewrites `/api/**` to the Cloud Run service. Firebase Hosting, Cloud Run, and Vertex AI are deployed in the `signalledger-ai-builder-cup` Google Cloud project; Vertex AI requires billing or an available credit/quota budget.

## Local API

```bash
cd server
npm install
GOOGLE_CLOUD_PROJECT=your-project-id npm start
```

Without Google Cloud credentials, the frontend remains fully usable and uses synthetic offline context locally. In the deployed service, `ENABLE_LIVE_AI=true` and the Cloud Run service account credentials are used to analyze pasted posts with Gemini.

For a zero-model-cost local or fallback deployment, set `ENABLE_LIVE_AI=false`. The submission deployment keeps it enabled because the form requires a working Google AI feature; the model is called only after an explicit Analyze action.

The community feed also requests a five-minute cached public market snapshot from Nasdaq delayed quotes and CoinGecko when available. The UI shows the snapshot status and falls back to the documented demo snapshot if an upstream source is unavailable. It also reads a small set of public RSS feeds from Barry Ritholtz, Ben Carlson, Nick Maggiulli, and Lyn Alden; each item keeps its source link and is labeled as public commentary, not a direct trade call.

## Firebase Deployment

Initial submission is asynchronous. The required proof is a working link, a short demo video, a public repository, and a solution deck; no live presentation is required before the final round.

After installing the Firebase CLI and logging in once:

```bash
cp .firebaserc.example .firebaserc
# replace YOUR_GOOGLE_CLOUD_PROJECT_ID in .firebaserc
firebase deploy --only hosting --config firebase.static.json
```

Deploy the API separately to Cloud Run, then Firebase's rewrite will expose it at `/api/analyze`:

```bash
gcloud run deploy signalledger-api \
  --source server \
  --region us-central1 \
  --allow-unauthenticated \
  --min 0 \
  --max 1 \
  --cpu-throttling \
  --set-env-vars GOOGLE_CLOUD_PROJECT=your-project-id,ENABLE_LIVE_AI=true
```

## Repository Structure

```text
demo/
  index.html
  styles.css
  app.js
server/
  index.js
  Dockerfile
  package.json
prototype-plan.md
demo-spec.md
discussion-notes-zh.md
submission-plan.md
solution-deck.md
demo-video-script.md
SignalLedger-Solution-Deck.pptx
SignalLedger-Official-Submission-Template.pptx
submission-checklist.md
recording-runbook.md
```

## Submission Assets

1. `SignalLedger-Official-Submission-Template.pptx`
2. `demo-video-script.md`
3. `recording-runbook.md`
4. `submission-checklist.md`
