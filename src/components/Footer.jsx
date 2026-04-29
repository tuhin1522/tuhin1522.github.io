import { Link } from 'react-router-dom'
import { profile, contact } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/60 dark:border-slate-800/70 dark:bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div>
            <Link to="/" className="font-display text-lg font-bold text-slate-900 dark:text-white">
              <span className="text-gradient">{'<'}</span>{profile.shortName}<span className="text-gradient">{'/>'}</span>
            </Link>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{profile.role}</p>
            <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">{contact.location}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            {[['Home','/'],['About','/about'],['Projects','/projects'],['Blogs','/blogs'],['Contact','/contact']].map(([label, to]) => (
              <Link key={to} to={to} className="hover:text-indigo-500 transition">{label}</Link>
            ))}
          </nav>

          <div className="flex gap-3">
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="rounded-full border border-slate-200/80 p-2.5 text-slate-400 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-700 dark:hover:border-indigo-600">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="rounded-full border border-slate-200/80 p-2.5 text-slate-400 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-700 dark:hover:border-indigo-600">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Email"
              className="rounded-full border border-slate-200/80 p-2.5 text-slate-400 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-700 dark:hover:border-indigo-600">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200/60 pt-6 text-center text-xs text-slate-400 dark:border-slate-800/60">
          © {new Date().getFullYear()} {profile.name} · Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  )
}
