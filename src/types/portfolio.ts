// Interview highlight entry
export interface InterviewHighlight {
  question: string;
  responseSummary: string;
  approvedQuote: string;
  quotePermission: boolean;
  insight: string;
}

// A fixed guiding prompt paired with an editable response slot
export interface ReflectionEntry {
  prompt: string;
  response: string;
}

// Reference entry
export interface Reference {
  citation: string;
  type: 'personalCommunication' | 'other';
}

// Personal reflection actions
export interface ConcreteAction {
  description: string;
}

// Portfolio content data - the central data model for ALL 8 required sections
export interface PortfolioData {
  // Section 1: Cover Page
  cover: {
    projectTitle: string;
    studentName: string;
    gradeSection: string;
    subject: string;
    date: string;
  };

  // Section 2: Introduction
  introduction: {
    purpose: string;
    phenomenologyExplanation: string;
    whyListeningMatters: string;
  };

  // Section 3: Community Engagement
  communityEngagement: {
    participantAlias: string;
    participantDescription: string;
    interviewDate: string;
    interviewLocation: string;
    showLocation: boolean;
    ethicalReflection: string;
  };

  // Section 4: Interview Highlights
  interviewHighlights: InterviewHighlight[];

  // Section 5: Philosophical Reflection
  philosophicalReflection: {
    beingHuman: ReflectionEntry;
    socialRealities: ReflectionEntry;
    challengedBeliefs: ReflectionEntry;
    humanDignity: ReflectionEntry;
    freedom: ReflectionEntry;
    empathy: ReflectionEntry;
    transcendence: ReflectionEntry;
    inclusiveSociety: ReflectionEntry;
  };

  // Section 6: Personal Reflection
  personalReflection: {
    beforeInterview: ReflectionEntry;
    afterInterview: ReflectionEntry;
    concreteActionsPrompt: string;
    concreteActions: ConcreteAction[];
  };

  // Section 7: Conclusion
  conclusion: {
    learningSummary: string;
    whyPhilosophicalReflectionMatters: string;
  };

  // Section 8: References
  references: Reference[];
}
