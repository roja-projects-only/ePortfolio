import type { PortfolioData } from '../types/portfolio';

const portfolioData: PortfolioData = {
  // Section 1: Cover Page
  cover: {
    projectTitle: '[Project Title]',
    studentName: '[Student Name]',
    gradeSection: '[Grade and Section]',
    subject: 'Philosophy of the Human Person',
    date: '[Date]',
  },

  // Section 2: Introduction
  introduction: {
    purpose: '[Write the purpose of this activity here]',
    phenomenologyExplanation: '[Write a brief explanation of phenomenology here]',
    whyListeningMatters: '[Explain why listening to lived experiences matters]',
  },

  // Section 3: Community Engagement
  communityEngagement: {
    participantAlias: '[Participant Alias]',
    participantDescription: '[Provide a general description of the participant without revealing confidential information]',
    interviewDate: '[Add interview date]',
    interviewLocation: '[Add interview location — optional, can be hidden]',
    showLocation: false,
    ethicalReflection: '[Write your ethical-conduct reflection here]',
  },

  // Section 4: Interview Highlights
  interviewHighlights: [
    {
      question: '[Interview question]',
      responseSummary: '[Summarize the participant\'s response]',
      approvedQuote: '[Insert approved quotation here]',
      quotePermission: false,
      insight: '[Write the insight you gained from this response]',
    },
    {
      question: '[Interview question]',
      responseSummary: '[Summarize the participant\'s response]',
      approvedQuote: '[Insert approved quotation here]',
      quotePermission: false,
      insight: '[Write the insight you gained from this response]',
    },
    {
      question: '[Interview question]',
      responseSummary: '[Summarize the participant\'s response]',
      approvedQuote: '[Insert approved quotation here]',
      quotePermission: false,
      insight: '[Write the insight you gained from this response]',
    },
  ],

  // Section 5: Philosophical Reflection
  philosophicalReflection: {
    beingHuman: {
      prompt: 'What did this encounter reveal about what it means to be human?',
      response: '[Write your response here]',
    },
    socialRealities: {
      prompt: 'What social realities did the interview bring into focus?',
      response: '[Write your response here]',
    },
    challengedBeliefs: {
      prompt: 'Which of your previous beliefs or assumptions were challenged?',
      response: '[Write your response here]',
    },
    humanDignity: {
      prompt: 'How was human dignity expressed or affirmed in what you heard?',
      response: '[Write your response here]',
    },
    freedom: {
      prompt: 'What did you learn about freedom — its presence, its limits, or its meaning?',
      response: '[Write your response here]',
    },
    empathy: {
      prompt: 'How did empathy shape your listening and your understanding?',
      response: '[Write your response here]',
    },
    transcendence: {
      prompt: 'Where did you notice a sense of transcendence — meaning or hope beyond circumstance?',
      response: '[Write your response here]',
    },
    inclusiveSociety: {
      prompt: 'What would it take for society to become more inclusive?',
      response: '[Write your response here]',
    },
  },

  // Section 6: Personal Reflection
  personalReflection: {
    beforeInterview: {
      prompt: 'What limitations, biases, or assumptions did you hold before the interview?',
      response: '[Describe your limitations, biases, or assumptions before the interview]',
    },
    afterInterview: {
      prompt: 'How did the interview transform your understanding?',
      response: '[Describe how the interview transformed your understanding]',
    },
    concreteActionsPrompt: 'What concrete actions will you take to promote inclusion?',
    concreteActions: [
      {
        description: '[Describe a concrete action to promote inclusion]',
      },
      {
        description: '[Describe a concrete action to promote inclusion]',
      },
      {
        description: '[Describe a concrete action to promote inclusion]',
      },
    ],
  },

  // Section 7: Conclusion
  conclusion: {
    learningSummary: '[Write your learning summary here]',
    whyPhilosophicalReflectionMatters: '[Explain why philosophical reflection matters]',
  },

  // Section 8: References
  references: [
    {
      citation: '[Add reference — format: Interview as personal communication]',
      type: 'personalCommunication',
    },
  ],
};

export default portfolioData;
