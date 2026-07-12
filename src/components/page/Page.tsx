import { cn } from '../../lib/cn';
import { PageNav } from './PageNav';

type PageWidth = 'reading' | 'wide' | 'full';

const widths: Record<PageWidth, string> = {
  reading: 'max-w-2xl',
  wide: 'max-w-5xl',
  full: 'max-w-6xl',
};

interface PageProps extends React.PropsWithChildren {
  /** Content measure. `reading` for prose, `wide`/`full` for composed layouts. */
  width?: PageWidth;
  className?: string;
  /** aria-labelledby target — the id of the page's single h1. */
  labelledBy?: string;
  /** Section key; when set, renders prev/next pagination at the foot. */
  currentKey?: string;
}

/**
 * The per-route content frame. One `<article>` per route, with generous
 * vertical rhythm that never forces content into a fixed viewport height —
 * pages scroll naturally when their content needs the room. The inner
 * container holds the reading measure; the prev/next pager spans wider so
 * it reads as chrome, not body copy.
 */
export function Page({ children, width = 'reading', className, labelledBy, currentKey }: PageProps) {
  return (
    <article aria-labelledby={labelledBy} className="w-full pb-24 pt-10 lg:pt-20">
      <div className={cn('mx-auto w-full px-5 sm:px-8', widths[width], className)}>
        {children}
      </div>
      {currentKey && (
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <PageNav currentKey={currentKey} />
        </div>
      )}
    </article>
  );
}
