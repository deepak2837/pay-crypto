import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const leftLinks = [
  { label: 'Home', to: '/' },
  { label: 'Payment Gateway', to: '/payment-gateway' },
  { label: 'Buy / Sell USDT', to: '/buy-sell-usdt' },
]

const rightLinks = [
  { label: 'OTC', to: '/otc' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <header className={`navbar-shell ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar">
        <div className="nav-side nav-left">
          {leftLinks.map((link) => (
            <NavLink key={link.to} to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link className="brand" to="/" aria-label="Pay Crypto home">
          <img src="/logo.png" alt="Pay.Crypto" className="brand-logo" />
        </Link>

        <div className="nav-side nav-right">
          {rightLinks.map((link) => (
            <NavLink key={link.to} to={link.to}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-active' : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button className="mobile-menu-toggle" type="button" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {[...leftLinks, ...rightLinks].map((link) => (
            <NavLink key={link.to} to={link.to}
              className={({ isActive }) => `mobile-menu-link ${isActive ? 'nav-active' : ''}`}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}