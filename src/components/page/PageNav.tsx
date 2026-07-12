import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { sections } from '../../content/sections';

/**
 * Linear reading controls at the foot of each route. Because the portfolio
 * is deliberately not one long scroll, these give the teacher an obvious way
 * to move through the sections in order — while the sidebar/drawer allow
 * jumping anywhere.
 */
export function PageNav({ currentKey }: { currentKey: string }) {
  const index = sections.findIndex((s) => s.key === currentKey);
  const prev = index > 0 ? sections[index - 1] : null;
  const next = index >= 0 && index < sections.length - 1 ? sections[index + 1] : null;

  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Section pagination"
      className="mx-auto mt-20 grid max-w-5xl gap-3 border-t border-hairline pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          to={prev.path || '/'}
          className="group flex flex-col gap-1 rounded-xl border border-hairline bg-surface-1 px-5 py-4 transition-colors hover:border-hairline hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="flex items-center gap-1.5 font-sans text-kicker uppercase text-ink-faint">
            <ArrowLeft size={13} aria-hidden="true" /> Previous
          </span>
          <span className="font-serif text-display-md text-ink">{prev.label}</span>
        </Link>
      ) : (
        <span aria-hidden="true" className="hidden sm:block" />
      )}

      {next && (
        <Link
          to={next.path || '/'}
          className="group flex flex-col items-end gap-1 rounded-xl border border-hairline bg-surface-1 px-5 py-4 text-right transition-colors hover:border-hairline hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:col-start-2"
        >
          <span className="flex items-center gap-1.5 font-sans text-kicker uppercase text-ink-faint">
            Next <ArrowRight size={13} aria-hidden="true" />
          </span>
          <span className="font-serif text-display-md text-ink">{next.label}</span>
        </Link>
      )}
    </nav>
  );
}
