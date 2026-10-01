import { useState } from 'react'

// Starting (blank) values for the form
const empty = { name: '', email: '', topic: 'List an event', message: '' }

export default function Contact() {
  // form: current input values, errors: validation messages, sent: shows the success message
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  // One handler for all inputs: uses the input's name attribute to update the right field
  const change = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault() // stop the browser from reloading the page
    // Validate each field and collect error messages
    const err = {}
    if (!form.name.trim()) err.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) err.message = 'Write at least 10 characters.'
    setErrors(err)
    // No errors: show success and clear the form (a real app would send the data to a server here)
    if (Object.keys(err).length === 0) {
      setSent(true)
      setForm(empty)
    }
  }

  return (
    <section className="container section contact">
      <div>
        <h1>Contact</h1>
        <p className="lead small">Want to list an event or fix a detail? Send a message and we will reply within a few days.</p>
        <ul className="info">
          <li><strong>Email:</strong> hello@ghanaevents.example</li>
          <li><strong>Based in:</strong> Kumasi, Ghana</li>
        </ul>
      </div>

      <form onSubmit={submit} noValidate>
        {sent && <p className="success" role="status">Message sent. Thank you, we will be in touch.</p>}

        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={change} />
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={change} />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="topic">Topic</label>
        <select id="topic" name="topic" value={form.topic} onChange={change}>
          <option>List an event</option>
          <option>Correct a detail</option>
          <option>General question</option>
        </select>

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" value={form.message} onChange={change} />
        {errors.message && <span className="error">{errors.message}</span>}

        <button className="btn btn-primary" type="submit">Send message</button>
      </form>
    </section>
  )
}
