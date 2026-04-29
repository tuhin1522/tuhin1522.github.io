import { Link } from 'react-router-dom'
import { useTypewriter, useScrollReveal } from '../hooks/useAnimations'
import { profile, skillGroups, featuredProjects, contact } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'

function Stat({ number, label }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} card text-center py-5`}>
      <div className="text-2xl font-bold text-gradient">{number}</div>
      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  )
}

function SkillGroupCard({ group }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} card card-hover`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{group.icon}</span>
        <h3 className="font-semibold text-slate-900 dark:text-white">{group.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map(item => <span key={item} className="badge">{item}</span>)}
      </div>
    </div>
  )
}

export default function Home() {
  const typed = useTypewriter(profile.roles)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.18),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.12),transparent)]" />
          <div className="grid-pattern absolute inset-0 opacity-[0.35] dark:opacity-[0.15]" />
        </div>

        <div className="section-inner w-full py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Left */}
            <div className="fade-in">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/80 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-800/50 dark:bg-indigo-950/50 dark:text-indigo-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                </span>
                Open to AI/ML & Full-Stack roles
              </div>

              <h1 className="font-display text-5xl font-bold leading-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>

              <p className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                <span className="text-gradient">{typed}</span>
                <span className="animate-pulse text-indigo-400 ml-0.5">|</span>
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                {profile.tagline}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {profile.intro}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary">
                  View Projects
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/contact" className="btn-secondary">Contact Me</Link>
                <a href={profile.resumeUrl} download className="btn-secondary">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Resume
                </a>
              </div>
            </div>

            {/* Right: Focus card */}
            <div className="slide-up glass rounded-3xl border border-white/40 p-7 dark:border-slate-800/70 float-slow">
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
              <h2 className="font-display text-base font-semibold text-slate-900 dark:text-white">Focus Areas</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {profile.focusAreas.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-slate-50/80 p-4 dark:bg-slate-900/80">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Core Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Python','FastAPI','React','LangChain','ChromaDB','PostgreSQL'].map(s => (
                    <span key={s} className="badge text-xs">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-5 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div className="h-1.5 w-1 rounded-full bg-current animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 bg-white/40 dark:bg-slate-900/20">
        <div className="section-inner">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat number="4+" label="Featured Projects" />
            <Stat number="5+" label="Total Projects" />
            <Stat number="3+" label="Years Learning" />
            <Stat number="∞" label="Curiosity" />
          </div>
        </div>
      </section>

      {/* ── Skills Preview ── */}
      <section className="section">
        <div className="section-inner space-y-12">
          <div className="text-center">
            <span className="badge-ai text-xs font-semibold uppercase tracking-widest">Skills</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              What I work with
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.slice(0, 3).map(group => (
              <SkillGroupCard key={group.title} group={group} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/about" className="btn-secondary">View All Skills →</Link>
          </div>
        </div>
      </section>

      {/* ── Featured Projects Preview ── */}
      <section className="section bg-white/40 dark:bg-slate-900/20">
        <div className="section-inner space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="badge-ai text-xs font-semibold uppercase tracking-widest">Projects</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                Featured Work
              </h2>
            </div>
            <Link to="/projects" className="btn-ghost shrink-0">View all projects →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.slice(0, 2).map(p => <ProjectCard key={p.title} project={p} featured />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="section-inner">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" />
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Let&apos;s build something impactful
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-indigo-100">
              {contact.availability}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="rounded-full bg-white px-8 py-3 text-sm font-bold text-indigo-600 shadow transition hover:bg-indigo-50 hover:-translate-y-0.5">
                Get in Touch
              </Link>
              <a href={contact.github} target="_blank" rel="noreferrer"
                className="rounded-full border border-white/40 px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10 hover:-translate-y-0.5">
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
