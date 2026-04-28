export default function SkillGroup({ group }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500/70"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
