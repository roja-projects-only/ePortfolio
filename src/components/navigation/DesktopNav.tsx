import { motion } from 'motion/react';

interface DesktopNavProps {
  sectionIds: string[];
  activeId: string | null;
  reducedMotion: boolean;
  sectionLabels: Record<string, string>;
  sectionChapters: Record<string, string>;
}

export function DesktopNav({
  sectionIds,
  activeId,
  reducedMotion,
  sectionLabels,
  sectionChapters,
}: DesktopNavProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className="w-52 rounded-2xl border border-hairline bg-surface-1/80 p-2.5 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md"
    >
      <h2 className="sr-only">Section Navigation</h2>
      <ul className="space-y-0.5">
        {sectionIds.map((id) => {
          const isActive = activeId === id;
          return (
            <li key={id} className="relative">
              {isActive && !reducedMotion && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-xl bg-surface-2"
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              {isActive && reducedMotion && (
                <span className="absolute inset-0 rounded-xl bg-surface-2" />
              )}
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className="relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors"
                aria-current={isActive ? 'true' : undefined}
              >
                <span
                  aria-hidden="true"
                  className="w-4 shrink-0 text-right font-serif text-[11px] text-ink-faint"
                >
                  {sectionChapters[id]}
                </span>
                <span className={isActive ? 'font-medium text-ink' : 'text-ink-muted'}>
                  {sectionLabels[id] || id}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
