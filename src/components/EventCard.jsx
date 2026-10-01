// Reusable card: receives one event object as a prop and displays it.
// Used on both the Home and Events pages.
export default function EventCard({ event }) {
  return (
    <article className="card">
      <span className={`tag tag-${event.category.toLowerCase()}`} /* e.g. 'tag-music' gives each category its own colour */>{event.category}</span>
      <h3>{event.name}</h3>
      <p className="meta">{event.city}, {event.region} Region. Usually {event.month}.</p>
      <p>{event.desc}</p>
    </article>
  )
}
