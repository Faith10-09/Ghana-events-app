import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container section">
      <h1>Page not found</h1>
      <p>That page does not exist. <Link to="/">Go back home</Link>.</p>
    </section>
  )
}
