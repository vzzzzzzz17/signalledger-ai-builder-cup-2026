# CallLedger Demo Spec

## 1. Demo Goal

Build a 3-minute prototype demo that proves one idea:

Social trading posts should not disappear into feeds. Every public market call should become a traceable receipt with outcome tracking and follower-impact analysis.

The demo should not feel like an AI stock picker. It should feel like an accountability layer for broker communities, X finance posts, crypto influencer posts, and trading chat groups.

## 2. Demo Positioning

Product:

CallLedger

Tagline:

Every market call deserves a receipt.

Chinese tagline:

每一次喊单，都应该有账可查。

Primary theme:

BFSI / Financial Services

Target customer:

Broker communities and social trading platforms.

Secondary user:

Retail investors who want to check whether a KOL's record is real, responsible, and follower-safe.

## 3. Demo Dataset Overview

Use a controlled synthetic dataset:

- 3 KOLs.
- 15 posts.
- 9 US stock calls.
- 6 crypto calls.
- Mixed sources: X-style posts, broker-community style posts, crypto community posts, chat snippets.
- Static price paths for each asset after each call.

Do not scrape live platforms for the demo.

## 4. KOL Personas

### KOL A: HypeMax

Profile:

- High-confidence language.
- Often says "easy money", "do not miss", "last chance".
- Rarely gives stop loss.
- Frequently screenshots winners.
- Deletes or ignores losing calls.

Expected grade:

D or C-

Demo role:

Show the danger of social hype.

### KOL B: ChartSage

Profile:

- Technical-analysis style.
- Gives entry range, invalidation, and time horizon.
- Admits failed calls.
- Win rate is not perfect, but process is transparent.

Expected grade:

A- or B+

Demo role:

Show that responsible KOLs can be recognized even when they are not always right.

### KOL C: CryptoWhale

Profile:

- Crypto-focused.
- Posts before volatile moves.
- Uses vague insider-style language.
- Followers often enter late after the move has already happened.
- KOL result looks good, follower result is poor.

Expected grade:

C or D+

Demo role:

Show why follower slippage simulation matters.

## 5. Sample Posts

### Post 1

Author: HypeMax  
Source: X  
Asset: TSLA  
Timestamp: 2026-10-01 14:30 UTC  
Call-time price: 250.00  
Text:

"TSLA is about to explode this week. Smart money is loading. Do not miss this move."

Expected extraction:

- Direction: bullish
- Suggested action: buy
- Time horizon: this week
- Risk disclosure: no
- Stop loss: none
- Evidence: vague smart-money claim
- Hype level: high

Outcome:

- 1D: +3.2%
- 7D: -8.4%
- 30D: -12.1%
- Max favorable: +5.1%
- Max adverse: -14.0%
- Delayed follower return: -15.6%

### Post 2

Author: HypeMax  
Source: Broker community  
Asset: NVDA  
Timestamp: 2026-10-02 15:00 UTC  
Call-time price: 190.00  
Text:

"NVDA dip is a gift. Loading more. Bears will cry."

Expected extraction:

- Direction: bullish
- Suggested action: buy/add
- Time horizon: unclear
- Risk disclosure: no
- Stop loss: none
- Evidence: dip-buy narrative
- Hype level: medium-high

Outcome:

- 1D: -1.0%
- 7D: +4.2%
- 30D: +9.5%
- Max favorable: +11.0%
- Max adverse: -4.8%
- Delayed follower return: +6.1%

### Post 3

Author: HypeMax  
Source: X  
Asset: PLTR  
Timestamp: 2026-10-03 13:45 UTC  
Call-time price: 72.00  
Text:

"PLTR next stop 100. I warned you. No paper hands."

Expected extraction:

- Direction: bullish
- Suggested action: hold/buy
- Time horizon: unclear
- Risk disclosure: no
- Stop loss: none
- Evidence: price target without thesis
- Hype level: high

Outcome:

