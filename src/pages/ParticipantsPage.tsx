import { participants, participantsIntro, references } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { ParticipantCard } from '../components/portfolio/ParticipantCard';

export function ParticipantsPage() {
  return (
    <Page labelledBy="page-title" width="wide" currentKey="participants">
      <SectionHeader
        chapter="Chapter III"
        title="Meet the Participants"
        id="page-title"
        standfirst={participantsIntro}
      />

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
        {participants.map((profile, i) => (
          <ParticipantCard
            key={profile.id}
            profile={profile}
            index={i}
            figure={references.documentation.find((d) => d.id === profile.figureId)}
          />
        ))}
      </div>
    </Page>
  );
}
