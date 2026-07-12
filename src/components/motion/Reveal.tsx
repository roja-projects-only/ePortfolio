import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/cn';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  amount?: number;
}

/**
 * Fade + rise wrapper triggered once when the element enters the viewport.
 * Renders children inert (no transform/opacity animation) when the user
 * prefers reduced motion, per AGENTS.md.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.6,
  amount = 0.3,
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface RevealHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  delay?: number;
  id?: string;
}

/**
 * Mask reveal for headings: the heading rises out from behind an
 * overflow-hidden clip, giving a poster-style entrance for display type.
 * The `id` lands on the actual heading element so aria-labelledby
 * references from a parent section keep pointing at the real heading.
 */
export function RevealHeading({
  children,
  className,
  as = 'h2',
  delay = 0,
  id,
}: RevealHeadingProps) {
  const reducedMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reducedMotion) {
    const Tag = as;
    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <div className={cn('overflow-hidden', className)}>
      <MotionTag
        id={id}
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </MotionTag>
    </div>
  );
}
