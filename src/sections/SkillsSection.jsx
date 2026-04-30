import { useScrollReveal } from '../hooks/useAnimations'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/portfolio'

function RevealCard({ children, delay = 0 }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function SkillsSection() {
  return (
    <div id="skills" className="scroll-mt-24">
      {/* Skills */}
      <section className="section bg-white/40 dark:bg-slate-900/20">
        <div className="section-inner space-y-10">
          <SectionHeading eyebrow="Skills" title="What I work with" />
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
    </div>
  )
}
