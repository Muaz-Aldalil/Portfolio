import { useTheme } from './hooks/useTheme'
import { LanguageProvider } from './i18n/LanguageContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Marquee } from './components/ui/Marquee'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
