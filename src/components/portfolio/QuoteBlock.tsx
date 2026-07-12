import { aliasFor } from '../../lib/participants';

interface QuoteBlockProps {
  quote: {
    text: string;
    speaker: 'p01' | 'p02';
    context: string;
    insight: string;
  };
}

/**
 * An interview quotation. The text is presented in the participant's original
 * language (Filipino/Taglish), with English context and insight below.
 */
export function QuoteBlock({ quote }: QuoteBlockProps) {
  return (
    <figure className="rounded-xl border border-hairline bg-surface-1 p-6 sm:p-7">
      <span aria-hidden="true" className="block font-serif text-4xl leading-none text-accent">
        &ldquo;
      </span>
      <blockquote className="mt-2">
        <p className="font-serif text-display-md leading-snug text-ink" lang="fil">
          {quote.text}
        </p>
      </blockquote>
      <figcaption className="mt-5 border-t border-hairline-soft pt-4">
        <span className="font-sans text-label font-medium uppercase tracking-wide text-ink-muted">
          {aliasFor(quote.speaker)}
        </span>
        <p className="mt-2 font-sans text-label leading-relaxed text-ink-muted">
          {quote.context}
        </p>
        <p className="mt-2 font-serif text-reading leading-relaxed text-ink">
          {quote.insight}
        </p>
      </figcaption>
    </figure>
  );
}
