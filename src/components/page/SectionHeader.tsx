import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/cn';

interface SectionHeaderProps {
  /** Chapter mark shown as a restrained kicker, e.g. "Chapter III". */
  chapter?: string;
  title: string;
  /** Optional lead sentence set below the title in the serif reading voice. */
  standfirst?: string;
  /** id lands on the h1 so a parent <article aria-labelledby> can point at it. */
  id?: string;
  className?: string;
  size?: 'xl' | '2xl';
}

export function SectionHeader({
  chapter,
  title,
  standfirst,
  id,
  className,
  size = 'xl',
}: SectionHeaderProps) {
  const reducedMotion = useReducedMotion();

  const heading = (
    <h1
      id={id}
      className={cn(
        'text-ink',
        size === '2xl' ? 'text-display-2xl' : 'text-display-xl',
      )}
    >
      {title}
    </h1>
  );

  return (
    <header className={cn('max-w-3xl', className)}>
      {chapter && (
        <p className="mb-4 font-sans text-kicker uppercase text-ink-faint">{chapter}</p>
      )}
      {reducedMotion ? (
        heading
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {heading}
        </motion.div>
      )}
      {standfirst && (
        <p className="mt-5 max-w-(--spacing-measure-tight) font-serif text-lead text-ink-muted">
          {standfirst}
        </p>
      )}
    </header>
  );
}
