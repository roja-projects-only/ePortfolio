import { commitments } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { Prose } from '../components/page/Prose';
import { Spotlight } from '../components/portfolio/Spotlight';

export function CommitmentsPage() {
  return (
    <Page labelledBy="page-title" width="wide" currentKey="commitments">
      <SectionHeader
        chapter="Chapter VIII"
        title="Commitments to Inclusion"
        id="page-title"
        standfirst="Reflection that changes nothing is incomplete. These commitments are deliberately small and specific — things three students can actually keep."
      />

      <div className="mt-10 max-w-(--spacing-measure)">
        <Prose paragraphs={commitments.lead} />
      </div>

      {/* The single gold turning-point spotlight in the entire portfolio. */}
      <div className="mt-14">
        <Spotlight variant="turning" label="From reflection to commitment" className="max-w-4xl">
          <p className="font-serif text-display-lg italic leading-tight text-(--color-spotlight-ink)">
            {commitments.turningStatement}
          </p>
        </Spotlight>
      </div>

      <section aria-labelledby="commitments-heading" className="mt-16">
        <h2 id="commitments-heading" className="text-display-lg text-ink">
          What we will do
        </h2>
        <ol className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {commitments.commitments.map((commitment, i) => (
            <li key={commitment.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="font-serif text-display-md leading-none text-ink-faint tabular-nums"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-serif text-display-md text-ink">{commitment.title}</h3>
                <p className="mt-2 font-serif text-reading leading-relaxed text-ink-muted">
                  {commitment.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-14 max-w-(--spacing-measure) border-t border-hairline pt-8 font-serif text-reading italic leading-relaxed text-ink-muted">
        {commitments.caveat}
      </p>
    </Page>
  );
}
