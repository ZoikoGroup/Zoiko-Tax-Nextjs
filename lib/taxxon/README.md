# Taxxon public chatbot

The public, anonymous Zoiko Tax product guide, built to the four Taxxon documents in `chatbot-files/`: ZTAX-CHAT-UX-001, -KB-002, -INT-003 and -CONT-004.

It has no access to any tenant, ZoikoSuite or Zoiko Tax platform data, and it uses no language model. Every sentence it shows is approved-candidate copy from Documents 01–04, a registry record, or a passage quoted verbatim from the published zoikotax.com site with a link to its page.

## Website answers

Any public question without an approved knowledge article is answered from the published website. `scripts/taxxon-site-index.mjs` crawls zoikotax.com (every linked page plus every route in `app/`) and writes `lib/taxxon/site-index.json`: each page split into heading-led sections. `lib/taxxon/site.ts` ranks those sections against the question (BM25, with heading, page-title and FAQ weighting) and the bot quotes the best section as published, linked to its page and dated with the crawl date. Nothing is paraphrased or generated; a question the site does not address gets "I cannot confirm…" as before. Safety checks still run first, approved articles still take precedence, and an `unknown` coverage result also shows what the site publishes for that scope.

Re-crawl after the site changes, then commit the index:

```bash
node scripts/taxxon-site-index.mjs                  # https://zoikotax.com
node scripts/taxxon-site-index.mjs http://localhost:3000   # or a local build
```

## Where things are

| Document requirement | Code |
|---|---|
| WF-01/WF-02 conversation (desktop and mobile layouts) and WF-03 coverage state, at `/intelligence` | `components/taxxon/IntelligenceAssistant.tsx`, `components/taxxon/TaxxonAnswer.tsx` |
| Shared conversation state and answer card | `components/taxxon/useTaxxonChat.ts`, `components/taxxon/TaxxonAnswer.tsx` |
| Launcher: links to `/intelligence` | `components/taxxon/TaxxonWidget.tsx`, mounted in `components/layout/SiteChrome.tsx` (hidden on `/sign-in` and `/intelligence`) |
| BFF `POST /api/public/taxxon/v1/{sessions,messages,feedback}` | `app/api/public/taxxon/v1/*/route.ts`, `lib/taxxon/http.ts` |
| Implementation sequence (Doc 03 §6) | `lib/taxxon/orchestrator.ts` |
| Safety classifier: PII, injection, private-account, file/pay, calculation, legal opinion | `lib/taxxon/policy.ts` |
| Knowledge pack KB-001…020 and source registry (Doc 04) | `lib/taxxon/knowledge.ts` |
| Published website index and search | `lib/taxxon/site-index.json`, `lib/taxxon/site.ts`, `scripts/taxxon-site-index.mjs` |
| Public coverage projection, scope clarification, status copy (Doc 02 §5) | `lib/taxxon/coverage.ts` |
| CTA destination registry (Doc 04 §11) | `lib/taxxon/cta.ts` |
| Sessions, idempotency, rate limits | `lib/taxxon/session.ts` |
| Safe telemetry events (Doc 03 §10) | `lib/taxxon/telemetry.ts` |
| P0 regression corpus QA-01…QA-20 plus API negative tests | `scripts/taxxon-regression.mjs` |

## Shipped fail-closed: what still needs an approval

Documents 01–04 approve none of their content for production. The code enforces that:

- **Knowledge articles** are `status: "draft"` with no `approval_id`, so production returns "I cannot confirm this information from a current approved source" with no article text. To publish one, set `status: "published"`, `public_visibility: true`, `approval_id`, `reviewed_by` and `release_id: MANIFEST_ID` after Product/Legal sign-off.
- **Coverage records** are empty, so every coverage check resolves to `unknown` (Doc 04 §8: no seed statuses were supplied).
- **CTA destinations** point at this site's own pages but are `pending_approval`, so production hides them. Approve one by setting `status: "approved"`, `reviewer_id` and `approved_at`.
- **Display name**: Taxxon is the internal working name pending brand/legal clearance (Doc 01 §1).

## Environment

| Variable | Effect |
|---|---|
| `TAXXON_CONTENT_PREVIEW=1` | Non-production only: shows draft articles and pending CTAs, labelled "Draft content preview". Ignored when `NODE_ENV=production`. |
| `TAXXON_DISABLED=1` | Incident kill switch: chat answers "temporarily unavailable" and the static contact route stays visible. |
| `TAXXON_ALLOWED_ORIGINS` | Extra exact Origins the BFF accepts (comma-separated). Same-origin is always allowed. |

Sessions are held in process memory, so a multi-instance deployment needs a shared ephemeral store behind the same `session.ts` interface. Rate limits and session TTL in `config.ts` are provisional until SRE sets them (Doc 03 §10).

## Verify

```bash
npx next dev -p 3000                                   # production gating
node scripts/taxxon-regression.mjs http://localhost:3000
TAXXON_CONTENT_PREVIEW=1 npx next dev -p 3001          # draft preview
node scripts/taxxon-regression.mjs http://localhost:3001 --preview
```
