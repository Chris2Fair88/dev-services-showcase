export default function StandardDemo() {
  return (
    <div className="fitness">
      <nav className="fitness-nav">
        <div className="fitness-logo">APEX</div>
        <div className="fitness-nav-links">
          <span>Classes</span>
          <span>Trainers</span>
          <span>Pricing</span>
          <span>Contact</span>
        </div>
        <div className="fitness-join-btn">Join Now</div>
      </nav>

      <div className="fitness-hero">
        <div className="fitness-hero-tag">Now Open — Downtown Location</div>
        <h1>Push Your<br /><span>Limits.</span></h1>
        <p>
          High-performance training for all fitness levels. Real coaches,
          real results, real community.
        </p>
        <div className="fitness-hero-btns">
          <div className="fitness-btn-primary">Start Free Trial</div>
          <div className="fitness-btn-outline">View Classes</div>
        </div>
      </div>

      <div className="fitness-stats">
        {[
          { num: '2,400+', label: 'Members' },
          { num: '18', label: 'Classes / Week' },
          { num: '12', label: 'Expert Trainers' },
          { num: '97%', label: 'Satisfaction' },
        ].map(s => (
          <div key={s.label} className="fitness-stat">
            <div className="fitness-stat-num">{s.num}</div>
            <div className="fitness-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="fitness-classes">
        <h2>Classes</h2>
        <div className="fitness-classes-grid">
          {[
            { icon: '🏋️', name: 'Strength', desc: 'Powerlifting & compound lifts' },
            { icon: '⚡', name: 'HIIT', desc: 'High intensity cardio circuits' },
            { icon: '🧘', name: 'Yoga Flow', desc: 'Flexibility & recovery' },
            { icon: '🥊', name: 'Boxing', desc: 'Technique & conditioning' },
          ].map(c => (
            <div key={c.name} className="fitness-class-card">
              <div className="fitness-class-icon">{c.icon}</div>
              <div className="fitness-class-name">{c.name}</div>
              <div className="fitness-class-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="fitness-testimonial">
        <h2>What Members Say</h2>
        <div className="fitness-testimonial-grid">
          <div className="fitness-quote">
            <div className="fitness-quote-text">
              "I lost 30 lbs in 4 months. The coaches push you just enough — I've never felt stronger."
            </div>
            <div className="fitness-quote-author">— Marcus T., Member since 2023</div>
          </div>
          <div className="fitness-quote">
            <div className="fitness-quote-text">
              "The Boxing class is incredible. High energy, great instruction, worth every dollar."
            </div>
            <div className="fitness-quote-author">— Samira K., Member since 2024</div>
          </div>
        </div>
      </div>
    </div>
  )
}