- 1D: +0.5%
- 7D: -6.0%
- 30D: -18.0%
- Max favorable: +2.3%
- Max adverse: -21.5%
- Delayed follower return: -19.8%

### Post 4

Author: HypeMax  
Source: Chat group  
Asset: COIN  
Timestamp: 2026-10-04 16:10 UTC  
Call-time price: 315.00  
Text:

"COIN is a no-brainer before crypto weekend. I am not selling until 360."

Expected extraction:

- Direction: bullish
- Suggested action: buy/hold
- Time horizon: weekend
- Risk disclosure: no
- Stop loss: none
- Evidence: crypto weekend narrative
- Hype level: medium-high

Outcome:

- 1D: -4.2%
- 7D: -11.0%
- 30D: -7.2%
- Max favorable: +1.4%
- Max adverse: -13.2%
- Delayed follower return: -12.6%

### Post 5

Author: HypeMax  
Source: Broker community  
Asset: MSTR  
Timestamp: 2026-10-05 14:50 UTC  
Call-time price: 520.00  
Text:

"MSTR will rip if BTC moves. This is the cleanest leverage trade."

Expected extraction:

- Direction: bullish
- Suggested action: buy
- Time horizon: conditional, vague
- Risk disclosure: partial, implied dependency on BTC
- Stop loss: none
- Evidence: BTC proxy logic
- Hype level: medium

Outcome:

- 1D: +2.0%
- 7D: -9.5%
- 30D: +1.1%
- Max favorable: +8.2%
- Max adverse: -16.4%
- Delayed follower return: -5.3%

### Post 6

Author: ChartSage  
Source: X  
Asset: AAPL  
Timestamp: 2026-10-01 14:40 UTC  
Call-time price: 230.00  
Text:

"AAPL is testing support near 228-230. Long idea only if it holds above 228. Invalidation below 224. Target 238 over 1-2 weeks."

Expected extraction:

- Direction: bullish, conditional
- Suggested action: buy only if support holds
- Time horizon: 1-2 weeks
- Risk disclosure: yes
- Stop loss / invalidation: below 224
- Evidence: support level
- Hype level: low

Outcome:

- 1D: +0.8%
- 7D: +3.9%
- 30D: +5.2%
- Max favorable: +6.0%
- Max adverse: -1.7%
- Delayed follower return: +3.6%

### Post 7

Author: ChartSage  
Source: Broker community  
Asset: MSFT  
Timestamp: 2026-10-02 14:35 UTC  
Call-time price: 510.00  
Text:

"MSFT breakout attempt failed twice. I am waiting for a close above 518 before entering. No trade yet."

Expected extraction:

- Direction: neutral/watchlist
- Suggested action: wait
- Time horizon: short term
- Risk disclosure: yes, no trade until confirmation
- Stop loss: not applicable
- Evidence: failed breakout
- Hype level: low

Outcome:

- 1D: -0.4%
- 7D: -2.6%
- 30D: +1.4%
- Max favorable: +2.2%
- Max adverse: -4.1%
- Delayed follower return: not applicable or 0.0%

### Post 8

Author: ChartSage  
Source: X  
Asset: AMD  
Timestamp: 2026-10-03 15:20 UTC  
Call-time price: 165.00  
Text:

"AMD long failed. Stopped out at 160 as planned. Taking the loss and waiting for a cleaner setup."

Expected extraction:

- Direction: closed prior bullish call
- Suggested action: exit/no trade
- Time horizon: closed
- Risk disclosure: yes
- Stop loss: 160
- Evidence: process follow-up
- Hype level: low

Outcome:

- 1D: -2.0%
- 7D: -5.5%
- 30D: -3.2%
- Max favorable: +0.6%
- Max adverse: -7.8%
- Delayed follower return: protected if followed exit

### Post 9

Author: ChartSage  
Source: Broker community  
Asset: JPM  
Timestamp: 2026-10-04 14:45 UTC  
Call-time price: 260.00  
Text:

"JPM setup is not attractive here. Risk/reward is poor after the move. I would rather wait for pullback near 248."

