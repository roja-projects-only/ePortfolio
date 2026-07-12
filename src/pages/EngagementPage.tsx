import { engagement, references } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { Prose } from '../components/page/Prose';
import { Figure } from '../components/page/Figure';
import { ProcessTimeline } from '../components/portfolio/ProcessTimeline';

const meta = [
  { label: 'Interview date', value: engagement.interviewDate },
  { label: 'Setting', value: engagement.setting },
  { label: 'Participants', value: 'Two parent participants' },
];

export function EngagementPage() {
  const settingFigure = references.documentation.find((d) => d.id === 'setting');

  return (
    <Page labelledBy="page-title" width="wide" currentKey="engagement">
      <SectionHeader
        chapter="Chapter II"
        title="Community Engagement & Ethical Process"
        id="page-title"
        standfirst="We treated the interview as an ethical responsibility, not only as a source of information. How we listened mattered as much as what we heard."
      />

      <dl className="mt-10 grid gap-6 border-y border-hairline py-6 sm:grid-cols-3">
        {meta.map((m) => (
          <div key={m.label}>
            <dt className="font-sans text-kicker uppercase text-ink-faint">{m.label}</dt>
            <dd className="mt-2 font-serif text-reading text-ink">{m.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 max-w-(--spacing-measure)">
        <Prose paragraphs={engagement.lead} />
        <p className="mt-4 font-serif text-reading leading-relaxed text-ink-muted">
          {engagement.participantsNote}
        </p>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_minmax(0,20rem)] lg:gap-16">
        <section aria-labelledby="process-heading">
          <h2 id="process-heading" className="mb-8 text-display-lg text-ink">
            The research process
          </h2>
          <ProcessTimeline steps={engagement.process} />
        </section>

        {settingFigure && (
          <div className="lg:pt-16">
            <Figure
              src={settingFigure.src}
              alt={settingFigure.alt}
              caption={settingFigure.caption}
              aspect="aspect-[4/5]"
            />
          </div>
        )}
      </div>

      <section aria-labelledby="ethics-heading" className="mt-16 border-t border-hairline pt-12">
        <h2 id="ethics-heading" className="text-display-lg text-ink">
          Ethical conduct
        </h2>
        <p className="mt-4 max-w-(--spacing-measure) font-serif text-reading leading-relaxed text-ink-muted">
          Anonymity, respect, and faithful representation guided every stage. We
          make the ethics visible here because responsible conduct is part of the
          work itself, not a footnote to it.
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
