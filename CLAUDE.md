# Project notes

## Routing and rendering

This site is a prerendered React app. The client uses `BrowserRouter` (not hash routing); `StaticRouter` renders each route to static HTML at build time, so pages are fully static files on disk, not rendered client-side on first load.

## Build pipeline

`npm run build` runs three steps in order:
1. `build:client` (`vite build`): builds the client bundle into `dist/`.
2. `build:ssr` (`vite build --ssr src/entry-server.jsx --outDir dist-ssr`): builds the SSR bundle used only by the prerender step.
3. `prerender` (`node scripts/prerender.mjs`): renders each route to static HTML and writes `dist/404.html`, `dist/sitemap.xml`, and `dist/robots.txt`.

## Site URL and base path

`src/lib/site.js` is the single source of truth for `SITE_URL` and `BASE`, read from the `VITE_SITE_URL` and `VITE_BASE` environment variables (falling back to the current GitHub Pages defaults). To serve from a custom domain instead of a GitHub Pages subpath, set both variables and add a `CNAME` file under `public/` with the domain name, then rebuild.

## Other scripts

- `npm run test:chatbot`: unit tests for the chatbot's intent-matching logic.
- `npm run seo-check`: validates the built `dist/` pages for on-page SEO hygiene (title, canonical, h1 count, sitemap, robots.txt).
- `npm run og:render`: regenerates the Open Graph preview image.
- `tools/sync-agents.ps1`: copies this repo's `.claude/agents/*.md` into `~/.claude/agents/` so the same agent roles are available across other repos. Dry-run by default, `-Apply` to execute.

## Deploys

Deploys are run manually by the owner from a local terminal. Nothing in this repo or its CI automatically deploys.

## Private documents

Private business documents (pricing, client details, internal notes) live outside this repo entirely and are excluded locally via git's own exclude mechanism; they are never committed or named in tracked files.

# Preferences

- Never use em dashes (—) in any text written for Chris, including gig descriptions, docs, commit messages, and chat replies. Use commas, periods, or parentheses instead.
