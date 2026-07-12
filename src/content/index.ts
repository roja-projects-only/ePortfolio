import type {
  CoverMeta,
  IntroductionContent,
  EngagementContent,
  HighlightsContent,
  PhilosophyContent,
  ConcisePhilosophyContent,
  PersonalReflection,
  ConclusionContent,
  ReferencesContent,
  DocumentationFigure,
} from '../types/portfolio';

/*
 * ─────────────────────────────────────────────────────────────────────
 *  EDITING GUIDE FOR THE STUDENT AUTHORS
 *
 *  All public-facing copy lives in this file. To keep the participants'
 *  dignity and privacy intact:
 *    • Never replace an alias with a real name.
 *    • Never name a participant's child. Use "her child",
 *      "Participant 02's child", or similar.
 *    • When you insert a verbatim transcript quotation, keep the
 *      `context` field so the quote is never read out of context.
 *  Quotations must remain in their original Filipino, Taglish, or
 *  English — never translate them into formal English.
 * ─────────────────────────────────────────────────────────────────────
 */

/* ── Cover ─────────────────────────────────────────────────────────── */
export const cover: CoverMeta = {
  title: 'Beyond Limitations',
  subtitle:
    'A Philosophical Reflection on the Lived Experiences of Persons with Disability',
  members: [
    'Kate Chloe Delos Reyes',
    'Jordin Rose Dela Cruz',
    'Rodger C. Pacumba Jr.',
  ],
  gradeSection: '12 - KELVIN',
  subject: 'Introduction to Philosophy',
  submission: 'July 12, 2026',
};

/* ── Introduction ──────────────────────────────────────────────────── */
export const introduction: IntroductionContent = {
  lead: [
    'A lot of people already have opinions about persons with disability even without really understanding what they go through every day. This portfolio is our attempt to set aside those assumptions by actually listening to two mothers who raises children with disabilities, and to reflect on what their experiences can teach us.',
  ],
  subsections: [
    {
      id: 'purpose',
      heading: 'Purpose of the activity',
      body: [
        'Our class was given the task to conduct interviews that are respectful and ethical, with persons with disability or their families, as a way to raise awareness. We chose to interview two mothers so we could understand their daily realities, the barriers they face in their communities, and what their stories tell us about dignity, freedom, and the kind of community we should be building.',
      ],
    },
    {
      id: 'phenomenology',
      heading: 'Phenomenology and why listening matters',
      body: [
        'Phenomenology is the study of how experience is lived from the inside, not from the outside looking in. Instead of just defining disability through a diagnosis, it asks what the world actually feels like for the person living it. A medical record can describe a condition, but it cannot tell you what a mother fears when her child walks alone, or how hard it is to ask for patience in a school that does not understand. Listening, for this inquiry, was not just a courtesy. It was the method itself.',
      ],
    },
  ],
};

