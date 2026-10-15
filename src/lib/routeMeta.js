import { SITE_URL } from './site.js'

// Single source of per-page head data, used by scripts/prerender.mjs (to
// build each static page's head) and by the client (to keep the head
// correct across client-side navigation after hydration). path is the
// route's canonical path relative to SITE_URL ('' for home).
const OG_IMAGE = `${SITE_URL}og-image.png`
const OG_IMAGE_ALT = 'Chris Fairbanks, Full Stack Developer, with a short description of React, Node.js, and AI integration work.'

export const routes = [
  {
    path: '',
    routerPath: '/',
    title: 'Chris Fairbanks | Full Stack Developer',
    description: "Full-stack developer open to full-time roles and freelance projects. Websites, web apps and AI integrations built with React, Node.js and MCP.",
    ogTitle: 'Chris Fairbanks | Full Stack Developer & Web Development Services',
    ogDescription: "Full-stack developer open to full-time roles and freelance projects. Websites, web apps and AI integrations built with React, Node.js and MCP.",
  },
  {
    path: 'services/',
    routerPath: '/services/',
    title: 'Services | Chris Fairbanks',
    description: 'Simple pricing for websites and web apps. Pick the tier that fits your project and budget.',
    ogTitle: 'Services | Chris Fairbanks',
    ogDescription: 'Simple pricing for websites and web apps. Pick the tier that fits your project and budget.',
  },
]

export function canonicalFor(routeMeta) {
  return `${SITE_URL}${routeMeta.path}`
}

export function findRouteMeta(pathname) {
  return routes.find(r => r.routerPath === pathname) || routes[0]
}

export const ogImage = OG_IMAGE
export const ogImageAlt = OG_IMAGE_ALT

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

// Minimal structured data for the home page only, using facts already shown
// on the site (About.jsx's "full stack developer", the <title>, and the
// social links in Footer.jsx). No address, phone, ratings or other
// invented facts.
export function buildJsonLd() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chris Fairbanks',
    url: SITE_URL,
    jobTitle: 'Full Stack Developer',
    sameAs: [
      'https://www.linkedin.com/in/chris-fairbanks-20a103345',
      'https://github.com/Chris2Fair88',
      'https://www.fiverr.com/chrisf919',
    ],
  }
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Chris Fairbanks | Full Stack Developer',
    url: SITE_URL,
  }
  return [person, website]
}

export function validateJsonLd(entries) {
  for (const entry of entries) {
    const roundTripped = JSON.parse(JSON.stringify(entry))
    if (!roundTripped['@context'] || !roundTripped['@type'] || !roundTripped.name || !roundTripped.url) {
      throw new Error(`Invalid JSON-LD entry, missing a required field: ${JSON.stringify(entry)}`)
    }
  }
  return entries
}

// Builds the <!--app-head--> replacement string for a route, used only by
// scripts/prerender.mjs at build time (the client updates the same tags
// directly via useRouteHead.js instead of re-parsing HTML).
export function buildHeadHtml(routeMeta) {
  const canonical = canonicalFor(routeMeta)
  const tags = [
    `<title>${esc(routeMeta.title)}</title>`,
    `<meta name="description" content="${esc(routeMeta.description)}" />`,
    `<link rel="canonical" href="${esc(canonical)}" />`,
    `<meta property="og:title" content="${esc(routeMeta.ogTitle)}" />`,
    `<meta property="og:description" content="${esc(routeMeta.ogDescription)}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:image" content="${esc(OG_IMAGE)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(OG_IMAGE_ALT)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(routeMeta.ogTitle)}" />`,
    `<meta name="twitter:description" content="${esc(routeMeta.ogDescription)}" />`,
    `<meta name="twitter:image" content="${esc(OG_IMAGE)}" />`,
  ]
  if (routeMeta.path === '') {
    for (const entry of validateJsonLd(buildJsonLd())) {
      tags.push(`<script type="application/ld+json">${JSON.stringify(entry)}</script>`)
    }
  }
  return tags.join('\n    ')
}
