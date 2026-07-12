import { Lightbulb, MessageCircleQuestion, Sparkle } from 'lucide-react';
import type { InterviewHighlight } from '../../types/portfolio';
import { SpotlightCard } from '../decorative/SpotlightCard';
import { Reveal } from '../motion/Reveal';
import { QuoteCard } from './QuoteCard';
import { FeaturedQuote } from './FeaturedQuote';

interface InterviewHighlightsSectionProps {
  highlights: InterviewHighlight[];
}

export function InterviewHighlightsSection({ highlights }: InterviewHighlightsSectionProps) {
  return (
    <div className="space-y-8">
      {highlights.map((item, index) => (
        <Reveal key={index} delay={Math.min(index, 3) * 0.06}>
          <SpotlightCard className="rounded-xl border border-hairline bg-surface-1 p-6 md:p-7">
            <div className="mb-5 flex items-center gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink"
                aria-hidden="true"
              >
                <Lightbulb size={18} />
              </span>
              <h3 className="text-display-md text-ink">Question {index + 1}</h3>
            </div>

            <div className="space-y-5">
              <div>
                <h4 className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
                  <MessageCircleQuestion size={14} aria-hidden="true" /> Question
                </h4>
                <p className="leading-relaxed text-ink-muted">{item.question}</p>
              </div>

              <div>
                <h4 className="mb-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
                  Response Summary
                </h4>
                <p className="leading-relaxed text-ink-muted">{item.responseSummary}</p>
              </div>

              {item.approvedQuote &&
                (index === 0 ? (
                  <FeaturedQuote
                    quote={item.approvedQuote}
                    hasPermission={item.quotePermission}
                  />
                ) : (
                  <QuoteCard quote={item.approvedQuote} hasPermission={item.quotePermission} />
                ))}

              <div>
                <h4 className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
                  <Sparkle size={14} aria-hidden="true" /> Insight
                </h4>
                <p className="leading-relaxed text-ink-muted">{item.insight}</p>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      ))}
    </div>
  );
}
