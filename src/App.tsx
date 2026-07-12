import portfolioData from './content/portfolioData';
import { useScrollSpy } from './hooks/useScrollSpy';
import { SkipLink } from './components/navigation/SkipLink';
import { PortfolioNavigation } from './components/navigation/PortfolioNavigation';
import { CoverSection } from './components/portfolio/CoverSection';
import { PortfolioSection } from './components/portfolio/PortfolioSection';
import { IntroductionSequence } from './components/portfolio/IntroductionSequence';
import { CommunityEngagementSection } from './components/portfolio/CommunityEngagementSection';
import { InterviewHighlightsSection } from './components/portfolio/InterviewHighlightsSection';
import { PhilosophicalReflectionSection } from './components/portfolio/PhilosophicalReflectionSection';
import { PersonalJourney } from './components/portfolio/PersonalJourney';
import { ConclusionSection } from './components/portfolio/ConclusionSection';
import { ReferenceList } from './components/portfolio/ReferenceList';
import { ContentPlaceholder } from './components/portfolio/ContentPlaceholder';
import { GrainOverlay } from './components/decorative/GrainOverlay';
import { PrintHeader } from './components/layout/PrintHeader';
import { Footer } from './components/layout/Footer';

const sectionIds = [
  'cover',
  'introduction',
  'community-engagement',
  'interview-highlights',
  'philosophical-reflection',
  'personal-reflection',
  'conclusion',
  'references',
];

/**
 * Renders either a ContentPlaceholder (when the string starts with '[')
 * or a plain paragraph with the text content.
 */
function renderContent(text: string): React.ReactNode {
  if (text.startsWith('[')) {
    return <ContentPlaceholder instruction={text} />;
  }
  return <p className="leading-relaxed text-ink-muted">{text}</p>;
}

export function App() {
  const activeId = useScrollSpy(sectionIds);
  const data = portfolioData;

  return (
    <>
      <SkipLink />
      <GrainOverlay />

      <PortfolioNavigation sectionIds={sectionIds} activeId={activeId} />

      <main id="main-content" className="relative">
        {/* Section 1: Cover */}
        <CoverSection />

        {/* Content wrapper for all subsequent sections */}
        <div className="mx-auto max-w-4xl px-6 pb-16">
          {/* Section 2: Introduction */}
          <PortfolioSection
            id="introduction"
            title="Introduction"
            subtitle="Understanding the philosophical foundations of this activity"
            chapter="I"
          >
            <IntroductionSequence
              purpose={data.introduction.purpose}
              phenomenologyExplanation={data.introduction.phenomenologyExplanation}
              whyListeningMatters={data.introduction.whyListeningMatters}
            />
          </PortfolioSection>

          {/* Section 3: Community Engagement */}
          <PortfolioSection
            id="community-engagement"
            title="Community Engagement"
            subtitle="Documenting the encounter"
            chapter="II"
          >
            <CommunityEngagementSection data={data.communityEngagement} />
          </PortfolioSection>

          {/* Section 4: Interview Highlights */}
          <PortfolioSection
            id="interview-highlights"
            title="Interview Highlights"
            subtitle="Key moments from the conversation"
            chapter="III"
          >
            <InterviewHighlightsSection highlights={data.interviewHighlights} />
          </PortfolioSection>

          {/* Section 5: Philosophical Reflection */}
          <PortfolioSection
            id="philosophical-reflection"
            title="Philosophical Reflection"
            subtitle="Engaging with deeper questions"
            chapter="IV"
          >
            <PhilosophicalReflectionSection data={data.philosophicalReflection} />
          </PortfolioSection>

          {/* Section 6: Personal Reflection */}
          <PortfolioSection
            id="personal-reflection"
            title="Personal Reflection"
            subtitle="Before the encounter, through it, and beyond"
            chapter="V"
          >
            <PersonalJourney
              beforePrompt={data.personalReflection.beforeInterview.prompt}
              beforeChildren={renderContent(data.personalReflection.beforeInterview.response)}
              afterPrompt={data.personalReflection.afterInterview.prompt}
              afterChildren={renderContent(data.personalReflection.afterInterview.response)}
              actionsPrompt={data.personalReflection.concreteActionsPrompt}
              actions={data.personalReflection.concreteActions}
            />
          </PortfolioSection>

          {/* Section 7: Conclusion */}
          <PortfolioSection id="conclusion" title="Conclusion" subtitle="Synthesis and significance" chapter="VI">
            <ConclusionSection data={data.conclusion} />
          </PortfolioSection>

          {/* Section 8: References */}
          <PortfolioSection id="references" title="References" chapter="VII">
            <ReferenceList references={data.references} />
          </PortfolioSection>
        </div>
      </main>

      <PrintHeader />
      <Footer />
    </>
  );
}
