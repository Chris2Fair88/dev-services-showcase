import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])
  return null
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
