import { useScrollReveal } from '../hooks/useAnimations'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/portfolio'

function RevealCard({ children, delay = 0 }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <div id="experience" className="scroll-mt-24">
      <section className="section pt-12 sm:pt-16 lg:pt-20">
        <div className="section-inner space-y-10">
          <SectionHeading 
            eyebrow="Experience" 
            title="What I've Built" 
            subtitle="Highlights from real-world project execution across AI, backend systems, and analytics."
          />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <RevealCard key={i} delay={i * 100}>
                <div className="card relative p-8 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-transparent rounded-full opacity-30 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                          {exp.title}
                        </h3>
                        <span className="badge-ai text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                        {exp.company}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-xl bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600 border border-slate-200/60 dark:bg-slate-900/40 dark:border-slate-800 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-slate-600 dark:text-slate-300 leading-relaxed group/bullet">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 group-hover/bullet:scale-150 transition-transform" />
                        <span className="text-sm sm:text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
