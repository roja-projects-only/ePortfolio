import { Quote } from 'lucide-react';
import { GradientSpotlightCard } from '../decorative/GradientSpotlightCard';

interface FeaturedQuoteProps {
  quote: string;
  attribution?: string;
  hasPermission: boolean;
}

/**
 * The emotional centerpiece of the whole portfolio: the one quotation that
 * receives the site's violet gradient-spotlight-card treatment (used
 * exactly twice, total, across the site — see GradientSpotlightCard).
 */
export function FeaturedQuote({ quote, attribution, hasPermission }: FeaturedQuoteProps) {
  return (
    <GradientSpotlightCard variant="violet">
      <Quote size={28} className="mb-3 text-ink/50" aria-hidden="true" />
      <blockquote>
        <p className="font-serif text-2xl italic leading-snug text-ink md:text-3xl">{quote}</p>
        {attribution && (
          <cite className="mt-5 block text-sm not-italic text-ink/70">&mdash; {attribution}</cite>
        )}
      </blockquote>
      {!hasPermission && (
        <p className="mt-4 text-xs italic text-ink/60">[Awaiting permission]</p>
      )}
    </GradientSpotlightCard>
  );
}