/* ── Community engagement & ethics ─────────────────────────────────── */
export const engagement: EngagementContent = {
  lead: [
    'The main part of this project was the interview we conducted with two parents of children with disabilities. We treated the whole process as something that needed to be done ethically, not just as a requirement we had to submit.',
  ],
  interviewDate: 'July 9, 2026',
  setting: 'St. Peter Ville, San Jose Barangay, Montalban, Rizal',
  participants: [
    {
      alias: 'Parent Participant 01',
      description:
        'A mother who takes care of a child with Down syndrome and a congenital heart condition. Her child needs a lot of medical attention and has a hard time communicating what they feel. She is also active in their community, helping other families with PWD children.',
    },
    {
      alias: 'Parent Participant 02',
      description:
        'A mother whose child can do most things on his own but still deals with bullying at school and unsafe roads going home. She had to speak up more than once to protect her child from teachers and other students.',
    },
  ],
  process: [
    {
      label: 'Consent and permission',
      detail:
        'Before we started, we explained to the parents what the interview was for and asked if it was okay to take notes and record. They were free to stop at any time if they were not comfortable.',
    },
    {
      label: 'Interview',
      detail:
        'We met the parents at St. Peter Ville in San Jose, Montalban and just let them talk. We did not follow a strict script so they could share what they wanted in their own way.',
    },
    {
      label: 'Transcription',
      detail:
        'After the interview we wrote down everything they said as carefully as we could. We removed their real names and any detail that might identify them or their children.',
    },
    {
      label: 'Review and analysis',
      detail:
        'We went over the transcripts together to make sure we understood them right. Then we looked for common themes between the two interviews and reflected on what those themes mean for the community.',
    },
  ],
  ethics: [
    {
      title: 'Anonymity and confidentiality',
      detail:
        'We never used the real names of the participants or their children. They are only referred to as Parent Participant 01 and Parent Participant 02. Nothing in the portfolio can be used to identify them.',
    },
    {
      title: 'Respectful documentation',
      detail:
        'We made sure not to turn their story into something dramatic or exaggerated. We only included what was necessary and what the participants would be okay with sharing.',
    },
    {
      title: 'Faithful representation',
      detail:
        'We tried our best to represent what each parent actually meant. When we added our own interpretation, we made sure to separate it from what the participant said so nobody gets confused.',
    },
  ],
};

