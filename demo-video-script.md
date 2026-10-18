# SignalLedger | 3-Minute Demo Script

## 0:00-0:20 | The problem

“Trading communities move quickly, but context disappears quickly. An author can show a winning screenshot, while a follower entered later, without a stop level, and experienced a loss. SignalLedger adds professional context beside the community feed.”

## 0:20-0:50 | Enter the community

Open `demo/index.html`, switch to Chinese if useful, and let the Discover feed load automatically.

“This is intentionally a KOL-first workflow. The feed loads automatically with source-linked public authors and clearly labeled scenario authors. Delayed public market snapshots appear beside relevant assets.”

## 0:50-1:25 | Open a context card

Use the search field to search `HypeMax`, then click **Open latest** on the author card.

“SignalLedger keeps the author as the primary object. Opening the latest scenario post shows the asset, direction, time horizon, evidence quality, risk disclosure, and promotional pressure. It preserves the original wording and attaches a versioned context record.”

Click **Open source** on a public author card to show that public articles retain their original link. Then return to HypeMax and open the scenario call.

“Public commentary is never presented as a direct trade call. SignalLedger does not invent an entry or outcome when the source does not provide one.”

## 1:20-2:05 | Show the follower gap

Open **Follower Impact** from the left navigation.

“The key insight is that the author's visible result is not the follower's realized result. This chart marks the post, a delayed follower entry, the best visible point, and maximum pain. A call can look profitable in a screenshot and still create a materially worse follower path.”

## 2:05-2:35 | Show the author profile

Open **Author Profile** from the left navigation.

“The product does not rank people by a single prediction score. It shows a pattern: risk disclosure, promotional pressure, and follower execution gap. A transparent author can be recognized even when some calls lose.”

## 2:35-2:52 | Show fairness

Click **Appeal / add context** for an author.

“Authors can add their original entry, stop logic, or a correction. SignalLedger saves that addition as a new version, so fairness does not require rewriting history.”

## 2:52-3:00 | Close

“SignalLedger does not tell users what to trade. It helps them understand what they are looking at.”

## Backup flow

If the public RSS source is slow, use the already loaded HypeMax scenario author. The demo remains functional because the Cloud Run endpoint is in offline-safe mode and the public feed has a cached fallback.
