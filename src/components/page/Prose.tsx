import { cn } from '../../lib/cn';
import type { Paragraphs } from '../../types/portfolio';

interface ProseProps {
  paragraphs: Paragraphs;
  className?: string;
  /** `lead` renders the first paragraph slightly larger, as an opening voice. */
  variant?: 'default' | 'lead';
  tight?: boolean;
}

/**
 * Serif reading prose held to a comfortable measure. This is the portfolio's
 * primary voice — long-form philosophical writing set like a book.
 */
export function Prose({ paragraphs, className, variant = 'default', tight }: ProseProps) {
  return (
    <div
      className={cn(
        'reading',
        tight ? 'max-w-(--spacing-measure-tight)' : 'max-w-(--spacing-measure)',
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