/* ── Interview Highlights ──────────────────────────────────────────── */
export const highlights: HighlightsContent = {
  lead: [
    'The passages below come from what the two parents shared with us. Each quotation is in the participant\u2019s own language (Filipino or Taglish), exactly as spoken, because how a person chooses their words is part of what they mean. We added brief context and insight in English so the reader can follow what each quotation reveals.',
  ],
  participants: [
    {
      id: 'p01',
      alias: 'Parent Participant 01',
      summary: [
        'Participant 01 is a mother caring for a child with Down syndrome and a congenital heart condition. Her daily life is shaped by close monitoring, medication, and medical follow-ups that happen every few months. Because her child cannot always identify or express internal pain, she has to watch for the smallest signs of distress. It is skilled, constant work that most people outside the family never see.',
        'She moved from the shock of diagnosis toward acceptance, and then toward advocacy. She now encourages other PWD families to join community programs, and she depends on government and community support to manage the high costs of treatment.',
      ],
      quotations: [
        {
          text: 'Mahirap naming intindihin tulad ng sa hindi po sila marunong magsabi kung ang nararamdaman nila, nagugutom sila. Syempre, kami na lang po ang nag-a-adjust paano namin nag-iintindi sa mga kakilusan nila.',
          speaker: 'p01',
          context:
            'Speaking about the daily challenge of understanding a child who cannot always communicate pain or hunger.',
          insight:
            'Caregiving becomes a constant act of interpretation. The parent must learn to read distress through behaviour rather than words.',
        },
        {
          text: 'Pagdating sa part sa loob, wala kaming kaalaman. Kaya ang hirap po talaga ng bilang magulang sa isang PWD.',
          speaker: 'p01',
          context:
            'Explaining that when her child\u2019s pain is internal, she has no way to know exactly what is wrong.',
          insight:
            'The uncertainty of not knowing where it hurts is itself a source of suffering for the caregiver.',
        },
        {
          text: 'Nung ipinanganak ko po siya, nagulat po talaga ako sa kaniya\u2026 Hindi ko po natanggap kaagad. Pero nung nakita ko na siya, napatigil ako, doon ko na na-realize na hindi lang naman ako ang may anak na ganito. \u201cLord, tatanggapin ko na po \u2019yung anak ko.\u201d',
          speaker: 'p01',
          context:
            'Describing the moment of birth and the shock of learning about her child\u2019s condition, followed by a turning point toward acceptance.',
          insight:
            'She did not just give in. Acceptance was a deliberate decision to love fully, made in the hardest moment.',
        },
        {
          text: 'Kung mayroon pong mga ano para sa gobyerno, diyan po kami nakakaasa. Na dapat po talaga, bigyan ng pansin ang bilang PWD para makaangat ang magulang.',
          speaker: 'p01',
          context:
            'Explaining her dependence on government programs to afford medication, therapy, and hospital visits.',
          insight:
            'Without public support, the health of a child depends on a family\u2019s finances rather than on need.',
        },
      ],
    },
    {
      id: 'p02',
      alias: 'Parent Participant 02',
      summary: [
        'Participant 02 is a mother whose child can handle most daily tasks on his own but still faces social and institutional barriers. Her child writes more slowly than classmates and needs patience at school, which was not always given.',
        'Her account centres on a confrontation with her child\u2019s teacher, who reportedly threatened her child over slow handwriting and mocked the family for picking him up from school. She brought evidence to the principal, pushed the issue, and refused to let it go. Her story shows that barriers are often social, not bodily.',
      ],
      quotations: [
        {
          text: 'Mabagal sumulat \u2019yan, ang gusto ng teacher, sinabi raw dito kay Eric, \u201cBilisan mo \u2019yung pagsulat mo, baka sasampalin kita.\u201d',
          speaker: 'p02',
          context:
            'Recalling what her child\u2019s teacher reportedly said about his slow handwriting.',
          insight:
            'A small accommodation, patience with slower writing, was met with a threat instead of understanding.',
        },
        {
          text: 'Mag-backout na ako, nay, sa pag-aaral\u2026 Yung teacher ko ngayon, lagi akong pinapagalitan.',
          speaker: 'p02',
          context:
            'Quoting her child\u2019s words about wanting to quit school because of constant scolding.',
          insight:
            'When a school becomes a source of fear rather than safety, the child\u2019s right to education is quietly taken away.',
        },
        {
          text: 'Sinundo, pinagsasabihan daw \u2019yan, \u201cBakit Eric, kailangan mo pang sunduin? \u2019Di ka ba marunong umuwi mag-isa?\u201d Pinagtatawanan ba naman?',
          speaker: 'p02',
          context:
            'Describing how her child was mocked by a teacher for needing to be picked up from school.',
          insight:
            'A parent\u2019s reasonable concern for safety, given the unsafe roads and crossings, was treated as a joke.',
        },
        {
          text: 'Hindi naman natin mapilit \u2019yung gusto natin kung ano ang ipaibigay natin sa kaniya kung ano \u2019yung gusto ng bata, sundan na lang natin kasi PWD nga eh. Kung ang kailangan nila, pagmamahal, unawain, at kalingain.',
          speaker: 'p02',
          context:
            'Sharing her advice to other parents of PWD children.',
          insight:
            'Acceptance means following the child\u2019s lead rather than imposing our own expectations.',
        },
      ],
    },
  ],
  featuredQuotation: {
    text: 'Pagdating sa part sa loob, wala kaming kaalaman. Kaya ang hirap po talaga ng bilang magulang sa isang PWD.',
    speaker: 'p01',
    context:
      'On the difficulty of recognising a child\u2019s internal pain when communication is limited.',
    insight:
      'This fear stayed with us most. It is not a fear of disability, but of a world that may not understand her child.',
  },
  featuredFraming:
    'Of everything we heard, this is what stayed with us. The uncertainty of not knowing where it hurts, and the vigilance that uncertainty demands, shows caregiving as a kind of love expressed through constant attention.',
};

