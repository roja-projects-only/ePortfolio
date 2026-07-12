import { Quote } from 'lucide-react';

interface QuoteCardProps {
  quote: string;
  attribution?: string;
  hasPermission: boolean;
}

/**
 * QuoteCard renders a semantic <blockquote> with an optional <cite>
 * attribution and a permission indicator. The Quote icon is decorative.
 * Used for secondary quotations; the single featured quote uses
 * FeaturedQuote instead.
 */
export function QuoteCard({
  quote,
  attribution,
  hasPermission,
}: QuoteCardProps) {
  return (
    <blockquote className="relative rounded-r-lg border-l-2 border-accent/50 bg-surface-1 p-6">
      <Quote size={22} className="mb-2 text-ink-faint" aria-hidden="true" />
      <p className="font-serif text-lg italic leading-relaxed text-ink">{quote}</p>
      {attribution && (
        <cite className="mt-4 block text-sm not-italic text-ink-muted">
          &mdash; {attribution}
        </cite>
      )}
      {!hasPermission && (
        <p className="mt-3 text-xs italic text-ink-faint">[Awaiting permission]</p>
      )}
    </blockquote>
  );
}
