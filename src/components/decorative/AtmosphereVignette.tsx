/**
 * A quiet radial vignette used only on the Cover and Conclusion — the two
 * moments meant to visually rhyme (open / close the portfolio). Kept
 * monochrome/blue-tinted rather than a saturated brand gradient, since
 * DESIGN.md reserves the violet/orange gradient family for cards, not
 * section grounds.
 */
export function AtmosphereVignette() {
  return (
    <div
      aria-hidden="true"
      data-decorative="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute left-1/2 top-[-10%] h-[70vh] w-[140vw] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(94,168,255,0.16), rgba(106,76,245,0.08) 55%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(var(--color-hairline) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(circle at 50% 35%, black, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 35%, black, transparent 70%)',
        }}
      />
    </div>
  );
}
