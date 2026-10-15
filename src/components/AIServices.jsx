const CHATBOT_DEMO_URL = 'https://chris2fair88.github.io/dev-services-showcase/chatbot-demo.html'
const TEMPO_URL = 'https://chris2fair88.github.io/tempo/'

const tiers = [
  {
    badge: 'Basic',
    badgeClass: 'badge-basic',
    price: '$65',
    name: 'Simple FAQ Bot',
    desc: 'A focused FAQ bot for a single platform, with a basic greeting and fallback response.',
    features: [
      'Up to 10 FAQ Q&A pairs',
      'Single platform',
      'Basic greeting flow',
      'Fallback response handling',
    ],
  },
  {
    badge: 'Standard',
    badgeClass: 'badge-standard',
    price: '$200',
    name: 'Business FAQ + Lead Capture Bot',
    desc: 'A branded bot that answers FAQs and captures leads with a basic conversation flow.',
    featured: true,
    features: [
      'Up to 25 FAQ pairs',
      'Lead capture form',
      'Branded widget',
      'Basic conversation flow',
    ],
  },
  {
    badge: 'Premium',
    badgeClass: 'badge-premium',
    price: '$425',
    name: 'AI-Powered Smart Chatbot',
    desc: 'AI-generated responses drawn from an unlimited FAQ knowledge base, with lead capture routed straight into your CRM.',
    features: [
      'AI-generated responses',
      'Unlimited FAQ knowledge base',
      'Lead capture with CRM routing',
      'Branded widget',
      'Multi-language support',
    ],
  },
]

export default function AIServices() {
  return (
    <section className="ai-services" id="ai-services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">AI Services</span>
          <h2 className="section-title">AI chatbots and FAQ bots</h2>
          <p className="section-sub">
            A separate offering from the React tiers above, built for businesses that
            want an always-on first line of response.
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
            </div>
          ))}
        </div>
        <div className="ai-services-proof">
          <p className="section-note">
            See it live: a working chatbot demo and a real MCP integration example.
          </p>
          <div className="ai-services-proof-links">
            <a href={CHATBOT_DEMO_URL} target="_blank" rel="noreferrer" className="service-link">
              Try the chatbot demo →
            </a>
            <a href={TEMPO_URL} target="_blank" rel="noreferrer" className="service-link">
              See Tempo (MCP integration) →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
