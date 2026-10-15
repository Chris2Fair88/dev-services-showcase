import { useEffect } from 'react'
import { canonicalFor, ogImage, ogImageAlt } from './routeMeta.js'

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

// Keeps document.title and the head's meta/canonical/OG tags correct when
// navigating between pages client-side after hydration. The prerendered
// HTML already has the right values on first load; this only matters once
// the app is a live SPA in the browser.
export function useRouteHead(routeMeta) {
  useEffect(() => {
    const canonical = canonicalFor(routeMeta)
    document.title = routeMeta.title
    setMeta('meta[name="description"]', 'content', routeMeta.description)
    setMeta('link[rel="canonical"]', 'href', canonical)
    setMeta('meta[property="og:title"]', 'content', routeMeta.ogTitle)
    setMeta('meta[property="og:description"]', 'content', routeMeta.ogDescription)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[property="og:image"]', 'content', ogImage)
    setMeta('meta[property="og:image:alt"]', 'content', ogImageAlt)
    setMeta('meta[name="twitter:title"]', 'content', routeMeta.ogTitle)
    setMeta('meta[name="twitter:description"]', 'content', routeMeta.ogDescription)
    setMeta('meta[name="twitter:image"]', 'content', ogImage)
  }, [routeMeta])
}
