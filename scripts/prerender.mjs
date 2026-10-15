// Runs after the client build (dist/) and the SSR build (dist-ssr/): renders
// each route through the server bundle, injects the HTML and that route's
// head tags into the already-built dist/index.html template, and writes a
// real dist/index.html and dist/services/index.html. Also writes
// dist/404.html, dist/sitemap.xml and dist/robots.txt.
//
// Fails loudly (non-zero exit, thrown Error with a clear message) on any
// problem, since this runs as part of `npm run build` and a silently empty
// or stale page would be worse than a failed build.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'
import { loadEnv } from 'vite'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..')
const distDir = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

Object.assign(process.env, loadEnv(process.env.NODE_ENV || 'production', root, ''))

const { SITE_URL, BASE } = await import('../src/lib/site.js')
const { routes, buildHeadHtml } = await import('../src/lib/routeMeta.js')

const templatePath = path.join(distDir, 'index.html')
if (!existsSync(templatePath)) {
  throw new Error(`Client build output not found at ${templatePath}. Run the client build before prerender.`)
}
const template = readFileSync(templatePath, 'utf8')
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error(
    'dist/index.html is missing the <!--app-head--> and/or <!--app-html--> placeholders. ' +
    'Check that index.html (the source template) still has both markers.'
  )
}

if (!existsSync(ssrEntry)) {
  throw new Error(`SSR build output not found at ${ssrEntry}. Run the SSR build (npm run build:ssr) before prerender.`)
}
const { render } = await import(pathToFileURL(ssrEntry).href)
if (typeof render !== 'function') {
  throw new Error(`dist-ssr/entry-server.js did not export a render function. Got: ${typeof render}`)
}

for (const route of routes) {
  let result
  try {
    result = render(route.routerPath)
  } catch (err) {
    throw new Error(`Rendering route "${route.routerPath}" failed: ${err.message}\n${err.stack}`)
  }
  const { html, routeMeta } = result || {}
  if (!html || typeof html !== 'string') {
    throw new Error(`Rendering route "${route.routerPath}" produced no HTML.`)
  }
  if (!routeMeta) {
    throw new Error(`Rendering route "${route.routerPath}" produced no routeMeta; check findRouteMeta/routerPath match.`)
  }

  const page = template
    .replace('<!--app-head-->', buildHeadHtml(routeMeta))
    .replace('<!--app-html-->', html)

  const outDir = route.path === '' ? distDir : path.join(distDir, route.path)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(path.join(outDir, 'index.html'), page)
  console.log(`Prerendered ${route.routerPath} -> ${path.relative(root, path.join(outDir, 'index.html'))}`)
}

// --- 404.html: noindex, links home, correct under BASE ---
const notFoundHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <title>Page not found | Chris Fairbanks</title>
  </head>
  <body>
    <p>Page not found. <a href="${BASE}">Go home</a>.</p>
  </body>
</html>
`
writeFileSync(path.join(distDir, '404.html'), notFoundHtml)

// --- sitemap.xml ---
const urls = routes.map(r => `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n  </url>`).join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)

// --- robots.txt ---
const robots = `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}sitemap.xml\n`
writeFileSync(path.join(distDir, 'robots.txt'), robots)

console.log('Wrote dist/404.html, dist/sitemap.xml, dist/robots.txt')
