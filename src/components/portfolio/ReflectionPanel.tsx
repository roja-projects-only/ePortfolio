import { SpotlightCard } from '../decorative/SpotlightCard';

interface ReflectionPanelProps {
  icon: React.ReactNode;
  title: string;
  prompt: string;
  children: React.ReactNode;
  elevation?: 1 | 2;
  emphasis?: boolean;
}

/**
 * ReflectionPanel renders one philosophical-reflection concept as a
 * distinct panel: an icon identity, concept title, the fixed guiding
 * prompt as an epigraph, and the student's response slot. Alternating
 * `elevation` and an occasional `emphasis` panel keep the stack from
 * reading as eight identical boxes.
 */
export function ReflectionPanel({
  icon,
  title,
  prompt,
  children,
  elevation = 1,
  emphasis = false,
}: ReflectionPanelProps) {
  return (
    <SpotlightCard
      className={`rounded-xl border border-hairline flex flex-col ${
        elevation === 2 ? 'bg-surface-2' : 'bg-surface-1'
      } ${emphasis ? 'p-7 md:p-9' : 'p-6 md:p-7'}`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className={emphasis ? 'text-display-md text-ink' : 'text-lg font-medium text-ink'}>
          {title}
        </h3>
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-3 text-ink"
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>
      <p className="mb-5 font-serif italic leading-relaxed text-ink-muted">{prompt}</p>
      <div className="mt-auto border-t border-hairline-soft pt-4 leading-relaxed text-ink-muted">
        {children}
      </div>
    </SpotlightCard>
  );
}
