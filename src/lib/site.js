// Single source of truth for every absolute URL (canonicals, Open Graph,
// Twitter, sitemap, JSON-LD) and the Vite base path. Moving to a custom
// domain at the root is a two-value change: set VITE_SITE_URL and VITE_BASE
// (or edit the defaults below) and rebuild.
//
// Readable from three contexts: the Vite-built client bundle and the
// Vite-built SSR bundle both expose import.meta.env.VITE_*; plain Node
// scripts (vite.config.js, scripts/prerender.mjs, scripts/seo-check.mjs)
// only have process.env. Vite statically replaces import.meta.env.VITE_* at
// build time, so the object literal on the left is always truthy in built
// client/server code and process.env is never actually evaluated there.
const env = (typeof import.meta !== 'undefined' && import.meta.env) || process.env

export const SITE_URL = env.VITE_SITE_URL || 'https://chris2fair88.github.io/dev-services-showcase/'
export const BASE = env.VITE_BASE || '/dev-services-showcase/'
