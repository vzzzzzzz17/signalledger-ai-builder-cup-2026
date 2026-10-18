# SignalLedger Final Submission Checklist

## Ready

- [x] Working deployed prototype: https://signalledger-ai-builder-cup.web.app
- [x] Cloud Run API deployed behind Firebase Hosting `/api/**`
- [x] Public GitHub repository: https://github.com/vzzzzzzz17/signalledger-ai-builder-cup-2026
- [x] KOL-first Discover feed with automatic loading
- [x] Public RSS author records with source links
- [x] Delayed public market snapshots with cached fallback
- [x] Context card, follower impact, author profile, review queue, and appeal flow
- [x] Bilingual interface
- [x] Investment-advice disclaimer and public/synthetic data labeling
- [x] Official-template deck: `SignalLedger-Official-Submission-Template.pptx`
- [x] Video script: `demo-video-script.md`
- [x] Local demo video: `SignalLedger-Demo-Video.mp4` (1:57, H.264, baked-in subtitles)

## Before Submit

- [x] Add team name and member names to the deck.
- [ ] Confirm the same names in the submission form.
- [x] Record a video under 3 minutes.
- [ ] Upload the public Demo URL, GitHub URL, video, and PPTX.
- [ ] Verify the GitHub repository is public in the browser.
- [ ] Do not upload employer-private data, internal screenshots, credentials, or OAuth JSON files.

## Technical Note

The deployed Cloud Run service uses `ENABLE_LIVE_AI=false` to avoid unexpected Vertex AI charges. The Gemini/Vertex AI extraction path is implemented and can be enabled explicitly, but the public Demo uses deterministic offline context plus source-linked public feeds.

## Submission Copy

**One-line pitch:** SignalLedger is the professional context layer for social trading communities, helping users understand who said what, what was disclosed, and how a realistic follower path may differ from the author's visible result.

**Short description:** SignalLedger is a KOL-first financial context product. It combines source-linked public market commentary, delayed market snapshots, explainable context cards, follower-impact scenarios, and versioned author additions. It does not predict prices or provide investment advice. The prototype runs on Firebase Hosting and Cloud Run, with an opt-in Gemini/Vertex AI extraction path and a zero-model-cost default mode for safe demonstration.
