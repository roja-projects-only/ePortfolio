import { introduction } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { Prose } from '../components/page/Prose';
import { PullQuote } from '../components/page/PullQuote';

export function IntroductionPage() {
  return (
    <Page labelledBy="page-title" width="wide" currentKey="introduction">
      <SectionHeader
        title="Introduction"
        id="page-title"
        standfirst="Before we could reflect on the lived experiences of persons with disability, we had to learn to listen — and to notice how much our assumptions had been standing in for understanding."
      />

      <div className="mt-12 max-w-(--spacing-measure)">
        <Prose paragraphs={introduction.lead} variant="lead" />
      </div>

      <PullQuote attribution={introduction.epigraph.attribution}>
        &ldquo;{introduction.epigraph.text}&rdquo;
      </PullQuote>

      <div className="mt-4 space-y-12 border-t border-hairline pt-12">
        {introduction.subsections.map((sub) => (
          <section key={sub.id} className="grid gap-4 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-12">
            <h2 className="text-display-md text-ink lg:sticky lg:top-8 lg:self-start">{sub.heading}</h2>
            <Prose paragraphs={sub.body} />
          </section>
        ))}
      </div>
    </Page>
  );
}
