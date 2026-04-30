import { useScrollReveal } from '../hooks/useAnimations'
import SectionHeading from '../components/SectionHeading'
import { profile, interests } from '../data/portfolio'

function RevealCard({ children, delay = 0 }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function AboutSection() {
  return (
    <div id="about" className="scroll-mt-24">


      {/* Bio */}
      <section className="section pb-0 bg-white/40 dark:bg-slate-900/20">
        <div className="section-inner">
          <SectionHeading eyebrow="About Me" title="Who I Am" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <RevealCard>
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
    </div>
  )
}
