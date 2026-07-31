const tiers = [
  {
    badge: 'Basic',
    badgeClass: 'badge-basic',
    price: '$125',
    name: 'Starter React Page',
    desc: 'A single, focused React page — clean layout, responsive design, and polished presentation ready to launch.',
    features: [
      'One focused React page',
      'Fully responsive layout',
      'Clean content structure',
      'Contact / hours section',
      'GitHub Pages deployment',
    ],
    link: '#example-basic',
  },
  {
    badge: 'Standard',
    badgeClass: 'badge-standard',
    price: '$300',
    name: 'Modern React Website',
    desc: 'A complete multi-section website with modern design, reusable components, and polished brand presentation.',
    featured: true,
    features: [
      'Multi-section React site',
      'Responsive design system',
      'Reusable components',
      'Smooth-scroll navigation',
      'Contact form UI',
      'Deployment guidance',
    ],
    link: '#example-standard',
  },
  {
    badge: 'Premium',
    badgeClass: 'badge-premium',
    price: '$700',
    name: 'Full Stack Web App',
    desc: 'A functional web application with React frontend, Node.js backend, MongoDB data layer, and API integrations.',
    features: [
      'React frontend',
      'Node.js + Express backend',
      'MongoDB data layer',
      'REST API integration',
      'Client-specific business logic',
      'Deployment guidance',
    ],
    link: '#example-premium',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Services</span>
          <h2 className="section-title">Three tiers. Clear scope. Delivered.</h2>
          <p className="section-sub">
            Simple pricing for websites and web apps. Pick the tier that fits your project and budget.
          </p>
        </div>
        <div className="services-grid">
          {tiers.map(t => (
            <div key={t.badge} className={`service-card${t.featured ? ' featured' : ''}`}>
              <span className={`service-badge ${t.badgeClass}`}>{t.badge}</span>
              <div className="service-price">
                {t.price} <span>/ project</span>
              </div>
              <div className="service-name">{t.name}</div>
              <p className="service-desc">{t.desc}</p>
              <ul className="service-features">
                {t.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href={t.link} className="service-link">See live example →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
