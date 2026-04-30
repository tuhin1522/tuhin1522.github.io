import { useState } from 'react'
import { useScrollReveal } from '../hooks/useAnimations'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { featuredProjects, otherProjects } from '../data/portfolio'

const GITHUB_USER = 'tuhin1522'

function GitHubRepoCard({ repo }) {
  return (
    <article className="card card-hover flex flex-col gap-3 h-full">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-sm text-slate-900 dark:text-white truncate">{repo.name}</h3>
        {repo.language && <span className="badge shrink-0">{repo.language}</span>}
      </div>
      {repo.description && (
        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 flex-1">{repo.description}</p>
      )}
      <div className="flex items-center gap-4 text-xs text-slate-400 mt-auto">
        <span className="flex items-center gap-1">⭐ {repo.stargazers_count}</span>
        <span className="flex items-center gap-1">🍴 {repo.forks_count}</span>
        {repo.updated_at && (
          <span>{new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
        )}
      </div>
      <a href={repo.html_url} target="_blank" rel="noreferrer"
        className="text-xs font-semibold text-indigo-500 hover:text-indigo-400 transition">
        View on GitHub →
      </a>
    </article>
  )
}

function AnimatedProjectCard({ project, delay }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <ProjectCard project={project} featured />
    </div>
  )
}

function AnimatedOtherProjectCard({ project, delay }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <article className="card card-hover flex flex-col gap-4 h-full">
        <h3 className="font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech?.map(t => <span key={t} className="badge">{t}</span>)}
        </div>
        <a href={project.links.github} target="_blank" rel="noreferrer"
          className="mt-auto text-sm font-semibold text-indigo-500 hover:text-indigo-400 transition">
          GitHub →
        </a>
      </article>
    </div>
  )
}

export default function Projects() {
  const [repos, setRepos] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showGH, setShowGH] = useState(false)

  const loadRepos = async () => {
    setShowGH(true)
    if (repos !== null) return
    setLoading(true)
    try {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=15`)
      const data = await res.json()
      setRepos(Array.isArray(data) ? data.filter(r => !r.fork).slice(0, 9) : [])
    } catch {
      setRepos([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.13),transparent)]" />
        <div className="section-inner fade-in text-center">
          <span className="badge-ai text-xs font-semibold uppercase tracking-widest">Portfolio</span>
          <h1 className="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Projects & <span className="text-gradient">Work</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Projects focused on AI applications, full-stack development, and practical problem solving.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-white/40 dark:bg-slate-900/20">
        <div className="section-inner space-y-10">
          <SectionHeading eyebrow="Featured" title="Main Projects"
            subtitle="Highlighted work across AI/ML, full-stack development, and research." />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((p, i) => (
              <AnimatedProjectCard key={p.title} project={p} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="section">
        <div className="section-inner space-y-10">
          <SectionHeading eyebrow="More Work" title="Other Projects"
            subtitle="Additional builds spanning AI platforms, analytics, and civic tech." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((p, i) => (
              <AnimatedOtherProjectCard key={p.title} project={p} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Repos */}
      <section className="section bg-white/40 dark:bg-slate-900/20">
        <div className="section-inner space-y-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="GitHub" title="Practice & Exploration"
              subtitle="Learning experiments, research repos, and open-source contributions." />
            {!showGH && (
              <button onClick={loadRepos} className="btn-secondary shrink-0 self-start sm:self-auto">
                Load GitHub Repos
              </button>
            )}
          </div>

          {showGH && (
            loading
              ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="card animate-pulse space-y-3">
                      <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
                      <div className="h-3 w-full rounded bg-slate-100 dark:bg-slate-800" />
                      <div className="h-3 w-2/3 rounded bg-slate-100 dark:bg-slate-800" />
                    </div>
                  ))}
                </div>
              )
              : repos && repos.length > 0
                ? (
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {repos.map(r => <GitHubRepoCard key={r.id} repo={r} />)}
                  </div>
                )
                : (
                  <div className="card text-center py-12 text-slate-400">
                    Could not load repos.{' '}
                    <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer"
                      className="text-indigo-500 hover:underline">View on GitHub →</a>
                  </div>
                )
          )}
        </div>
      </section>
    </>
  )
}
