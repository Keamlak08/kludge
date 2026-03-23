import { COBWEBS } from '../config/assets'
import './Footer.css'

const SLACK_URL      = 'https://hackclub.enterprise.slack.com/archives/C0AMP5T4T8F' 
const CONTACT_URL    = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' //rickroll for now
const HACKATHONS_URL = 'https://hackclub.com/hackathons/'   

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      {COBWEBS.footerLeft && (
        <img className="footer-cobweb" src={COBWEBS.footerLeft} alt="" aria-hidden="true" />
      )}

      {/* upper row */}
      <div className="footer-upper">
        <div className="footer-brand">
          <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" aria-label="Hack Club">
            <img src="https://assets.hackclub.com/flag-orpheus-top.svg" alt="Hack Club" className="footer-flag" />
          </a>
          <p className="footer-tagline">
            <strong>kludge</strong> is a Hack Club YSWS<br />by Keamlak
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer links">
          <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer">Hack Club</a>
          <a href={SLACK_URL} target="_blank" rel="noopener noreferrer">Slack</a>
          <a href={HACKATHONS_URL} target="_blank" rel="noopener noreferrer">Hackathons</a>
          <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Contact Keamlak</a>
        </nav>
      </div>

      <hr className="footer-line" />

      {/* copyright left, attribution right */}
      <div className="footer-bottom">
        <p className="footer-copy">© {year} Hack Club. 501(c)(3) nonprofit (EIN: 81-2908499)</p>
        <p className="footer-attr"><span className="footer-kludge">kludge</span> by Keamlak</p>
      </div>
    </footer>
  )
}
