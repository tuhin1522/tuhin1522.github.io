import { useScrollReveal } from '../hooks/useAnimations'
import SectionHeading from '../components/SectionHeading'
import { certificates } from '../data/portfolio'

function CertificateCard({ cert, delay }) {
  const [ref, visible] = useScrollReveal()

  const colorMap = {
    indigo: {
      bg: 'bg-indigo-50 dark:bg-indigo-950/40',
      border: 'border-indigo-200/70 dark:border-indigo-800/50',
      badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300',
      icon: 'bg-indigo-100 dark:bg-indigo-950/60',
      accent: 'text-indigo-500',
      dot: 'bg-indigo-500',
      btn: 'bg-indigo-500 hover:bg-indigo-600 text-white',
    },
    violet: {
      bg: 'bg-violet-50 dark:bg-violet-950/40',
      border: 'border-violet-200/70 dark:border-violet-800/50',
      badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300',
      icon: 'bg-violet-100 dark:bg-violet-950/60',
      accent: 'text-violet-500',
      dot: 'bg-violet-500',
      btn: 'bg-violet-500 hover:bg-violet-600 text-white',
    },
  }

  const c = colorMap[cert.color] || colorMap.indigo

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`relative overflow-hidden rounded-2xl border ${c.border} ${c.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full`}>
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl"
          style={{ background: cert.color === 'violet' ? '#8b5cf6' : '#6366f1' }} />

        <div className="flex items-start gap-4 flex-1">
          {/* Icon */}
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${c.icon}`}>
            {cert.icon}
          </div>

          <div className="flex-1 min-w-0">
            {/* Issuer */}
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-bold uppercase tracking-widest ${c.accent}`}>
                {cert.issuer}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">· {cert.date}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug">
              {cert.title}
            </h3>

            {/* Credential ID */}
            {cert.credentialId && (
              <div className="mt-3">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${c.badge}`}>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  ID: {cert.credentialId}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-current/10 pt-3">
          <div className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Verified Certification
            </span>
          </div>

          {cert.viewUrl && (
            <a
              href={cert.viewUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${c.btn}`}
            >
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CertificatesSection() {
  return (
    <div id="certificates" className="scroll-mt-24">
      <section className="section">
        <div className="section-inner space-y-10">
          <SectionHeading eyebrow="Credentials" title="Certificates" />
          <div className="grid gap-5 sm:grid-cols-2">
            {certificates.map((cert, i) => (
              <CertificateCard key={i} cert={cert} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
