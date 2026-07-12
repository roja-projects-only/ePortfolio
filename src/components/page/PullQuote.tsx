import { cn } from '../../lib/cn';

interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
}

/**
 * A typographic epigraph — serif italic, set apart from the reading column.
 * Not a spotlight card: the two saturated gradient spotlights are reserved
 * for the featured quote and the commitments. This is quieter emphasis.
 */
export function PullQuote({ children, attribution, className }: PullQuoteProps) {
  return (
    <figure className={cn('my-10 max-w-(--spacing-measure)', className)}>
      <blockquote className="border-l-0 pl-0">
        <p className="font-serif text-display-md italic leading-snug text-ink">{children}</p>
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 font-sans text-label uppercase tracking-wide text-ink-faint">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
