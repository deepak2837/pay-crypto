import { Link } from 'react-router-dom'
import { CONTACT } from '../../constants/contact'
import { MessageCircle } from 'lucide-react'

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-block">
        <img src="/logo.png" alt="Pay.Crypto" className="footer-logo" />
        <p>The future of crypto payments — fast, borderless, unstoppable.</p>
        <div className="footer-socials">
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon width="18" height="18" /></a>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
        </div>
      </div>

      <div className="footer-column">
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/payment-gateway">Payment Gateway</Link>
        <Link to="/buy-sell-usdt">Buy / Sell USDT</Link>
        <Link to="/otc">OTC</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="footer-column">
        <h3>Legal & Contact</h3>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-use">Terms of Use</Link>
        <Link to="/disclaimer">Disclaimer</Link>
        <Link to="/cookies-policy">Cookies Policy</Link>
        <a href={`mailto:${CONTACT.email}`}>✦ {CONTACT.email}</a>
        <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>✦ {CONTACT.phone}</a>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider-line" />
        <div className="footer-bottom-row">
          <span>© 2026 Pay.Crypto. All rights reserved.</span>
          <span className="footer-star">✦</span>
        </div>
      </div>
    </footer>
  )
}