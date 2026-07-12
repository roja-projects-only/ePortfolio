import { useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  sectionIds: string[];
  activeId: string | null;
  reducedMotion: boolean;
  sectionLabels: Record<string, string>;
  sectionChapters: Record<string, string>;
}

export function MobileDrawer({
  isOpen,
  onOpen,
  onClose,
  sectionIds,
  activeId,
  reducedMotion,
  sectionLabels,
  sectionChapters,
}: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const previouslyFocused = document.activeElement as HTMLElement;

    const focusableSelector =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements =
      drawer.querySelectorAll<HTMLElement>(focusableSelector);
    const firstFocusable = focusableElements[0];
    const lastFocusable =
      focusableElements[focusableElements.length - 1];

    // Focus the close button when drawer opens
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    drawer.addEventListener('keydown', handleKeyDown);

    return () => {
      drawer.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' });
      }
      onClose();
    },
    [reducedMotion, onClose]
  );

  return (
    <>
      {/* Floating trigger */}
      <button
        ref={closeButtonRef}
        type="button"
        onClick={isOpen ? onClose : onOpen}
        aria-expanded={isOpen}
        aria-controls="mobile-drawer"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="fixed bottom-5 right-5 z-50 flex h-13 w-13 items-center justify-center rounded-full border border-hairline bg-surface-1/90 text-ink shadow-[0_15px_40px_-10px_rgba(0,0,0,0.7)] backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        style={{ height: '3.25rem', width: '3.25rem' }}
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-40 h-full w-72 max-w-[80vw] border-l border-hairline bg-surface-1 shadow-2xl ${
          reducedMotion
            ? isOpen
              ? 'translate-x-0'
              : 'translate-x-full'
            : `transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`
        }`}
      >
        <nav aria-label="Table of contents" className="px-4 pt-24">
          <ul className="space-y-1">
            {sectionIds.map((id) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${
                      isActive
                        ? 'bg-surface-2 font-medium text-ink'
                        : 'text-ink-muted hover:bg-surface-2/60 hover:text-ink'
                    }`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span aria-hidden="true" className="w-4 text-right font-serif text-[11px] text-ink-faint">
                      {sectionChapters[id]}
                    </span>
                    {sectionLabels[id] || id}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
