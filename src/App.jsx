import { useMemo, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import FilterPills from './components/FilterPills'
import ProjectCard from './components/ProjectCard'
import SkillGroup from './components/SkillGroup'
import ExperienceCard from './components/ExperienceCard'
import {
  profile,
  projects,
  filters,
  skillGroups,
  experienceHighlights,
  interests,
  contact,
} from './data/portfolio'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light'
  }
  const stored = window.localStorage.getItem('theme')
  if (stored) {
    return stored
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }
    return projects.filter((project) => project.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <div className="min-h-screen bg-frost text-slate-900 dark:bg-midnight dark:text-slate-100">
      <Navbar
        name={profile.name}
        links={navLinks}
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
        }
      />

      <main>
        <section id="home" className="section relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_55%)]" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="fade-in">
              <span className="badge">Open to AI/ML & full-stack roles</span>
              <h1 className="mt-6 font-display text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-xl font-medium text-indigo-500">{profile.role}</p>
              <p className="mt-6 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
                {profile.tagline}
              </p>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-slate-200/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </div>
            <div className="glass card-hover relative rounded-3xl border border-white/40 p-6 dark:border-slate-800/70">
              <div className="absolute -top-6 right-6 h-20 w-20 rounded-3xl bg-indigo-500/10 blur-2xl" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Focus Areas
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {profile.focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-white/70 p-4 text-sm text-slate-600 dark:bg-slate-900/70 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white">Signature strengths</p>
                <ul className="mt-3 space-y-2">
                  {profile.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="mx-auto max-w-6xl space-y-10 px-6">
            <SectionHeading
              eyebrow="About"
              title="Product-focused engineer with an AI-first mindset"
              subtitle="I translate complex AI capabilities into recruiter-ready products, ensuring scalability, clarity, and measurable impact."
            />
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="card">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  What I bring
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {profile.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Interests
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span key={interest} className="badge">
                      {interest}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">
                  I care deeply about product clarity, technical excellence, and building systems that scale—from
                  prototypes to production.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section bg-white/40 dark:bg-slate-900/30">
          <div className="mx-auto max-w-6xl space-y-10 px-6">
            <SectionHeading
              eyebrow="Projects"
              title="AI-powered products and data-driven platforms"
              subtitle="Each project emphasizes measurable impact, clean architecture, and recruiter-friendly outcomes."
            />
            <FilterPills
              filters={filters}
              activeFilter={activeFilter}
              onChange={setActiveFilter}
            />
            <div className="grid gap-6 md:grid-cols-2">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="mx-auto max-w-6xl space-y-10 px-6">
            <SectionHeading
              eyebrow="Experience & Skills"
              title="Experience that blends AI innovation with production delivery"
              subtitle="Highlights drawn from real-world project execution across AI, backend systems, and analytics."
            />
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
              <div className="space-y-4">
                {experienceHighlights.map((item) => (
                  <ExperienceCard key={item.title} item={item} />
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <SkillGroup key={group.title} group={group} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-white/40 dark:bg-slate-900/30">
          <div className="mx-auto max-w-6xl space-y-8 px-6">
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s build something impactful"
              subtitle="Available for full-time roles, collaborations, and AI product consulting."
            />
            <div className="card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-lg font-semibold text-slate-900 hover:text-indigo-500 dark:text-white"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200/80 px-4 py-2 text-slate-700 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200"
                >
                  GitHub
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200/80 px-4 py-2 text-slate-700 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/70 py-8 text-center text-xs text-slate-500 dark:border-slate-800/70 dark:text-slate-400">
        Built with React + Tailwind · © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  )
}

export default App
