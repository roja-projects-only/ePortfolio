import { cn } from '../../lib/cn';
import type { Paragraphs } from '../../types/portfolio';

interface ProseProps {
  paragraphs: Paragraphs;
  className?: string;
  /** `lead` renders the first paragraph slightly larger, as an opening voice. */
  variant?: 'default' | 'lead';
  tight?: boolean;
  /** Reading column width. `wide` (72ch) suits split layouts with a side rail. */
  measure?: 'default' | 'wide';
}

const measures = {
  default: 'max-w-(--spacing-measure)',
  wide: 'max-w-(--spacing-measure-wide)',
} as const;

/**
 * Serif reading prose held to a comfortable measure. This is the portfolio's
 * primary voice — long-form philosophical writing set like a book.
 */
export function Prose({ paragraphs, className, variant = 'default', tight, measure = 'default' }: ProseProps) {
  return (
    <div
      className={cn(
        'reading',
        tight ? 'max-w-(--spacing-measure-tight)' : measures[measure],
        className,
      )}
    >
      {paragraphs.map((text, i) => (
        <p
          key={i}
          className={cn(
            variant === 'lead' && i === 0 && 'text-lead text-ink',
          )}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