/* ── Philosophical reflection ──────────────────────────────────────── */
export const philosophy: PhilosophyContent = {
  lead: [
    'The interviews asked us to think again about what a human person is. The parents did not speak in abstractions, but their experiences pressed us toward a philosophical claim: that a person is never merely a body observed from the outside, and that dignity does not depend on ability.',
  ],
  embodiedSpirit: [
    'We found it most truthful to understand the human person as an embodied spirit. A person is not a mind that happens to be attached to a body, nor a body that a mind merely inhabits. The body, the inner life, the intellect, the emotions, our relationships, and our capacity to make meaning together form one living person.',
    'This matters directly for how we think about disability. A bodily condition is genuinely part of a person\u2019s lived experience — it is not nothing, and pretending otherwise would not be respectful. But a condition of the body does not reduce the person\u2019s humanity or worth. To be embodied is simply part of what it is to be human; it is not a lesser way of being human.',
    'It follows that people should not be measured by physical ability, independence, speed, productivity, or conformity. When we value persons in those terms, we mistake one part of a life for the whole of it. Much of the suffering the parents described came not from the body itself but from a world arranged as if only certain bodies and certain paces truly counted.',
  ],
  aristotleNote: [
    'We connect this, carefully, to an Aristotelian understanding. Aristotle understood the human person as a unity of body and soul. The soul is not simply a separate object inside the body, but the principle that makes the body a living human being.',
    'We take from this not a technical doctrine but a caution against separation. If body and soul are not two unrelated objects but one unified life, then to touch a person\u2019s body — through illness, through care, through cruelty, or through neglect — is to touch the whole person. That is why dignity cannot be located in ability alone.',
  ],
  questions: [
    {
      question: 'What did we learn about being human?',
      answer: [
        'We have learned that courage is not optional in life. It is something every person must carry, especially when facing challenges that are not of their own making. But more than courage, this experience taught us the deeper importance of compassion — the willingness to understand what we do not personally live through.',
        'The parents showed us that being human means being embedded in relationships of care, vigilance, and hope. Their daily strength was not extraordinary in the sense of being rare — it was extraordinary in the sense of being deeply, ordinarily human.',
      ],
    },
    {
      question: 'What social realities were revealed?',
      answer: [
        'The participants\u2019 stories revealed a difficult truth: PWDs often carry burdens they did not choose and cannot change, yet society makes them feel as though their very existence is something to be tolerated rather than embraced. This is not a personal failing on their part — it is a failure of the community around them.',
        'What struck us most was a fear expressed by both parents: the fear of what happens to their child when they themselves are no longer there to protect them. This fear does not exist in isolation. It exists because our communities have not yet made PWDs feel truly safe, seen, or supported.',
      ],
    },
    {
      question: 'How did the experience challenge our previous beliefs?',
      answer: [
        'This study forced us to face a belief we did not fully realize we held. Like many others, we often unconsciously overlook or underestimate the capabilities of persons with disabilities, seeing them primarily as vulnerable and limited, rather than capable.',
        'We also learned that excessive pity or overprotection is not the support PWDs need. Treating them as fragile or in constant need of rescue does not empower them — it makes them feel isolated. It silently builds up the very barriers we claim to want to break down.',
      ],
    },
    {
      question: 'How can society become more inclusive?',
      answer: [
        'Acceptance should not only be shown through words but also by changing the system to cater to the true needs of PWDs — holding institutions accountable for how they treat people with disabilities, especially in settings like schools.',
        'Public spaces and communities need to be made physically and socially safer. A truly inclusive society invests in accessible infrastructure, safe crossings, reliable transportation, and accommodating public services, so that persons with disabilities are not forced to depend entirely on family members for their basic mobility and safety.',
        'Finally, society must unlearn the habit of treating PWDs with either pity or exclusion, both of which strip away their dignity in different ways. Genuine inclusion means recognising PWDs as capable individuals with the same right to freedom, respect, and belonging as anyone else.',
      ],
    },
  ],
  concepts: [
    {
      id: 'dignity',
      name: 'Human dignity',
      thesis: 'Worth is inherent, not earned.',
      body: [
        'Human dignity is not a reward for independence, productivity, or achievement. It belongs to the person simply because they are a person. Neither a diagnosis nor a support need adds to or subtracts from it.',
        'Both parents treated their children as fully worthy of care, attention, and a future. Their love was not conditional on what their children could do. In this they enacted a truth that a productivity-minded society easily forgets: that no one has to qualify for their own humanity.',
      ],
    },
    {
      id: 'freedom',
      name: 'Freedom',
      thesis: 'Freedom is a real opportunity, not an abstract permission.',
      body: [
        'Freedom is more than the absence of chains. It is the genuine opportunity to participate, to learn, to move safely, to communicate, and to make one\u2019s own choices. A right that cannot actually be exercised is freedom in name only.',
        'The parents showed us how social systems either widen or narrow this freedom. Unsafe roads, an unwelcoming school, or the cost of care can quietly close off a child\u2019s options; patient teachers, accessible support, and inclusive programs can open them. Freedom, in this sense, is something a community builds or withholds.',
      ],
    },
    {
      id: 'empathy',
      name: 'Empathy',
      thesis: 'Empathy is not pity.',
      body: [
        'Pity looks down; empathy stands alongside. Pity reduces a person to their vulnerability and asks nothing of us but a feeling. Empathy begins by listening, recognises the other person\u2019s own perspective, and responds with respect.',
        'Our own listening had to be corrected in this direction. It would have been easy to feel sorry for the parents and stop there. Instead, they asked us — mostly without saying so — to see their children as whole persons, and to let that seeing shape how we act.',
      ],
    },
    {
      id: 'transcendence',
      name: 'Transcendence',
      thesis: 'Transcendence is the making of meaning, not the defeat of disability.',
      body: [
        'Transcendence does not mean overcoming or escaping disability, as if a person had to rise above who they are. It is the human capacity to create meaning, to form relationships, to make commitments, to advocate, to hope, and to move beyond the limiting judgements others impose.',
        'We saw transcendence in the parents\u2019 steady advocacy and in their refusal to let fear have the last word. And we saw it as a possibility for their children — not in spite of their lives, but within them.',
      ],
    },
  ],
  themes: [
    {
      id: 'safety',
      title: 'Safety and constant parental fear',
      interpretation:
        'For both parents, fear is not an occasional feeling but a background condition of daily life — fear during medical emergencies, fear on unsafe roads, and fear for the future.',
      socialReality:
        'When environments and institutions are not made safe and accessible, families are left to absorb the risk themselves, and vigilance becomes a permanent labour.',
    },
    {
      id: 'education',
      title: 'Educational discrimination and bullying',
      interpretation:
        'School, which should be a place of belonging, became a source of harm for Participant 02\u2019s child through bullying, humiliation, and an alleged threat from a teacher.',
      socialReality:
        'Exclusion in education is frequently a failure of attitude and accommodation, not of the learner. Small acts of patience or cruelty by adults shape whether a child can remain in school at all.',
    },
    {
      id: 'communication',
      title: 'Communication and caregiving difficulties',
      interpretation:
        'Where a child cannot easily communicate pain or need, care becomes a constant act of interpretation, carried mostly by the parent.',
      socialReality:
        'Caregiving of this intensity is real, skilled work, yet it is often unseen and unsupported by systems that assume a child can speak for themselves.',
    },
    {
      id: 'medical',
      title: 'Medical and financial burdens',
      interpretation:
        'Repeated follow-ups, medication, and the prospect of surgery place a financial weight on the family that cannot be met by effort alone.',
      socialReality:
        'Access to care is shaped by cost. Without public and community support, the health of a child can come to depend on a family\u2019s finances rather than on need.',
    },
    {
      id: 'acceptance',
      title: 'Acceptance of the child\u2019s condition',
      interpretation:
        'Both parents described moving toward acceptance — not as defeat, but as a settled love that sees the child fully.',
      socialReality:
        'Acceptance within a family often forms in spite of a wider society that still treats disability as a problem to be fixed rather than a life to be valued.',
    },
    {
      id: 'family',
      title: 'Family strength and parental advocacy',
      interpretation:
        'Family emerged as the most reliable source of strength, and the parents themselves as their child\u2019s first and fiercest advocates.',
      socialReality:
        'Much of the support that PWD children receive still depends on individual families. This is a testament to parental love and, at the same time, a sign of how much institutions leave undone.',
    },
  ],
  realization:
    'Our central realisation is this: the condition itself is not always the greatest source of suffering. Impatience, discrimination, unsafe environments, inaccessible support, and simple misunderstanding can intensify a person\u2019s limitations far beyond anything the body imposes. Some of the heaviest barriers are the ones a community can choose to remove.',
};

