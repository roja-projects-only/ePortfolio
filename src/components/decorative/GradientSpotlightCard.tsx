import { cn } from '../../lib/cn';

interface GradientSpotlightCardProps extends React.PropsWithChildren {
  variant: 'violet' | 'sunset';
  className?: string;
}

const gradients: Record<GradientSpotlightCardProps['variant'], string> = {
  violet: 'linear-gradient(135deg, #7a5cf7 0%, #6a4cf5 45%, #4a34b8 100%)',
  sunset: 'linear-gradient(135deg, #ff8a4d 0%, #ff7a3d 45%, #ff5577 100%)',
};

/**
 * The DESIGN.md "gradient spotlight card" — the site's signature atmosphere
 * device. Used sparingly (twice, total, across the whole portfolio) to mark
 * the two most emotionally significant moments, per DESIGN.md's own rule
 * that these are scarce accents, not a section-background pattern.
 */
export function GradientSpotlightCard({ variant, className, children }: GradientSpotlightCardProps) {
  return (
    <div
      className={cn('relative rounded-2xl p-8 md:p-10 text-ink ring-1 ring-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]', className)}
      style={{ background: gradients[variant] }}
    >
      {children}
    </div>
  );
}
