# PRICING — Canonical Reference

Single source of truth for all service pricing. Other docs (`PROMPT_THIS_INTO_ANY_LLM.md`, `README.md`, `FIVERR_PORTFOLIO_CONTEXT.md`) should reference this file rather than restating numbers, so future updates only happen in one place.

Last revised: July 2026, based on current Fiverr/freelance market data and the Purple Dolphin engagement.

---

## Pricing philosophy: flat rate + add-ons, not ranges

Every service below is priced as a single flat number, not a range. Ranges invite negotiation down to the bottom and slow down quoting. If a client's needs go beyond a package's defined scope, that's an add-on (see below), not a reason to fuzz the base price.

**One necessary exception:** Track 3 (Business Systems Integration) is discovery-priced by design — scope is genuinely unknown until the audit, not a case of avoiding a decision. Each complexity tier there still gets one flat number; the audit's job is to determine which tier applies, not to leave any individual quote ambiguous.

Also note: **Fiverr takes a flat 20% commission on every completed order**, including tips and extras — factor this into what a listed price actually nets.

---

## Track 1 — Fiverr / Marketplace Tiers

Entry-funnel pricing. Positioned to win early reviews and upsell from there.

| Tier | Price | Scope |
|---|---|---|
| **Basic** — Starter React Page | **$125** | One focused React page, responsive layout, clean content structure |
| **Standard** — Modern React Website | **$300** | Modern multi-section React website, reusable components, polished presentation — the anchor tier; most buyers should land here |
| **Premium** — Full Stack Web Application | **$700** | React frontend, Node.js/Express backend, MongoDB, API integrations, deployment guidance |

---

## Track 2 — Direct-Client Web Development

Real market-rate pricing for direct referrals and repeat clients (established via the Purple Dolphin engagement). Each is a distinct package with a flat price — a client needing something beyond a package's scope gets an add-on, not a renegotiated base price.

| Package | Price | Scope |
|---|---|---|
| **Marketing site only** | **$2,300 flat** | No cart, links out to Etsy/Instagram/DM |
| **Full site with real checkout** | **$4,800 flat** | Cart, shipping, tax, inventory |
| **Full custom rebuild with brand/design work** | **$5,500 flat** | Brand repositioning, mobile-first redesign, page-specific dynamic content — beyond a template-based build |
| **Hourly fallback** | **$75/hr** | For work that doesn't fit a package |
| **Ongoing SEO/content retainer** | **$450/mo** | 1–2 blog posts/month, monthly GBP posts, ranking report |

Pass-through costs (client's responsibility, not part of your fee — these vary because they're third-party vendor costs, not your own pricing): domain (~$18/yr), hosting (~$10/mo).

---

## Track 3 — Business Systems Integration & Automation

Discovery-priced by necessity — scope depends entirely on the client's existing systems, so a single price across all possible clients would either overprice simple work or underprice complex work. Each tier below is still one flat number; the audit determines which tier applies. See `service-business-systems-integration.md` for full detail.

| Phase/Tier | Price | Scope |
|---|---|---|
| **Discovery / Audit** | **$550 flat** | Credited toward the build if the client proceeds |
| **Track A — Sync & Visibility** | **$2,200 flat** | Connect 2+ systems, simple dashboard/lookup |
| **Track B — Predictive Automation** | **$4,200 flat** | Adds forecasting from historical data |
| **Track C — Conversational Assistant** | **$6,500 flat** | Adds natural-language query interface |
| **Ongoing retainer** | **$300/mo** | Maintenance, monitoring, adjustments |

If discovery reveals something beyond what Track C covers (true enterprise-scale complexity), that becomes its own custom-quoted engagement rather than being forced into these numbers.

---

## Track 4 — Adjacent Fiverr Gigs

Marketplace lead-gen gigs. Full package details in `fiverr-adjacent-gigs-packages.md`.

| Gig | Basic | Standard | Premium |
|---|---|---|---|
| **AI Chatbot / FAQ Bot** | $65 | $200 | $425 |
| **Automation / "Connect Your Tools"** | $120 | $325 | $650 |
| **AI Agent Setup** | $175 | $375 | $600 |
| **Website Speed & Technical Audit** | $60 | $180 | $400 |
| **Squarespace/Wix → Custom Migration** | $500 | $1,100 | $2,200 |
| **Backend/API-Only Development** | $250 | $550 | $1,000 |
| **SEO & AI Search Visibility Audit (GEO/AEO)** | $70 | $200 | $450 |

**SEO & AI Search Visibility Audit (GEO/AEO) — scope detail** (new gig, added here pending a home in `fiverr-adjacent-gigs-packages.md`):
- **Basic ($70):** Core on-page SEO pass — title tags, meta descriptions, header structure, image alt text, keyword usage, basic Core Web Vitals flags. Written report (PDF) with 3–5 priority fixes.
- **Standard ($200):** Everything in Basic, plus an AI search visibility audit (GEO/AEO) — how content reads to ChatGPT/Perplexity/Google AI Overviews, schema/structured data review, content-extractability pass, one competitor snapshot. Combined SEO + GEO prioritized action plan.
- **Premium ($450):** Everything in Standard, plus a full technical crawl (broken links, redirect chains, indexation issues), keyword-gap analysis vs. 2 competitors, and a 30-min live walkthrough call. Full $450 is credited toward the first month of the Track 2 Ongoing SEO/Content retainer if the client signs on within 30 days.
- Turnaround: Basic 2 days / Standard 3 days / Premium 4–5 days.
- Positioning: low-commitment entry point that funnels into the $450/mo retainer — same credit-toward-bigger-engagement logic as the Track 3 Discovery/Audit.

---

## Add-Ons — Flat Rate Pricing

Priced individually, layered onto any Track 1–4 package rather than folded silently into a base quote.

| Add-on | Price | Notes |
|---|---|---|
| **API Integration** | **$450 flat** | One well-scoped third-party integration (payment, shipping, CRM webhook, etc.) |
| **Workflow Automation** | **$350 flat** | One no-code automation (Zapier/Make/n8n-style connection) |
| **MCP Workflow System** | **$900 flat** | Custom AI/MCP engineering — genuinely differentiated work, priced above simple automation |
| **Documentation Package** | **$150 flat** | Setup/usage guide, content-editing walkthrough, deployment notes |
| **QA Review** | **$175 flat** | Full-site pass: functionality, responsiveness, accessibility basics, code quality |
| **Ongoing Maintenance** | **$150/mo flat** | Updates, backups, monitoring, minor edits |

---

## Change log

- **July 2026**: Track 1 tiers revised upward ($80/$180/$350 → $100–150/$250–350/$600–800) after comparing to current Fiverr and freelance market data.
- **July 2026**: Track 3 (Business Systems Integration) and Track 4 (adjacent Fiverr gigs) established.
- **July 2026**: All services converted from ranges to flat rates. Track 1 tiers set to $125/$300/$700. Track 2 packages set to $2,300/$4,800/$5,500, hourly to $75/hr, retainer to $450/mo. Track 3 tiers set to flat per-tier anchors ($550/$2,200/$4,200/$6,500), retainer to $300/mo. Add-ons (API integration, workflow automation, MCP workflow system, documentation package, QA review, ongoing maintenance) priced individually for the first time, based on current market data for each category.
- **July 2026**: Added **SEO & AI Search Visibility Audit (GEO/AEO)** to Track 4 ($70/$200/$450) — a low-competition entry gig funneling into the Track 2 SEO/content retainer, differentiated from generic SEO gigs by covering AI-search (GEO/AEO) visibility alongside traditional on-page SEO.
