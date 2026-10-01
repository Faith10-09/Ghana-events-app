import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard.jsx'
import { events } from '../data/events.js'

export default function Home() {
  // Show only the first 3 events as 'popular'
  const featured = events.slice(0, 3)
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Find where Ghana is celebrating the next Event.</h1>
          <p className="lead">From Homowo drumming in Accra to Akwasidae at the Manhyia Palace in Kumasi, find festivals, concerts and cultural days in one place.</p>
          <div className="actions">
            <Link to="/events" className="btn btn-primary">Browse events</Link>
            <Link to="/contact" className="btn btn-ghost">List your event</Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Popular right now</h2>
          <Link to="/events">See all events</Link>
        </div>
        <div className="grid">
          {/* key helps React track each item in a list */}
          {featured.map(e => <EventCard key={e.id} event={e} />)}
        </div>
      </section>

      <section className="band">
        <div className="container band-inner">
          <div><strong>{events.length}</strong><span>events listed</span></div>
          <div><strong>3</strong><span>regions covered</span></div>
          <div><strong>Free</strong><span>to browse and list</span></div>
        </div>
      </section>
    </>
  )
}
