import { experience } from '../../data/experience'
import { ScrollReveal } from '../ui/ScrollReveal'

export function Experience() {
  return (
    <section id="experience" className="min-h-dvh py-16 sm:py-20 flex items-center">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tighter)] leading-[1.05]">
              Experience.
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] sm:-translate-x-px" />

          <div className="space-y-8 sm:space-y-0">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <ScrollReveal key={exp.id} delay={i * 0.15}>
                  <div className={`relative sm:grid sm:grid-cols-2 sm:gap-10 sm:pb-10 ${i === experience.length - 1 ? '' : 'sm:border-b sm:border-[var(--color-border)]'}`}>
                    <div className="absolute left-5 sm:left-1/2 w-2.5 h-2.5 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-text-muted)] -translate-x-1.5 sm:-translate-x-1.5 mt-1.5 z-10" />

                    <div className={`pl-10 sm:pl-0 ${isLeft ? 'sm:text-right sm:pr-10' : 'sm:col-start-2 sm:pl-10'}`}>
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
                      <ul className={`space-y-1 ${isLeft ? 'sm:ml-auto' : ''}`}>
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
