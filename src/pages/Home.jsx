import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Work from '../components/Work'
import ServicesBridge from '../components/ServicesBridge'
import About from '../components/About'
import ContactCTA from '../components/ContactCTA'
import { useRouteHead } from '../lib/useRouteHead.js'
import { routes } from '../lib/routeMeta.js'

export default function Home() {
  const location = useLocation()
  useRouteHead(routes[0])

  useEffect(() => {
    const id = location.state?.scrollTo
    if (id) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <Work />
      <ServicesBridge />
      <About />
      <ContactCTA />
    </>
  )
}
