const steps = [
  { num: '01', title: 'Discovery', desc: 'I collect your goals, audience, features, constraints, and timeline before writing a single line of code.' },
  { num: '02', title: 'Scope', desc: 'We agree on deliverables, service tier, revisions, and deployment before work begins.' },
  { num: '03', title: 'Architecture', desc: 'I plan the frontend, backend, data, APIs, and deployment path before building.' },
  { num: '04', title: 'Build', desc: 'I scaffold and implement the approved scope using clean, maintainable code.' },
  { num: '05', title: 'Review', desc: 'I test functionality, responsive behavior, accessibility basics, and deployment readiness.' },
  { num: '06', title: 'Documentation', desc: 'Setup, usage, deployment, and handoff notes delivered alongside the project.' },
  { num: '07', title: 'Delivery', desc: 'Final links, files, repo details, and a client summary — everything you need to own your project.' },
  { num: '08', title: 'Follow-Up', desc: 'I offer maintenance, enhancements, API integrations, and automation to keep your project growing.' },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process-header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">A clear process from start to launch</h2>
          <p className="section-sub">
            Every project follows the same structured flow — no surprises, no scope creep.
          </p>
        </div>
        <div className="process-grid">
          {steps.map(s => (
            <div key={s.num} className="process-step">
              <div className="process-step-num">STEP {s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
