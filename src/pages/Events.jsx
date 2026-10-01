import { useState, useMemo } from 'react'
import EventCard from '../components/EventCard.jsx'
import { events, categories } from '../data/events.js'

export default function Events() {
  // State: what the user typed, and which category chip is selected
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  // Filter events whenever the search text or category changes.
  // useMemo avoids re-filtering on unrelated re-renders.
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return events.filter(e =>
      // 1) match the selected category (or all)  2) match the search text in name/city/region
      (category === 'All' || e.category === category) &&
      (!q || `${e.name} ${e.city} ${e.region}`.toLowerCase().includes(q))
    )
  }, [query, category])

  return (
    <section className="container section">
      <h1>Events</h1>
      <p className="lead small">Search by name or city, or filter by type. Dates are typical timings, so confirm with organisers before travelling.</p>

      <div className="filters">
        <label className="sr-only" htmlFor="search">Search events</label>
        <input id="search" type="search" placeholder="Search e.g. Kumasi, Chale Wote" value={query} onChange={e => setQuery(e.target.value)} />
        <div className="chips" role="group" aria-label="Filter by category">
          {categories.map(c => (
            <button key={c} className={c === category ? 'chip active' : 'chip'} aria-pressed={c === category} onClick={() => setCategory(c)}>{c}</button>
          ))}
        </div>
      </div>

      <p className="count">{results.length} {results.length === 1 ? 'event' : 'events'} found</p>
      {/* Show cards if there are matches, otherwise an empty-state message */}
      {results.length ? (
        <div className="grid">{results.map(e => <EventCard key={e.id} event={e} />)}</div>
      ) : (
        <p className="empty">No events match that search. Clear the search or pick another type.</p>
      )}
    </section>
  )
}