Expected extraction:

- Direction: neutral/avoid
- Suggested action: wait
- Time horizon: unclear
- Risk disclosure: yes
- Stop loss: not applicable
- Evidence: risk/reward
- Hype level: low

Outcome:

- 1D: +0.3%
- 7D: -1.8%
- 30D: -0.6%
- Max favorable: +1.2%
- Max adverse: -4.0%
- Delayed follower return: not applicable or 0.0%

### Post 10

Author: ChartSage  
Source: X  
Asset: SPY  
Timestamp: 2026-10-05 14:30 UTC  
Call-time price: 610.00  
Text:

"SPY risk is elevated into CPI. I am reducing size, not chasing. If 604 breaks, downside can accelerate."

Expected extraction:

- Direction: cautious bearish / risk reduction
- Suggested action: reduce size
- Time horizon: event-driven
- Risk disclosure: yes
- Stop loss / invalidation: 604 level
- Evidence: CPI event risk
- Hype level: low

Outcome:

- 1D: -1.2%
- 7D: -3.1%
- 30D: +0.7%
- Max favorable for cautious view: +3.4%
- Max adverse: -1.0%
- Delayed follower return: avoided drawdown

### Post 11

Author: CryptoWhale  
Source: Crypto community  
Asset: BTC  
Timestamp: 2026-10-01 02:15 UTC  
Call-time price: 78000.00  
Text:

"BTC about to send. You know what happens after this candle. IYKYK."

Expected extraction:

- Direction: bullish
- Suggested action: buy
- Time horizon: very short term
- Risk disclosure: no
- Stop loss: none
- Evidence: vague candle claim
- Hype level: high

Outcome:

- 1D: +4.0%
- 7D: -6.5%
- 30D: -2.4%
- Max favorable: +7.5%
- Max adverse: -10.8%
- Delayed follower return: -4.7%

### Post 12

Author: CryptoWhale  
Source: X  
Asset: ETH  
Timestamp: 2026-10-02 03:30 UTC  
Call-time price: 4200.00  
Text:

"ETH rotation starts now. If you are not positioned, that is on you."

Expected extraction:

- Direction: bullish
- Suggested action: buy/hold
- Time horizon: unclear
- Risk disclosure: no
- Stop loss: none
- Evidence: rotation narrative
- Hype level: high

Outcome:

- 1D: +1.1%
- 7D: +8.8%
- 30D: +6.2%
- Max favorable: +12.0%
- Max adverse: -3.9%
- Delayed follower return: +4.3%

### Post 13

Author: CryptoWhale  
Source: Crypto community  
Asset: SOL  
Timestamp: 2026-10-03 04:00 UTC  
Call-time price: 190.00  
Text:

"SOL looks ready. I added size. Do not ask me later why nobody told you."

Expected extraction:

- Direction: bullish
- Suggested action: buy/add
- Time horizon: unclear
- Risk disclosure: no
- Stop loss: none
- Evidence: personal position claim
- Hype level: high

Outcome:

- 1D: +9.0%
- 7D: -13.5%
- 30D: -19.0%
- Max favorable: +15.2%
- Max adverse: -24.0%
- Delayed follower return: -18.7%

### Post 14

Author: CryptoWhale  
Source: X  
Asset: DOGE  
Timestamp: 2026-10-04 05:00 UTC  
Call-time price: 0.26  
Text:

"DOGE squeeze setup. Shorts will be forced out. This one can move stupid fast."

Expected extraction:

- Direction: bullish
- Suggested action: buy/watch
- Time horizon: short term
- Risk disclosure: partial volatility warning
- Stop loss: none
- Evidence: short squeeze claim
- Hype level: medium-high

Outcome:

- 1D: +6.0%
- 7D: +2.0%
- 30D: -9.0%
- Max favorable: +18.0%
- Max adverse: -11.0%
- Delayed follower return: -3.5%

### Post 15

