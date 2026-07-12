import { conclusion } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { Prose } from '../components/page/Prose';

export function ConclusionPage() {
  return (
    <Page labelledBy="page-title" width="reading" currentKey="conclusion">
      <SectionHeader
        chapter="Chapter IX"
        title="Conclusion"
        id="page-title"
        standfirst="What we set out to learn about disability became, more deeply, something we learned about being human."
      />

      <div className="mt-12">
        <Prose paragraphs={conclusion.body} variant="lead" />
      </div>

      <p className="mt-12 border-t border-hairline pt-10 font-serif text-display-md leading-snug text-ink">
        {conclusion.finalStatement}
      </p>
    </Page>
  );
}
