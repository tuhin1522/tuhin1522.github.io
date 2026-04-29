import { useState } from 'react'
import { useScrollReveal } from '../hooks/useAnimations'
import SectionHeading from '../components/SectionHeading'
import BlogCard from '../components/BlogCard'
import { blogs } from '../data/portfolio'

function AnimatedBlogCard({ blog, delay }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <BlogCard blog={blog} />
    </div>
  )
}

const categories = ['All', ...Array.from(new Set(blogs.map(b => b.category)))]

export default function Blogs() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? blogs : blogs.filter(b => b.category === active)

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.13),transparent)]" />
        <div className="section-inner fade-in text-center">
          <span className="badge-ai text-xs font-semibold uppercase tracking-widest">Writing</span>
          <h1 className="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Blog & <span className="text-gradient">Insights</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Thoughts on AI engineering, backend systems, product thinking, and the tools I use every day.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {(() => {
        const featured = blogs.find(b => b.featured)
        if (!featured) return null
        const formatted = new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        return (
          <section className="bg-white/40 dark:bg-slate-900/20 py-12">
            <div className="section-inner">
              <div className="card card-hover group relative overflow-hidden ring-1 ring-indigo-400/30">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5" />
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-10">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="badge-ai font-semibold text-xs">Featured</span>
                      <span className="badge text-xs">{featured.category}</span>
                      <span className="text-xs text-slate-400">{featured.readTime}</span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors sm:text-3xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{featured.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {featured.tags?.map(t => <span key={t} className="badge">{t}</span>)}
                    </div>
                  </div>
                  <div className="shrink-0 flex flex-col justify-between gap-6 lg:items-end">
                    <time className="text-sm text-slate-400">{formatted}</time>
                    <button className="btn-primary">
                      Read Article
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })()}

      {/* All posts */}
      <section className="section">
        <div className="section-inner space-y-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <SectionHeading eyebrow="All Posts" title="Articles" />
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActive(cat)}
                  className={`pill text-sm font-medium transition-all duration-200 ${
                    active === cat
                      ? 'bg-indigo-500 text-white shadow-sm'
                      : 'border border-slate-200/80 text-slate-600 hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((blog, i) => (
              <AnimatedBlogCard key={blog.id} blog={blog} delay={i * 70} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="card text-center py-16 text-slate-400">No posts in this category yet.</div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="section bg-white/40 dark:bg-slate-900/20">
        <div className="section-inner">
          <div className="card text-center py-14 px-8">
            <span className="text-3xl">✍️</span>
            <h2 className="mt-4 font-display text-2xl font-bold text-slate-900 dark:text-white">
              More content coming soon
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-slate-600 dark:text-slate-300">
              I write about AI engineering, backend design patterns, and building real products. Check back often or follow me on LinkedIn for updates.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href="https://www.linkedin.com/in/md-tuhin-molla15/" target="_blank" rel="noreferrer" className="btn-primary">
                Follow on LinkedIn
              </a>
              <a href="https://github.com/tuhin1522" target="_blank" rel="noreferrer" className="btn-secondary">
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
