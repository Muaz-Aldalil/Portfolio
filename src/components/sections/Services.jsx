import { useState } from 'react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { ChevronDown } from 'lucide-react'

const services = [
  {
    title: 'Frontend Development',
    description: 'Building fast, maintainable UIs with React and modern JavaScript. Component-driven architecture that scales with your product and stays easy to refactor.',
  },
  {
    title: 'Responsive Web Development',
    description: 'Pixel-perfect layouts that work flawlessly on every screen size — from mobile phones to ultrawide monitors. No compromises on either end.',
  },
  {
    title: 'Modern Interactive Dashboards',
    description: 'Data-driven admin panels with charts, tables, filters, and real-time updates. Clean interfaces that make complex data easy to act on.',
  },
  {
    title: 'High-Converting Landing Pages',
    description: 'Focused, single-purpose pages designed to turn visitors into customers. Fast load times, clear hierarchy, and calls to action that actually work.',
  },
  {
    title: 'Seamless API Integration',
    description: 'Connecting frontends to backends, third-party services, and REST APIs. Auth flows, error handling, loading states — the stuff that makes integrations feel solid.',
  },
  {
    title: 'Performance & SEO Tuning',
    description: 'Speed optimizations that users and search engines both notice. Core Web Vitals, lazy loading, code splitting, and semantic markup for search visibility.',
  },
]

function AccordionItem({ service, isOpen, onToggle, index }) {
  return (
    <ScrollReveal delay={0.05 + index * 0.06}>
      <div className="border-b border-[var(--color-border)]">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer group"
        >
          <span className="font-display text-[clamp(1rem,2vw,1.25rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tight)] group-hover:text-[var(--color-primary)] transition-colors duration-200">
            {service.title}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[var(--color-text-muted)] flex-shrink-0 ml-4 transition-transform duration-250 ease-[var(--ease-premium)] ${
              isOpen ? 'rotate-180 text-[var(--color-primary)]' : ''
            }`}
          />
        </button>
        <div
          className="grid transition-[grid-template-rows] duration-250 ease-[var(--ease-premium)]"
          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed pb-5 sm:pb-6 max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function Services() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section id="services" className="py-16 sm:py-20 bg-[var(--color-surface)]">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tighter)] leading-[1.05]">
              Sleek Frontend<br />
              <span className="text-[var(--color-text-muted)]">Solutions.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mt-3">
              What I can build for you.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto border-t border-[var(--color-border)]">
          {services.map((service, i) => (
            <AccordionItem
              key={service.title}
              service={service}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
