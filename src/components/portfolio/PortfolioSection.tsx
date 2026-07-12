import { SectionHeading } from './SectionHeading';

interface PortfolioSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  chapter?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * PortfolioSection wraps each content section with a semantic <section>
 * element, a SectionHeading, and a spaced content area. The section's
 * id is used for both scroll-spy observation and aria-labelledby linkage.
 */
export function PortfolioSection({
  id,
  title,
  subtitle,
  chapter,
  children,
  className = '',
}: PortfolioSectionProps) {
  const headingAnchorId = `${id}-anchor`;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative py-16 md:py-24 border-t border-hairline-soft ${className}`}
    >
      <SectionHeading
        id={headingAnchorId}
        title={title}
        subtitle={subtitle}
        chapter={chapter}
      />
      <div className="space-y-6">{children}</div>
    </section>
  );
}
