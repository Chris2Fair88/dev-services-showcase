import { Link, useNavigate, useLocation } from 'react-router-dom'
import { scrollOrNavigate } from '../utils/sectionLink'

export default function Nav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-inner">
          <div className="nav-logo">Chris <span>Fairbanks</span></div>
          <ul className="nav-links">
            <li><a href="#work" onClick={scrollOrNavigate(navigate, location, 'work')}>Work</a></li>
            <li><Link to="/services">Services</Link></li>
            <li><a href="#process" onClick={scrollOrNavigate(navigate, location, 'process')}>Process</a></li>
            <li><a href="#about" onClick={scrollOrNavigate(navigate, location, 'about')}>About</a></li>
            <li><a href="#contact" onClick={scrollOrNavigate(navigate, location, 'contact')}>Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta" onClick={scrollOrNavigate(navigate, location, 'contact')}>
            Work With Me
          </a>
        </div>
      </div>
    </nav>
  )
}
