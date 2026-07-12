import type { Theme } from '../../types/portfolio';
import { shortAliasFor } from '../../lib/participants';

/**
 * One thematic finding, presented as a document entry rather than a uniform
 * card. Each entry cleanly separates our interpretation, the supporting
 * evidence (tagged by participant so shared and participant-specific
 * experiences are distinguishable), and the broader social reality.
 */
export function ThemeEntry({ theme }: { theme: Theme }) {
  return (
    <article id={theme.id} className="scroll-mt-24 border-t border-hairline pt-10">
      <div className="flex items-baseline gap-4">
        <span aria-hidden="true" className="font-serif text-display-lg leading-none text-ink-faint tabular-nums">
          {String(theme.number).padStart(2, '0')}
        </span>
        <h2 className="text-display-lg text-ink">{theme.title}</h2>
      </div>

      <p className="mt-5 max-w-(--spacing-measure) font-serif text-reading leading-relaxed text-ink-muted">
        {theme.interpretation}
      </p>

      <div className="mt-7 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="font-sans text-kicker uppercase text-ink-faint">Evidence</h3>
          <ul className="mt-4 space-y-4">
            {theme.evidence.map((ev, i) => (
              <li key={i} className="flex flex-col gap-1.5">
                <span className="inline-flex w-fit items-center rounded-sm border border-hairline bg-surface-2 px-2 py-0.5 font-sans text-kicker font-medium uppercase text-ink-muted">
                  {shortAliasFor(ev.source)}
                </span>
                <span className="font-serif text-reading leading-relaxed text-ink-muted">{ev.point}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-xl border border-hairline bg-surface-1 p-5">
          <h3 className="font-sans text-kicker uppercase text-ink-faint">The broader social reality</h3>
          <p className="mt-3 font-serif text-reading leading-relaxed text-ink">{theme.socialReality}</p>
        </aside>
      </div>
    </article>
  );
}
