import { Reveal, RevealHeading } from '../motion/Reveal';

interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
  chapter?: string;
}

/**
 * SectionHeading renders an h2 with an offset anchor for scroll-spy accuracy.
 * The `id` prop is applied to a visually-hidden anchor div positioned above
 * the heading. The heading itself gets `${id}`-heading for aria-labelledby
 * references from its parent PortfolioSection. An optional roman-numeral
 * `chapter` marker reinforces the portfolio's chapter-by-chapter identity.
 */
export function SectionHeading({
  id,
  title,
  subtitle,
  chapter,
}: SectionHeadingProps) {
  const headingId = id.endsWith('-anchor')
    ? id.replace(/-anchor$/, '-heading')
    : `${id}-heading`;

  return (
    <div className="relative mb-10 md:mb-14">
      <div
        id={id}
        className="pointer-events-none absolute -top-24"
        aria-hidden="true"
      />
      {chapter && (
        <Reveal>
          <p
            aria-hidden="true"
            className="mb-3 font-serif text-sm italic tracking-[0.2em] text-ink-faint"
          >
            Chapter {chapter}
          </p>
        </Reveal>
      )}
      <RevealHeading as="h2" id={headingId} delay={0.05}>
        <span className="block text-display-lg text-ink">{title}</span>
      </RevealHeading>
      {subtitle && (
        <Reveal delay={0.15}>
          <p className="mt-3 max-w-prose text-lg text-ink-muted">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
