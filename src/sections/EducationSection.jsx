import { useScrollReveal } from '../hooks/useAnimations'
import SectionHeading from '../components/SectionHeading'
import { education } from '../data/portfolio'

function RevealCard({ children, delay = 0 }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function EducationSection() {
  return (
    <div id="education" className="scroll-mt-24">
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
    </div>
  )
}
