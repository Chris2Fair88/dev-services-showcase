import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Process from '../components/Process'
import About from '../components/About'
import ContactCTA from '../components/ContactCTA'

export default function Home() {
  const location = useLocation()

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
      <Process />
      <About />
      <ContactCTA />
    </>
  )
}
