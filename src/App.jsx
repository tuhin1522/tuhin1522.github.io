import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem('theme')
  if (stored) return stored
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function PageWrapper() {
  const { pathname } = useLocation()
  return (
    <div key={pathname} className="page-enter flex-1 flex flex-col">
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  useEffect(() => {
    if (typeof window === 'undefined') return
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Router>
      <div className="min-h-screen bg-frost text-slate-900 dark:bg-midnight dark:text-slate-100 flex flex-col">
        <Navbar theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
        <PageWrapper />
      </div>
    </Router>
  )
}

export default App
