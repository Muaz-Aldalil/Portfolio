import { useState } from 'react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Send, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!formState.name.trim()) errs.name = 'Name is required'
    if (!formState.email.trim()) {
      errs.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = 'Enter a valid email'
    }
    if (!formState.message.trim()) {
      errs.message = 'Message is required'
    } else if (formState.message.trim().length < 10) {
      errs.message = 'At least 10 characters'
    }
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }).toString(),
      })
      if (res.ok) {
        setStatus('sent')
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const handleChange = (field, value) => {
    setFormState(s => ({ ...s, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  return (
    <section id="contact" className="min-h-dvh py-16 sm:py-20 bg-[var(--color-surface)] flex items-center">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-[var(--color-text)] tracking-[var(--tracking-tighter)] leading-[1.05]">
              Let's build<br />
              <span className="text-[var(--color-text-muted)]">something.</span>
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm mt-3 max-w-sm mx-auto leading-relaxed">
              Have a project in mind or just want to chat? Drop me a message
              and I'll get back to you within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          {/* Left — CTA + Socials */}
          <ScrollReveal>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[var(--color-text)] text-lg font-light leading-relaxed mb-8">
                  I'm always open to discussing new projects, creative ideas,
                  or opportunities to be part of your vision.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:muazaldalil@gmail.com"
                    className="flex items-center gap-3 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center group-hover:border-[var(--color-primary)]/30 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm">muazaldalil@gmail.com</span>
                  </a>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)] mb-3">
                  Find me on
                </p>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/muaz-aldalil" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)]/30 transition-all cursor-pointer">
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com/in/muaz-aldalil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all cursor-pointer">
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal delay={0.1}>
            <form
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="contact"
              onSubmit={handleSubmit}
              noValidate
              className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 sm:p-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)] block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={e => handleChange('name', e.target.value)}
                      className={`w-full px-3 py-2.5 bg-[var(--color-surface)] border rounded-[var(--radius-md)] text-[13px] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500/60 focus:border-red-500' : 'border-[var(--color-border)] focus:border-[var(--color-primary)]/50'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1 mt-1.5 text-[11px] text-red-500">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)] block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={e => handleChange('email', e.target.value)}
                      className={`w-full px-3 py-2.5 bg-[var(--color-surface)] border rounded-[var(--radius-md)] text-[13px] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500/60 focus:border-red-500' : 'border-[var(--color-border)] focus:border-[var(--color-primary)]/50'
                      }`}
                      placeholder="you@email.com"
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 mt-1.5 text-[11px] text-red-500">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[10px] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)] block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formState.message}
                    onChange={e => handleChange('message', e.target.value)}
                    className={`w-full px-3 py-2.5 bg-[var(--color-surface)] border rounded-[var(--radius-md)] text-[13px] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500/60 focus:border-red-500' : 'border-[var(--color-border)] focus:border-[var(--color-primary)]/50'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1 mt-1.5 text-[11px] text-red-500">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {status === 'sent' ? (
                  <div className="flex items-center gap-2 px-5 py-3 bg-[#059669]/10 border border-[#059669]/30 rounded-[var(--radius-md)] text-[#059669] text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Message sent! I'll get back to you soon.
                  </div>
                ) : status === 'error' ? (
                  <div className="flex items-center gap-2 px-5 py-3 bg-red-500/10 border border-red-500/30 rounded-[var(--radius-md)] text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Try emailing me directly.
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-text)] text-[var(--color-bg)] rounded-[var(--radius-md)] text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
