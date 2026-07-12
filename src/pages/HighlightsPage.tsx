import { highlights } from '../content';
import { Page } from '../components/page/Page';
import { Prose } from '../components/page/Prose';
import { Spotlight } from '../components/portfolio/Spotlight';
import { QuoteBlock } from '../components/portfolio/QuoteBlock';

const chapterNumbers = ['01', '02'] as const;
const quoteTones = ['white', 'green', 'warm', 'stone'] as const;

export function HighlightsPage() {
  return (
    <Page labelledBy="page-title" width="full" currentKey="highlights">
      <header className="grid gap-8 border-b border-hairline pb-12 lg:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.3fr)] lg:items-end lg:gap-20 lg:pb-16">
        <div>
          <p className="font-sans text-label font-semibold text-accent-green">Participant voices</p>
          <h1 id="page-title" className="mt-4 max-w-[10ch] text-display-2xl text-ink">
            Interview Highlights
          </h1>
        </div>
        <div className="max-w-(--spacing-measure)">
          <p className="font-serif text-lead text-ink-muted">
            Selected passages from the two interviews, each presented in the participant’s own language with the context needed to understand it.
          </p>
          <div className="mt-5">
            <Prose paragraphs={highlights.lead} />
          </div>
        </div>
      </header>

      <div>
        {highlights.participants.map((participant, participantIndex) => {
          return (
            <section
              key={participant.id}
              aria-labelledby={`${participant.id}-heading`}
              className="border-b border-hairline py-16 even:-mx-5 even:bg-canvas-subtle even:px-5 sm:py-20 sm:even:-mx-8 sm:even:px-8 lg:py-24"
            >
              <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.82fr)_minmax(0,1.58fr)] lg:gap-16 xl:gap-24">
                <header className="lg:sticky lg:top-10 lg:self-start">
                  <span
                    aria-hidden="true"
                    className="font-sans text-[clamp(3.75rem,7vw,6.5rem)] font-light leading-none tracking-[-0.035em] text-accent-green/25"
                  >
                    {chapterNumbers[participantIndex]}
                  </span>
                  <div aria-hidden="true" className="mt-5 h-px w-16 bg-accent-green" />
                  <h2 id={`${participant.id}-heading`} className="mt-7 text-display-lg text-ink">
                    {participant.alias}
                  </h2>
                  <div className="mt-5 max-w-(--spacing-measure-tight)">
                    <Prose paragraphs={participant.summary} />
                  </div>
                </header>

                <div className="min-w-0">
                  <div className="min-w-0 space-y-4 sm:space-y-5">
                    {participant.quotations.map((quote, quoteIndex) => (
                      <QuoteBlock
                        key={quote.text}
                        quote={quote}
                        tone={quoteTones[quoteIndex]}
                        variant={participantIndex === 1 && quoteIndex === 0 ? 'featured' : quoteIndex === 3 ? 'quiet' : 'standard'}
                      />
                    ))}
                  </div>

                  {participantIndex === 0 && (
                    <Spotlight variant="insight" label="The fear that stayed with us" className="mt-10">
                      <blockquote>
                        <p className="font-serif text-display-lg italic leading-tight text-(--color-spotlight-ink)" lang="fil">
                          &ldquo;{highlights.featuredQuotation.text}&rdquo;
                        </p>
                      </blockquote>
                      <p className="mt-7 font-sans text-label font-semibold uppercase tracking-wide text-(--color-spotlight-ink-soft)">
                        {highlights.featuredQuotation.speaker === 'p01' ? 'Parent Participant 01' : 'Parent Participant 02'}
                      </p>
                      <p className="mt-4 max-w-(--spacing-measure) font-serif text-reading leading-relaxed text-(--color-spotlight-ink)">
                        {highlights.featuredFraming}
                      </p>
                    </Spotlight>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </Page>
  );
}
