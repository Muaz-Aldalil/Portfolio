import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { LinkedinIcon, WhatsAppIcon } from '../ui/SocialIcons'
import { useLanguage } from '../../hooks/useLanguage'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="hero-section h-dvh flex flex-col justify-center relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--color-text) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="container-narrow w-full relative z-10 text-center">
        <div className="pb-8 sm:pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.25rem,7vw,6.5rem)] font-light tracking-[var(--tracking-tighter)] leading-[0.95]"
          >
            {t('hero.headline1')}<br />
            <span className="text-[var(--color-primary)]">{t('hero.headline2')}</span><br />
            {t('hero.headline3')}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col items-center gap-5"
        >
          <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed max-w-md">
            <span className="text-[var(--color-text)] font-bold">Muaz Aldalil</span> {t('hero.subtitle')}
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-text)] text-[var(--color-bg)] rounded-[var(--radius-md)] text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
              >
                {t('hero.viewWork')}
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer"
              >
                {t('hero.getInTouch')}
              </a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <a href="https://wa.me/249904294228" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#25D366] transition-colors cursor-pointer" aria-label="WhatsApp">
                <WhatsAppIcon className="w-[18px] h-[18px]" />
              </a>
              <a href="https://linkedin.com/in/muaz-aldalil" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#0A66C2] transition-colors cursor-pointer" aria-label="LinkedIn">
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
