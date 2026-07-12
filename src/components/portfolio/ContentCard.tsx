import { SpotlightCard } from '../decorative/SpotlightCard';

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'insight' | 'reflection' | 'default';
  icon?: React.ReactNode;
}

/**
 * ContentCard is a reusable card for insight panels, reflection panels,
 * and other content blocks. The variant changes the left border accent:
 * insight and reflection get a hairline-bright edge, default stays quiet.
 */
export function ContentCard({
  title,
  children,
  variant = 'default',
  icon,
}: ContentCardProps) {
  const borderColorMap = {
    insight: 'border-l-accent/50',
    reflection: 'border-l-accent/50',
    default: 'border-l-hairline',
  } as const;

  return (
    <SpotlightCard
      className={`rounded-xl border border-hairline bg-surface-1 p-6 border-l-2 ${borderColorMap[variant]}`}
    >
      <div className="mb-4 flex items-center gap-3">
        {icon && (
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <h3 className="text-display-md text-ink">{title}</h3>
      </div>
      <div className="space-y-4 leading-relaxed text-ink-muted">{children}</div>
    </SpotlightCard>
  );
}
