import { certifications } from '../../data/certifications'
import { ScrollReveal } from '../ui/ScrollReveal'
import { ExternalLink } from 'lucide-react'

export function Certifications() {
  return (
    <section id="certifications" className="min-h-dvh py-16 sm:py-20 flex items-center">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tighter)] leading-[1.05]">
              Certifications
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mt-3 max-w-sm mx-auto leading-relaxed">
              Courses completed to strengthen my development skills.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.id} delay={i * 0.05}>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-lg)] hover:border-[var(--color-primary)]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-[var(--radius-md)] flex items-center justify-center flex-shrink-0 bg-[var(--color-surface)] border border-[var(--color-border)] group-hover:border-[var(--color-primary)]/30 transition-colors">
                  <cert.icon className="w-4 h-4" style={{ color: cert.color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm font-medium text-[var(--color-text)] tracking-[var(--tracking-tight)] truncate">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-[11px] text-[var(--color-text-muted)] tracking-wide">
                    {cert.issuer}
                  </p>
                </div>

                <ExternalLink className="w-3.5 h-3.5 text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
