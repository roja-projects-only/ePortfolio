import type { Quotation } from '../../types/portfolio';
import { aliasFor } from '../../lib/participants';

/**
 * A secondary interview quotation. The only accent is the quotation glyph
 * (interaction blue, the one sanctioned decorative use); attribution and
 * context stay neutral. No side stripe. Every quote is paired with its
 * context so it can never be read in isolation.
 */
export function QuoteBlock({ quote }: { quote: Quotation }) {
  return (
    <figure className="rounded-xl border border-hairline bg-surface-1 p-6 sm:p-7">
      <span aria-hidden="true" className="block font-serif text-4xl leading-none text-accent">
        &ldquo;
      </span>
      <blockquote className="mt-2">
        <p className="font-serif text-display-md leading-snug text-ink">{quote.text}</p>
        {quote.original && (
          <p className="mt-3 font-serif text-lead italic text-ink-muted" lang="fil">
            {quote.original}
          </p>
        )}
      </blockquote>
      <figcaption className="mt-5 border-t border-hairline-soft pt-4">
        <span className="font-sans text-label font-medium uppercase tracking-wide text-ink-muted">
          {aliasFor(quote.speaker)}
        </span>
        <span className="mt-2 block font-sans text-label leading-relaxed text-ink-muted">
          {quote.context}
        </span>
      </figcaption>
    </figure>
  );
}
