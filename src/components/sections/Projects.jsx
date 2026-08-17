import { projects as projectsData } from '../../data/projects'
import { ScrollReveal } from '../ui/ScrollReveal'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

export function Projects() {
  const { lang, t } = useLanguage()
  const projectsTranslations = t('projectsData')

  const projects = projectsData.map((p) => {
    const tr = Array.isArray(projectsTranslations) ? projectsTranslations.find(t => t.id === p.id) : null
    return {
      ...p,
      title: tr ? tr.title : p.title,
      badge: tr ? tr.badge : p.badge,
      description: tr ? tr.description : p.description,
    }
  })

  return (
    <section id="projects" className="min-h-dvh py-16 sm:py-20 bg-[var(--color-surface)] flex items-center">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tighter)] leading-[1.05]">
              {t('projects.title1')}<br />
              <span className="text-[var(--color-text-muted)]">{t('projects.title2')}</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mt-3 max-w-sm mx-auto leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} t={t} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, t }) {
  const hasDemo = project.demoUrl && project.demoUrl.startsWith('http')

  const Wrapper = hasDemo ? 'a' : 'div'
  const wrapperProps = hasDemo
    ? { href: project.demoUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden ${hasDemo ? 'hover:border-[var(--color-primary)]/30 cursor-pointer' : ''} transition-all duration-300`}
    >
      <div className="overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 sm:h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-40 sm:h-48 bg-[var(--color-surface-2)] flex items-center justify-center">
            <span className="font-display text-[var(--color-text-muted)]/30 text-4xl font-light tracking-[var(--tracking-tighter)]">
              {project.title.split(' ').map(w => w[0]).join('').slice(0, 3)}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)]">
            {String(project.id).padStart(2, '0')}
          </span>
          {hasDemo ? (
            <span className="font-mono text-[11px] text-[var(--color-primary)] tracking-wide flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {t('projects.liveDemo')} <ExternalLink className="w-3 h-3" />
            </span>
          ) : (
            <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-wide opacity-60">
              {t('projects.comingSoon')}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-display text-[clamp(1.125rem,2vw,1.5rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tight)]">
            {project.title}
          </h3>
          {project.badge && (
            <span className="font-mono text-[10px] text-[#059669] border border-[#059669]/30 bg-[#059669]/10 px-2 py-0.5 rounded-full tracking-wide whitespace-nowrap flex-shrink-0">
              {project.badge}
            </span>
          )}
        </div>

        <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed mb-3 line-clamp-3">
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
    </Wrapper>
  )
}
