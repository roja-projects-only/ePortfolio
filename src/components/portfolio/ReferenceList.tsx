interface ReferenceListProps {
  references: Array<{ citation: string; type: string }>;
}

/**
 * ReferenceList displays academic references in two clean groups —
 * the interview as personal communication, and any other sources —
 * keeping the closing section calm and citation-focused.
 */
export function ReferenceList({ references }: ReferenceListProps) {
  const personalCommunications = references.filter((r) => r.type === 'personalCommunication');
  const other = references.filter((r) => r.type !== 'personalCommunication');

  return (
    <div className="space-y-10">
      <p className="text-sm italic text-ink-faint">References follow APA formatting guidelines.</p>

      {references.length === 0 ? (
        <p className="italic text-ink-muted">No references listed.</p>
      ) : (
        <>
          {personalCommunications.length > 0 && (
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
                Interview
              </h3>
              <ul className="space-y-3 border-l border-hairline pl-5">
                {personalCommunications.map((ref, index) => (
                  <li key={index} className="leading-relaxed text-ink">
                    {ref.citation}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {other.length > 0 && (
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-ink-faint">
                Other Sources
              </h3>
              <ul className="space-y-3 border-l border-hairline pl-5">
                {other.map((ref, index) => (
                  <li key={index} className="leading-relaxed text-ink">
                    {ref.citation}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
