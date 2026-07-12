import { cn } from '../../lib/cn';

/**
 * The portfolio's signature device, used EXACTLY TWICE across the whole read:
 *   • `insight` (green)  — the participant's featured quotation (Voices)
 *   • `turning` (gold)   — the turn from reflection to commitment (Commitments)
 *
 * A third instance anywhere would flatten the device into decoration, so this
 * component is intentionally only imported by those two pages. Text is set in
 * near-black on the vivid fill for high contrast (a deliberate correction over
 * DESIGN.md's near-white-on-bright note, which failed WCAG on the light stops).
 */
const gradients = {
  insight:
    'linear-gradient(135deg, var(--color-insight-from) 0%, var(--color-insight-via) 48%, var(--color-insight-to) 100%)',
  turning:
    'linear-gradient(135deg, var(--color-turning-from) 0%, var(--color-turning-via) 48%, var(--color-turning-to) 100%)',
} as const;

interface SpotlightProps extends React.PropsWithChildren {
  variant: keyof typeof gradients;
  /** Small over-line label, e.g. "The fear that stayed with us". */
  label: string;
  className?: string;
}

export function Spotlight({ variant, label, className, children }: SpotlightProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-2xl p-8 text-(--color-spotlight-ink) shadow-md ring-1 ring-hairline sm:p-10',
        className,
      )}
      style={{ background: gradients[variant] }}
    >
      <p className="mb-6 font-sans text-kicker font-semibold uppercase text-(--color-spotlight-ink-soft)">
        {label}
      </p>
      {children}
    </section>
  );
}
