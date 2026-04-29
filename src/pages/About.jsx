import { useScrollReveal } from '../hooks/useAnimations'
import SectionHeading from '../components/SectionHeading'
import { profile, education, experience, skillGroups, interests } from '../data/portfolio'

function RevealCard({ children, delay = 0 }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.13),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.10),transparent)]" />
        <div className="section-inner fade-in text-center">
          <span className="badge-ai text-xs font-semibold uppercase tracking-widest">About Me</span>
          <h1 className="mt-4 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            Product-focused Engineer<br />with an <span className="text-gradient">AI-first</span> mindset
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg leading-relaxed">
            I translate complex AI capabilities into production-ready products—ensuring scalability, clarity, and measurable impact.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="section bg-white/40 dark:bg-slate-900/20">
        <div className="section-inner">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <RevealCard>
              <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Who I Am
              </h2>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {profile.bio.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </RevealCard>
            <RevealCard delay={100}>
              <div className="card sticky top-24">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Quick Info</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-base">📍</span>
                    Dhaka, Bangladesh
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-base">🎓</span>
                    B.Sc. Computer Science & Eng.
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-base">💼</span>
                    Open to full-time & freelance
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-base">🚀</span>
                    AI/ML & Full-Stack AI Engineer
                  </li>
                </ul>
                <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-3">Interests</p>
                  <div className="flex flex-wrap gap-2">
                    {interests.map(i => <span key={i} className="badge">{i}</span>)}
                  </div>
                </div>
              </div>
            </RevealCard>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="section-inner space-y-10">
          <SectionHeading eyebrow="Education" title="Academic Background" />
          <div className="space-y-4">
            {education.map((edu, i) => (
              <RevealCard key={i} delay={i * 80}>
                <div className="card card-hover flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xl">🎓</span>
                      <h3 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    </div>
                    <p className="mt-1 text-sm font-medium text-indigo-500">{edu.institution}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{edu.location}</p>
                    {edu.details && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{edu.details}</p>}
                  </div>
                  <span className="shrink-0 rounded-full border border-slate-200/80 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    {edu.period}
                  </span>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section bg-white/40 dark:bg-slate-900/20 scroll-mt-24">
        <div className="section-inner space-y-10">
          <SectionHeading eyebrow="Experience" title="What I've Built" subtitle="Highlights from real-world project execution across AI, backend systems, and analytics." />
          <div className="space-y-4">
            {experience.map((exp, i) => (
              <RevealCard key={i} delay={i * 80}>
                <div className="card card-hover">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                        <span className="badge-ai text-xs">{exp.type}</span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-indigo-500">{exp.company}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-slate-200/80 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="section-inner space-y-10">
          <SectionHeading eyebrow="Skills" title="Technical Toolkit" subtitle="Technologies and tools I use to build production-ready AI and web products." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <RevealCard key={group.title} delay={i * 60}>
                <div className="card card-hover h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-xl dark:bg-indigo-950/50">{group.icon}</span>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => <span key={item} className="badge">{item}</span>)}
                  </div>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
