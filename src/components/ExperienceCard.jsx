export default function ExperienceCard({ item }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
    </div>
  )
}
