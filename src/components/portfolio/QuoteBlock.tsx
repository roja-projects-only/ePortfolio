import { aliasFor } from '../../lib/participants';
import { cn } from '../../lib/cn';

interface QuoteBlockProps {
  quote: {
    text: string;
    speaker: 'p01' | 'p02';
    context: string;
    insight: string;
  };
  variant?: 'featured' | 'standard' | 'quiet';
  tone?: 'white' | 'green' | 'warm' | 'stone';
  className?: string;
}

/**
 * An editorial interview excerpt. Variants change composition and emphasis,
 * never the quotation, context, insight, or their semantic reading order.
 */
export function QuoteBlock({ quote, variant = 'standard', tone = 'white', className }: QuoteBlockProps) {
  const featured = variant === 'featured';
  const quiet = variant === 'quiet';

  return (
    <figure
      className={cn(
        'relative min-w-0 rounded-lg px-5 py-8 sm:px-8 sm:py-10',
        tone === 'white' && 'bg-surface-1',
        tone === 'green' && 'bg-accent-green-soft',
        tone === 'warm' && 'bg-surface-2',
        tone === 'stone' && 'bg-surface-3',
        featured && 'rounded-lg border border-accent-green/30 bg-accent-green-soft px-5 py-7 first:pt-7 sm:px-8 sm:py-9',
        quiet && 'px-5 sm:px-7',
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-sans text-label text-ink-muted">
        <span className="font-semibold">Interview excerpt</span>
        <span className="tabular-nums">{aliasFor(quote.speaker)}</span>
      </div>

      <blockquote className={cn('relative mt-6 max-w-[34em]', featured && 'sm:mt-8')}>
        <span
          aria-hidden="true"
          className={cn(
            'absolute -left-1 -top-5 font-serif text-5xl leading-none text-accent/35',
            featured && 'text-6xl text-accent-green/35',
          )}
        >
          &ldquo;
        </span>
        <p
          className={cn(
            'relative font-serif text-[clamp(1.2rem,1.08rem+0.45vw,1.45rem)] leading-[1.5] text-ink',
            featured && 'text-[clamp(1.3rem,1.14rem+0.65vw,1.7rem)] leading-[1.42]',
            quiet && 'text-[clamp(1.08rem,1rem+0.25vw,1.25rem)]',
          )}
          lang="fil"
        >
          {quote.text}
        </p>
      </blockquote>

      <figcaption className="mt-8 grid gap-6 border-t border-hairline-soft pt-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-10">
        <div>
          <p className="font-sans text-label font-semibold text-ink">Context</p>
          <p className="mt-2 font-sans text-[0.9375rem] leading-[1.65] text-ink-muted">{quote.context}</p>
        </div>
        <div>
          <p className="font-sans text-label font-semibold text-accent-green">Insight</p>
          <p className="mt-2 font-serif text-[1.0625rem] leading-[1.65] text-ink">{quote.insight}</p>
        </div>
      </figcaption>
    </figure>
  );
}
