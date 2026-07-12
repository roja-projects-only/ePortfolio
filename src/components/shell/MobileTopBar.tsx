import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

interface MobileTopBarProps {
  currentLabel: string;
  activeIndex: number;
  total: number;
  onOpenMenu: () => void;
  menuOpen: boolean;
}

export function MobileTopBar({
  currentLabel,
  activeIndex,
  total,
  onOpenMenu,
  menuOpen,
}: MobileTopBarProps) {
  const progress = ((activeIndex + 1) / total) * 100;

  return (
    <header
      data-chrome
      className="fixed inset-x-0 top-0 z-(--z-topbar) h-14 border-b border-hairline bg-canvas/85 backdrop-blur-md lg:hidden"
    >
      <div className="flex h-14 items-center gap-3 px-4">
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Beyond Limitations — cover"
        >
          <img
            src={`${import.meta.env.BASE_URL}icon.png`}
            alt=""
            className="h-8 w-8 rounded-md border border-hairline object-contain"
          />
          <span className="hidden font-serif text-reading leading-tight font-medium text-ink sm:inline">
            Beyond Limitations
          </span>
        </NavLink>

        <span className="ml-auto min-w-0 truncate font-sans text-label text-ink-muted" aria-hidden="true">
          {currentLabel}
        </span>

        <button
          type="button"
          onClick={onOpenMenu}
          aria-expanded={menuOpen}
          aria-controls="nav-drawer"
          aria-label="Open section navigation"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-hairline bg-surface-1 text-ink transition-colors hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Menu size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Progress rail — pinned to the bar's bottom edge so it never nudges
          under the page content. */}
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 bg-surface-2"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={activeIndex + 1}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        <div
          className="h-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
