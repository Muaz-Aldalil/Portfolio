import { coreSkills, tools } from '../../data/skills'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Code2, Monitor, LayoutDashboard, MousePointerClick, Plug, Gauge } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

const serviceIcons = [Code2, Monitor, LayoutDashboard, MousePointerClick, Plug, Gauge]

function ServiceCard({ service, index }) {
  const Icon = serviceIcons[index]
  return (
    <ScrollReveal delay={0.05 + index * 0.06}>
      <div className="h-full bg-[var(--color-bg)] p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] flex flex-col group hover:bg-[var(--color-surface-2)] transition-colors duration-300">
        <Icon className="w-4 h-4 text-[var(--color-primary)] mb-3" />
        <h3 className="font-display text-sm font-medium text-[var(--color-text)] tracking-[var(--tracking-tight)] mb-1.5">
          {service.title}
        </h3>
        <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
          {service.description}
        </p>
      </div>
    </ScrollReveal>
  )
}

function SkillCard({ skill }) {
  const dots = Array.from({ length: 4 }, (_, i) => i < skill.level)

  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] transition-colors duration-200 group cursor-default" title={skill.subtitle}>
      <skill.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: skill.color }} />
      <span className="font-display text-[13px] font-medium text-[var(--color-text)] tracking-[var(--tracking-tight)]">
        {skill.name}
      </span>
      <span className="hidden sm:inline-flex items-center gap-[2px] ms-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {dots.map((filled, i) => (
          <span key={i} className={`w-[4px] h-[4px] rounded-full ${filled ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border)]'}`} />
        ))}
      </span>
    </div>
  )
}

export function Skills() {
  const { t } = useLanguage()
  const services = t('skills.services')

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tighter)] leading-[1.05]">
              {t('skills.title1')}<br />
              <span className="text-[var(--color-text-muted)]">{t('skills.title2')}</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mt-3">
              {t('skills.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4">
          <ScrollReveal delay={0.1}>
            <div className="p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)]">
              <h3 className="font-mono text-xs text-[var(--color-text-muted)] tracking-[var(--tracking-wider)] uppercase mb-4 text-center">
                {t('skills.core')}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {coreSkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)]">
              <h3 className="font-mono text-xs text-[var(--color-text-muted)] tracking-[var(--tracking-wider)] uppercase mb-4 text-center">
                {t('skills.tools')}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {tools.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="text-center mt-16 mb-8">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tighter)] leading-[1.05]">
              {t('skills.servicesTitle1')}<br />
              <span className="text-[var(--color-text-muted)]">{t('skills.servicesTitle2')}</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mt-3">
              {t('skills.servicesSubtitle')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.isArray(services) && services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
