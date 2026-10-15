import { useNavigate, useLocation } from 'react-router-dom'
import { scrollOrNavigate } from '../utils/sectionLink'
import ServicesGlossary from './ServicesGlossary'

const tiers = [
  {
    badge: 'Basic',
    badgeClass: 'badge-basic',
    price: '$125',
    name: 'Starter React Page',
    desc: 'A single, focused page that tells customers who you are, what you offer, and how to reach you.',
    stack: 'Built with React.',
    features: [
      'One focused React page',
      'Fully responsive layout',
      'Clean content structure',
      'Contact / hours section',
    ],
    link: 'example-basic',
  },
  {
    badge: 'Standard',
    badgeClass: 'badge-standard',
    price: '$300',
    name: 'Modern React Website',
    desc: 'A multi-section website that presents your business, services, and contact options in a clean, polished design.',
    stack: 'Built with React.',
    featured: true,
    features: [
      'Multi-section React site',
      'Responsive design system',
      'Reusable components',
      'Smooth-scroll navigation',
      'Contact form UI',
      'Deployment guidance',
    ],
    link: 'example-standard',
  },
  {
    badge: 'Premium',
    badgeClass: 'badge-premium',
    price: '$700',
    name: 'Full Stack Web App',
    desc: 'A web application for storing and managing your business data, with the logic and API integrations your process needs.',
    stack: 'Built with React, Node.js, Express, and MongoDB.',
    features: [
      'React frontend',
      'Node.js + Express backend',
      'MongoDB data layer',
      'REST API integration',
      'Client-specific business logic',
      'Deployment guidance',
    ],
    link: 'example-premium',
  },
]

export default function Services() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Services</span>
          <h1 className="section-title">Three tiers. Clear scope. Delivered.</h1>
          <p className="section-sub">
            Simple pricing for websites and web apps. Pick the tier that fits your project and budget.
          </p>
        </div>
        <ServicesGlossary />
        <div className="services-grid">
          {tiers.map(t => (
            <div key={t.badge} className={`service-card${t.featured ? ' featured' : ''}`}>
              <span className={`service-badge ${t.badgeClass}`}>{t.badge}</span>
              <div className="service-price">
                {t.price} <span>/ project</span>
              </div>
              <div className="service-name">{t.name}</div>
              <p className="service-desc">
                {t.desc}
                <span className="service-stack">{t.stack}</span>
              </p>
              <ul className="service-features">
                {t.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a
                href={`#${t.link}`}
                className="service-link"
                onClick={scrollOrNavigate(navigate, location, t.link, '/services/')}
              >
                See live example →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
