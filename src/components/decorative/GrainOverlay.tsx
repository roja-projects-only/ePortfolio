const GRAIN_SVG = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <filter id="n">
    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
    <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0" />
  </filter>
  <rect width="100%" height="100%" filter="url(#n)" />
</svg>
`);

/**
 * Fixed, full-viewport film-grain texture. Purely atmospheric — sits behind
 * all content, never intercepts pointer or keyboard interaction, and is
 * stripped from print output via [data-decorative].
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      data-decorative="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.05] animate-grain"
      style={{
        backgroundImage: `url("data:image/svg+xml,${GRAIN_SVG}")`,
        backgroundSize: '180px 180px',
      }}
    />
  );
}
