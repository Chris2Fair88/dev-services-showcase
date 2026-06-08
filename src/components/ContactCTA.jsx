export default function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <div className="cta-inner">
          <span className="section-label">Get Started</span>
          <h2 className="section-title">Ready to build something?</h2>
          <p>
            Reach out on Fiverr to start your project, connect on LinkedIn,
            or send a direct email. I respond quickly and keep scope clear from day one.
          </p>
          <div className="cta-buttons">
            <a
              href="https://www.fiverr.com/s/99Vz5qe"
              target="_blank"
              rel="noreferrer"
              className="cta-btn cta-fiverr"
            >
              Order on Fiverr
            </a>
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
      </div>
    </section>
  )
}
