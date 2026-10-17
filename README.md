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

The current version is a static clickable prototype:

```text
demo/index.html
```

Open it directly in a browser, then click **Load 15 sample calls**.

The demo includes:

- English / Chinese language toggle.
- US stock and crypto sample calls.
- Community feed view.
- Context card for each market call.
- Follower execution gap analysis.
- Author behavior profile.
- Platform review queue.
- Author appeal / add-context flow.

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

## Repository Structure

```text
demo/
  index.html
  styles.css
  app.js
prototype-plan.md
demo-spec.md
discussion-notes-zh.md
submission-plan.md
```

## Next Steps

1. Add Gemini extraction endpoint.
2. Convert static sample extraction into model-backed extraction.
3. Deploy frontend and backend on Google Cloud.
4. Prepare public demo video under 3 minutes.
5. Prepare submission deck.
