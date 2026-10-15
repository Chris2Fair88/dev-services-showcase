// Section anchors (Work, About, Contact, individual examples) live on a specific
// route (home by default, /services/ for sample-build examples). When the link is
// clicked from another route, navigate to that route first and scroll once it has
// mounted; when already on the target route, just scroll immediately. location.pathname
// is already basename-relative (BrowserRouter strips BASE), so this logic is unchanged
// from hash routing other than the real paths it compares against.
export function scrollOrNavigate(navigate, location, id, targetPath = '/') {
  return (e) => {
    e.preventDefault()
    if (location.pathname === targetPath) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(targetPath, { state: { scrollTo: id } })
    }
  }
}
