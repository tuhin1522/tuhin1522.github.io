export default function FilterPills({ filters, activeFilter, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = filter === activeFilter
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`pill ${
              isActive
                ? 'bg-indigo-500 text-white shadow-sm'
                : 'border-slate-200/70 text-slate-600 hover:border-indigo-300 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300'
            }`}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}
