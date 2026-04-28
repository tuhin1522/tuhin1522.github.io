const variants = {
  default: 'badge',
  ai: 'badge border-indigo-300/70 bg-indigo-50 text-indigo-600 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-300',
}

export default function Badge({ children, variant = 'default' }) {
  return <span className={variants[variant] || variants.default}>{children}</span>
}
