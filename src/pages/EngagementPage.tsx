import { engagement, references } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { Prose } from '../components/page/Prose';
import { Figure } from '../components/page/Figure';
import { ProcessTimeline } from '../components/portfolio/ProcessTimeline';

const meta = [
  { label: 'Interview date', value: engagement.interviewDate },
  { label: 'Setting', value: engagement.setting },
];

export function EngagementPage() {
  const p01Figure = references.documentation?.find((d) => d.id === 'participant-01');
  const p02Figure = references.documentation?.find((d) => d.id === 'participant-02');

  return (
    <Page labelledBy="page-title" width="wide" currentKey="engagement">
      <SectionHeader
        title="Community Engagement"
        id="page-title"
        standfirst="How we listened mattered as much as what we heard."
      />

      <dl className="mt-10 grid gap-6 border-y border-hairline py-6 sm:grid-cols-2">
        {meta.map((m) => (
          <div key={m.label}>
            <dt className="font-sans text-kicker uppercase text-ink-faint">{m.label}</dt>
            <dd className="mt-2 font-serif text-reading text-ink">{m.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 max-w-(--spacing-measure)">
        <Prose paragraphs={engagement.lead} />
      </div>

      {/* Participants */}
      <section aria-labelledby="participants-heading" className="mt-14">
        <h2 id="participants-heading" className="text-display-lg text-ink">
          The participants
        </h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {engagement.participants.map((p, i) => {
            const figure = i === 0 ? p01Figure : p02Figure;
            return (
              <article key={p.alias} className="flex flex-col">
                {figure && (
                  <Figure
                    src={figure.src}
                    alt={figure.alt}
                    caption={figure.caption}
                    aspect="aspect-[5/4]"
                    className="mb-6"
                  />
                )}
                <h3 className="text-display-md text-ink">{p.alias}</h3>
                <p className="mt-3 font-serif text-reading leading-relaxed text-ink-muted">
                  {p.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Research process */}
      <section aria-labelledby="process-heading" className="mt-16 border-t border-hairline pt-12">
        <h2 id="process-heading" className="mb-8 text-display-lg text-ink">
          The research process
        </h2>
        <ProcessTimeline steps={engagement.process} />
      </section>

      {/* Ethics */}
      <section aria-labelledby="ethics-heading" className="mt-16 border-t border-hairline pt-12">
        <h2 id="ethics-heading" className="text-display-lg text-ink">
          Ethical conduct
        </h2>
        <p className="mt-4 max-w-(--spacing-measure) font-serif text-reading leading-relaxed text-ink-muted">
          Anonymity, respect, and faithful representation guided every stage.
        </p>
        <div className="mt-8 divide-y divide-hairline-soft rounded-2xl border border-hairline bg-surface-1">
          {engagement.ethics.map((point) => (
            <div key={point.title} className="grid gap-2 p-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-8 sm:p-7">
              <h3 className="font-serif text-display-md text-ink">{point.title}</h3>
              <p className="font-serif text-reading leading-relaxed text-ink-muted">{point.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}
