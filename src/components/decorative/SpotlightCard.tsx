import { useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/cn';

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: string;
}

/**
 * A surface card with a soft cursor-follow highlight — an accessible,
 * dependency-free adaptation of the React Bits SpotlightCard pattern
 * (see .agents/skills research), recolored to a neutral glow rather than
 * a saturated brand gradient. Disabled for touch pointers and under
 * prefers-reduced-motion, since it is a decorative affordance only —
 * every card remains fully usable without it.
 */
export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(242, 242, 240, 0.06)',
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={reducedMotion ? undefined : handleMouseMove}
      onMouseEnter={reducedMotion ? undefined : () => setOpacity(1)}
      onMouseLeave={reducedMotion ? undefined : () => setOpacity(0)}
      className={cn('relative overflow-hidden', className)}
    >
      {!reducedMotion && (
        <div
          aria-hidden="true"
          data-decorative="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out max-md:hidden"
          style={{
            opacity,
            background: `radial-gradient(320px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 75%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
