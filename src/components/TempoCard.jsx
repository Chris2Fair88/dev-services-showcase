import TempoDiagram from './TempoDiagram'

const TEMPO_URL = 'https://chris2fair88.github.io/tempo/'
const TEMPO_REPO_URL = 'https://github.com/Chris2Fair88/tempo'
const CHATBOT_DEMO_URL = 'https://chris2fair88.github.io/dev-services-showcase/chatbot-demo.html'

export default function TempoCard() {
  return (
    <section className="featured-ai">
      <div className="container">
        <div className="featured-ai-header">
          <span className="section-label">Featured</span>
          <h2 className="section-title">Real AI work, live</h2>
          <p className="section-sub">
            Two live examples, not just descriptions: a real MCP integration and a working chatbot demo.
          </p>
        </div>
        <div className="featured-ai-grid">
          <div className="featured-card featured-card--primary">
            <span className="featured-badge">Featured</span>
            <h3 className="featured-title">Tempo</h3>
            <p className="featured-desc">
              A public-safe recreation of an MCP integration I built for a client's real
              scheduling system. The original handles real student and business data, so
              this version uses fictional data to demonstrate the same architecture
              without exposing anything private.
            </p>
            <div className="featured-tech">
              {['HTML', 'CSS', 'JavaScript', 'MCP'].map(t => (
                <span key={t} className="history-tech-item">{t}</span>
              ))}
            </div>
            <div className="featured-links">
              <a href={TEMPO_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                Live Demo
              </a>
              <a href={TEMPO_REPO_URL} target="_blank" rel="noreferrer" className="btn btn-outline-dark">
                Repo
              </a>
            </div>
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

        <div className="tempo-diagram-block">
          <h3 className="tempo-diagram-title">How Tempo Works</h3>
          <p className="section-sub">
            One data source, two audiences: the same records power a browser dashboard and answer Claude directly.
          </p>
          <TempoDiagram />
          <div className="tempo-transcript-slot" id="tempo-transcript">
            <span className="tempo-transcript-label">Live Transcript, Coming Soon</span>
            <p className="tempo-transcript-placeholder">
              A real recorded question-and-answer through the MCP tools will go here.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
