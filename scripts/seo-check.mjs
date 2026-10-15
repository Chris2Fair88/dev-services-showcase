// Validates the built dist/ pages for basic on-page SEO hygiene. No
// dependency: plain regex/string checks over the raw HTML, exactly what a
// non-JS crawler would see. Exits non-zero (with every failure listed, not
// just the first) if a built page:
//   - has an empty #root (the SSR/prerender step didn't actually run)
//   - has a missing or duplicate <title>
//   - has a missing <meta name="description">
//   - has a missing <link rel="canonical">
//   - does not have exactly one <h1>
//   - has a canonical that does not start with SITE_URL
// Also fails if dist/sitemap.xml or dist/robots.txt is missing.
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { loadEnv } from 'vite'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..')
const distDir = path.join(root, 'dist')

Object.assign(process.env, loadEnv(process.env.NODE_ENV || 'production', root, ''))
const { SITE_URL } = await import('../src/lib/site.js')
const { routes } = await import('../src/lib/routeMeta.js')

const failures = []

function check(pagePath, label) {
  const filePath = path.join(distDir, pagePath)
  if (!existsSync(filePath)) {
    failures.push(`${label}: file not found at dist/${pagePath}`)
    return
  }
  const html = readFileSync(filePath, 'utf8')

  const rootStart = html.indexOf('<div id="root">')
  const bodyEnd = html.lastIndexOf('</body>')
  const rootContent = rootStart !== -1 && bodyEnd !== -1
    ? html.slice(rootStart + '<div id="root">'.length, bodyEnd)
    : ''
  if (rootContent.replace(/<\/div>\s*$/, '').trim().length === 0) {
    failures.push(`${label}: #root is empty (no rendered content found)`)
  }

  const titleMatches = [...html.matchAll(/<title>([\s\S]*?)<\/title>/g)]
  if (titleMatches.length === 0) {
    failures.push(`${label}: missing <title>`)
  } else if (titleMatches.length > 1) {
    failures.push(`${label}: duplicate <title> (found ${titleMatches.length})`)
  }

  if (!/<meta\s+name="description"\s+content="[^"]+"\s*\/?>/.test(html)) {
    failures.push(`${label}: missing <meta name="description">`)
  }

  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"\s*\/?>/)
  if (!canonicalMatch) {
    failures.push(`${label}: missing <link rel="canonical">`)
  } else if (!canonicalMatch[1].startsWith(SITE_URL)) {
    failures.push(`${label}: canonical "${canonicalMatch[1]}" does not start with SITE_URL "${SITE_URL}"`)
  }

  const h1Count = (html.match(/<h1[\s>]/g) || []).length
  if (h1Count !== 1) {
    failures.push(`${label}: expected exactly one <h1>, found ${h1Count}`)
  }
}

for (const route of routes) {
  const pagePath = route.path === '' ? 'index.html' : `${route.path}index.html`
  check(pagePath, route.routerPath)
}

if (!existsSync(path.join(distDir, 'sitemap.xml'))) {
  failures.push('missing dist/sitemap.xml')
}
if (!existsSync(path.join(distDir, 'robots.txt'))) {
  failures.push('missing dist/robots.txt')
}

if (failures.length > 0) {
  console.error('seo-check failed:')
  for (const f of failures) console.error(`  - ${f}`)
  process.exit(1)
}

console.log(`seo-check passed (${routes.length} page(s), sitemap.xml, robots.txt)`)
