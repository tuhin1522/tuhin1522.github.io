import { useScrollReveal } from '../hooks/useAnimations'

export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="badge-ai text-xs font-semibold uppercase tracking-widest">{eyebrow}</span>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
