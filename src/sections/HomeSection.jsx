import { useTypewriter, useScrollReveal } from '../hooks/useAnimations'
import { profile } from '../data/portfolio'

export default function HomeSection() {
  const typed = useTypewriter(profile.roles)

  return (
    <div id="home" className="scroll-mt-24">
      {/* ── Hero ── */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.18),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.12),transparent)]" />
          <div className="grid-pattern absolute inset-0 opacity-[0.35] dark:opacity-[0.15]" />
        </div>

        <div className="section-inner w-full py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Left */}
            <div className="fade-in">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/80 px-4 py-2 text-sm font-medium text-indigo-700 dark:border-indigo-800/50 dark:bg-indigo-950/50 dark:text-indigo-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                </span>
                Open to AI/ML & Full-Stack roles
              </div>

              <h1 className="font-display text-5xl font-bold leading-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>

              <p className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                <span className="text-gradient">{typed}</span>
                <span className="animate-pulse text-indigo-400 ml-0.5">|</span>
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                {profile.tagline}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {profile.intro}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary">
                  View Projects
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#contact" className="btn-secondary">Contact Me</a>
                <a href={profile.resumeUrl} download className="btn-secondary">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </div>
            </div>

            {/* Right: Focus card */}
            <div className="slide-up glass rounded-3xl border border-white/40 p-7 dark:border-slate-800/70 float-slow">
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
              <h2 className="font-display text-base font-semibold text-slate-900 dark:text-white">Focus Areas</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {profile.focusAreas.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-slate-50/80 p-4 dark:bg-slate-900/80">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Core Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'React', 'LangChain', 'ChromaDB', 'PostgreSQL'].map(s => (
                    <span key={s} className="badge text-xs">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
          <div className="h-10 w-6 rounded-full border-2 border-current flex justify-center p-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-current animate-scroll-dot" />
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll-dot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scroll-dot {
          animation: scroll-dot 1.5s infinite;
        }
      `}} />
    </div>
  )
}
