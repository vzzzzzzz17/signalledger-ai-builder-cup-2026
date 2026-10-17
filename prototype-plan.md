# CallLedger Prototype Plan

## 1. One-Line Pitch

CallLedger is a reputation and accountability layer for social trading, turning public market calls from broker communities, X, crypto communities, and chat groups into traceable receipts with outcome tracking and risk-disclosure scoring.

Chinese pitch:

让每一次公开喊单都有账可查。

## 2. Core Insight

Social trading does not lack opinions. It lacks accountability.

KOLs and strategy influencers can publish bullish or bearish calls, delete losing calls, selectively show profitable screenshots, or rewrite the narrative after price moves. Retail followers often act later, with worse entry prices and less risk control, but the platform only preserves scattered posts, screenshots, and comments.

CallLedger does not predict the market. It records and audits the information environment around a trade call:

- Who made the call.
- What asset was mentioned.
- What action was implied.
- What price was available at the time.
- Whether the risk was disclosed.
- What happened afterward.
- Whether followers would have experienced a different outcome than the KOL claims.

## 3. Competition Positioning

Theme fit: BFSI / Financial Services.

Primary value:

- Investor protection.
- Responsible social trading.
- AI-powered financial content risk governance.
- Cross-platform reputation infrastructure.

Why this is safer than an AI trading bot:

- It does not provide buy/sell recommendations.
- It does not claim to forecast price.
- It evaluates public trading claims, disclosure quality, and historical accountability.
- It can be used by retail investors, broker communities, social platforms, or regulators as a transparency layer.

## 4. Target Users

### Retail Investors

They want to know whether a trading KOL has a real track record or only selective screenshots.

### Broker / Trading Community Platforms

Examples: broker community feeds, stock discussion boards, social trading features inside broker apps.

They need to reduce misleading content, detect hype-driven calls, and protect beginner users.

### Financial Content Platforms

Examples: X finance accounts, crypto influencer accounts, newsletter communities, paid signal groups.

They need a reputation layer that separates responsible analysis from manipulative hype.

## 5. MVP Scope

The prototype should focus on a small but complete loop:

1. User uploads or pastes social trading content.
2. Gemini extracts structured trade calls from text or screenshots.
3. The system generates a Call Receipt for each call.
4. The system attaches mock or public market outcome data.
5. The system scores the KOL's accountability profile.
6. The UI shows a clear dashboard for retail users and platform moderators.

## 6. MVP Inputs

For the competition demo, use controlled sample data rather than live scraping.

Supported input types:

- Screenshot of a broker-community style post.
- Screenshot or pasted text from X.
- Screenshot of a crypto KOL post.
- CSV of historical KOL posts.
- Chat transcript from a trading group.
- Optional screenshot of profit/loss claim.

Avoid building live crawlers in the prototype. Use user-authorized uploads and mock public posts to stay clean on platform rules.

## 7. Core AI Tasks

### 7.1 Trade Call Extraction

Gemini converts raw posts into structured records.

Example output:

```json
{
  "author": "TraderAlpha",
  "source": "X",
  "posted_at": "2026-10-12T14:30:00Z",
  "asset": "TSLA",
  "direction": "bullish",
  "suggested_action": "buy",
  "time_horizon": "this week",
  "entry_language": "buy now",
  "confidence_language": "high",
  "evidence_type": "vague catalyst",
  "risk_disclosure": false,
  "stop_loss": null,
  "original_text": "TSLA is going to fly this week. Do not miss it."
}
```

### 7.2 Hype and Evidence Analysis

The model detects whether the post uses emotional pressure without enough reasoning.

Signals:

- Guaranteed language: "must go up", "cannot lose", "sure win".
- Scarcity pressure: "last chance", "do not miss", "before it explodes".
- Social proof: "smart money is already in", "everyone knows".
- Missing thesis: no valuation, news source, technical setup, or risk condition.

### 7.3 Risk Disclosure Analysis

The system checks whether the KOL disclosed:

- Invalidating condition.
- Stop loss or exit logic.
- Position sizing.
- Time horizon.
- Uncertainty.
- Conflict of interest.
- Whether it is educational content rather than personalized advice.

### 7.4 Outcome Tracking

For the prototype, outcome data can be mocked or loaded from a small static dataset.

Metrics:

- Price at call time.
- 1-day return.
- 7-day return.
- 30-day return.
- Maximum favorable excursion.
- Maximum adverse excursion.
- Whether a reasonable stop loss would have triggered.
- Difference between immediate entry and delayed follower entry.

### 7.5 Follower Slippage Simulation

This is the most distinctive feature.

Instead of only asking "Was the KOL right?", the system asks:

