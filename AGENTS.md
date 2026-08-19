# Chat-AIDev-Context Agent Onboarding

This repository is a portable AI operating system for Chris Fairbanks' development business. Load this file first when onboarding any LLM, coding agent, or planning assistant.

## Mission

Help Chris plan, build, review, document, and deliver practical software and technical services for freelance clients using a clear stack and AI-assisted, multi-agent workflow.

## Developer Profile

- Name: Chris Fairbanks
- Role: Full Stack Software Engineer
- Core stack: JavaScript, React, Node.js, Express, MongoDB
- Current focus: full stack development, API integrations, workflow automation, MCP development, AI-assisted development
- Business goals: grow freelance revenue, create recurring client relationships, expand into AI-powered business solutions, and develop reusable AI engineering systems

## Primary Context Files

Read these before making strategic recommendations or generating client-facing work, if present in the active repo:

1. `docs/PROJECT_CONTEXT.md`
2. `docs/DEVELOPER_PROFILE.md`
3. `docs/SERVICES.md`
4. `docs/WORKFLOW.md`
5. `docs/CODING_STANDARDS.md`
6. `docs/CLIENT_DELIVERY_PROCESS.md`

> **Status (2026-08-13): these six files do not exist yet, in this repo or the referenced `Chat-AIDev-Context` repo** — that repo could not be attached this session (blocked by an MCP approval gate). Treat their content as undefined rather than assumed until they're written or the repo is confirmed reachable. `PRICING.md` in this repo is the current source of truth for all pricing.

Use portfolio, brand, platform, and case-study files when the task involves positioning, sales copy, proposals, or public profiles.

## Operating Principles

- Keep outputs simple, practical, and aligned with Chris' current stack.
- Prefer reusable patterns, concise documentation, and clear delivery steps.
- Optimize for small business clients, portfolio growth, and recurring service opportunities.
- Separate planning, implementation, review, and deployment work.
- Avoid unnecessary history, conversation logs, or duplicated context.
- Ask for missing client requirements before inventing project scope.
- Treat Chris as final owner of quality, client communication, and delivery decisions — agents propose and build, Chris reviews and approves before anything ships to a client.
- Pricing numbers live in `PRICING.md` only. Don't duplicate them elsewhere in ways that can drift out of sync — link to it instead.

## Gig Catalog & Agent Teams

Not every gig needs the same team. A $70 audit and a $700 full-stack build have different shapes of work, so the team scales to the gig. Full pricing detail lives in `PRICING.md` — the numbers below are for picking the right team at a glance.

### Category A — Build gigs (full team)

Real code gets written and shipped. Use the full five-role team.

| Gig | Basic | Standard | Premium |
|---|---|---|---|
| **Track 1 — React Website** | $125 | $300 | $700 |
| **Backend/API-Only Development** | $250 | $550 | $1,000 |
| **Squarespace/Wix → Custom Migration** | $500 | $1,100 | $2,200 |
| **Business Systems Integration** (Track 3, discovery-priced — see two-phase note below) | $550 audit → $2,200 / $4,200 / $6,500 by track | | |

Team (Track 1, Backend/API-Only, Squarespace/Wix Migration): `project-manager` → `solution-architect` → `frontend-engineer` + `backend-engineer` (parallel where possible) → `qa-docs`.

**Business Systems Integration is a two-phase engagement — don't run it like the other Category A gigs above.** It's discovery-priced because scope is genuinely unknown until the audit runs, and that audit is itself a separately-billed, client-facing deliverable, not internal planning:

- **Phase 1 — Discovery/Audit ($550 flat, credited toward the build if the client proceeds within 30 days):** `project-manager` → `solution-architect` → `qa-docs`. **No `frontend-engineer` or `backend-engineer` in this phase — nothing gets built yet.** `solution-architect`'s job here is diagnostic: assess the client's existing systems and produce a written recommendation of which track fits (below), with the reasoning shown, not just a verdict. `qa-docs` reviews this the way it reviews a Category C report (clarity, evidence, right-sized depth), not the way it reviews code.
- **Phase 2 — Build (only once the client explicitly proceeds past discovery):** team depends on which track Phase 1 recommended —
  - **Track A — Sync & Visibility ($2,200):** standard build team — `solution-architect` (a build plan now, distinct from the Phase 1 discovery doc) → `frontend-engineer` + `backend-engineer` → `qa-docs`.
  - **Track B — Predictive Automation ($4,200):** same team as Track A. `backend-engineer` owns the forecasting/historical-data logic; flag to Chris if the approach needs expertise beyond standard Node/Express/MongoDB work.
  - **Track C — Conversational Assistant ($6,500):** the one gig where a Category A and a Category B role combine on the same build — `backend-engineer` builds the systems/data layer, `integrations-engineer` builds the natural-language interface on top of it, both against `solution-architect`'s Phase 2 plan.
- **Ongoing retainer ($300/mo)**, once running, doesn't need a full build team — whichever of `backend-engineer` / `integrations-engineer` built it handles maintenance requests directly, `qa-docs` reviews changes before they ship.

### Category B — Integration & automation gigs (lean team)

No meaningful frontend/backend split — the work is wiring existing systems and services together. Forcing a separate Frontend Engineer role here just adds a handoff with nothing on the other side of it.

| Gig | Basic | Standard | Premium |
|---|---|---|---|
| **AI Chatbot / FAQ Bot** | $65 | $200 | $425 |
| **Automation / "Connect Your Tools"** | $120 | $325 | $650 |
| **AI Agent Setup** | $175 | $375 | $600 |

Team: `project-manager` → `integrations-engineer` → `qa-docs`.

### Category C — Audit & analysis gigs (lean team)

Deliverable is a written report and prioritized action plan, not a codebase. No build role at all.

| Gig | Basic | Standard | Premium |
|---|---|---|---|
| **Website Speed & Technical Audit** | $60 | $180 | $400 |
| **SEO & AI Search Visibility Audit (GEO/AEO)** | $70 | $200 | $450 |

Team: `project-manager` → `technical-analyst` → `qa-docs` (docs role here mainly formats/proofs the report, not a code review).

## Agent Roles

Defined as real Claude Code subagents in `.claude/agents/` — invoke by name via the Agent tool, not just as a conceptual role:

1. **`project-manager`** — clarify goals, scope, milestones, deliverables, risks, and client communication. Runs first on every gig, regardless of category.
2. **`solution-architect`** — define structure, stack, data flow, API needs, integrations, and technical tradeoffs for Category A builds. Also runs the Business Systems Integration Phase 1 discovery/audit — a diagnostic recommendation of which track fits, not a build plan (see the two-phase note above).
3. **`frontend-engineer`** — build responsive React interfaces and clean user experiences. Category A only.
4. **`backend-engineer`** — build Node.js, Express, MongoDB, APIs, integrations, auth, and automation logic. Category A only.
5. **`integrations-engineer`** — connect third-party systems, chatbots, AI agents, and no-code/low-code automation (Zapier/Make/n8n-style, webhooks, MCP). Primarily Category B; also builds the natural-language interface layer on Business Systems Integration Track C engagements, alongside `backend-engineer`.
6. **`technical-analyst`** — run site speed, SEO, and AI-search-visibility (GEO/AEO) audits; produce a written, prioritized report. Category C.
7. **`qa-docs`** — test behavior, review code/report quality, document handoff steps, and prepare delivery notes. Runs last on every gig.

## Tool Responsibilities

This workflow runs on Claude Code. Roles above map to Claude Code subagents (`.claude/agents/*.md`), invoked via the Agent tool. Chris remains final owner of quality, client communication, and delivery decisions — agents draft and build, Chris reviews before anything reaches a client.

## Portfolio Reference

Use these projects when creating bios, proposals, case studies, or service examples:

- About Me Website
- Library Project
- Coffee Shop Project
- Portfolio Website
- Music Business MCP
- Dev Services Showcase (chris2fair88.github.io/dev-services-showcase)

## Default Delivery Style

Outputs should be concise, structured, and ready for use by an LLM or coding agent. Prefer checklists, short sections, explicit assumptions, and actionable next steps.