Author: CryptoWhale  
Source: Chat group  
Asset: BTC  
Timestamp: 2026-10-05 01:20 UTC  
Call-time price: 80500.00  
Text:

"I already took partials on BTC. If you followed from yesterday you are up nicely."

Expected extraction:

- Direction: profit-taking / follow-up
- Suggested action: take partial profit
- Time horizon: post-hoc
- Risk disclosure: no
- Stop loss: none
- Evidence: claims prior entry
- Hype level: medium
- Special flag: possible post-hoc performance framing

Outcome:

- Prior entry unclear.
- Immediate follower cannot reproduce claimed result.
- Follower outcome gap: high.

## 6. Scoring Model

Scores should be explainable rather than mathematically perfect.

### Risk Disclosure Score

0 to 100.

Suggested components:

- Time horizon present: +15
- Invalidation or stop loss present: +25
- Downside scenario explained: +20
- Position sizing or caution language: +15
- Uncertainty acknowledged: +15
- Conflict / education disclaimer: +10

### Hype-to-Evidence Score

0 to 100. Higher means more hype relative to evidence.

Suggested components:

- Guaranteed language: +25
- Scarcity pressure: +20
- Social pressure: +15
- No source or thesis: +20
- Vague insider language: +20

### Follower Slippage Gap

Displayed as a percentage and a short explanation.

Formula for demo:

Follower Slippage Gap = KOL claimed or best visible return - delayed follower return

If KOL does not show an explicit claim, use max favorable excursion as "visible best-case return."

### Accountability Grade

Grade is based on:

- Risk disclosure average.
- Hype-to-evidence average.
- Follower slippage gap.
- Loss transparency.
- Revision / deletion flags.

Suggested grade logic:

- A: transparent, lower hype, clear risk, admits losses.
- B: mostly responsible but incomplete disclosures.
- C: mixed record, high hype or poor follow-up.
- D: repeated high hype, poor risk disclosure, large follower gap, post-hoc framing.

## 7. Hero Moment: Follower Slippage Simulation

This must be the main visual moment in the demo.

Screen layout:

Left:

- Original KOL post.
- KOL visible narrative: "BTC +7.5% move after my call."

Center:

- Price chart with markers:
  - KOL post time.
  - Follower sees post 20 minutes later.
  - Follower market-order entry.
  - Max drawdown after follower entry.
  - KOL later posts winner screenshot.

Right:

- KOL visible result: +7.5%
- Immediate follower: +2.1%
- Delayed follower: -4.7%
- Beginner follower without stop: -10.8% max drawdown

Key message:

The same call can look profitable for the KOL and harmful for followers.

## 8. UI Screens For Prototype

### 8.1 Upload Inbox

Cards:

- Upload screenshot.
- Paste post text.
- Import demo dataset.

Demo button:

"Load 15 sample calls"

### 8.2 Extraction Workbench

Two-column layout:

- Left: original post or screenshot.
- Right: extracted call fields.

Fields:

- Author.
- Source.
- Asset.
- Direction.
- Suggested action.
- Time horizon.
- Evidence type.
- Risk disclosure.
- Hype signals.

### 8.3 Call Receipt

Receipt card:

- Receipt ID.
- Original content hash.
- Asset and call-time price.
- Direction.
- Risk disclosure score.
- Hype-to-evidence score.
- Status: pending outcome / tracked.

### 8.4 Outcome Tracker

Includes:

- Price path chart.
- Return windows.
- Max favorable / max adverse excursion.
- Follower slippage simulation.

### 8.5 KOL Dashboard

For each KOL:

- Accountability grade.
- Total calls.
- Risk disclosure rate.
- Average hype score.
- Average follower slippage gap.
- Loss transparency.
- Representative risky phrases.

### 8.6 Moderator Queue

For platform view:

- Posts ranked by beginner-harm risk.
- Suggested label:
  - "High-confidence claim without risk disclosure"
  - "Post-hoc performance claim"
  - "High follower slippage risk"
- Suggested intervention message:
  - "Add risk context before amplifying this post."
  - "Prompt author to include time horizon and invalidation level."

