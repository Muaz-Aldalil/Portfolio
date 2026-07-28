export function Marquee() {
  const row1 = ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3', 'Git', 'Responsive Design', 'Accessibility', 'Performance', 'UI/UX', 'REST APIs']
  const row2 = ['Component Architecture', 'State Management', 'API Integration', 'Clean Code', 'Performance Optimization', 'Cross-Browser', 'Semantic HTML', 'CSS Grid', 'Flexbox', 'npm', 'Figma', 'VS Code']

  return (
    <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      {/* Row 1 — scrolls right */}
      <div className="py-2 sm:py-4 overflow-hidden border-b border-[var(--color-border)]">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
          {[...row1, ...row1].map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)]">{item}</span>
              <span className="text-[var(--color-border)]">·</span>
            </span>
          ))}
        </div>
      </div>
      {/* Row 2 — scrolls left */}
      <div className="py-2 sm:py-4 overflow-hidden">
        <div className="animate-marquee-reverse flex items-center gap-6 whitespace-nowrap">
          {[...row2, ...row2].map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-[var(--tracking-wider)]">{item}</span>
              <span className="text-[var(--color-border)]">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
