interface ContentPlaceholderProps {
  instruction: string;
}

/**
 * ContentPlaceholder renders a visually distinct dashed card for content
 * that has not yet been filled in. All strings in portfolioData that
 * start with "[" are considered placeholders. data-placeholder drives the
 * print stylesheet's dashed-border treatment.
 */
export function ContentPlaceholder({ instruction }: ContentPlaceholderProps) {
  return (
    <div
      data-placeholder="true"
      className="rounded-xl border-2 border-dashed border-amber-400/30 bg-amber-400/[0.04] p-6"
      role="status"
      aria-label="Placeholder content — needs to be replaced"
    >
      <p className="text-sm italic leading-relaxed text-amber-200/70">{instruction}</p>
    </div>
  );
}
