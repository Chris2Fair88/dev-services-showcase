import TempoTranscript from './TempoTranscript'

const TEMPO_URL = 'https://chris2fair88.github.io/tempo/'
const TEMPO_REPO_URL = 'https://github.com/Chris2Fair88/tempo'
const CHATBOT_DEMO_URL = 'https://chris2fair88.github.io/dev-services-showcase/chatbot-demo.html'

export default function TempoCard() {
  return (
    <section className="featured-ai">
      <div className="container">
        <div className="featured-ai-header">
          <span className="section-label">Featured</span>
          <h2 className="section-title">Real AI work in action</h2>
          <p className="section-sub">
            Two working examples, not just descriptions: an MCP server that Claude queries, and a chatbot you can try right now.
          </p>
        </div>
        <div className="featured-ai-grid">
          <div className="featured-card featured-card--primary">
            <h3 className="featured-title">Tempo</h3>
            <p className="featured-desc">
              Ask Claude about a music-lesson schedule and it answers by calling Tempo's MCP server,
              which exposes five read-only tools over a sample teacher and student roster. Tempo is a
              public-safe recreation of an integration I built for a client's real scheduling system.
              The original handles real student and business data, so this version runs on fictional data.
            </p>
            <div className="featured-tech">
              {['React', 'JavaScript', 'CSS', 'MCP'].map(t => (
                <span key={t} className="history-tech-item">{t}</span>
              ))}
            </div>
            <div className="featured-links">
              <a href={TEMPO_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                Dashboard demo
              </a>
              <a href={TEMPO_REPO_URL} target="_blank" rel="noreferrer" className="btn btn-outline-dark">
                Repo
              </a>
            </div>
            <p className="tempo-note">
              The dashboards show a saved snapshot of the server's sample roster.
            </p>
          </div>
          <div className="featured-card featured-card--secondary">
            <span className="featured-badge featured-badge--muted">Also Live</span>
            <h3 className="featured-title">AI Chatbot Demo</h3>
            <p className="featured-desc">
              A scripted chatbot demo built for the AI Chatbot / FAQ Bot service, shown
              live rather than just described.
            </p>
            <div className="featured-links">
              <a href={CHATBOT_DEMO_URL} target="_blank" rel="noreferrer" className="btn btn-outline-dark">
                Try It Live
              </a>
            </div>
          </div>
        </div>

        <div className="tempo-session-block">
          <h3 className="tempo-session-title">Tempo in action</h3>
          <p className="tempo-session-lead">
            A real session: I asked Claude who has open lesson slots. Watch for the three tool calls between its answers.
          </p>
          <TempoTranscript />
        </div>
      </div>
    </section>
  )
}
