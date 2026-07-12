import type { ProcessStep } from '../../types/portfolio';

/**
 * A vertical, numbered timeline of the research process. The numbering is
 * informational here — these are genuinely sequential steps (consent →
 * interview → transcription → review → analysis), not decorative markers.
 */
export function ProcessTimeline({ steps }: { steps: readonly ProcessStep[] }) {
  return (
    <ol className="relative">
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={i} className="relative flex gap-5 pb-8 last:pb-0">
            {/* Connector line */}
            {!last && (
              <span
                aria-hidden="true"
                className="absolute left-4 top-9 bottom-0 w-px bg-hairline"
              />
            )}
            <span
              aria-hidden="true"
              className="relative z-(--z-raised) flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface-1 font-sans text-label tabular-nums text-ink-muted"
            >
              {i + 1}
            </span>
            <div className="pt-0.5">
              <h3 className="font-serif text-display-md text-ink">{step.label}</h3>
              <p className="mt-2 max-w-(--spacing-measure) font-serif text-reading leading-relaxed text-ink-muted">
                {step.detail}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