/* ── Personal reflections ──────────────────────────────────────────── */
export const concisePhilosophy: ConcisePhilosophyContent = {
  sections: [
    {
      id: 'being-human',
      heading: 'What have you learned about being a human from the participants?',
      body: [
        'We have learned from this study that as a Human, courage is not optional in life. It is something every person must carry, especially when facing challenges that are not of their own making. But more than courage, this experience taught us the deeper importance of compassion, the willingness to understand what we do not personally live through, particularly the experiences of persons with disabilities.',
      ],
    },
    {
      id: 'social-realities',
      heading: 'What Social Realities were revealed?',
      body: [
        "The participants' stories revealed a cold hard truth. PWDs often carry burdens they did not choose and cannot change, yet society makes them feel as though their very existence is something to be tolerated rather than embraced. This is not a personal failing on their part, it is a failure of the community around them.",
        'What struck us most was a fear expressed by more than one parent, the fear of what happens to their child when they themselves are no longer there to protect them. This fear does not exist in isolation, it exists because our communities have not yet made PWDs feel truly safe, seen, or supported. That such a fear persists is, in itself, evidence of how much progress needs to be made to make them feel that this community accepts them.',
      ],
    },
    {
      id: 'challenged-beliefs',
      heading: 'How did this experience challenge your previous beliefs?',
      body: [
        'This study forced us to face a belief we did not fully realize we held. Like many others, we often unconsciously overlook or underestimate the capabilities of persons with disabilities, seeing them primarily as vulnerable and limited, rather than capable.',
        'Through this experience, however, we came to see something different. Persons with special needs and disabilities are just as capable as anyone else, and in many cases, even more so. What we are capable of, they are capable of too.',
        "Just as importantly, we learned that excessive pity or overprotection is not the support PWDs need.Treating them as fragile or in constant need of rescue does not empower them, it makes them feel isolated. It silently builds up the very barriers we claim to want to break down, making them feel like outsiders, like they don't truly belong, rather than equals within their own community.",
      ],
    },
    {
      id: 'concepts',
      heading: 'How does the experience relate to human dignity, freedom, empathy, and transcendence',
      body: [
        'This experience taught us that dignity is not something anyone should have to work for,  it should be freely given and respected. Simply by being human, every person has the right to dignity, regardless of their condition or physical form.',
        'We also learned that we are only truly free when we are no longer confined by old mindsets and stereotypes. This is a freedom we owe to everyone, because all people have the right to be free, and to free others from the judgment of those who see them as more vulnerable or less capable. For most of us, freedom is simply given, handed to us, already within reach, already ours to hold. But for others, like persons with disabilities, freedom is something they have had to fight for, and continue to fight for. Free from discrimination. Free from judgment. Free from constant threats. Free from constant stereotyping.',
        'This experience also deepened our empathy. Listening to the stories of parents raising children with disabilities or special needs broadened our understanding of what they truly go through. We realized that empathy is not simply pity or feeling sorry for someone,  it is making a genuine effort to understand what it is like to stand in their place and how heavy the weight is that they carry every single day.',
        'Lastly, this experience is connected to transcendence through the parents who continue to guide and watch over their children without end. Tirelessly, they keep showing up for their children even when it is exhausting, even when it is difficult, even when it leaves them empty. Hearing their stories left us in awe of their strength, their strength to keep believing, and their courage to face everything that comes their way',
      ],
    },
    {
      id: 'inclusion',
      heading: 'How can society become more inclusive?',
      body: [
        'This study showed us that acceptance should only be shown through words but also by changing the system and reforming it to cater to the true needs of PWDs. Like holding institutions accountable for how they treat people with disabilities, especially in settings like schools. A school is a place to learn, it should not feel like a threat. It should be the first place to make us feel safe, for we spend most of our time here.',
        'Public spaces and communities need to be made physically and socially safer. A true inclusive society invests in accessible infrastructure. safe crossings, reliable transportation, and accommodating public services. So that persons with disabilities are not forced to depend entirely on family members for their basic mobility and safety.',
        'Finally, and perhaps most importantly, society must unlearn the habit of treating PWDs with either pity or exclusion, both of which strip away their dignity in different ways. Genuine inclusion means recognizing PWDs as capable individuals with the same right to freedom, respect, and belonging as anyone else, rather than treating them as people who must be tolerated, protected from a distance, or fixed.',
      ],
    },
  ],
};

