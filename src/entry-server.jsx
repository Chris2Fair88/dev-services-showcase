import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'
import { BASE } from './lib/site.js'
import { findRouteMeta } from './lib/routeMeta.js'

// url is the router-relative path to render ('/' or '/services/'), not
// including BASE. Unlike BrowserRouter (which derives the basename-prefixed
// location from the real browser URL), StaticRouter has no real URL to read
// from, so the full basename-prefixed location has to be passed explicitly;
// basename then strips that same prefix before matching routes, same as on
// the client.
export function render(url) {
  const fullLocation = BASE.replace(/\/$/, '') + url
  const html = renderToString(
    <StrictMode>
      <StaticRouter basename={BASE} location={fullLocation}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  return { html, routeMeta: findRouteMeta(url) }
}
