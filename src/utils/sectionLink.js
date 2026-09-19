// Section anchors (Work, Process, About, Contact, individual examples) live only on
// the home page. When the link is clicked from another route, navigate home first and
// scroll once Home has mounted; when already on home, just scroll immediately.
export function scrollOrNavigate(navigate, location, id) {
  return (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }
}
