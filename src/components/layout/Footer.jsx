import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'
import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="container-narrow py-8">
        <div className="grid sm:grid-cols-3 gap-6 items-start">
          <div>
            <span className="font-mono text-xs text-[var(--color-text)] tracking-[var(--tracking-wider)] uppercase block mb-1.5">
              Muaz Aldalil
            </span>
            <p className="text-[12px] text-[var(--color-text-muted)] leading-relaxed">
              Frontend developer crafting<br />
              clean, fast, accessible experiences.
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)] block mb-2">
              Navigation
            </span>
            <div className="space-y-1">
              {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map(label => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="block text-[12px] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)] block mb-2">
              Connect
            </span>
            <div className="flex items-center gap-3">
              <a href="https://github.com/muaz-aldalil" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer" aria-label="GitHub">
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com/in/muaz-aldalil" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer" aria-label="LinkedIn">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a href="mailto:muaz@example.com" className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer" aria-label="Email">
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
