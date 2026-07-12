import { ShieldCheck } from 'lucide-react';
import { references } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';

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
        title="References"
        id="page-title"
        standfirst={references.intro}
      />

      <section aria-labelledby="refs-heading" className="mt-14">
        <div className="space-y-8">
          {Object.entries(groups).map(([type, refs]) => (
            <div key={type}>
              <h2 className="font-sans text-kicker uppercase text-ink-faint">{typeLabels[type] ?? type}</h2>
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
