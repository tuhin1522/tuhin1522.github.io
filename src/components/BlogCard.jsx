export default function BlogCard({ blog }) {
  const formatted = new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  const categoryColors = {
    'AI/ML': 'bg-indigo-50 text-indigo-600 border-indigo-200/60 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800/50',
    'Backend': 'bg-emerald-50 text-emerald-600 border-emerald-200/60 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/50',
    'Product': 'bg-violet-50 text-violet-600 border-violet-200/60 dark:bg-violet-950/50 dark:text-violet-300 dark:border-violet-800/50',
    'Web': 'bg-sky-50 text-sky-600 border-sky-200/60 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800/50',
  }
  const color = categoryColors[blog.category] || categoryColors['AI/ML']

  return (
    <article className="card card-hover group flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between gap-3">
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${color}`}>
          {blog.category}
        </span>
        <span className="text-xs text-slate-400 dark:text-slate-500">{blog.readTime}</span>
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-indigo-500 transition-colors">
          {blog.title}
        </h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {blog.tags?.map(tag => (
          <span key={tag} className="badge text-xs">{tag}</span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
        <time className="text-xs text-slate-400 dark:text-slate-500">{formatted}</time>
        <button className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-500 transition hover:text-indigo-400 hover:gap-2">
          Read More
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </button>
      </div>
    </article>
  )
}
