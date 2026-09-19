import { useNavigate, useLocation } from 'react-router-dom'
import { scrollOrNavigate } from '../utils/sectionLink'

export default function Hero() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-badge">Open to Full-Time Roles & Freelance Projects</div>
        <h1>
          I Build Websites &<br />
          <span>Web Apps That Work.</span>
        </h1>
        <p className="hero-sub">
          React frontends, modern business websites, and full stack applications,
          built clean, fast, and on time. Hiring for a role or have a project in mind?
          Either way, let's talk.
        </p>
        <div className="hero-buttons">
          <a href="#work" className="btn btn-primary" onClick={scrollOrNavigate(navigate, location, 'work')}>
            See My Work
          </a>
          <a
            href="https://www.linkedin.com/in/chris-fairbanks-20a103345"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
          </a>
          <a href="mailto:Chris2Fair88@gmail.com" className="btn btn-outline">
            Email Me
          </a>
        </div>
      </div>
    </section>
  )
}