export const personalReflections: readonly PersonalReflection[] = [
  {
    id: 'kate',
    name: 'Kate Chloe Delos Reyes',
    paragraphs: [
      'Before conducting the interview or formatting the paper, I’ve always thought that people with disabilities are incapable of taking care of themselves. I know that there are PWDs who work and provide for themselves, but it must be very challenging. I’m not proud of how I think, but there are times when I get very cautious when there are people with special needs, because in some cases, they get very aggressive and often throw tantrums. They can be hard to understand sometimes because they have lots of trouble expressing what they feel or think about, and I know that it can feel frustrating for the people around them that wants to understand them. I feel the same way. I find it very challenging to properly communicate with people who have special needs and disabilities. I always get scared to say the wrong words or express the wrong idea whenever I am talking to someone who has special needs or disabilities. I’ve always been afraid of mistakenly addressing them the wrong way, and I have always seen them as vulnerable and sensitive',
      'But after the Interview, I have picked up lots of lessons that helped me bend my belief and mindset. Their parents explained that even the parents themselves have a hard time trying to understand what their child wants, and I started to wonder how frustrating it can get for their children, specifically. I can\'t imagine trying to voice out your concerns, but you aren\'t heard or understood. I also learned that they are as capable as “normal” people. It\'s just that society made us think that they are too vulnerable and failed to see their potential, just because they needed extra assistance. It made us think that understanding and truly setting an eye for them is just a hassle, and we would rather keep them where they are. I realized that I’ve been walking on eggshells around them too much. They are fun to talk to, they are funny, and they are very talented. It is very embarrassing to even share my first thought about them now.',
      'From now on, I won\'t conclude things right away. I would talk to them, socialize, and overcome the constant anxiety of saying the wrong words to them. I would still be mindful, but I would also learn how to be more casual whenever I’m talking to them. I want them to feel that they truly belong in our community and that there is no need to become embarrassed or afraid. I would make sure that they feel protected at all times and won\'t let anyone discriminate against them. I may not truly understand what it\'s like to be a person with disability or special needs, but I would try my very hardest every day to understand their situation every time.',
    ],
  },
  {
    id: 'jordin',
    name: 'Jordin Rose Dela Cruz',
    paragraphs: [
      'Before the interview, I honestly thought interacting with persons with disabilities would feel difficult and uncomfortable. I was worried that I might say the wrong thing, ask the wrong question, or make them feel upset without meaning to. I used to see disability mostly as a limitation, so I expected the conversation to be heavy or hard to handle.',
      'But after hearing their answers, my perspective changed a lot. I realized that what they need most is not pity, but respect, patience, and genuine understanding. They are not defined by their condition alone, they also have goals, opinions, experiences, and a strong sense of self. The interview made me see that living with a disability does not make a person less capable of giving meaningful contributions to others.',
      'One thing that stayed with me was how honest and thoughtful the interviewee was. Their words showed strength in a quiet but powerful way. It made me reflect on how often society focuses on what PWDs cannot do instead of recognizing what they are already doing every day to live, work, and be heard.',
      'This experience also made me more aware of my own behavior. I learned that being careful with words matters, but so does being sincere enough to treat people naturally. Instead of being afraid of people with special needs, I should be more open, more respectful, and more willing to listen. The interview did not just teach me about disability, it taught me about human dignity.',
    ],
  },
  {
    id: 'rodger',
    name: 'Rodger C. Pacumba Jr.',
    paragraphs: [
      'At first I thought that calling someone a Person with Disability meant that they had been suffering their whole life from a serious illness. I also assumed disability was mostly a mental thing, like having trouble speaking, communication or understanding other people. The parents we interviewed showed me that this was wrong. Disability shows up in many forms and it affect each person differently. The part I really did not expect was that the person with the disability is not the only one struggling. The parents carry a lot of it too, from the money problems to the physical work of caregiving, and they do all that while still trying to protect their child and figure out what their child needs.',
      'What changed my understanding was that the two cases were nothing alike. One participant could handle most daily tasks by himself, but he still got bullied and treated unfairly in school. The other needed a lot more help because of communication difficulties and serious health problems. So the disability itself is not always the hardest part. A lot of the struggle comes from other people. The impatience, the lack of understanding, the absence of financial support, the treatment that is difficult to access. Listening to the parents also made me see how much they give up for their children, and I am not sure I could the same.',
      'After this, I want to be more careful about the assumptions I make about PWDs. I plan to listen to what they actually need instead of deciding for them, and to stop treating their condition as the only thing worth knowing about them. If I see someone being bullied or disrespected. I want to say something instead of keeping quiet, even if keeping quiet is more easier. The things I can do as a student is small. I can make sure PWD classmates are actually included in activities and group work, not just present. I can tell people around me what I learned from this interview. I can support programs that let PWDs and their families take part in the community. None of that fixes everything, but I would rather do it than nothing,.',
    ],
  },
];

