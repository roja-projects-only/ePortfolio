import type { ParticipantProfile, DocumentationFigure } from '../../types/portfolio';
import { Figure } from '../page/Figure';

interface ParticipantCardProps {
  profile: ParticipantProfile;
  figure?: DocumentationFigure;
  index: number;
}

/**
 * One anonymised participant profile. The two profiles are presented with
 * equal visual weight — neither is framed as "more disabled" or more worthy
 * of attention. Contrast lives in the content, not in styling hierarchy.
 */
export function ParticipantCard({ profile, figure, index }: ParticipantCardProps) {
  const numeral = String(index + 1).padStart(2, '0');

  return (
    <article className="flex flex-col">
      {figure && (
        <Figure
          src={figure.src}
          alt={figure.alt}
          caption={figure.caption}
          aspect="aspect-[5/4]"
          className="mb-6"
        />
      )}

      <div className="flex items-baseline gap-3">
        <span aria-hidden="true" className="font-sans text-kicker tracking-normal tabular-nums text-ink-faint">
          {numeral}
        </span>
        <h2 className="text-display-lg text-ink">{profile.alias}</h2>
      </div>

      <p className="mt-4 font-serif text-lead leading-relaxed text-ink-muted">{profile.summary}</p>

      <h3 className="mt-8 font-sans text-kicker uppercase text-ink-faint">Lived realities</h3>
      <ul className="mt-4 space-y-3">
        {profile.realities.map((reality, i) => (
          <li key={i} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-2.5 h-px w-4 shrink-0 bg-ink-faint"
            />
            <span className="font-serif text-reading leading-relaxed text-ink-muted">{reality}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-xl border border-hairline bg-surface-1 p-5">
        <h3 className="font-sans text-kicker uppercase text-ink-faint">Our reading</h3>
        <p className="mt-3 font-serif text-reading leading-relaxed text-ink">
          {profile.interpretation}
        </p>
      </div>
    </article>
  );
}
