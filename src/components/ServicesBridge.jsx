import { Link } from 'react-router-dom'

export default function ServicesBridge() {
  return (
    <section className="services-bridge">
      <div className="container">
        <p>
          I also build websites and AI chatbots for small businesses. Fixed packages from $125.{' '}
          <Link to="/services" className="service-link">See services →</Link>
        </p>
      </div>
    </section>
  )
}