"What would a follower likely experience if they acted after seeing this call?"

In Chinese product language, this is "跟单偏差模拟": the KOL's claimed result is often not the same as the follower's realized result.

Example:

- KOL posts: "BTC breakout, easy +12%."
- KOL may have entered before posting.
- A follower sees the post 20 minutes later.
- The follower buys higher, uses a market order, and has no stop loss.
- The asset briefly pumps, then drops.
- The KOL later posts a winning screenshot, but many followers experienced drawdown or loss.

The prototype should show this gap clearly:

"KOL visible result" versus "realistic follower path."

Simulated follower profiles:

- Immediate follower: buys within 1 minute.
- Delayed follower: buys 30 minutes later.
- Beginner follower: uses market order and no stop loss.
- Overconfident follower: doubles position after price rises.

Output:

- KOL claimed performance.
- Realistic follower performance.
- Slippage / delay penalty.
- Drawdown experienced by followers.

### 7.6 Revision and Deletion Risk

Prototype can simulate this with a versioned dataset.

Signals:

- Post later deleted.
- KOL posted opposite view without acknowledging earlier call.
- KOL only reposted winners.
- KOL used vague language, then claimed accuracy after the fact.

## 8. Key Product Metrics

### Accountability Grade

Overall grade from A to D.

Suggested logic:

- A: Clear thesis, clear risk, consistent follow-up, transparent losses.
- B: Some reasoning, limited risk disclosure.
- C: High hype, weak evidence, selective follow-up.
- D: Repeated hype, no risk disclosure, deletion or rewrite pattern.

### Hype-to-Evidence Ratio

Measures emotional certainty versus actual supporting evidence.

### Risk Disclosure Score

Measures whether the call includes downside and invalidation logic.

### Follower Slippage Gap

Difference between KOL's displayed outcome and realistic follower outcome.

### Narrative Rewrite Risk

Measures whether the author changes story after the price move.

## 9. Prototype Screens

### Screen 1: Landing / Upload

Purpose: get content into the system.

Elements:

- Upload screenshots.
- Paste X, broker-community, or crypto-community post.
- Import sample dataset button.
- Clear disclaimer: "CallLedger does not provide trading advice."

### Screen 2: Extraction Review

Purpose: show AI has understood the trading call.

Elements:

- Original post on left.
- Structured extraction on right.
- Asset, direction, confidence, horizon, risk disclosure.
- Manual correction option.

### Screen 3: Call Receipt

Purpose: create a durable record.

Elements:

- Receipt ID.
- Source.
- Original text hash.
- Timestamp.
- Asset and price at call time.
- Direction.
- Risk disclosure score.
- Evidence score.

### Screen 4: Outcome Tracker

Purpose: compare later market outcomes.

Elements:

- Price path chart.
- 1D / 7D / 30D outcome.
- Max drawdown after call.
- Follower delay scenario.
- "KOL result vs follower result" comparison.

### Screen 5: KOL Reputation Dashboard

Purpose: summarize long-term accountability.

Elements:

- Accountability grade.
- Total calls tracked.
- Win rate.
- Average drawdown.
- Risk disclosure rate.
- Hype-to-evidence trend.
- Deletion / rewrite flags.
- Top risky phrases.

### Screen 6: Platform Moderator View

Purpose: show B2B value for broker communities.

Elements:

- High-risk posts queue.
- Newbie-harm risk.
- Missing disclosure alerts.
- Suggested intervention message.
- "Add risk label" action.

## 10. Demo Storyboard

### 0:00-0:20 Problem

"Social trading is powerful, but public trade calls are not accountable. Winners are amplified. Losers disappear. Retail followers carry the downside."

### 0:20-0:50 Upload

Upload 10 sample posts: 4 X-style stock posts, 3 broker-community style stock posts, 2 crypto influencer posts, 1 chat transcript.

### 0:50-1:30 AI Extraction

Show Gemini extracting asset, direction, time horizon, risk disclosure, and hype language.

### 1:30-2:05 Call Receipt

Open one call receipt. Show the original content, price at post time, missing stop loss, and receipt ID.

### 2:05-2:35 Outcome and Follower Harm

Show the KOL's claim: "+12% winner".

Then show follower reality: delayed follower entered later, endured -9% drawdown, and never saw a stop loss.

### 2:35-3:00 Reputation Dashboard

Show KOL accountability grade and platform moderation queue.

Closing line:

"CallLedger does not predict markets. It makes social trading accountable."

## 11. Data Model

### Author

```json
{
  "id": "author_001",
  "display_name": "TraderAlpha",
  "sources": ["X", "Broker community", "Crypto community"],
  "accountability_grade": "C",
  "total_calls": 32
}
```

