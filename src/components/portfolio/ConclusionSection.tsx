import type { PortfolioData } from '../../types/portfolio';
import { AtmosphereVignette } from '../decorative/AtmosphereVignette';
import { Reveal } from '../motion/Reveal';
import { ContentCard } from './ContentCard';
import { ContentPlaceholder } from './ContentPlaceholder';

interface ConclusionSectionProps {
  data: PortfolioData['conclusion'];
}

function renderBody(text: string) {
  return text.startsWith('[') ? <ContentPlaceholder instruction={text} /> : <p>{text}</p>;
}

/**
 * A calm, quiet closing environment. The vignette rhymes visually with
 * CoverSection to give the portfolio a clear beginning/end bookend.
 */
export function ConclusionSection({ data }: ConclusionSectionProps) {
  return (
    <div className="relative -mx-6 px-6 py-4">
      <AtmosphereVignette />
      <div className="relative space-y-6">
        <Reveal>
          <ContentCard title="What I Learned" variant="insight">
            {renderBody(data.learningSummary)}
          </ContentCard>
        </Reveal>
        <Reveal delay={0.08}>
          <ContentCard title="Why Philosophical Reflection Matters" variant="insight">
            {renderBody(data.whyPhilosophicalReflectionMatters)}
          </ContentCard>
        </Reveal>
      </div>
    </div>
  );
}
