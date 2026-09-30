import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Services from '../components/Services'
import ServiceExamples from '../components/ServiceExamples'
import AIServices from '../components/AIServices'
import Process from '../components/Process'
import ServicesCTA from '../components/ServicesCTA'

export default function ServicesPage() {
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
      <Services />
      <ServiceExamples />
      <AIServices />
      <Process />
      <ServicesCTA />
    </>
  )
}