## 9. Three-Minute Demo Script

### 0:00-0:20 Problem

"Trading communities create massive value, but they also create a trust problem. A KOL can post a bold market call, delete losers, show only winners, and followers may enter much later at worse prices. The platform has posts. Users have screenshots. Nobody has an accountability ledger."

### 0:20-0:45 Load Data

"CallLedger starts by turning social trading content into structured receipts. Here I load 15 sample calls from broker-community style posts, X-style posts, crypto posts, and chat messages."

Show upload screen and click "Load 15 sample calls."

### 0:45-1:20 Multimodal Extraction

"Gemini reads the screenshot and extracts the trade call: asset, direction, time horizon, risk disclosure, and hype signals."

Open HypeMax TSLA call.

Point out:

- Asset: TSLA.
- Direction: bullish.
- Risk disclosure: missing.
- Evidence: vague smart-money claim.
- Hype: high.

### 1:20-1:50 Call Receipt

"The system creates a Call Receipt. It locks the original claim, the timestamp, the price at the time, and the risk quality. This is not a buy or sell signal. It is an accountability record."

Open receipt card.

### 1:50-2:25 Hero: Follower Slippage

"Now we compare the KOL narrative with what a realistic follower experienced."

Open CryptoWhale BTC or SOL example.

Say:

"The visible best-case move was +7.5%, but a follower who saw the post 20 minutes later ended at -4.7% and experienced a -10.8% drawdown. This is the hidden cost of social trading."

### 2:25-2:50 KOL Dashboard

"Across all calls, CallLedger builds a reputation profile. ChartSage is not always right, but has clear risk controls. HypeMax has high hype and poor disclosure. CryptoWhale has a large follower outcome gap."

Show grades.

### 2:50-3:00 Closing

"CallLedger does not predict markets. It makes market opinions accountable. Every call gets a receipt. Every receipt gets tracked."

## 10. Visual Tone

Style:

- Financial, clean, professional.
- Avoid meme-heavy crypto styling.
- Use restrained color:
  - Neutral background.
  - Green/red only for market outcomes.
  - Amber for risk warnings.
  - Blue for receipts and neutral audit actions.

Avoid:

- Looking like a trading signal app.
- Large "buy/sell" buttons.
- Leaderboard gamification that rewards risky KOLs.
- Language that accuses individuals of fraud.

## 11. Google Cloud Mapping

For the deck and implementation:

- Gemini multimodal: extracts calls from screenshots and posts.
- Cloud Run: receipt generation and scoring API.
- Firestore: stores authors, posts, receipts, outcomes.
- Cloud Storage: stores uploaded screenshots.
- BigQuery: aggregates historical author behavior.
- Firebase Hosting: deploys frontend.
- Cloud Scheduler: updates outcomes over time.

## 12. Build Priorities

### Must Have

- Demo dataset loader.
- Extraction screen.
- Call receipt screen.
- Outcome tracker with follower slippage.
- KOL dashboard.
- Clear disclaimer.

### Should Have

- Screenshot upload.
- Gemini extraction.
- Moderator queue.
- Content hash on receipts.

### Nice To Have

- Real market data API.
- OCR fallback.
- Multi-language posts.
- Appeal / correction flow for KOLs.

## 13. Key Decisions Already Made

- Use US stocks plus crypto.
- Use multimodal inputs.
- Position for retail investor protection and broker-community moderation.
- Keep platform references generic.
- Use synthetic or public-style sample data.
- Make follower slippage simulation the hero feature.

## 14. Remaining Decisions

1. Should the prototype be built as a polished dashboard or as a fast clickable demo first?
2. Should the mock posts be in English only, or include Chinese social trading language?
3. Should crypto examples include meme coins, or keep to BTC/ETH/SOL/DOGE?
4. Should the KOL grade be visible to users, or should users see sub-scores without a single grade?
5. Should the demo include a "KOL appeal" flow to make the system feel fair?

