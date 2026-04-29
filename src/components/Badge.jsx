export default function Badge({ children, variant = 'default' }) {
  if (variant === 'ai') {
    return <span className="badge-ai">{children}</span>
  }
  return <span className="badge">{children}</span>
}
