import type { PersonalReflection } from '../../types/portfolio';
import { cn } from '../../lib/cn';

const STAGES = [
  { key: 'before', label: 'Before listening' },
  { key: 'challenged', label: 'What challenged my assumptions' },
  { key: 'understand', label: 'What I now understand' },
  { key: 'action', label: 'What I will do differently' },
] as const;

/**
 * A single student's reflection, following the shared four-part arc. The
 * three reflections share this structure but alternate alignment and pull-
 * quote placement so they read as three distinct voices, not cloned cards.
 */
export function ReflectionArcView({
  reflection,
  index,
}: {
  reflection: PersonalReflection;
  index: number;
}) {
  const flipped = index % 2 === 1;

  return (
    <article id={reflection.id} className="scroll-mt-24">
      <div className={cn('flex flex-col gap-4 md:flex-row md:items-baseline md:gap-6', flipped && 'md:flex-row-reverse')}>
        <div className={cn(flipped && 'md:text-right')}>
          <h2 className="text-display-lg text-ink">{reflection.name}</h2>
          <p className="mt-2 font-sans text-label uppercase tracking-wide text-ink-faint">
            {reflection.standfirst}
          </p>
        </div>
      </div>

      <blockquote
        className={cn(
          'my-9 max-w-(--spacing-measure) font-serif text-display-md italic leading-snug text-ink',
          flipped && 'md:ml-auto md:text-right',
        )}
      >
        &ldquo;{reflection.pullQuote}&rdquo;
      </blockquote>

      <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {STAGES.map((stage) => (
          <div key={stage.key}>
            <h3 className="font-sans text-kicker uppercase text-ink-muted">{stage.label}</h3>
            <p className="mt-3 font-serif text-reading leading-relaxed text-ink-muted">
              {reflection.arc[stage.key]}
            </p>
          </div>
        ))}
      </div>

      {/* Commitments */}
      <div className="mt-8 rounded-xl border border-hairline bg-surface-1 p-6">
        <h3 className="font-sans text-kicker uppercase text-ink-faint">My commitments</h3>
        <ul className="mt-4 space-y-3">
          {reflection.commitments.map((commitment, i) => (
            <li key={i} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2.5 h-px w-4 shrink-0 bg-ink-faint"
              />
              <span className="font-serif text-reading leading-relaxed text-ink-muted">
                {commitment}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
