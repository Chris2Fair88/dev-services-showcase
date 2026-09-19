export default function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <div className="cta-header">
          <span className="section-label">Get Started</span>
          <h2 className="section-title">Let's build something.</h2>
          <p className="section-sub">
            Whether you're hiring for a role or have a project in mind, I respond
            quickly and keep scope clear from day one.
          </p>
        </div>
        <div className="cta-paths">
          <div className="cta-path">
            <h3>Hiring for a role</h3>
            <p>Full-time or contract opportunities, let's connect.</p>
            <div className="cta-buttons">
              <a
                href="https://www.linkedin.com/in/chris-fairbanks-20a103345"
                target="_blank"
                rel="noreferrer"
                className="cta-btn cta-linkedin"
              >
                LinkedIn
              </a>
              <a href="mailto:Chris2Fair88@gmail.com" className="cta-btn cta-email">
                Email Me
              </a>
            </div>
          </div>
          <div className="cta-path">
            <h3>Have a project</h3>
            <p>Freelance work, start with a Fiverr order or a direct message.</p>
            <div className="cta-buttons">
              <a
                href="https://www.fiverr.com/s/99Vz5qe"
                target="_blank"
                rel="noreferrer"
                className="cta-btn cta-fiverr"
              >
                Order on Fiverr
              </a>
              <a href="mailto:Chris2Fair88@gmail.com" className="cta-btn cta-email">
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
