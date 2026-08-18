import { createContext, useState, useEffect, useCallback } from 'react'
import { translations } from './translations'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lang')
      if (stored && (stored === 'en' || stored === 'ar')) return stored
    }
    return 'en'
  })

  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (const k of keys) {
      if (value == null) return key
      value = value[k]
    }
    return value ?? key
  }, [lang])

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('lang', lang)
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    localStorage.setItem('lang', lang)

    if (lang === 'ar') {
      if (!document.getElementById('arabic-font')) {
        const link = document.createElement('link')
        link.id = 'arabic-font'
        link.rel = 'stylesheet'
        link.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&display=swap'
        document.head.appendChild(link)
      }
      root.style.setProperty('--font-body', "'IBM Plex Sans Arabic', sans-serif")
    } else {
      const link = document.getElementById('arabic-font')
      if (link) link.remove()
      root.style.setProperty('--font-body', "'Inter', sans-serif")
    }

    const title = lang === 'ar' ? 'معاذ الدليل — مطور واجهات أمامية' : 'Muaz Aldalil — Frontend Developer'
    document.title = title

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', title)

    const metaDesc = lang === 'ar'
      ? 'معاذ الدليل — مطور واجهات أمامية متخصص في React وTailwind CSS والتقنيات الحديثة. بناء مواقع نظيفة وسريعة وسهلة الوصول.'
      : 'Muaz Aldalil — Frontend Developer specializing in React, Tailwind CSS, and modern web technologies. Building clean, fast, and accessible websites.'

    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', metaDesc)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', metaDesc)

    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', metaDesc)
  }, [lang])

  const toggleLanguage = useCallback(() => {
    setLang(prev => prev === 'en' ? 'ar' : 'en')
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
