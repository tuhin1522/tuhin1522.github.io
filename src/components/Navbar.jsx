export default function Navbar({ name, links, theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-lg font-semibold text-slate-900 dark:text-white">
          {name}
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-indigo-500">
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-slate-200/80 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </div>
    </header>
  )
}
