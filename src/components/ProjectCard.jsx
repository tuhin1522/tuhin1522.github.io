import Badge from './Badge'

export default function ProjectCard({ project }) {
  return (
    <article
      className={`card card-hover group flex h-full flex-col gap-4 ${
        project.ai ? 'ring-1 ring-indigo-400/40' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
        </div>
        {project.ai ? <Badge variant="ai">AI/ML</Badge> : null}
      </div>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {project.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/70"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3 text-sm font-semibold">
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="text-indigo-500 hover:text-indigo-400"
        >
          GitHub →
        </a>
        {project.links.demo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
          >
            Live demo →
          </a>
        ) : null}
      </div>
    </article>
  )
}
