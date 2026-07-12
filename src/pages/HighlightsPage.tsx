import { highlights } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { Prose } from '../components/page/Prose';
import { Spotlight } from '../components/portfolio/Spotlight';
import { QuoteBlock } from '../components/portfolio/QuoteBlock';

export function HighlightsPage() {
  return (
    <Page labelledBy="page-title" width="wide" currentKey="highlights">
      <SectionHeader
        title="Interview Highlights"
        id="page-title"
        standfirst="Selected passages from the two interviews, each presented in the participant\u2019s own language with the context needed to understand it."
      />

      <div className="mt-10 max-w-(--spacing-measure)">
        <Prose paragraphs={highlights.lead} />
      </div>

      {/* Participant summaries and quotations */}
      <div className="mt-14 space-y-16">
        {highlights.participants.map((participant) => (
          <section key={participant.id} aria-labelledby={`${participant.id}-heading`}>
            <h2 id={`${participant.id}-heading`} className="text-display-lg text-ink">
              {participant.alias}
            </h2>
            <div className="mt-5 max-w-(--spacing-measure)">
              <Prose paragraphs={participant.summary} />
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {participant.quotations.map((quote, i) => (
                <QuoteBlock key={i} quote={quote} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* The single green insight spotlight in the entire portfolio. */}
      <div className="mt-16">
        <Spotlight variant="insight" label="The fear that stayed with us" className="max-w-4xl">
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
      </div>
    </Page>
  );
}
