import type { Concept } from '../../types/portfolio';
import { Prose } from '../page/Prose';
import { cn } from '../../lib/cn';

/**
 * One of the four philosophical concepts (dignity, freedom, empathy,
 * transcendence). Panels alternate elevation — not colour — so a stack of
 * four never reads as identical boxes, per the DESIGN.md rule.
 */
export function ConceptPanel({ concept, index }: { concept: Concept; index: number }) {
  const emphasis = index % 2 === 1;
  const numeral = String(index + 1).padStart(2, '0');

  return (
    <article
      className={cn(
        'rounded-2xl border border-hairline p-7 sm:p-9',
        emphasis ? 'bg-surface-2' : 'bg-surface-1',
      )}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-12">
        <div>
          <p className="font-sans text-kicker uppercase text-ink-faint">Concept {numeral}</p>
          <h2 className="mt-3 text-display-lg text-ink">{concept.name}</h2>
          <p className="mt-4 font-serif text-lead italic leading-snug text-ink">
            {concept.thesis}
          </p>
        </div>
        <Prose paragraphs={concept.body} />
      </div>
    </article>
  );
}
