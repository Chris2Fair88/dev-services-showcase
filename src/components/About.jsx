const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'Git']

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-header">
            <span className="section-label">About</span>
            <h2 className="section-title">The person behind the code</h2>
            <p className="section-sub">
              I'm Chris Fairbanks, a full stack developer who graduated from TripleTen's
              software engineering bootcamp in 2025. I like projects with a clear goal,
              clean scope, and a real deadline, whether that's a new role or a new client.
            </p>
          </div>
          <div className="about-details">
            <div className="about-skills">
              <h3>Skills</h3>
              <div className="about-skills-list">
                {skills.map(s => (
                  <span key={s} className="about-skill-item">{s}</span>
                ))}
              </div>
            </div>
            <div className="about-status">
              <h3>Status</h3>
              <p>TripleTen bootcamp graduate, 2025. Open to full-time roles and freelance work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
