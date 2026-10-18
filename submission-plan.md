# SignalLedger Submission Plan

## Submission Requirements

Required deliverables:

1. Working deployed prototype link.
2. Demo video under 3 minutes.
3. Public GitHub repository.
4. Solution deck.

Initial submission is asynchronous: the requirements call for a working link and a short demo video, not a live presentation. A live demo is relevant only if the project advances to the final round.

Technical requirement:

- Use Google AI models or agentic platforms.
- Deploy on Google Cloud, Cloud Run, or Firebase.

Theme:

- BFSI: Intelligent Risk, Fraud & Financial Experiences.

## Current Status

Already created:

- Product direction: trading community with professional context beside every market call.
- Prototype plan: `prototype-plan.md`.
- Demo specification: `demo-spec.md`.
- Chinese discussion notes: `discussion-notes-zh.md`.
- Public demo: https://signalledger-ai-builder-cup.web.app
- Static clickable demo: `demo/index.html`.
- Bilingual UI: English / Chinese.
- Sample dataset: 15 market calls across US stocks and crypto.
- Core feature: follower execution gap.
- KOL appeal / add-context flow.
- Public RSS author feeds with source links.
- Public delayed market snapshots from Nasdaq and CoinGecko.
- Formal official-template deck: `SignalLedger-Official-Submission-Template.pptx`.

## What Is Missing

### 1. Real Google AI Integration

The deployed demo has a Cloud Run backend with a Gemini/Vertex AI path, gated off by default to keep the public prototype within zero-model-cost mode. The endpoint can:

- Extract asset, direction, horizon, evidence, risk disclosure, and promotional pressure from pasted text.
- Optionally analyze uploaded screenshots.
- Return structured JSON for the frontend.

Minimum acceptable version:

- Text input to Gemini.
- Screenshot upload can remain simulated if time is tight, but deck should explain the intended multimodal path.

Better version:

- Text + image upload to Gemini multimodal.

### 2. Deployable App

Need deploy to either:

- Firebase Hosting for static frontend plus Cloud Run API.
- Or Cloud Run hosting the whole app.

Recommended:

- Firebase Hosting for frontend.
- Cloud Run for Gemini extraction API.
- Firestore optional; for hackathon demo, cached public feeds and static JSON are enough.

### 3. Public GitHub Repository

Need:

- Repo name.
- README.
- Architecture diagram.
- Setup instructions.
- Demo dataset.
- Clear disclaimer: no investment advice.

### 4. Demo Video

Need a script and screen recording under 3 minutes.

Suggested structure:

- 0:00-0:20: Problem.
- 0:20-0:50: Browse source-linked public authors.
- 0:50-1:25: Open a scenario author's context card.
- 1:25-2:05: Context card.
- 2:05-2:40: Follower execution gap.
- 2:40-3:00: Author profile, source link, and fairness flow.

### 5. Solution Deck

Recommended deck:

1. Title: SignalLedger.
2. Problem: social trading lacks professional context and accountability.
3. Insight: KOL result is not follower result.
4. Solution: community context layer.
5. Product flow.
6. AI implementation.
7. Google Cloud architecture.
8. Impact and business value.
9. Differentiation / moat.
10. Roadmap and guardrails.

## What I Need From You

Required:

1. Team name and member names for deck/video.
2. Preferred submission language: English only, or bilingual deck with English primary.

Strongly recommended:

6. A short founder/domain credibility statement you are comfortable using.
   Example: "Built from first-hand experience observing how retail investors consume market views in trading communities."
7. Whether we can mention "broker community" only, or lightly reference "Futubull-like communities" without naming your employer.
8. Logo preference: keep the SignalLedger wordmark with a simple mark.

Avoid providing:

- Employer-private data.
- Internal screenshots.
- Internal moderation rules.
- Non-public user behavior metrics.
- Anything that implies employer endorsement.

## Recommended Build Path

### Phase 1: Upgrade Prototype Into Submission App

- KOL-first web app and public demo are complete.
- README, source-linked feeds, and API route are complete.
- Gemini extraction prompt and API route are complete; live calls remain opt-in.

### Phase 2: Google Cloud Deployment

- Firebase Hosting and Cloud Run are deployed.
- Produce final video and submit the live URL.

### Phase 3: Submission Assets

- Upload `SignalLedger-Official-Submission-Template.pptx`.
- Record the 3-minute video from `demo-video-script.md`.
- Create README and architecture diagram.
- Final compliance pass.

## Competition Story

SignalLedger is not an AI stock picker.

It is a professional context layer for social trading communities. Users can still browse market opinions, but every actionable market call can be accompanied by:

- What the author actually claimed.
- Whether risk was disclosed.
- Whether evidence was provided.
- How similar calls behaved historically.
- How a realistic follower may have performed.
- Whether the author can add context without rewriting history.

The key insight:

KOL performance is not follower performance.
