import { coreSkills, tools } from '../../data/skills'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Code2, Monitor, LayoutDashboard, MousePointerClick, Plug, Gauge } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building fast, maintainable UIs with React and modern JavaScript. Component-driven architecture that scales with your product and stays easy to refactor.',
  },
  {
    icon: Monitor,
    title: 'Responsive Web Dev',
    description: 'Pixel-perfect layouts that work flawlessly on every screen size — from mobile phones to ultrawide monitors. No compromises on either end.',
  },
  {
    icon: LayoutDashboard,
    title: 'Interactive Dashboards',
    description: 'Data-driven admin panels with charts, tables, filters, and real-time updates. Clean interfaces that make complex data easy to act on.',
  },
  {
    icon: MousePointerClick,
    title: 'Landing Pages',
    description: 'Focused, single-purpose pages designed to turn visitors into customers. Fast load times, clear hierarchy, and calls to action that actually work.',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description: 'Connecting frontends to backends, third-party services, and REST APIs. Auth flows, error handling, loading states — the stuff that makes integrations feel solid.',
  },
  {
    icon: Gauge,
    title: 'Performance & SEO',
    description: 'Speed optimizations that users and search engines both notice. Core Web Vitals, lazy loading, code splitting, and semantic markup for search visibility.',
  },
]

function ServiceCard({ service, index }) {
  return (
    <ScrollReveal delay={0.05 + index * 0.06}>
      <div className="h-full bg-[var(--color-bg)] p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] flex flex-col group hover:bg-[var(--color-surface-2)] transition-colors duration-300">
        <service.icon className="w-4 h-4 text-[var(--color-primary)] mb-3" />
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
      <span className="hidden sm:inline-flex items-center gap-[2px] ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {dots.map((filled, i) => (
          <span key={i} className={`w-[4px] h-[4px] rounded-full ${filled ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border)]'}`} />
        ))}
      </span>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tighter)] leading-[1.05]">
              Skills &<br />
              <span className="text-[var(--color-text-muted)]">expertise.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mt-3">
              Technologies I work with daily.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4">
          <ScrollReveal delay={0.1}>
            <div className="p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)]">
              <h3 className="font-mono text-xs text-[var(--color-text-muted)] tracking-[var(--tracking-wider)] uppercase mb-4 text-center">
                Core
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
                Tools
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
              Sleek Frontend<br />
              <span className="text-[var(--color-text-muted)]">Solutions.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mt-3">
              What I can build for you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
