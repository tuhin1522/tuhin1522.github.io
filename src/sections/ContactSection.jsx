import { useState } from 'react'
import { contact, profile } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading'

function SocialLink({ href, label, icon }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
      className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-slate-700 transition-all duration-200 hover:border-indigo-300 hover:text-indigo-500 hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-indigo-700">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300">
        {icon}
      </span>
      <span className="font-medium text-sm">{label}</span>
      <svg className="ml-auto h-4 w-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </a>
  )
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send — replace with your backend / Formspree endpoint
    setTimeout(() => setStatus('sent'), 1400)
  }

  const githubIcon = (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
  const linkedinIcon = (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
  const emailIcon = (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  )

  return (
    <div id="contact" className="scroll-mt-24">
      {/* Main */}
      <section className="section bg-white/40 dark:bg-slate-900/20">
        <div className="section-inner">
          <SectionHeading eyebrow="Contact" title="Let's Connect" />
          
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
            {/* Left: Info */}
            <div className="space-y-6 fade-in">
              <div>
                <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Get in touch</h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hi — I&apos;d love to hear from you.
                </p>
              </div>

              {/* Info cards */}
              <div className="space-y-3">
                <div className="card flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xl dark:bg-indigo-950/50">📧</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Email</p>
                    <a href={`mailto:${contact.email}`}
                      className="text-sm font-medium text-slate-900 hover:text-indigo-500 transition dark:text-white">
                      {contact.email}
                    </a>
                  </div>
                </div>
                <div className="card flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xl dark:bg-indigo-950/50">📍</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Location</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{contact.location}</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Find me on</p>
                <SocialLink href={contact.github} label="GitHub" icon={githubIcon} />
                <SocialLink href={contact.linkedin} label="LinkedIn" icon={linkedinIcon} />
                <SocialLink href={`mailto:${contact.email}`} label="Email" icon={emailIcon} />
              </div>
            </div>

            {/* Right: Form */}
            <div className="card slide-up">
              {status === 'sent' ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl dark:bg-emerald-950/50">✅</span>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Message sent!</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                  <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }) }}
                    className="btn-secondary mt-2">Send another</button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-6">Send a message</h2>
                  <form onSubmit={submit} className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Name <span className="text-indigo-400">*</span>
                      </label>
                      <input name="name" value={form.name} onChange={handle} required
                        placeholder="Your full name"
                        className="input-field" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Email <span className="text-indigo-400">*</span>
                      </label>
                      <input name="email" type="email" value={form.email} onChange={handle} required
                        placeholder="your@email.com"
                        className="input-field" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Message <span className="text-indigo-400">*</span>
                      </label>
                      <textarea name="message" value={form.message} onChange={handle} required rows={5}
                        placeholder="Tell me about your project or opportunity..."
                        className="input-field resize-none" />
                    </div>
                    <button type="submit" disabled={status === 'sending'}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                      {status === 'sending' ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
