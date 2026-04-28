export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-title mt-3">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  )
}
