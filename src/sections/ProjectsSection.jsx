import { useScrollReveal } from '../hooks/useAnimations'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { featuredProjects } from '../data/portfolio'

function AnimatedProjectCard({ project, delay }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <ProjectCard project={project} featured />
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <div id="projects" className="scroll-mt-24">
      {/* Featured Projects */}
      <section className="section">
        <div className="section-inner space-y-10">
          <SectionHeading eyebrow="Projects" title="Featured Work" />
          <div className="grid gap-8 sm:grid-cols-2">
            {featuredProjects.map((p, i) => (
              <AnimatedProjectCard key={p.title} project={p} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
