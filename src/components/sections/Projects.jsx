import { projects } from '../../data/projects'
import { ScrollReveal } from '../ui/ScrollReveal'
import { ExternalLink } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="min-h-dvh py-16 sm:py-20 bg-[var(--color-surface)] flex items-center">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tighter)] leading-[1.05]">
              Selected<br />
              <span className="text-[var(--color-text-muted)]">work.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mt-3 max-w-sm mx-auto leading-relaxed">
              A collection of projects I've built. from e-commerce to AI-powered tools.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden hover:border-[var(--color-primary)]/30 transition-all duration-300"
    >
      {/* Screenshot */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 sm:h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)]">
            {String(project.id).padStart(2, '0')}
          </span>
          <span className="font-mono text-[11px] text-[var(--color-primary)] tracking-wide flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Live Demo <ExternalLink className="w-3 h-3" />
          </span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-display text-[clamp(1.125rem,2vw,1.5rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tight)]">
            {project.title}
          </h3>
          {project.badge && (
            <span className="font-mono text-[10px] text-[#059669] border border-[#059669]/30 bg-[#059669]/10 px-2 py-0.5 rounded-full tracking-wide whitespace-nowrap">
              {project.badge}
            </span>
          )}
        </div>

        <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span key={t} className="px-2 py-0.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-sm)] font-mono text-[10px] text-[var(--color-text-muted)] tracking-wide">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
