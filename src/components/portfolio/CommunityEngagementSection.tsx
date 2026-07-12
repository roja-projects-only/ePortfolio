import { User, Calendar, MapPin, PhoneCall, FileCheck, Mic, ScrollText, Scale } from 'lucide-react';
import type { PortfolioData } from '../../types/portfolio';
import { SpotlightCard } from '../decorative/SpotlightCard';
import { Reveal } from '../motion/Reveal';
import { StaggerGroup, StaggerItem } from '../motion/Stagger';
import { ContentCard } from './ContentCard';
import { ContentPlaceholder } from './ContentPlaceholder';

interface CommunityEngagementSectionProps {
  data: PortfolioData['communityEngagement'];
}

const ethicsSteps = [
  { title: 'Contact', icon: <PhoneCall size={16} /> },
  { title: 'Consent', icon: <FileCheck size={16} /> },
  { title: 'Interview', icon: <Mic size={16} /> },
  { title: 'Reflection', icon: <ScrollText size={16} /> },
];

export function CommunityEngagementSection({ data }: CommunityEngagementSectionProps) {
  return (
    <div className="space-y-8">
      <Reveal>
        <SpotlightCard className="rounded-xl border border-hairline bg-surface-1 p-6">
          <h3 className="mb-5 text-display-md text-ink">Participant Information</h3>
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5 text-ink-muted">
              <User size={18} className="shrink-0 text-ink-faint" aria-hidden="true" />
              <span>
                <strong className="font-medium text-ink">Alias:</strong> {data.participantAlias}
              </span>
            </div>
            <p className="pl-[26px] leading-relaxed text-ink-muted">{data.participantDescription}</p>
            <div className="flex items-center gap-2.5 text-ink-muted">
              <Calendar size={18} className="shrink-0 text-ink-faint" aria-hidden="true" />
              <span>
                <strong className="font-medium text-ink">Interview Date:</strong> {data.interviewDate}
              </span>
            </div>
            {data.showLocation && (
              <div className="flex items-center gap-2.5 text-ink-muted">
                <MapPin size={18} className="shrink-0 text-ink-faint" aria-hidden="true" />
                <span>
                  <strong className="font-medium text-ink">Location:</strong> {data.interviewLocation}
                </span>
              </div>
            )}
          </div>
        </SpotlightCard>
      </Reveal>

      {/* Ethics process flow — documentary-style, not decorative-only */}
      <StaggerGroup className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {ethicsSteps.map((step, index) => (
          <StaggerItem key={step.title}>
            <div className="relative rounded-lg border border-hairline bg-surface-1 p-4 text-center">
              <span
                className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-ink"
                aria-hidden="true"
              >
                {step.icon}
              </span>
              <p className="text-xs font-medium text-ink-muted">
                <span className="text-ink-faint">{String(index + 1).padStart(2, '0')} </span>
                {step.title}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <ContentCard title="Ethical Reflection" variant="reflection" icon={<Scale size={20} />}>
        {data.ethicalReflection.startsWith('[') ? (
          <ContentPlaceholder instruction={data.ethicalReflection} />
        ) : (
          <p>{data.ethicalReflection}</p>
        )}
      </ContentCard>
    </div>
  );
}
