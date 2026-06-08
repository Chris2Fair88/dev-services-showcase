import BrowserFrame from './BrowserFrame'
import BasicDemo from './demos/BasicDemo'
import StandardDemo from './demos/StandardDemo'
import PremiumDemo from './demos/PremiumDemo'

const examples = [
  {
    id: 'example-basic',
    tier: 'Basic — $80',
    tierClass: 'tier-basic',
    title: 'Sunrise Bakery',
    desc: 'A focused single-page React site for a local bakery — hero, menu display, and contact info. Responsive, clean, and ready to launch.',
    url: 'sunrisebakery.com',
    Demo: BasicDemo,
  },
  {
    id: 'example-standard',
    tier: 'Standard — $180',
    tierClass: 'tier-standard',
    title: 'Apex Fitness Studio',
    desc: 'A full multi-section React website for a gym — navigation, hero, class showcase, stats, member testimonials. Polished design with reusable components throughout.',
    url: 'apexfitnessstudio.com',
    Demo: StandardDemo,
  },
  {
    id: 'example-premium',
    tier: 'Premium — $350',
    tierClass: 'tier-premium',
    title: 'FlowTrack Dashboard',
    desc: 'A full stack project management application — React frontend, Node.js/Express API, MongoDB data layer. Sidebar navigation, live stats cards, project tracking table, and user accounts.',
    url: 'app.flowtrack.io/dashboard',
    Demo: PremiumDemo,
  },
]

export default function TierExamples() {
  return (
    <section className="tier-examples" id="examples">
      <div className="container">
        <div className="examples-header">
          <span className="section-label">Live Examples</span>
          <h2 className="section-title">See what each tier delivers</h2>
          <p className="section-sub">
            Every example below was built to show the full scope and quality of that service tier.
          </p>
        </div>

        {examples.map(({ id, tier, tierClass, title, desc, url, Demo }) => (
          <div key={id} className="example-section" id={id}>
            <div className="example-meta">
              <span className={`example-tier-badge ${tierClass}`}>{tier}</span>
            </div>
            <h3 className="example-title">{title}</h3>
            <p className="example-desc">{desc}</p>
            <BrowserFrame url={url}>
              <Demo />
            </BrowserFrame>
          </div>
        ))}
      </div>
    </section>
  )
}
