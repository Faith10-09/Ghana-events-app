import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

// Navigation items kept in an array so the menu is built with .map() instead of repeating code
const links = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  // Tracks whether the mobile menu is open
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>Ghana Events</Link>
        <button className="menu-btn" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav className={open ? 'links open' : 'links'}>
          {/* NavLink adds an 'active' class to the current page's link (used for styling).
              'end' on Home stops it staying active on every page. */}
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}> {/* close the menu after clicking a link */}
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="kente" aria-hidden="true" />
    </header>
  )
}
