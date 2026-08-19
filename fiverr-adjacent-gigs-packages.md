# Fiverr Adjacent Gigs — Full Setup Packages

Manual-input reference for creating each Track 4 gig on Fiverr. Referenced from `PRICING.md` (the pricing source of truth — if numbers here ever conflict with `PRICING.md`, `PRICING.md` wins).

**Track 1 (React Website) is not included below** — it's your existing live gig and is already correctly configured.

## How to use this doc

Fiverr's gig-creation form runs through five tabs: **Overview** (title, category, subcategory, search tags) → **Pricing** (3 packages, each with its own delivery time, revisions, and category-specific attribute checkboxes) → **Description & FAQ** → **Requirements** (what buyers fill in before you start work) → **Gallery**.

One real limitation: Fiverr shows a different set of **standardized package attribute checkboxes** depending on the subcategory you pick (your live Track 1 gig has "Number of pages," "Content upload," "Speed optimization," etc. — that's the Websites & Apps attribute set). The chatbot/automation/audit subcategories show a *different* attribute set — confirmed for the AI Chatbot/FAQ Bot gig below (AI Engine dropdown + Programming Languages Supported multi-select) since you shared its live form JSON; not yet confirmed for the others. Everything below gives you the deliverables in plain language — when you get to the Pricing tab for an unconfirmed gig, map each bullet onto whatever checkbox/dropdown Fiverr actually shows you for that subcategory, rather than expecting an exact match to what's written here. If you can grab the same JSON snapshot for the other gigs' edit pages, send it over and I'll fill in the rest the same way.

Suggested category/subcategory is a best-guess based on standard Fiverr taxonomy — confirm against the live dropdown, since Fiverr periodically renames or moves subcategories.

---

## 1. AI Chatbot / FAQ Bot

**Confirmed category path** (from your live gig-edit form, most recent snapshot): Programming & Tech → **Chatbot Development** → **AI Chatbot Development**.
> Note: an earlier snapshot from your form showed **AI Development → AI Integrations** instead. Both are in Fiverr's own `suggested_categories` list for this title, so the dropdown may have changed between snapshots — confirm on the live form which one you actually want selected before publishing, since only one can be active.

**Gig title (pick one, ≤80 characters):**
- I will build a custom AI chatbot or FAQ bot for your website
- I will create an AI FAQ chatbot for your business website

**Search tags (5, ≤20 characters each, letters and numbers only per Fiverr's field constraint — your draft currently only has 2 of 5 filled in):**
`ai chatbot` · `faq bot` · `chatbot setup` · `customer support ai` · `website chatbot`

**Gig metadata fields (confirmed from your live form — 5 sections total for this subcategory: AI Engine, Programming Language, Tools & Frameworks, Bot Type, Platforms):**
- **AI Engine** — dropdown, currently unset on your draft. Set this to whichever engine you'll actually build with (Claude/Anthropic if that's your build stack, or OpenAI/GPT if you're using that API — pick the one you'll really use, since it's buyer-facing and sets an expectation).
- **Programming Language** — multi-select, up to 10, from a fixed list (Assembly, Apex, C, C#, C++, Dart, Go, Java, JavaScript, Kotlin, Objective-C, PHP, Python, Ruby, Swift, TypeScript, R, React, PyTorch, Tensorflow, Keras, Julia, Lisp, Other). Your draft currently has only **JavaScript** selected. Given the Node/Express stack in `AGENTS.md`, I'd add **TypeScript** and **React** (the widget frontend) at minimum — add **Python** too if you'd ever build the bot logic in Python instead.
- **Tools & Frameworks** — confirmed multi-select, up to 5, currently 0 selected. Full option list is mostly no-code chatbot platforms (Botpress, ManyChat, Tidio, Chatfuel, Landbot, Intercom, etc.) plus a smaller set of real dev frameworks (Microsoft Bot Framework, Rasa, Wit.ai, Dialogflow, Botkit, LangChain, Hugging Face, Pinecone, n8n, discord.py, Telegram API, QnA Maker, and others). None of these is literally "custom Node.js calling an LLM API directly," which is the actual build per `AGENTS.md` — so don't pad this out to 5 just because the field allows it. Recommended: **LangChain** (if you're using it to orchestrate the FAQ/AI responses) and **Pinecone** (if Premium's "unlimited AI-generated knowledge base" uses vector search/retrieval over the FAQ content) — select each only if it's actually true of your build. Add **Other** if you want to note "custom-built" isn't otherwise represented. Skip the no-code platforms entirely; selecting one implies you built on top of it, not from scratch.
- **Bot Type** — confirmed 13-option list, multi-select, none selected yet: Customer Service & Support, E-commerce & Payments, Social Media & Content, Scheduling & Assistance, Entertainment & Gaming, Learning & Development, Health & Wellness, Travel & Transportation, Food & Restaurant Services, News & Information Updates, Survey & Feedback Collection, Real Estate Assistance, Other. **Select "Customer Service & Support"** — that's the gig's actual positioning. Skip the rest unless you genuinely want to signal a niche (e.g., add "Survey & Feedback Collection" if you want to emphasize the lead-capture angle in Standard/Premium).
- **Platforms** — confirmed multi-select, up to 5, currently 0 selected. Full option list: WhatsApp, Telegram, Discord, Facebook Messenger, Instagram, SMS/Text Messaging, Websites, Mobile Apps, Slack, Microsoft Teams, Google Assistant, Alexa, Viber, WeChat, Twitter, Vinted, Snapchat, Twitch, Other. **Select Websites, Facebook Messenger, and Instagram** — these three directly match what the gig description and FAQ below already promise. Add **WhatsApp** and/or **SMS/Text Messaging** only if you're prepared to actually build and support those integrations, since this field sets buyer expectations directly.

### Pricing

| | Basic — $65 | Standard — $200 | Premium — $425 |
|---|---|---|---|
| Package name | Simple FAQ Bot | Business FAQ + Lead Capture Bot | AI-Powered Smart Chatbot |
| Delivery time | 3 days | 5 days | 7 days |
| Revisions | 2 | 3 | Unlimited (within scope) |
| Description (≤100 char) | A simple FAQ chatbot answering your top 10 common customer questions. | FAQ bot plus lead capture form and basic conversation flow for your site. | Full AI chatbot with natural responses, lead capture, and CRM/email routing. |
| Deliverables | Up to 10 FAQ Q&A pairs configured · single platform (website widget or Messenger) · basic greeting/fallback message | Up to 25 FAQ Q&A pairs · lead capture (name/email/question) · branded widget matching site colors · basic multi-step conversation flow · setup walkthrough doc | Unlimited FAQ knowledge base (AI-generated responses, not just scripted) · lead capture with email/CRM notification routing · multi-step conversation flows · branded widget · one platform integration (website or Messenger/Instagram) · documentation + light training on how to update it · responds in the customer's language (multi-language support) |

**Per-package checkbox attributes** (confirmed from your live Pricing tab — 7 checkbox rows, one column per tier):

| Attribute | Basic | Standard | Premium |
|---|---|---|---|
| AI LLM model integration | ☐ | ☑ | ☑ |
| Retrieval-Augmented Generation (RAG) | ☐ | ☐ | ☑ |
| Pre-set conversational journey | ☐ | ☑ | ☑ |
| Integration with CRM / database | ☐ | ☐ | ☑ |
| User authentication | ☐ | ☐ | ☐ |
| Multi-language support | ☐ | ☐ | ☑ |
| Source Code | ☐ | ☐ | ☐ |

Reasoning: LLM integration and pre-set conversational journeys match the FAQ's "Basic = scripted, Standard/Premium = AI-powered" split and the multi-step-flow deliverables. RAG and CRM/database integration are Premium-only since only Premium's copy promises an "unlimited AI-generated knowledge base" and "CRM notification routing." User authentication is left unchecked everywhere — genuine scope creep for this price range, push to a custom quote if a buyer asks. Source Code is left unchecked everywhere by design — this is priced and positioned as a managed/configured product (buyer gets the working bot + widget), not a code handover, which also keeps the door open for the $150/mo maintenance add-on in `PRICING.md` rather than buyers owning the code outright. Multi-language is added to Premium only, since Standard/Premium's underlying LLM can already handle it with little extra build effort — it's a low-cost differentiator for the top tier.

**"Add extra services" (Gig Extras)** — confirmed from your live form: the same attributes as the checkbox table above (minus AI LLM integration, RAG, and pre-set conversational journey, which aren't offered as standalone extras) can be sold separately to buyers who didn't get them baked into their tier, plus "Extra fast delivery" and "Additional revision," plus at least one custom-defined extra slot.

| Extra | Enable? | Price | Extra days | Why |
|---|---|---|---|---|
| Extra fast delivery — Basic | Yes | $25 | 3→2 days | Standard Fiverr extra |
| Extra fast delivery — Standard | Yes | $50 | 5→3 days | |
| Extra fast delivery — Premium | Yes | $75 | 7→4 days | |
| Integration with CRM/database | Yes | $150 | +1 day | Lets Basic/Standard buyers get Premium's lead-routing without a full tier upgrade |
| User authentication | **No — leave disabled** | — | — | Still real scope creep. Selling it as a fixed-price checkout extra locks in a price for something that actually needs custom scoping — if a buyer wants it, that's a message-first conversation, not a button |
| Multi-language support | Yes | $30 | +1 day (form minimum — 1–14 day range, no 0-day option) | Cheap to offer since the underlying LLM already handles it — price reflects the low actual cost |
| Source Code | Yes | $250 | +1 day | Resolves the earlier open question: don't give it away free on any tier (protects the reusable framework and the $150/mo maintenance upsell), but sell it at a price reflecting what's given up if a buyer specifically wants ownership |
| Additional revision | Yes | $15 | +1 day (form minimum) | Standard Fiverr extra |

**Custom extra slot(s)** — form confirms at least one is available, count not yet known. Recommended, in priority order: **+25 extra FAQ Q&A pairs** ($50, +1 day — lets Basic/Standard buyers scale up without a full tier jump), then **add a second platform integration** ($75/platform, +1 day) if more than one custom slot is allowed.

### Gig description (≤1,200 characters — ready to paste)

> Tired of answering the same customer questions over and over? I'll build you a custom AI chatbot or FAQ bot that handles it automatically, so you can focus on running your business instead of your inbox.
>
> What you get:
> • A chatbot trained on YOUR business — hours, pricing, services, policies, whatever your customers actually ask
> • Clean, on-brand chat widget that fits right into your website
> • Lead capture so new inquiries land in your inbox, not lost in a chat window
> • Clear fallback handling — if the bot can't answer, it says so and hands off to you, never guesses
>
> I work with modern AI platforms to build something that's actually reliable, not a gimmick that frustrates your customers. Every package includes a real walkthrough so you're never stuck wondering how to update it later.
>
> Perfect for: service businesses, local shops, coaches, consultants, or any site getting repetitive DMs and emails.
>
> Message me before ordering if your use case is a little different — happy to confirm scope first so there are no surprises.

### FAQ

- **What platforms can the chatbot work on?** Website widgets, Facebook Messenger, or Instagram DM, depending on your package and needs. Let me know your preferred platform before ordering so I can confirm it's included.
- **Do I need any technical knowledge to use this?** No. You'll get a simple walkthrough doc showing how to update FAQ content yourself, no coding required.
- **Can the bot actually understand natural language, or is it just keyword matching?** Basic tier uses simple scripted responses. Standard and Premium use AI-powered responses that understand natural phrasing, not just exact keyword matches.
- **What if the bot doesn't know an answer?** Every bot includes a clear fallback message so it never guesses, it tells the customer their question will be handled personally.
- **Can you add this to my existing website?** Yes, as long as your platform supports embedding a widget or script (WordPress, Squarespace, Wix, Shopify, and custom sites all work). Let me know your platform in the requirements.
- **How many questions/answers can the bot handle?** Basic: up to 10. Standard: up to 25. Premium: unlimited within reasonable scope.

### Requirements (buyer fills in before work starts)

1. What platform is your website built on? *(required)*
2. List the top questions your customers ask you *(required)*
3. Do you have brand colors/logo to match the widget to? *(optional)*
4. Where should leads/questions be sent (email, CRM, etc.)? *(required for Standard/Premium)*
5. Any existing chatbot or live chat tool currently in use? *(optional)*

### Gallery

Main image: the AI Chatbot/FAQ Bot thumbnail already built this session. Add 2–3 more if you have time: a mockup of the widget mid-conversation, a "what's included" checklist graphic, or a before/after (inbox chaos vs. organized).

---

## 2. Automation / "Connect Your Tools"

**Suggested category:** Programming & Tech → AI Services → AI Integration & Automation (or Workflow Automation / Zapier, Make, n8n Experts, depending on your dropdown)

**Gig title (pick one, ≤80 characters):**
- I will automate your workflow and connect your business tools together
- I will set up Zapier or Make automation to connect your apps

**Search tags (5, ≤20 characters each):**
`workflow automation` · `zapier expert` · `make automation` · `connect apps` · `no code automation`

### Pricing

| | Basic — $120 | Standard — $325 | Premium — $650 |
|---|---|---|---|
| Package name | Single Automation | Multi-Step Workflow | Full Business Automation Suite |
| Delivery time | 3 days | 5 days | 7 days |
| Revisions | 2 | 3 | Unlimited (within scope) |
| Description (≤100 char) | One automation connecting two of your tools (e.g. form to email/CRM). | A multi-step workflow connecting 3+ tools with logic and conditions. | Multiple connected workflows automating a real business process end to end. |
| Deliverables | One trigger → one action automation (e.g. new form submission → email/Slack/spreadsheet) · built on Zapier, Make, or n8n (your choice/existing account) · basic error notification | 3+ connected apps · conditional logic (if/then branching) · one data transformation step (e.g. formatting, filtering) · error handling + notification | Multiple linked workflows (e.g. lead intake → CRM → invoicing → notification) · custom logic across several tools · monitoring/error handling on every workflow · a short handoff doc explaining how each workflow runs |

### Gig description (≤1,200 characters — ready to paste)

> Manually copying data between apps, or doing the same repetitive task every day? I'll connect your tools so it just happens automatically.
>
> I build automations using Zapier, Make, or n8n (whichever fits your stack and budget) — connecting the apps you already use so information flows between them without you touching it.
>
> Common examples:
> • New form submission → auto-added to your CRM + a Slack/email notification
> • New order → inventory updated + confirmation sent
> • Lead comes in → routed to the right person automatically
>
> Every automation includes basic error handling, so if something breaks, you find out — it doesn't just fail silently. Premium-tier builds include a short handoff doc so you understand exactly how each workflow runs, not a black box you're afraid to touch.
>
> Tell me which two (or more) tools you want connected and what should happen between them, and I'll confirm scope before you order so there are no surprises on delivery.

### FAQ

- **Do I need a paid Zapier/Make/n8n account?** Usually yes, depending on how many steps/tasks your automation needs per month — most tools have a free tier that works for simple automations. I'll tell you if your use case needs a paid plan before you order.
- **What tools can you connect?** Most mainstream business tools with an API or a Zapier/Make integration — CRMs, form tools, spreadsheets, email platforms, e-commerce platforms, Slack, and more. Tell me your specific tools before ordering so I can confirm compatibility.
- **What happens if the automation breaks later (e.g. an app changes its API)?** Every build includes basic error notification so you'll know if something stops working. Ongoing monitoring/maintenance is available as an add-on if you want it actively watched.
- **Can you build something more custom than Zapier/Make allows?** Yes — for automations that need real custom logic beyond what no-code tools support, that becomes a scoped API integration, message me to discuss.
- **Do you need admin access to my accounts?** Only to the specific apps being connected, and only what's needed to set up the automation. I'll tell you exactly what access is required before starting.

### Requirements (buyer fills in before work starts)

1. Which two (or more) apps/tools do you want connected? *(required)*
2. Describe exactly what should happen (the trigger and the resulting action) *(required)*
3. Do you already have a Zapier, Make, or n8n account, or should I recommend one? *(required)*
4. Any conditional logic involved (e.g. "only if X, then Y")? *(optional)*
5. Where should error notifications be sent? *(required for Standard/Premium)*

### Gallery

Main image: the Automation/"Connect Your Tools" thumbnail already built. Add a simple before/after flow diagram (manual steps vs. automated) if you have time — automation gigs sell well on a clear visual of what's actually being eliminated.

---

## 3. AI Agent Setup

**Suggested category:** Programming & Tech → AI Services → AI Agents / AI App Development (Fiverr's AI Agent subcategory naming has shifted a few times — confirm against your live dropdown)

**Gig title (pick one, ≤80 characters):**
- I will set up a custom AI agent to handle tasks for your business
- I will build and deploy a custom AI agent for your workflow

**Search tags (5, ≤20 characters each):**
`ai agent` · `ai automation` · `custom ai agent` · `ai assistant setup` · `llm integration`

### Pricing

| | Basic — $175 | Standard — $375 | Premium — $600 |
|---|---|---|---|
| Package name | Single-Task AI Agent | Multi-Task AI Agent | Advanced AI Agent System |
| Delivery time | 4 days | 6 days | 9 days |
| Revisions | 2 | 3 | Unlimited (within scope) |
| Description (≤100 char) | One AI agent handling a single, well-defined task automatically. | An AI agent handling several related tasks with basic tool access. | A more advanced agent with multiple tools, memory, and integration into your systems. |
| Deliverables | One clearly-scoped task (e.g. answer questions from a knowledge base, triage incoming requests) · one AI model/platform integration · basic prompt/behavior tuning | Agent handles 2–3 related tasks · access to 1–2 external tools (e.g. a calendar, a database lookup, a search tool) · behavior guardrails so it stays in scope · basic testing document | Agent with multiple tool integrations · persistent memory/context across a conversation or session · integration into an existing system or workflow · guardrails + documented test cases · handoff walkthrough |

### Gig description (≤1,200 characters — ready to paste)

> Want an AI agent that actually does something, not just chats? I design and set up custom AI agents that handle real, defined tasks for your business — answering questions from your own data, triaging requests, or connecting to tools to take action.
>
> Unlike a basic chatbot, an AI agent can be given tools and guardrails so it does specific work reliably, not just generate text. I scope every build tightly around what you actually need it to do, so it stays useful and predictable instead of unpredictable or "too clever."
>
> What's included at every tier:
> • Clear behavior guardrails, so the agent stays in scope and doesn't improvise outside its job
> • Testing before delivery, not just a demo that happens to work once
> • A plain-language explanation of what the agent can and can't do
>
> Not sure if your idea is "chatbot" or "agent" territory? Message me first — happy to help you figure out the right scope (and the right gig) before you order.

### FAQ

- **What's the difference between this and the AI Chatbot/FAQ Bot gig?** A chatbot answers questions from a knowledge base. An AI agent can be given tools to take action — look something up, check availability, trigger a workflow — within guardrails you approve. If you're not sure which fits, message me first.
- **What AI platform/model do you use?** I work with current leading AI models and platforms and pick what fits your budget and use case — happy to discuss specifics before you order.
- **Can the agent make mistakes?** Any AI system can. Every build includes guardrails and testing to keep it reliable within its defined scope, and Premium includes documented test cases so you can see exactly what was verified.
- **Does the agent need access to my other tools/systems?** Only if the task requires it, and only with your explicit setup/approval — I'll tell you exactly what access is needed before starting.
- **Can this replace a full custom application?** For well-defined, bounded tasks, often yes and for far less than a full custom build. For something that needs a real dashboard, user accounts, or a database, that's more of a Backend/API-Only or full-stack build, message me to compare.

### Requirements (buyer fills in before work starts)

1. Describe the specific task(s) you want the agent to handle *(required)*
2. What information/data should the agent have access to? *(required)*
3. Should the agent take actions (e.g. update a system) or only answer/inform? *(required)*
4. Any existing tools/platforms it needs to connect to? *(optional)*
5. Any topics or actions the agent should never touch? *(optional but recommended)*

### Gallery

Main image: the AI Agent Setup thumbnail already built. If time allows, a simple diagram showing "agent + tools it can use" reads well for this gig specifically, since the differentiator vs. a chatbot is exactly that tool access.

---

## 4. Website Speed & Technical Audit

**Suggested category:** Programming & Tech → Web Programming → Website Performance / Web Performance Optimization (or listed under SEO-adjacent categories depending on your account)

**Gig title (pick one, ≤80 characters):**
- I will audit your website speed and fix technical performance issues
- I will run a full website speed and technical health audit

**Search tags (5, ≤20 characters each):**
`website speed` · `speed audit` · `core web vitals` · `site performance` · `technical audit`

### Pricing

*Note: this gig's tier scope was never written down in `PRICING.md` beyond pricing — the depth below is a reasonable draft, not settled policy. Confirm it (or adjust) before publishing, then update `PRICING.md`'s Track 4 section to match so this doesn't drift.*

| | Basic — $60 | Standard — $180 | Premium — $400 |
|---|---|---|---|
| Package name | Core Speed Audit | Full Technical Audit | Speed Audit + Fix Recommendations Call |
| Delivery time | 2 days | 3 days | 4–5 days |
| Revisions | 1 | 2 | 2 |
| Description (≤100 char) | Core Web Vitals check and top 3–5 speed fixes for one page. | Full-site speed audit with prioritized technical fix report. | Everything in Standard plus a live walkthrough call to review findings. |
| Deliverables | Core Web Vitals check (one page: LCP, CLS, INP) · page weight/render-blocking-resource check · written report (PDF) with 3–5 priority fixes | Everything in Basic, site-wide (not just one page) · broken link / redirect chain check · caching + image optimization review · written, prioritized report | Everything in Standard · 30-minute live walkthrough call to review findings and answer questions · follow-up written summary of what was discussed |

### Gig description (≤1,200 characters — ready to paste)

> A slow website loses visitors and rankings before they ever see what you offer. I'll audit your site's actual speed and technical health and hand you a clear, prioritized list of what to fix, not a wall of jargon.
>
> What I check:
> • Core Web Vitals (the metrics Google actually uses to judge page experience)
> • Page weight, render-blocking resources, image optimization
> • Broken links, redirect chains, and other technical issues dragging on performance
>
> You get a written report with the highest-impact fixes listed first, evidence-based, not a generic checklist. No fluff, no upsell padding, just what's actually slowing your site down and what to do about it.
>
> This audit is a report, not a rebuild, I'll tell you exactly what's wrong and how to fix it. If you'd rather have me implement the fixes directly, message me to scope that separately.
>
> Note: results depend on your site being publicly accessible. Password-protected or local-only sites can't be audited without special arrangement, message me first if that's your situation.

### FAQ

- **Will you actually fix the issues you find, or just report them?** This gig is the audit/report. If you want the fixes implemented too, message me to scope that as a separate or combined engagement.
- **What tools do you use for the audit?** Industry-standard performance tools (Google PageSpeed Insights/Lighthouse and equivalent), plus a manual technical review, not just an automated score dump.
- **Do you need access to my hosting or backend?** No, this audit works from your site's public URL. No login access needed.
- **What if my site is still in development and not public yet?** Message me before ordering, there are workarounds but it needs to be discussed first.
- **How is this different from the SEO & AI Search Visibility Audit gig?** This gig is about technical performance and speed. The SEO/GEO gig is about search rankings and how your content shows up in Google and AI search tools like ChatGPT. They're complementary, not overlapping, some clients order both.

### Requirements (buyer fills in before work starts)

1. Your website's live URL *(required)*
2. Any specific pages you're most concerned about, or should I audit the whole site? *(required)*
3. Have you had a speed/technical audit done before? If so, any known issues already? *(optional)*
4. What platform is your site built on (WordPress, Shopify, custom, etc.)? *(required)*

### Gallery

Main image: the Website Speed & Technical Audit thumbnail already built. A sample "before" screenshot of a slow PageSpeed score next to your report format (blurred/mocked) can be a strong second image if you build one from a past audit.

---

## 5. Squarespace/Wix → Custom Migration

**Suggested category:** Programming & Tech → Web Programming → Website Migration (or Web Development, depending on your dropdown — this one sometimes sits under "Convert Templates to Custom Code")

**Gig title (pick one, ≤80 characters):**
- I will migrate your Squarespace or Wix site to a custom coded website
- I will convert your Squarespace or Wix site into a custom website

**Search tags (5, ≤20 characters each):**
`squarespace migration` · `wix migration` · `site migration` · `custom website` · `website conversion`

### Pricing

| | Basic — $500 | Standard — $1,100 | Premium — $2,200 |
|---|---|---|---|
| Package name | Marketing Site Migration | Full Site Migration | Full Migration + E-Commerce |
| Delivery time | 5 days | 8 days | 12 days |
| Revisions | 2 | 3 | 3 |
| Description (≤100 char) | Migrate a small marketing site (up to 5 pages) to custom code, no e-commerce. | Full multi-page site migration with all existing content and structure preserved. | Full migration including cart, checkout, and inventory tracking (scope confirmed up front). |
| Deliverables | Up to 5 pages migrated · all existing copy/images carried over · responsive custom-coded rebuild · basic SEO preservation (page titles, meta descriptions) | Up to 10 pages migrated · full content/structure migration · responsive custom-coded rebuild · SEO preservation (URLs, titles, meta, redirects for changed URLs) · contact form(s) rebuilt | Everything in Standard · cart + checkout (via a hosted payment processor, e.g. Stripe Checkout) · basic inventory tracking · one-time product data migration (client provides export) · deployment guidance |

**Important scope note for this gig specifically** (learned from the agent-pipeline validation done this session): the Premium tier as priced here ($2,200) only comfortably covers e-commerce if scope stays disciplined — flat-rate shipping (no carrier API), no tax automation, single stock count per product (no variants), one-time data import (not live sync). If a lead wants more than that (automated tax, live carrier shipping rates, product variants), that's genuinely closer to the $4,800 Track 2 "Full site with real checkout" package, not this gig, quote accordingly rather than absorbing the extra scope into $2,200.

### Gig description (≤1,200 characters — ready to paste)

> Outgrown Squarespace or Wix? I'll migrate your site to fully custom code, keeping your content and structure intact while giving you a faster, more flexible, professionally-built site you actually own.
>
> Why migrate:
> • Full control over design and functionality, no more platform limitations
> • Better performance, custom code is leaner than template-platform overhead
> • No monthly platform fee locking your site to a subscription
>
> What I preserve during migration:
> • All your existing pages, copy, and images
> • Your site's URL structure and SEO where possible (so you don't lose rankings)
> • Contact forms and core functionality
>
> Premium tier adds full e-commerce (cart, checkout, inventory) for stores currently using Squarespace or Wix's built-in commerce, scoped to keep it affordable: flat-rate shipping, no automated tax, one product variant type. If your store needs more than that (live shipping rates, tax automation, product variants), message me first so we can scope it accurately, that's a bigger build than this gig's Premium tier covers.
>
> Message me with your current site link before ordering so I can confirm scope and timeline.

### FAQ

- **Will my site look the same after migration, or different?** I preserve your content and structure, but a custom rebuild is a good opportunity to also modernize the design if you want, let me know your preference before ordering.
- **Will I lose my Google rankings?** Migrations are done carefully to preserve URLs, titles, and meta descriptions where possible, and set up redirects for anything that changes, this minimizes ranking impact but some fluctuation during any migration is normal.
- **Do I need to cancel my Squarespace/Wix subscription right away?** No, keep it running until your new site is live and verified, then cancel on your own schedule.
- **Can you migrate my existing products/inventory?** Yes, on the Premium tier, via a one-time data export you provide. Live/ongoing sync with your old platform isn't included, this is a one-time migration.
- **What if my store needs more than flat-rate shipping or has product variants (size/color)?** That's beyond this gig's Premium scope, message me first, it's usually a Track 2-equivalent custom-quoted build rather than a marketplace flat rate.
- **Who hosts the new site?** You'll need your own hosting and domain (I can guide you through setup) — this gig is the build, not ongoing hosting.

### Requirements (buyer fills in before work starts)

1. Link to your current Squarespace/Wix site *(required)*
2. Do you want the same design, or are you open to a refresh during migration? *(required)*
3. Approximate number of pages on your current site *(required)*
4. Do you sell products through the site currently? If so, how many, and any variants (size/color/etc.)? *(required for Premium)*
5. Do you have hosting/domain already, or need guidance setting that up? *(optional)*

### Gallery

Main image: the Squarespace/Wix Migration thumbnail already built. A simple "before (platform template) → after (custom site)" side-by-side, even mocked, tends to convert well for migration gigs specifically.

---

## 6. Backend/API-Only Development

**Suggested category:** Programming & Tech → Web Programming → Backend Development (or Web Services & APIs, depending on your dropdown)

**Gig title (pick one, ≤80 characters):**
- I will build a custom backend API for your existing frontend
- I will develop a Node.js backend and API for your application

**Search tags (5, ≤20 characters each):**
`backend api` · `nodejs backend` · `rest api` · `express api` · `backend development`

### Pricing

| | Basic — $250 | Standard — $550 | Premium — $1,000 |
|---|---|---|---|
| Package name | Simple API | Standard API + Database | Full Backend System |
| Delivery time | 4 days | 7 days | 10 days |
| Revisions | 2 | 3 | 3 |
| Description (≤100 char) | A small REST API (up to 5 endpoints) with basic data storage. | A full REST API with auth, database, and up to 10 endpoints. | A complete backend system with auth, database, and complex business logic. |
| Deliverables | Up to 5 API endpoints · basic data storage (MongoDB) · simple request validation · local run instructions | Up to 10 API endpoints · user authentication (JWT-based) · MongoDB data layer · request validation and error handling · `.env.example` + setup README | 10+ API endpoints · authentication with role-based access (e.g. admin vs. regular user) · MongoDB data layer with a real data model (not just flat collections) · business logic specific to your use case (e.g. booking/inventory/workflow rules) · automated tests · full setup + deployment documentation |

### Gig description (≤1,200 characters — ready to paste)

> Already have a frontend (built yourself, by another developer, or on a no-code tool) and just need a real backend to power it? I build clean, well-structured APIs, no frontend work, no unnecessary scope, just the backend you actually need.
>
> Built with Node.js, Express, and MongoDB, using proper practices, not shortcuts:
> • Real input validation, not blind trust of whatever the frontend sends
> • Secrets and credentials never hardcoded or committed
> • Clear, documented API contracts so your frontend team (or you) know exactly what to expect
>
> Whether it's user accounts and authentication, a booking/reservation system, or a custom data model for your specific business logic, I scope it precisely and build only what's needed, no bloated boilerplate.
>
> Every delivery includes setup instructions and environment variable documentation, so you (or whoever deploys it) isn't left guessing.
>
> Tell me what your frontend needs from the backend, and I'll confirm the right tier before you order.

### FAQ

- **Do you build the frontend too?** No, this gig is backend/API only. I won't touch your existing frontend, you'll just point it at the new API. If you also need frontend work, check my other gigs.
- **What database do you use?** MongoDB by default, it's what I specialize in and fits most use cases well. If your project genuinely needs something else, message me first to confirm I can accommodate it.
- **Will I own the code?** Yes, full source code is delivered, no ongoing dependency on me to run or modify it (though I'm available for future work if you want it).
- **Do you handle deployment/hosting?** Code + full setup documentation is included so you (or your host) can deploy it. Hands-on deployment help is available as an add-on if you'd rather I do it directly.
- **What if I need something more complex than what's listed in Premium?** Message me first, more complex systems (heavy concurrency requirements, multiple integrated third-party services, etc.) may need custom scoping beyond these fixed tiers.
- **Can you connect this to a payment processor or other third-party service?** Yes, as a scoped add-on (API Integration), not automatically bundled, since third-party integration complexity varies a lot by provider.

### Requirements (buyer fills in before work starts)

1. Describe what your backend/API needs to do *(required)*
2. Do you have an existing frontend already built? What does it expect from the API (if known)? *(required)*
3. Do you need user accounts/authentication? *(required)*
4. Any existing database or is this a fresh build? *(required)*
5. Do you have hosting/a MongoDB Atlas account already, or need guidance? *(optional)*

### Gallery

Main image: the Backend/API-Only Development thumbnail already built. A simple annotated API-endpoint list or a request/response example screenshot reads well as a supporting image for this specific gig, it signals real technical competence to buyers who know what they're looking at.

---

## 7. SEO & AI Search Visibility Audit (GEO/AEO)

**Suggested category:** Digital Marketing → Search Engine Optimization (SEO) → SEO Audits (or a dedicated AI/GEO-specific subcategory if your account has one by the time you publish this — this is a newer category area that Fiverr has been actively expanding)

**Gig title (pick one, ≤80 characters):**
- I will audit your SEO and AI search visibility (ChatGPT, Google AI)
- I will run an SEO and GEO audit for Google and AI search visibility

**Search tags (5, ≤20 characters each):**
`seo audit` · `geo audit` · `ai search visibility` · `chatgpt seo` · `aeo optimization`

### Pricing (scope already documented in `PRICING.md` — reproduced here for convenience)

| | Basic — $70 | Standard — $200 | Premium — $450 |
|---|---|---|---|
| Package name | Core SEO Audit | SEO + AI Search Visibility Audit | Full SEO + GEO Audit with Competitor Analysis |
| Delivery time | 2 days | 3 days | 4–5 days |
| Revisions | 1 | 2 | 2 |
| Description (≤100 char) | Core on-page SEO pass with 3–5 priority fixes, written report. | SEO audit plus how your content reads to ChatGPT, Perplexity, and Google AI. | Everything in Standard plus a full technical crawl, competitor analysis, and a live call. |
| Deliverables | Title tags, meta descriptions, header structure, image alt text, keyword usage review · basic Core Web Vitals flags · written report (PDF) with 3–5 priority fixes | Everything in Basic · AI search visibility audit (GEO/AEO) — how content reads to ChatGPT/Perplexity/Google AI Overviews · schema/structured data review · content-extractability pass · one competitor snapshot · combined SEO + GEO action plan | Everything in Standard · full technical crawl (broken links, redirect chains, indexation issues) · keyword-gap analysis vs. 2 competitors · 30-minute live walkthrough call · Premium fee credited toward the first month of an ongoing SEO/content retainer if signed within 30 days |

### Gig description (≤1,200 characters — ready to paste)

> Ranking on Google isn't the whole game anymore, your customers are also asking ChatGPT, Perplexity, and Google's AI Overviews for recommendations. If your site isn't set up to be read and cited by those tools, you're invisible in a growing share of searches.
>
> I run a combined audit covering both:
> • Traditional SEO — titles, meta descriptions, headers, alt text, keyword usage, technical health
> • AI search visibility (GEO/AEO) — whether AI tools can actually extract and cite your content, structured data, and how you compare to competitors already showing up in AI answers
>
> You get a written, prioritized report, not a wall of raw data. The highest-impact fixes come first, with clear reasoning, not a generic checklist copy-pasted for every client.
>
> Premium tier includes a live 30-minute call to walk through findings together, and the fee is credited toward my ongoing SEO/content retainer if you decide to continue working together within 30 days.
>
> Message me your site URL before ordering if you want a quick gut-check on which tier fits your situation.

### FAQ

- **What's GEO/AEO?** Generative Engine Optimization / Answer Engine Optimization, making your content readable and citable by AI tools like ChatGPT, Perplexity, and Google's AI Overviews, as distinct from traditional Google ranking SEO.
- **Do I need both SEO and GEO, or just one?** They overlap but aren't identical. Basic tier is traditional SEO only. If you specifically want the AI-search-visibility piece, go Standard or Premium.
- **Will you implement the fixes, or just report them?** This gig is the audit and report. If you want fixes implemented, message me to discuss, either as a follow-up or check my other gigs for build/implementation work.
- **How is this different from the Website Speed & Technical Audit gig?** That gig focuses on page speed and technical performance. This one focuses on search visibility, both traditional Google rankings and AI search tools. Complementary, not overlapping, some clients order both.
- **What do I get at the end, exactly?** A written report (PDF), prioritized by impact, with specific evidence and recommendations, not vague generalities.
- **Does the Premium fee really count toward a retainer?** Yes, if you sign on to the ongoing SEO/content retainer within 30 days of the audit, the $450 is credited toward your first month.

### Requirements (buyer fills in before work starts)

1. Your website's live URL *(required)*
2. Are there specific pages/products you most want visible in search? *(optional)*
3. Do you know your main competitors? List 1–2 if so *(required for Premium's competitor analysis)*
4. Have you done any SEO work before? If so, briefly what? *(optional)*
5. What platform is your site built on? *(required)*

### Gallery

Main image: the SEO & AI Search Visibility Audit thumbnail already built. A split visual showing "shows up in Google" vs. "shows up in ChatGPT" is a strong differentiator image for this specific gig, since GEO/AEO is still a newer concept most buyers won't immediately understand from the title alone.

---

## Before you publish any of these

- Confirm each suggested category/subcategory against your actual live dropdown, Fiverr's taxonomy shifts periodically and exact names may differ from the best-guess above.
- Map the plain-language deliverables onto whatever standardized package attribute checkboxes Fiverr shows for that specific subcategory, they won't be identical to the Websites & Apps attributes on your live Track 1 gig.
- The Website Speed & Technical Audit tier scope in this doc is a draft, not settled policy (flagged in `PRICING.md` too) — once you're happy with it, that gap is closed, but it's worth a deliberate look before publishing, unlike the other 6 gigs which reproduce already-settled scope.
- Upload the corresponding thumbnail (already built) as each gig's primary gallery image.
