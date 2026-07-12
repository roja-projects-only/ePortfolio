import { voices } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { Prose } from '../components/page/Prose';
import { Spotlight } from '../components/portfolio/Spotlight';
import { QuoteBlock } from '../components/portfolio/QuoteBlock';
import { aliasFor } from '../lib/participants';

export function VoicesPage() {
  return (
    <Page labelledBy="page-title" width="wide" currentKey="voices">
      <SectionHeader
        chapter="Chapter IV"
        title="Voices & Interview Highlights"
        id="page-title"
        standfirst="Selected passages from the two interviews, each presented with the context needed to understand it. A quotation lifted out of a life can be easily misread; none here is left to stand alone."
      />

      <div className="mt-10 max-w-(--spacing-measure)">
        <Prose paragraphs={voices.lead} />
      </div>

      {/* The single green insight spotlight in the entire portfolio. */}
      <div className="mt-14">
        <Spotlight variant="insight" label="The fear that stayed with us" className="max-w-4xl">
          <blockquote>
            <p className="font-serif text-display-lg italic leading-tight text-(--color-spotlight-ink)">
              &ldquo;{voices.featured.text}&rdquo;
            </p>
          </blockquote>
          <p className="mt-7 font-sans text-label font-semibold uppercase tracking-wide text-(--color-spotlight-ink)">
            {aliasFor(voices.featured.speaker)}
          </p>
          <p className="mt-4 max-w-(--spacing-measure) font-serif text-reading leading-relaxed text-(--color-spotlight-ink)">
            {voices.featuredFraming}
          </p>
        </Spotlight>
      </div>

      <section aria-labelledby="secondary-heading" className="mt-16">
        <h2 id="secondary-heading" className="text-display-md text-ink">
          Further from the conversations
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {voices.secondary.map((quote, i) => (
            <QuoteBlock key={i} quote={quote} />
          ))}
        </div>
      </section>
    </Page>
  );
}
