import { BookOpen, Heart, Compass } from 'lucide-react';
import { Reveal } from '../motion/Reveal';
import { ContentPlaceholder } from './ContentPlaceholder';

interface IntroductionSequenceProps {
  purpose: string;
  phenomenologyExplanation: string;
  whyListeningMatters: string;
}

function renderStep(text: string) {
  return text.startsWith('[') ? (
    <ContentPlaceholder instruction={text} />
  ) : (
    <p className="leading-relaxed text-ink-muted">{text}</p>
  );
}

/**
 * Introduction rendered as a numbered visual sequence rather than three
 * stacked paragraphs — purpose, phenomenology, and why lived experience
 * matters read as one continuous editorial line, connected by a spine.
 */
export function IntroductionSequence({
  purpose,
  phenomenologyExplanation,
  whyListeningMatters,
}: IntroductionSequenceProps) {
  const steps = [
    { number: '01', title: 'Purpose', icon: <Compass size={18} />, body: purpose },
    { number: '02', title: 'Phenomenology', icon: <BookOpen size={18} />, body: phenomenologyExplanation },
    { number: '03', title: 'Why It Matters', icon: <Heart size={18} />, body: whyListeningMatters },
  ];

  return (
    <ol className="space-y-10">
      {steps.map((step, index) => (
        <Reveal key={step.number} delay={index * 0.08}>
          <li className="flex gap-5 sm:gap-8">
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl italic leading-none text-ink-faint" aria-hidden="true">
                {step.number}
              </span>
              {index < steps.length - 1 && <div className="mt-3 w-px flex-1 bg-hairline" />}
            </div>
            <div className={index < steps.length - 1 ? 'flex-1 pb-2' : 'flex-1'}>
              <div className="mb-3 flex items-center gap-2.5">
                <span className="text-ink" aria-hidden="true">
                  {step.icon}
                </span>
                <h3 className="text-lg font-medium text-ink">{step.title}</h3>
              </div>
              {renderStep(step.body)}
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
