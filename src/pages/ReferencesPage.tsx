import { ArrowUpRight } from 'lucide-react';
import { references } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import type { Reference } from '../types/portfolio';

const bibliographySections: readonly {
  types: readonly Reference['type'][];
  key: string;
  title: string;
  description: string;
}[] = [
  {
    types: ['personalCommunication'],
    key: 'primary',
    title: 'Primary sources',
    description: 'Anonymous interviews cited as personal communications.',
  },
  {
    types: ['supportingDocument'],
    key: 'supporting',
    title: 'Project data and supporting documents',
    description:
      'Group-produced documents and raw data that form the basis of the portfolio\u2019s content and analysis.',
  },
  {
    types: ['philosophical', 'academic'],
    key: 'academic',
    title: 'Academic or philosophical sources',
    description:
      'Works explicitly cited in the portfolio\u2019s philosophical reflection.',
  },
];

export function ReferencesPage() {
  const populatedSections = bibliographySections.flatMap((section) => {
    const entries = references.references.filter((reference) =>
      section.types.includes(reference.type),
    );
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
            key={section.key}
            aria-labelledby={`${section.key}-heading`}
            className="border-b border-hairline py-9 sm:py-11"
          >
            <div className="flex flex-col gap-6 md:flex-row md:gap-12 lg:gap-16">
              <header className="md:w-52 md:shrink-0">
                <h2 id={`${section.key}-heading`} className="font-serif text-display-md text-ink">
                  {section.title}
                </h2>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
                  {section.description}
                </p>
              </header>

              <ol className="min-w-0 flex-1 space-y-5">
                {section.entries.map((reference) =>
                  section.types.includes('supportingDocument') ? (
                    <li
                      key={reference.citation}
                      className="max-w-(--spacing-measure-wide) space-y-1.5 pl-6 -indent-6"
                    >
                      <p className="font-serif text-reading leading-[1.72] text-ink">
                        {reference.citation}
                      </p>
                      {reference.description && (
                        <p className="font-sans text-sm leading-relaxed text-ink-muted">
                          {reference.description}
                        </p>
                      )}
                      <div className="flex items-center gap-3 pt-0.5">
                        {reference.platform && (
                          <span className="font-sans text-xs text-ink-faint">
                            {reference.platform}
                          </span>
                        )}
                        {reference.url && (
                          <a
                            href={reference.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-sans text-sm text-accent underline underline-offset-2 hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                          >
                            View document
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </li>
                  ) : (
                    <li
                      key={reference.citation}
                      className="max-w-(--spacing-measure-wide) pl-6 -indent-6 font-serif text-reading leading-[1.72] text-ink"
                    >
                      {reference.citation}
                    </li>
                  ),
                )}
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
