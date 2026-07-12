import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { PanelLeftClose, PanelLeftOpen, Printer } from 'lucide-react';
import { sections } from '../../content/sections';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/cn';

interface SidebarProps {
  activeKey: string;
  activeIndex: number;
  collapsed: boolean;
  onToggleCollapsed: () => void;
}

export function Sidebar({ activeKey, activeIndex, collapsed, onToggleCollapsed }: SidebarProps) {
  const reducedMotion = useReducedMotion();
  const total = sections.length;
  const progress = ((activeIndex + 1) / total) * 100;

  return (
    <aside
      data-chrome
      className={cn(
        'fixed inset-y-0 left-0 z-(--z-sidebar) hidden flex-col border-r border-hairline bg-canvas lg:flex',
        collapsed ? 'w-19 px-2 py-5' : 'w-(--spacing-sidebar) px-5 py-6',
      )}
    >
      {/* Identity */}
      <NavLink
        to="/"
        className={cn(
          'group flex items-center rounded-lg font-sans outline-none focus-visible:ring-2 focus-visible:ring-accent',
          collapsed ? 'justify-center' : 'gap-3',
        )}
        aria-label="Beyond Limitations — cover"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-hairline bg-surface-1 font-serif text-sm text-ink">
          BL
        </span>
        {!collapsed && (
          <span className="min-w-0">
            <span className="block truncate font-serif text-reading font-medium leading-tight text-ink">
              Beyond Limitations
            </span>
            <span className="block truncate text-kicker uppercase text-ink-faint">
              ePortfolio
            </span>
          </span>
        )}
      </NavLink>

      {/* Table of contents */}
      <nav aria-label="Portfolio sections" className="mt-7 min-h-0 flex-1 overflow-y-auto scrollbar-none">
        <ol className="space-y-0.5">
          {sections.map((section) => {
            const isActive = section.key === activeKey;
            return (
              <li key={section.key} className="relative">
                <NavLink
                  to={section.path || '/'}
                  end={section.path === ''}
                  title={collapsed ? section.label : undefined}
                  className={cn(
                    'relative flex items-center rounded-lg font-sans text-label transition-colors',
                    collapsed ? 'justify-center px-0 py-2.5' : 'gap-3 px-3 py-2',
                    isActive ? 'text-accent' : 'text-ink-muted hover:text-ink',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {isActive && (
                    reducedMotion ? (
                      <span className="absolute inset-0 rounded-lg bg-accent-soft" aria-hidden="true" />
                    ) : (
                      <motion.span
                        layoutId="sidebar-active"
                        className="absolute inset-0 rounded-lg bg-accent-soft"
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        aria-hidden="true"
                      />
                    )
                  )}
                  {!collapsed && <span className="relative truncate">{section.label}</span>}
                </NavLink>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Progress + controls */}
      <div className={cn('mt-5 shrink-0 border-t border-hairline-soft', collapsed ? 'pt-3' : 'pt-4')}>
        {!collapsed && (
          <div className="mb-3">
            <div className="flex items-center justify-between font-sans text-kicker uppercase text-ink-faint">
              <span>Progress</span>
              <span className="tabular-nums">
                {activeIndex + 1} / {total}
              </span>
            </div>
            <div
              className="mt-2 h-1 overflow-hidden rounded-pill bg-surface-2"
              role="progressbar"
              aria-label="Reading progress"
              aria-valuenow={activeIndex + 1}
              aria-valuemin={1}
              aria-valuemax={total}
            >
              <div
                className="h-full rounded-pill bg-accent transition-[width] duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className={cn('flex', collapsed ? 'flex-col items-center gap-1' : 'items-center justify-between')}>
          <button
            type="button"
            onClick={() => window.print()}
            className={cn(
              'flex items-center rounded-md font-sans text-label text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
              collapsed ? 'justify-center p-2' : 'gap-2 px-2 py-1.5',
            )}
            title="Print this portfolio"
            aria-label="Print this portfolio"
          >
            <Printer size={16} aria-hidden="true" />
            {!collapsed && <span>Print</span>}
          </button>
          <button
            type="button"
            onClick={onToggleCollapsed}
            className="flex items-center justify-center rounded-md p-2 text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
            aria-pressed={collapsed}
          >
            {collapsed ? (
              <PanelLeftOpen size={18} aria-hidden="true" />
            ) : (
              <PanelLeftClose size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