### RawPost

```json
{
  "id": "post_001",
  "author_id": "author_001",
  "source": "X",
  "content_type": "screenshot",
  "posted_at": "2026-10-12T14:30:00Z",
  "raw_text": "TSLA is going to fly this week. Do not miss it.",
  "image_url": "gs://bucket/post_001.png",
  "content_hash": "sha256..."
}
```

### CallReceipt

```json
{
  "id": "receipt_001",
  "post_id": "post_001",
  "asset": "TSLA",
  "direction": "bullish",
  "suggested_action": "buy",
  "time_horizon": "this week",
  "price_at_call": 250.0,
  "risk_disclosure_score": 10,
  "hype_to_evidence_score": 85,
  "evidence_type": "vague",
  "stop_loss": null,
  "receipt_created_at": "2026-10-12T14:31:00Z"
}
```

### Outcome

```json
{
  "receipt_id": "receipt_001",
  "return_1d": 0.03,
  "return_7d": -0.08,
  "return_30d": -0.12,
  "max_favorable_excursion": 0.05,
  "max_adverse_excursion": -0.14,
  "delayed_follower_return": -0.16
}
```

## 12. Google Cloud Architecture

Suggested prototype stack:

- Frontend: Next.js or React.
- Hosting: Firebase Hosting.
- Backend API: Cloud Run.
- AI: Gemini multimodal for screenshot and text extraction.
- Storage: Cloud Storage for screenshots.
- Database: Firestore for posts, receipts, authors, outcomes.
- Analytics: BigQuery optional for historical scoring.
- Scheduled jobs: Cloud Scheduler for periodic outcome updates.

## 13. Guardrails and Compliance

The prototype must be clear about boundaries:

- No buy/sell recommendation.
- No price prediction.
- No personalized investment advice.
- No live scraping without permission.
- User-uploaded or demo data only.
- KOL ratings should be framed as content accountability and risk disclosure analysis, not legal accusations.
- Scores should be explainable and appealable.
- The competition version should not use employer-private data, internal screenshots, non-public moderation policy, or proprietary platform metrics.
- UI should use a generic broker-community example unless there is explicit permission to use a real platform brand.

Recommended UI disclaimer:

"CallLedger analyzes public trading content for transparency, accountability, and investor education. It does not provide investment advice or predict future returns."

## 14. Moat Narrative

CallLedger's moat is not the AI model. It is the accountability graph built over time.

### Call Graph

Who said what, about which asset, at what price, with what level of confidence.

### Outcome Graph

What happened after the call across different follower timing scenarios.

### Behavior Graph

Which authors consistently disclose risk, rewrite narratives, delete losing calls, or create follower harm.

### Cross-Platform Memory

Single platforms see their own content. Users see fragmented screenshots. CallLedger can become the independent memory layer across broker communities, X, chat groups, and trading newsletters.

## 15. Open Questions For Discussion

1. Should the KOL score be simple A-D, or more analytical with separate sub-scores?
2. Should the prototype include a moderator action flow, or keep it as investor-facing analysis only?
3. What tone should the product take: neutral audit layer or stronger investor-protection tool?
4. Should crypto calls and stock calls share one scoring model, or have separate risk rules?
5. Should screenshots be stored as evidence, or converted into receipts and then discarded for privacy?

## 16. Recommended MVP Decision

For the competition, the strongest version is:

- Input: screenshots and pasted posts.
- Asset class: US stocks plus crypto.
- Positioning: retail investor protection plus broker community moderation.
- Hero feature: follower slippage simulation.
- Scoring: A-D accountability grade plus explainable sub-scores.
- Data: demo dataset with 3 KOLs and 15 calls across stocks and crypto.

Why:

- US stocks are easy for judges to understand, while crypto makes the social-hype problem more visible.
- Social trading is familiar.
- Screenshot-to-receipt shows Gemini multimodal value.
- Follower slippage simulation makes the idea more original than a simple KOL leaderboard.
- It avoids the compliance risk of giving trading advice.

## 17. Founder / Builder Angle

If the builder has experience inside a trading or broker-community environment, use that as domain credibility, not as a source of private data.

Safe framing:

- "I have seen how retail investors consume market opinions across trading communities."
- "The prototype is based on public and simulated social-trading content."
- "The product is designed as a neutral accountability layer for any broker community or social platform."

Avoid:

- Claiming the project is built by or endorsed by a specific employer.
- Using internal screenshots, user data, moderation workflows, metrics, or product plans.
- Naming specific internal pain points that are not public.

This keeps the story credible while protecting employment and compliance boundaries.
