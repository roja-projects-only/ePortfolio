import { concisePhilosophy } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { Prose } from '../components/page/Prose';

export function PhilosophyPage() {
  return (
    <Page labelledBy="page-title" currentKey="philosophy">
      <SectionHeader title="Philosophical Reflection" id="page-title" size="2xl" />

      <div className="mt-12">
        {concisePhilosophy.sections.map((section) => (
          <section
            key={section.id}
            aria-labelledby={`${section.id}-heading`}
            className="border-t border-hairline py-10 first:border-t-0 first:pt-0"
          >
            <h2 id={`${section.id}-heading`} className="text-display-lg text-ink">
              {section.heading}
            </h2>
            <div className="mt-5 max-w-(--spacing-measure)">
              <Prose paragraphs={section.body} />
            </div>
          </section>
        ))}
      </div>
    </Page>
  );
}
