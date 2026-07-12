import { useState } from 'react';
import { Camera } from 'lucide-react';
import { cn } from '../../lib/cn';

interface FigureProps {
  /** Path relative to the public base; when absent, a placeholder is shown. */
  src?: string;
  alt: string;
  caption: string;
  aspect?: string;
  className?: string;
}

function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/**
 * A documentation figure. Renders the real photograph when a `src` is
 * provided (and falls back gracefully if it fails to load), otherwise an
 * accessible, dignified placeholder that makes it clear a photograph
 * belongs here — so approved images can be dropped in later without any
 * layout surprise. Alt text and captions never disclose an identity.
 */
export function Figure({ src, alt, caption, aspect = 'aspect-[4/3]', className }: FigureProps) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <figure className={cn('flex flex-col', className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-xl border border-hairline bg-surface-1',
          aspect,
        )}
        data-figure-placeholder={showImage ? undefined : ''}
      >
        {showImage ? (
          <img
            src={withBase(src)}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-canvas-subtle text-ink-faint">
            <Camera size={22} aria-hidden="true" />
            <span className="px-4 text-center font-sans text-label text-ink-muted">
              Documentation photograph
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-3 font-sans text-label leading-relaxed text-ink-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
