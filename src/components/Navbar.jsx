import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/portfolio'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => {
    let t = setTimeout(() => setMenuOpen(false), 0)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
      ? 'border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800/70 dark:bg-midnight/90'
      : 'border-b border-transparent bg-white/60 backdrop-blur-md dark:bg-midnight/60'
      }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="font-display text-lg font-bold text-slate-900 transition hover:text-indigo-500 dark:text-white">
          <span className="text-gradient">{'<'}</span>
          {profile.shortName}
          <span className="text-gradient">{'/>'}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(link => {
            const active = pathname === link.href
            return (
              <Link key={link.href} to={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${active
                  ? 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white'
                  }`}>
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right buttons */}
        <div className="flex items-center gap-2">
          <button onClick={onToggleTheme} aria-label="Toggle theme"
            className="rounded-full border border-slate-200/80 p-2.5 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-400">
            {theme === 'dark'
              ? <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
              : <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            }
          </button>
          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu"
            className="rounded-full border border-slate-200/80 p-2.5 text-slate-500 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-400 md:hidden">
            {menuOpen
              ? <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-slate-200/70 bg-white/95 backdrop-blur-xl dark:border-slate-800/70 dark:bg-midnight/95 md:hidden">
          <nav className="mx-auto max-w-6xl space-y-1 px-6 py-4">
            {navLinks.map(link => {
              const active = pathname === link.href
              return (
                <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}
                  className={`flex w-full rounded-xl px-4 py-3 text-sm font-medium transition ${active
                    ? 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300'
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/50'
                    }`}>
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
