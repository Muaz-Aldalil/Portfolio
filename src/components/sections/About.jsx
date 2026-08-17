import { ScrollReveal } from '../ui/ScrollReveal'
import { Code2, Zap, Heart } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

export function About() {
  const { t } = useLanguage()
  const experience = t('experience')

  const pillars = [
    { icon: Code2, title: t('about.cleanCode'), desc: t('about.cleanCodeDesc') },
    { icon: Zap, title: t('about.performance'), desc: t('about.performanceDesc') },
    { icon: Heart, title: t('about.accessibility'), desc: t('about.accessibilityDesc') },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-[var(--color-surface)]">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tight)] leading-[1.1]">
              {t('about.title')}
            </h2>
            <blockquote className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-light text-[var(--color-text-muted)] tracking-[var(--tracking-tight)] leading-[1.3] mt-4">
              {t('about.quote1')}
              <br className="hidden sm:block" />
              {t('about.quote2')}
            </blockquote>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-3 mb-20">
          {pillars.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 + i * 0.1}>
              <div className="bg-[var(--color-bg)] p-4 sm:p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] flex flex-col items-center text-center group hover:bg-[var(--color-surface-2)] transition-colors duration-300">
                <div className="w-9 h-9 rounded-[var(--radius-md)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-surface)] transition-colors">
                  <item.icon className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-display text-sm font-medium text-[var(--color-text)] tracking-[var(--tracking-tight)]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[var(--color-text-muted)] mt-1.5 leading-relaxed max-w-[260px]">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tighter)] leading-[1.05]">
              {t('about.experience')}
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute start-5 sm:start-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] sm:-translate-x-px" />

          <div className="space-y-8 sm:space-y-0">
            {Array.isArray(experience) && experience.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <div className={`relative sm:grid sm:grid-cols-2 sm:gap-10 sm:pb-10 ${i === experience.length - 1 ? '' : 'sm:border-b sm:border-[var(--color-border)]'}`}>
                    <div className="absolute start-5 sm:start-1/2 w-2.5 h-2.5 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-text-muted)] ms-[-5px] sm:ms-[-5px] mt-1.5 z-10" />

                    <div className={`ps-10 sm:ps-0 ${isLeft ? 'sm:text-end sm:pe-10' : 'sm:col-start-2 sm:ps-10'}`}>
                      <span className="font-mono text-[11px] text-[var(--color-primary)] tracking-[var(--tracking-wider)] uppercase block mb-1.5">
                        {exp.period}
                      </span>
                      <h3 className="font-display text-base font-light text-[var(--color-text)] tracking-[var(--tracking-tight)]">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-[12px] text-[var(--color-text-muted)] tracking-wide block mb-2">
                        {exp.company}
                      </span>
                      <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed mb-3 max-w-md">
                        {exp.description}
                      </p>
                      <ul className={`space-y-1 ${isLeft ? 'sm:ms-auto' : ''}`}>
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-[12px] text-[var(--color-text-muted)]">
                            <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] mt-1.5 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
