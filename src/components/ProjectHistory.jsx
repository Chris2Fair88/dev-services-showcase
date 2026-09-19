const projects = [
  {
    level: 1,
    title: 'About Me',
    desc: 'My first website, built with nothing but HTML and CSS. Everyone starts somewhere.',
    tech: ['HTML', 'CSS'],
    url: 'https://chris2fair88.github.io/se_project_about-me/',
  },
  {
    level: 2,
    title: 'The Library',
    desc: 'A static multi-page site with real navigation between pages.',
    tech: ['HTML', 'CSS'],
    url: 'https://chris2fair88.github.io/se_project_library/',
  },
  {
    level: 3,
    title: 'Coffee Shop',
    desc: 'A more polished site with embedded video and working forms.',
    tech: ['HTML', 'CSS'],
    url: 'https://chris2fair88.github.io/se_project_coffeeshop/',
  },
  {
    level: 4,
    title: 'Around the US',
    desc: 'First taste of JavaScript: a live API powers a map of US locations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    url: 'https://chris2fair88.github.io/se_project_aroundtheus/',
  },
  {
    level: 5,
    title: 'WTWR (What to Wear)',
    desc: 'A fully deployed weather-and-clothing app with a React frontend and a real Node/Express/MongoDB backend.',
    tech: ['React', 'Express', 'Node.js', 'MongoDB', 'API'],
    url: 'https://wtwr.homeonthewater.com/',
  },
]

export default function ProjectHistory() {
  return (
    <section className="project-history">
      <div className="container">
        <div className="history-header">
          <span className="section-label">Project History</span>
          <h2 className="section-title">How I got here, one project at a time</h2>
          <p className="section-sub">
            Five projects, five steps up. From a first HTML page to a fully deployed
            full stack app, built while learning full stack development.
          </p>
        </div>
        <div className="history-grid">
          {projects.map(p => (
            <a
              key={p.level}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="history-card"
            >
              <span className="history-level">Level {p.level}</span>
              <h3 className="history-title">{p.title}</h3>
              <p className="history-desc">{p.desc}</p>
              <div className="history-tech">
                {p.tech.map(t => (
                  <span key={t} className="history-tech-item">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
