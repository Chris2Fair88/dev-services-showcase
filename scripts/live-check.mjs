// Checks the LIVE deployed site (not the local dist/ build). No dependency:
// plain fetch + string/regex checks, so it can run in CI without installing
// anything beyond Node itself. Takes the site URL from src/lib/site.js (the
// project's single source of truth for SITE_URL), never a second hardcoded
// copy.
//
// Exits non-zero, with every failure listed (not just the first), if:
//   - "/" or "/services/" is not 200, lacks exactly one <h1>, has an empty
//     #root, a duplicate <title>, or a canonical not starting with SITE_URL
//   - "/services" (no trailing slash) does not redirect to, or serve,
//     "/services/"
//   - a nonexistent URL does not return 404 with <meta name="robots"
//     content="noindex">
//   - sitemap.xml does not list both pages
//   - robots.txt or og-image.png is not 200
//   - chatbot-demo.html is not 200, lacks "Custom projects", or contains
//     "3 to 7 days"
//   - any <script type="application/ld+json"> block on "/" fails to parse

import { SITE_URL } from '../src/lib/site.js'

const failures = []

function fail(label, message) {
  failures.push(`${label}: ${message}`)
}

async function get(path) {
  const url = new URL(path, SITE_URL).toString()
  const res = await fetch(url)
  const body = await safeText(res)
  // res.url is the final URL after following any redirects.
  return { url: res.url, status: res.status, body }
}

async function safeText(res) {
  try {
    return await res.text()
  } catch {
    return ''
  }
}

function countH1(html) {
  return [...html.matchAll(/<h1[\s>]/gi)].length
}

function countTitles(html) {
  return [...html.matchAll(/<title>([\s\S]*?)<\/title>/gi)].length
}

function rootIsEmpty(html) {
  const start = html.indexOf('<div id="root">')
  const bodyEnd = html.lastIndexOf('</body>')
  if (start === -1 || bodyEnd === -1) return true
  const content = html.slice(start + '<div id="root">'.length, bodyEnd)
  return content.replace(/<\/div>\s*$/, '').trim().length === 0
}

function canonicalHref(html) {
  const m = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
  return m ? m[1] : null
}

function hasNoindex(html) {
  return /<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)
}

async function checkPage(path, label) {
  let r
  try {
    r = await get(path)
  } catch (e) {
    fail(label, `request failed: ${e.message}`)
    return
  }
  if (r.status !== 200) {
    fail(label, `expected 200, got ${r.status}`)
    return
  }
  const h1Count = countH1(r.body)
  if (h1Count !== 1) fail(label, `expected exactly one <h1>, found ${h1Count}`)
  if (rootIsEmpty(r.body)) fail(label, '#root is empty')
  const titleCount = countTitles(r.body)
  if (titleCount !== 1) fail(label, `expected exactly one <title>, found ${titleCount}`)
  const canonical = canonicalHref(r.body)
  if (!canonical) fail(label, 'missing <link rel="canonical">')
  else if (!canonical.startsWith(SITE_URL)) fail(label, `canonical "${canonical}" does not start with SITE_URL "${SITE_URL}"`)
}

async function checkServicesNoSlashRedirectsOrServes() {
  const label = '/services (no trailing slash)'
  let r
  try {
    r = await get('services')
  } catch (e) {
    fail(label, `request failed: ${e.message}`)
    return
  }
  if (r.status !== 200) {
    fail(label, `expected a redirect to, or a direct 200 from, /services/, got ${r.status} at ${r.url}`)
    return
  }
  const endsRight = r.url.endsWith('/services/') || r.url.endsWith('/services')
  if (!endsRight && !r.body.includes('Services | Chris Fairbanks')) {
    fail(label, `did not land on /services/ content (final URL: ${r.url})`)
  }
}

async function checkNotFound() {
  const label = 'nonexistent URL'
  const bogus = `this-page-does-not-exist-${Date.now()}/`
  let r
  try {
    r = await get(bogus)
  } catch (e) {
    fail(label, `request failed: ${e.message}`)
    return
  }
  if (r.status !== 404) {
    fail(label, `expected 404, got ${r.status}`)
    return
  }
  if (!hasNoindex(r.body)) fail(label, '404 page is missing <meta name="robots" content="noindex">')
}

async function checkSitemap() {
  const label = 'sitemap.xml'
  let r
  try {
    r = await get('sitemap.xml')
  } catch (e) {
    fail(label, `request failed: ${e.message}`)
    return
  }
  if (r.status !== 200) {
    fail(label, `expected 200, got ${r.status}`)
    return
  }
  if (!r.body.includes(SITE_URL)) fail(label, 'does not list the home page')
  if (!r.body.includes(`${SITE_URL}services/`)) fail(label, 'does not list the services page')
}

async function checkSimple200(path, label) {
  let r
  try {
    r = await get(path)
  } catch (e) {
    fail(label, `request failed: ${e.message}`)
    return
  }
  if (r.status !== 200) fail(label, `expected 200, got ${r.status}`)
  return r
}

async function checkChatbotDemo() {
  const label = 'chatbot-demo.html'
  const r = await checkSimple200('chatbot-demo.html', label)
  if (!r) return
  if (!r.body.includes('Custom projects')) fail(label, 'missing "Custom projects"')
  if (r.body.includes('3 to 7 days')) fail(label, 'contains stale "3 to 7 days" text')
}

async function checkJsonLd() {
  const label = 'JSON-LD on /'
  let r
  try {
    r = await get('')
  } catch (e) {
    fail(label, `request failed: ${e.message}`)
    return
  }
  if (r.status !== 200) {
    fail(label, `expected 200, got ${r.status}`)
    return
  }
  const blocks = [...r.body.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  if (blocks.length === 0) {
    fail(label, 'no JSON-LD blocks found')
    return
  }
  for (const [i, m] of blocks.entries()) {
    try {
      JSON.parse(m[1])
    } catch (e) {
      fail(label, `block ${i + 1} failed to parse: ${e.message}`)
    }
  }
}

async function main() {
  console.log(`live-check: ${SITE_URL}`)
  await checkPage('', 'home page (/)')
  await checkPage('services/', 'services page (/services/)')
  await checkServicesNoSlashRedirectsOrServes()
  await checkNotFound()
  await checkSitemap()
  await checkSimple200('robots.txt', 'robots.txt')
  await checkSimple200('og-image.png', 'og-image.png')
  await checkChatbotDemo()
  await checkJsonLd()

  if (failures.length > 0) {
    console.error(`live-check FAILED (${failures.length} issue(s)):`)
    for (const f of failures) console.error(`  - ${f}`)
    process.exit(1)
  }
  console.log('live-check passed')
}

main().catch((e) => {
  console.error('live-check crashed:', e)
  process.exit(1)
})
