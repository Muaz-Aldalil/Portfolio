import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'
import { Mail } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

export function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.certifications'), href: '#certifications' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="container-narrow py-8">
        <div className="grid sm:grid-cols-3 gap-6 items-start">
          <div>
            <span className="font-mono text-xs text-[var(--color-text)] tracking-[var(--tracking-wider)] uppercase block mb-1.5">
              Muaz Aldalil
            </span>
            <p className="text-[12px] text-[var(--color-text-muted)] leading-relaxed">
              {t('footer.tagline1')}<br />
              {t('footer.tagline2')}
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)] block mb-2">
              {t('footer.navigation')}
            </span>
            <div className="space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-[12px] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)] block mb-2">
              {t('footer.connect')}
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
