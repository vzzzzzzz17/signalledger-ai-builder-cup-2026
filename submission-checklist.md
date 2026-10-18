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
- [x] Local demo video: `SignalLedger-Demo-Video.mp4` (2:53, H.264/AAC, voiceover, baked-in subtitles, under 3 minutes)

## Before Submit

- [x] Add team name and member names to the deck.
- [ ] Confirm the same names in the submission form.
- [x] Record a video under 3 minutes.
- [ ] Upload the public Demo URL, GitHub URL, video, and PPTX.
- [ ] Verify the GitHub repository is public in the browser.
- [ ] Do not upload employer-private data, internal screenshots, credentials, or OAuth JSON files.

## Technical Note

The deployed Cloud Run service uses `ENABLE_LIVE_AI=true`. A real test through Firebase Hosting and a direct Cloud Run request both returned `live: true` with `model: gemini-2.5-flash`. The homepage does not call the model automatically; Gemini is invoked only when the user submits text through the Analyze action. The deterministic offline path remains available when `ENABLE_LIVE_AI=false`.

## Submission Copy

**One-line pitch:** SignalLedger is the professional context layer for social trading communities, helping users understand who said what, what was disclosed, and how a realistic follower path may differ from the author's visible result.

**Short description:** SignalLedger is a KOL-first financial context product. It combines source-linked public market commentary, delayed market snapshots, explainable context cards, follower-impact scenarios, and versioned author additions. It does not predict prices or provide investment advice. The prototype runs on Firebase Hosting and Cloud Run; an explicit Analyze action invokes Gemini 2.5 Flash through Vertex AI to structure a pasted market post.
