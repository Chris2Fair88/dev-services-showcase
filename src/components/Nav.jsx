export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
          <div className="nav-logo">Chris <span>Fairbanks</span></div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#examples">Examples</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a
            href="https://www.fiverr.com/s/99Vz5qe"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
