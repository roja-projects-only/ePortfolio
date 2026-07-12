import portfolioData from '../../content/portfolioData';

export function PrintHeader() {
  return (
    <div className="fixed top-0 right-0 left-0 hidden border-b border-hairline bg-canvas py-2 text-center text-xs text-ink-muted print:block">
      {portfolioData.cover.projectTitle} &mdash; Philosophy of the Human Person &mdash; ePortfolio
    </div>
  );
}
