import { useScrollReveal } from '../hooks/useAnimations'
import SectionHeading from '../components/SectionHeading'
import { achievements } from '../data/portfolio'

function AchievementCard({ achievement, delay }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="card card-hover flex flex-col gap-3 h-full p-5">
        <div className="flex items-center justify-between">
          <span className="text-2xl">{achievement.icon}</span>
          <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider">{achievement.year}</span>
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-2 leading-tight">
            {achievement.event}
          </h3>
          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            {achievement.rank}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AchievementsSection() {
  return (
    <div id="achievements" className="scroll-mt-24">
      <section className="section bg-white/40 dark:bg-slate-900/20">
        <div className="section-inner space-y-10">
          <SectionHeading eyebrow="Accomplishments" title="Achievements" />
          
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <AchievementCard key={i} achievement={a} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
