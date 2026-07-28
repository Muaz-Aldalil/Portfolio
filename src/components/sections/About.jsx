import { ScrollReveal } from '../ui/ScrollReveal'
import { Code2, Zap, Heart } from 'lucide-react'
import { experience } from '../../data/experience'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[var(--color-surface)]">
      <div className="container-narrow">
        {/* My Approach */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tight)] leading-[1.1]">
              My Approach
            </h2>
            <blockquote className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-light text-[var(--color-text-muted)] tracking-[var(--tracking-tight)] leading-[1.3] mt-4">
              I write code that looks good,
              <br className="hidden sm:block" />
              works fast, and lasts.
            </blockquote>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-3 mb-20">
          {[
            { icon: Code2, title: 'Clean Code', desc: 'Semantic, maintainable code that follows best practices and scales with your team.' },
            { icon: Zap, title: 'Performance', desc: 'Optimized for fast load times. Every millisecond matters for user experience.' },
            { icon: Heart, title: 'Accessibility', desc: 'Websites that everyone can use, regardless of ability or device.' },
          ].map((item, i) => (
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

        {/* Experience */}
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
