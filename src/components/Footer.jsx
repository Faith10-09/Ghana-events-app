import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="kente" aria-hidden="true" />
      <div className="container footer-inner">
        <p>&copy; {/* year updates automatically */}{new Date().getFullYear()} Ghana Events. Made in Ghana.</p>
      </div>
    </footer>
  )
}
