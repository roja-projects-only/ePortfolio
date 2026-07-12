import { references } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import type { Reference } from '../types/portfolio';

const bibliographySections: readonly {
  type: Reference['type'];
  title: string;
  description: string;
}[] = [
  {
    type: 'personalCommunication',
    title: 'Primary sources',
    description: 'Anonymous interviews cited as personal communications.',
  },
  {
    type: 'philosophical',
    title: 'Philosophical source',
    description: 'The source used in the portfolio’s discussion of the unity of body and soul.',
  },
  {
    type: 'academic',
    title: 'Academic sources',
    description: 'Academic works directly cited in the portfolio.',
  },
];

export function ReferencesPage() {
  const populatedSections = bibliographySections.flatMap((section) => {
    const entries = references.references.filter((reference) => reference.type === section.type);
    return entries.length > 0 ? [{ ...section, entries }] : [];
  });

  return (
    <Page labelledBy="page-title" width="wide" currentKey="references">
      <SectionHeader
        title="References"
        id="page-title"
        standfirst={references.intro}
      />

      <section aria-label="Bibliography" className="mt-12 border-t border-hairline sm:mt-14">
        {populatedSections.map((section) => (
          <section
            key={section.type}
            aria-labelledby={`${section.type}-heading`}
            className="border-b border-hairline py-9 sm:py-11"
          >
            <div className="flex flex-col gap-6 md:flex-row md:gap-12 lg:gap-16">
              <header className="md:w-52 md:shrink-0">
                <h2 id={`${section.type}-heading`} className="font-serif text-display-md text-ink">
                  {section.title}
                </h2>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
                  {section.description}
                </p>
              </header>

              <ol className="min-w-0 flex-1 space-y-5">
                {section.entries.map((reference) => (
                  <li
                    key={reference.citation}
                    className="max-w-(--spacing-measure-wide) pl-6 -indent-6 font-serif text-reading leading-[1.72] text-ink"
                  >
                    {reference.citation}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}
      </section>

      <aside
        aria-label="Confidentiality statement"
        className="mt-12 max-w-(--spacing-measure-wide) border-y border-hairline py-7 sm:mt-14 sm:py-8"
      >
        <h2 className="font-sans text-label font-semibold text-ink">Confidentiality note</h2>
        <p className="mt-3 font-serif text-reading leading-relaxed text-ink-muted">
          {references.confidentiality}
        </p>
      </aside>
    </Page>
  );
}
