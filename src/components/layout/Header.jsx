import { useState, useEffect, useRef, useCallback } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

export function Header({ theme, toggleTheme }) {
  const { lang, t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(null);
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 });

  const navItems = [
    { label: t('nav.home'), href: "#hero" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.skills'), href: "#skills" },
    { label: t('nav.projects'), href: "#projects" },
    { label: t('nav.certifications'), href: "#certifications" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  const getLinkRect = useCallback((href) => {
    const container = navRef.current;
    const link = linkRefs.current[href];
    if (!container || !link) return null;
    const containerRect = container.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    return { left: linkRect.left - containerRect.left, width: linkRect.width };
  }, []);

  useEffect(() => {
    if (active) {
      const rect = getLinkRect(active);
      if (rect) setUnderline({ ...rect, opacity: 1 });
    } else {
      setUnderline({ left: 0, width: 0, opacity: 0 });
    }
  }, [active, getLinkRect]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hero = document.querySelector(".hero-section");
    const getTop = (el) => el.getBoundingClientRect().top + window.scrollY;

    const calcOffsets = () => {
      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean)
        .filter((el) => el !== hero);
      const allElements = hero ? [hero, ...sections] : sections;
      return allElements.map((el) => ({
        el,
        top: getTop(el),
        bottom: getTop(el) + el.offsetHeight,
      }));
    };

    let offsets = calcOffsets();

    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = null;
      for (const { el, top, bottom } of offsets) {
        if (scrollY >= top && scrollY < bottom) {
          current = el === hero ? null : `#${el.id}`;
          break;
        }
      }
      setActive(current);
    };

    const onResize = () => {
      offsets = calcOffsets();
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [navItems]);

  useEffect(() => {
    const handleResize = () => {
      if (active) {
        const rect = getLinkRect(active);
        if (rect) setUnderline({ ...rect, opacity: 1 });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active, getLinkRect]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onClick = (e) => {
      if (!e.target.closest("header")) setMobileOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-300 ${scrolled ? "bg-[var(--color-bg)]/90 border-b border-[var(--color-border)]" : ""}`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-14">
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 hover:opacity-80 transition-opacity cursor-pointer"
            aria-label={t('nav.home')}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M4 20V6L12 14L20 6V20" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 20V10L12 14L16 10V20" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
            </svg>
          </a>

          <nav
            ref={navRef}
            className="hidden md:flex items-center gap-7 relative"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                ref={(el) => (linkRefs.current[item.href] = el)}
                onClick={() => setActive(item.href)}
                className={`px-3 py-1.5 text-[14px] font-semibold rounded-[var(--radius-md)] transition-colors duration-200 cursor-pointer ${
                  active === item.href
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <span
              className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-primary)] rounded-full pointer-events-none"
              style={{
                transform: `translateX(${underline.left}px)`,
                width: underline.width,
                opacity: underline.opacity,
                transition:
                  "transform 0.35s cubic-bezier(0.16,1,0.3,1), width 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.2s ease",
              }}
            />
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleLanguage}
              className="w-8 h-8 flex items-center justify-center rounded-[var(--radius-md)] font-mono text-[11px] font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)] transition-all duration-200 cursor-pointer"
              aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <div className="hidden md:block">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)] rounded-[var(--radius-md)] transition-all duration-200 cursor-pointer"
              aria-label={mobileOpen ? t('ui.closeMenu') : t('ui.openMenu')}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-bg)] border-b border-[var(--color-border)]">
          <nav className="container-narrow py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActive(item.href);
                  setMobileOpen(false);
                }}
                className={`block px-5 py-2 text-center text-[14px] font-semibold rounded-[var(--radius-md)] transition-colors cursor-pointer ${
                  active === item.href
                    ? "text-[var(--color-primary)] bg-[var(--color-surface-2)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-[var(--color-border)] mt-1 pt-1">
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-2 text-[14px] font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)] rounded-[var(--radius-md)] transition-colors cursor-pointer"
              >
                <span className="text-[var(--color-text-muted)]">
                  {theme === 'light' ? '🌙' : '☀️'}
                </span>
                {t('ui.theme')}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
