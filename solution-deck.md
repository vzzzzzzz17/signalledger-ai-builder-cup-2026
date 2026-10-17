# SignalLedger | Solution Deck Copy

## 1. Title

**SignalLedger**

The professional context layer for social trading communities.

Users keep the speed of market conversations. SignalLedger makes the context visible.

## 2. The Problem

Trading communities are rich in opinions but poor in durable context.

- A post can be edited, deleted, or reframed after the price moves.
- A visible win may come from an earlier entry that followers could not reproduce.
- Risk, invalidation, and time horizon are often missing.
- Platforms have content. Users have screenshots. Nobody owns the cross-platform memory.

## 3. The Insight

**An author's visible result is not the same as a follower's realized result.**

The missing product is not another price prediction. It is a context layer that records what was said, what was disclosed, and what a realistic follower path looked like.

## 4. The Product

SignalLedger sits beside the community feed and adds four pieces of context:

1. **Claim**: asset, direction, horizon, action, and original wording.
2. **Quality**: evidence, risk disclosure, uncertainty, and promotional pressure.
3. **Impact**: the gap between the best visible narrative and a delayed follower entry.
4. **Fairness**: the author can add context or correct a record without rewriting the original version.

## 5. User Flow

Browse a post -> open its context card -> inspect author pattern -> compare follower impact -> save or add context.

The main screen feels like a community product. Analysis is available when a user needs help making sense of a post.

## 6. AI and Google Cloud

- Gemini on Vertex AI extracts structured fields from text and, in the next iteration, screenshots.
- Cloud Run hosts the analysis API and keeps credentials off the client.
- Firebase Hosting serves the responsive bilingual interface.
- Firestore stores versioned posts, context cards, authors, and additions.
- BigQuery can aggregate long-term behavior and follower-impact patterns.

## 7. Defensibility

The moat is the longitudinal graph, not the model:

- cross-source post history;
- immutable versions and author additions;
- normalized claims linked to market paths;
- follower execution scenarios;
- an explainable history of disclosure and correction behavior.

As the graph grows, the product becomes a trusted memory layer for communities that were previously fragmented across broker feeds, X, chat groups, and newsletters.

## 8. Trust and Guardrails

SignalLedger does not provide investment advice or predict prices.

- Scores describe content quality and context, not whether an asset will rise.
- Synthetic data is used in the prototype.
- Authors can add explanations and corrections as new versions.
- The product avoids legal accusations and presents evidence behind every label.

## 9. Demo Outcome

In three minutes, the viewer sees the same market call move from an unstructured community post to a context card, a follower-impact comparison, and an author profile. The final point is simple:

**SignalLedger does not tell users what to trade. It helps them understand what they are looking at.**
