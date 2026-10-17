# SignalLedger

SignalLedger is a trading-community intelligence layer for social market calls.

Users can still browse market opinions from stock and crypto communities, while SignalLedger adds professional context beside each actionable call:

- what the author actually claimed;
- whether risk was disclosed;
- whether evidence was provided;
- how the author has behaved historically;
- how a realistic follower may have performed after seeing the post;
- whether the author can add context without rewriting history.

This project is being prepared for Google Cloud AI Builder Cup 2026 under the BFSI theme.

## Current Prototype

The current version is a polished clickable prototype with an optional Gemini-powered analysis path:

```text
demo/index.html
```

Open it directly in a browser, then click **Open community feed**.

The demo includes:

- English / Chinese language toggle.
- US stock and crypto sample calls.
- Community feed view.
- Context card for each market call.
- Follower execution gap analysis.
- Author behavior profile.
- Platform review queue.
- Author appeal / add-context flow.
- Offline fallback for a stable recorded demo.

## Important Disclaimer

SignalLedger does not provide trading advice, price predictions, or personalized investment recommendations.

The prototype uses synthetic public-style content and static market paths. It does not use employer-private data, internal screenshots, private moderation rules, or non-public user metrics.

## Planned Google Cloud Architecture

- Frontend: Firebase Hosting.
- AI extraction API: Cloud Run.
- Model: Gemini / Vertex AI Gemini.
- Storage: Cloud Storage for uploaded screenshots.
- Database: Firestore for posts, context receipts, author profiles, and appeal records.
- Analytics: BigQuery for historical behavior aggregation.

The first submission path uses Firebase Hosting for the frontend and Cloud Run for the `/api/analyze` endpoint. Cloud Run calls Gemini through Vertex AI using its service account, so no model key is exposed in the browser. Firebase rewrites `/api/**` to the Cloud Run service.

## Local API

```bash
cd server
npm install
GOOGLE_CLOUD_PROJECT=your-project-id npm start
```

Without Google Cloud credentials, the frontend remains fully usable and uses synthetic offline context. With Application Default Credentials on Cloud Run, pasted posts are analyzed by Gemini.

## Firebase Deployment

Initial submission is asynchronous. The required proof is a working link, a short demo video, a public repository, and a solution deck; no live presentation is required before the final round.

After installing the Firebase CLI and logging in once:

```bash
cp .firebaserc.example .firebaserc
# replace YOUR_GOOGLE_CLOUD_PROJECT_ID in .firebaserc
firebase deploy --only hosting
```

Deploy the API separately to Cloud Run, then Firebase's rewrite will expose it at `/api/analyze`:

```bash
gcloud run deploy signalledger-api \
  --source server \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars GOOGLE_CLOUD_PROJECT=your-project-id
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
```

## Next Steps

1. Connect the deployed Cloud Run service to Vertex AI Gemini.
2. Deploy Firebase Hosting and Cloud Run.
3. Prepare public demo video under 3 minutes.
4. Prepare submission deck.