/* ── Conclusion ────────────────────────────────────────────────────── */
export const conclusion: ConclusionContent = {
  body: [
    'In conclusion, the interview taught that understanding persons with disabilities goes beyond sympathy, it requires respect, openness, and a willingness to see their humanity before their condition. It also reminded me that every person has a story, strengths, and dignity that deserve recognition. Through this reflection, We learned that real understanding begins when we listen carefully and remove our assumptions.',
    'Philosophical reflection is essential because it helps us think deeply about how we view other people and how we live with them in a community. It encourages us to examine our biases, develop empathy, and recognize the value of every human being. By reflecting philosophically, we do not just learn facts about persons and communities we learn how to relate to them more ethically, responsibly, and meaningfully.',
  ],
};

/* ── References ────────────────────────────────────────────────────── */
export const references: ReferencesContent = {
  intro:
    'This bibliography includes the two interviews that form the portfolio’s primary evidence and the philosophical work explicitly used in the reflection. No suggested or background reading is listed.',
  references: [
    {
      citation:
        'Parent Participant 01. (2026, July 9). Interview on the lived experience of caring for a child with a disability [Personal communication].',
      type: 'personalCommunication',
    },
    {
      citation:
        'Parent Participant 02. (2026, July 9). Interview on the lived experience of caring for a child with a disability [Personal communication].',
      type: 'personalCommunication',
    },
    {
      citation:
        'Aristotle. (1986). De Anima (On the Soul) (H. Lawson-Tancred, Trans.). Penguin Classics. (Original work composed c. 350 B.C.E.)',
      type: 'philosophical',
    },
  ],
  documentation: [
    {
      id: 'participant-01',
      alt: 'Approved documentation photograph of Parent Participant 01 during the interview.',
      caption:
        'Parent Participant 01, photographed with permission during the interview.',
    },
    {
      id: 'participant-02',
      alt: 'Approved documentation photograph of Parent Participant 02 during the interview.',
      caption:
        'Parent Participant 02, photographed with permission during the interview.',
    },
    {
      id: 'setting',
      alt: 'Approved documentation photograph of the community setting where the interviews took place.',
      caption:
        'St. Peter Ville, San Jose Barangay, Montalban, Rizal, where the interviews were held on July 9, 2026.',
    },
  ] as readonly DocumentationFigure[],
  confidentiality:
    'The interview references use anonymous participant labels. No parent name, child name, or other identifying detail is included in this bibliography.',
};
