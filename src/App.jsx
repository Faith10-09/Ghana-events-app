import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation, useNavigate, useNavigationType } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

// App is the page layout: Navbar on top, the current page in the middle, Footer at the bottom.
// Only the Routes section changes when the user navigates.
export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const navigationType = useNavigationType()
  const pages = useRef([location.pathname])
  const pageIndex = useRef(0)
  const requestedIndex = useRef(null)

  useEffect(() => {
    if (requestedIndex.current !== null && pages.current[requestedIndex.current] === location.pathname) {
      pageIndex.current = requestedIndex.current
      requestedIndex.current = null
      return
    }

    if (navigationType === 'PUSH') {
      pages.current = pages.current.slice(0, pageIndex.current + 1)
      pages.current.push(location.pathname)
      pageIndex.current = pages.current.length - 1
    } else if (navigationType === 'POP') {
      const foundIndex = pages.current.lastIndexOf(location.pathname)
      if (foundIndex >= 0) pageIndex.current = foundIndex
      else {
        pages.current = [location.pathname]
        pageIndex.current = 0
      }
    }
  }, [location.pathname, navigationType])

  const goToHistoryIndex = index => {
    const destination = pages.current[index]
    if (destination && destination !== location.pathname) {
      requestedIndex.current = index
      navigate(destination)
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="container back-nav">
          <button className="history-button" type="button" onClick={() => goToHistoryIndex(pageIndex.current - 1)} disabled={pageIndex.current === 0} aria-label="Go back" title="Back">
            ‹
          </button>
          <button className="history-button" type="button" onClick={() => goToHistoryIndex(pageIndex.current + 1)} disabled={pageIndex.current >= pages.current.length - 1} aria-label="Go forward" title="Forward">
            ›
          </button>
        </div>
        {/* Each Route maps a URL path to a page component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* path="*" catches any unknown URL and shows the 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
