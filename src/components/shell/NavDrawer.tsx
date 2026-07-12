import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { sections } from '../../content/sections';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/cn';

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
  activeKey: string;
}

export function NavDrawer({ open, onClose, activeKey }: NavDrawerProps) {
  const reducedMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  // Focus trap, Escape to close, and focus restoration on close.
  useEffect(() => {
    if (!open) return;
    restoreRef.current = document.activeElement as HTMLElement;
    const panel = panelRef.current;
    if (!panel) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      restoreRef.current?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="lg:hidden" data-chrome>
          <motion.div
            className="fixed inset-0 z-(--z-drawer-backdrop) bg-ink/25"
            onClick={onClose}
            aria-hidden="true"
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            id="nav-drawer"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Section navigation"
            className="fixed inset-y-0 right-0 z-(--z-drawer) flex w-80 max-w-[86vw] flex-col border-l border-hairline bg-surface-1 shadow-lg"
            initial={reducedMotion ? { x: 0 } : { x: '100%' }}
            animate={{ x: 0 }}
            exit={reducedMotion ? { x: 0 } : { x: '100%' }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
              <span className="font-serif text-display-md text-ink">Contents</span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="flex h-10 w-10 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Portfolio sections" className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
              <ol className="space-y-1">
                {sections.map((section) => {
                  const isActive = section.key === activeKey;
                  return (
                    <li key={section.key}>
                      <NavLink
                        to={section.path || '/'}
                        end={section.path === ''}
                        onClick={onClose}
                        aria-current={isActive ? 'page' : undefined}
                        className={cn(
                          'flex items-center gap-3 rounded-lg px-3 py-3 font-sans text-reading leading-tight transition-colors',
                          isActive
                            ? 'bg-accent-soft text-accent'
                            : 'text-ink-muted hover:bg-surface-2 hover:text-ink',
                        )}
                      >
                        {section.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
