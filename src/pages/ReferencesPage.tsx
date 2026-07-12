import { ShieldCheck } from 'lucide-react';
import { references } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { Prose } from '../components/page/Prose';
import { Figure } from '../components/page/Figure';

const typeLabels: Record<string, string> = {
  personalCommunication: 'Interviews (personal communications)',
  philosophical: 'Philosophical sources',
  academic: 'Academic sources',
};

export function ReferencesPage() {
  // Group references by type, preserving first-seen order.
  const groups = references.references.reduce<Record<string, typeof references.references[number][]>>(
    (acc, ref) => {
      (acc[ref.type] ??= []).push(ref);
      return acc;
    },
    {},
  );

  return (
    <Page labelledBy="page-title" width="wide" currentKey="references">
      <SectionHeader
        chapter="Chapter X"
        title="References & Documentation"
        id="page-title"
        standfirst={references.intro}
      />

      {/* References */}
      <section aria-labelledby="refs-heading" className="mt-14">
        <h2 id="refs-heading" className="text-display-md text-ink">
          Sources
        </h2>
        <div className="mt-6 space-y-8">
          {Object.entries(groups).map(([type, refs]) => (
            <div key={type}>
              <h3 className="font-sans text-kicker uppercase text-ink-faint">{typeLabels[type] ?? type}</h3>
              <ul className="mt-4 space-y-4">
                {refs.map((ref, i) => (
                  <li
                    key={i}
                    className="max-w-(--spacing-measure) pl-6 -indent-6 font-serif text-reading leading-relaxed text-ink-muted"
                  >
                    {ref.citation}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation gallery */}
      <section aria-labelledby="docs-heading" className="mt-16 border-t border-hairline pt-12">
        <h2 id="docs-heading" className="text-display-md text-ink">
          Photo documentation
        </h2>
        <p className="mt-3 max-w-(--spacing-measure) font-serif text-reading leading-relaxed text-ink-muted">
          Photographs are shown only with permission. No caption, filename, or
          description discloses an identity.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {references.documentation.map((doc) => (
            <Figure key={doc.id} src={doc.src} alt={doc.alt} caption={doc.caption} />
          ))}
        </div>
      </section>

      {/* Contributions */}
      <section aria-labelledby="contrib-heading" className="mt-16 border-t border-hairline pt-12">
        <h2 id="contrib-heading" className="text-display-md text-ink">
          Group member contributions
        </h2>
        <dl className="mt-6 divide-y divide-hairline-soft rounded-2xl border border-hairline bg-surface-1">
          {references.contributions.map((c) => (
            <div key={c.name} className="grid gap-1 p-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-6">
              <dt className="font-serif text-reading font-medium text-ink">{c.name}</dt>
              <dd className="font-serif text-reading leading-relaxed text-ink-muted">{c.role}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Methodology */}
      <section aria-labelledby="method-heading" className="mt-16 border-t border-hairline pt-12">
        <h2 id="method-heading" className="text-display-md text-ink">
          Methodology &amp; process notes
        </h2>
        <div className="mt-6 max-w-(--spacing-measure)">
          <Prose paragraphs={references.methodology} />
        </div>
      </section>

      {/* Confidentiality */}
      <aside
        aria-label="Confidentiality statement"
        className="mt-16 flex flex-col gap-4 rounded-2xl border border-hairline bg-surface-2 p-7 sm:flex-row sm:gap-6 sm:p-9"
      >
        <ShieldCheck size={24} aria-hidden="true" className="shrink-0 text-ink-muted" />
        <div>
          <h2 className="font-serif text-display-md text-ink">Confidentiality</h2>
          <p className="mt-3 max-w-(--spacing-measure) font-serif text-reading leading-relaxed text-ink-muted">
            {references.confidentiality}
          </p>
        </div>
      </aside>
    </Page>
  );
}
