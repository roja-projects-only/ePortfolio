import type {
  CoverMeta,
  IntroductionContent,
  EngagementContent,
  HighlightsContent,
  PhilosophyContent,
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
    'This portfolio began with a decision to listen before we spoke. Rather than study persons with disability from a distance, we sat with two mothers who care for children with disabilities and asked them to describe their days as they actually live them.',
    'What follows is our attempt to think carefully about what we heard — not to summarise it, but to reflect on what it reveals about being human, about dignity, and about the kind of community we are responsible for building.',
  ],
  epigraph: {
    text:
      'To understand another person, we must first be willing to receive their experience as it is given, and not as we expect it to be.',
    attribution: 'A guiding principle of our inquiry',
  },
  subsections: [
    {
      id: 'purpose',
      heading: 'The purpose of this inquiry',
      body: [
        'Our task was to move from description toward genuine philosophical reflection. We wanted to understand the lived experiences of persons with disability and their families, and to examine the social realities that shape those experiences, with honesty and respect.',
        'We approached the two parents not as subjects to be analysed but as people whose knowledge of their own lives is real and authoritative. Our role was to listen closely, to interpret responsibly, and to let their experiences reshape how we think.',
      ],
    },
    {
      id: 'phenomenology',
      heading: 'Phenomenology, in plain terms',
      body: [
        'Phenomenology is the study of experience as it is lived from the inside. Instead of asking only what a condition is from a clinical or outside point of view, it asks what the world feels like for the person living it — what they notice, fear, hope for, and value.',
        'This mattered for our work because a diagnosis can be recorded on paper, but a life cannot. A phenomenological attitude asked us to set aside our assumptions and attend to what each parent actually described, in her own terms.',
      ],
    },
    {
      id: 'listening',
      heading: 'Why listening matters',
      body: [
        'It is easy to assume we already understand disability from what we have seen in passing or been told. But an assumption is a conclusion reached without listening, and it often carries pity or discomfort rather than understanding.',
        'Genuine understanding begins when we allow another person to correct our picture of their life. Listening is not a courtesy added to research; for this inquiry, it was the method itself.',
      ],
    },
  ],
};

/* ── Community engagement & ethics ─────────────────────────────────── */
export const engagement: EngagementContent = {
  lead: [
    'The heart of this project was a set of interviews conducted with two parents of children with disabilities. We treated the encounter itself as an ethical responsibility, not only as a source of information.',
  ],
  interviewDate: 'July 9, 2026',
  setting: 'Within the participants\u2019 barangay community',
  participants: [
    {
      alias: 'Parent Participant 01',
      description:
        'A mother caring for a child with Down syndrome, a congenital heart condition, and significant medical and communication support needs. She is also actively involved in community initiatives that support PWD families.',
    },
    {
      alias: 'Parent Participant 02',
      description:
        'A mother whose child manages many daily activities independently but still meets social and institutional barriers, including bullying at school and unsafe roads.',
    },
  ],
  process: [
    {
      label: 'Consent and permission',
      detail:
        'Before any conversation began, we explained the purpose of the activity and asked for permission to listen, to take notes, and to document respectfully. Participation was voluntary and could be stopped at any point.',
    },
    {
      label: 'Interview',
      detail:
        'We met the parents in their own community and let each conversation unfold at its own pace, following the parents\u2019 lead rather than a rigid script.',
    },
    {
      label: 'Transcription',
      detail:
        'Afterwards we transcribed the recordings carefully, preserving the parents\u2019 own words while removing names and any detail that could identify their families.',
    },
    {
      label: 'Review and analysis',
      detail:
        'We reviewed the transcripts together to make sure we had understood each parent correctly, then identified the recurring themes across both interviews and reflected on the social realities and philosophical questions they raised.',
    },
  ],
  ethics: [
    {
      title: 'Anonymity and confidentiality',
      detail:
        'Real names are never revealed. The parents are referred to only by anonymous identifiers, and their children are never named. No caption, filename, or description discloses an identity.',
    },
    {
      title: 'Respectful documentation',
      detail:
        'We documented the encounter without sensationalising it. We did not record unnecessary medical detail, and we have presented nothing that a participant would not want shared.',
    },
    {
      title: 'Faithful representation',
      detail:
        'We have tried to represent each parent\u2019s meaning accurately. Where we interpret, we say so plainly, so that our reading is never mistaken for the participants\u2019 own words.',
    },
  ],
};

/* ── Interview Highlights ──────────────────────────────────────────── */
export const highlights: HighlightsContent = {
  lead: [
    'The passages below are drawn from what the two parents shared with us. Each quotation is presented in the participant\u2019s own original language — Filipino or Taglish — exactly as spoken, because the way a person chooses their words is part of their meaning. Context and insight are provided in English so the reader can understand what the quotation reveals.',
  ],
  participants: [
    {
      id: 'p01',
      alias: 'Parent Participant 01',
      summary: [
        'Participant 01 is a mother caring for a child with Down syndrome and a congenital heart condition. Her daily life revolves around close monitoring, medication, and repeated medical follow-ups. Because her child cannot always identify or express internal pain, she must watch for the smallest signs of distress — a form of care that is constant, skilled, and largely invisible to the outside world.',
        'Over time she moved from the shock of diagnosis toward acceptance, and from acceptance toward advocacy. She now actively encourages other PWD families to join community programs, and she relies on government and community support to manage the high costs of treatment.',
      ],
      quotations: [
        {
          text: 'Mahirap naming intindihin tulad ng sa hindi po sila marunong magsabi kung ang nararamdaman nila, nagugutom sila. Syempre, kami na lang po ang nag-a-adjust paano namin nag-iintindi sa mga kakilusan nila.',
          speaker: 'p01',
          context:
            'Speaking about the daily challenge of understanding a child who cannot always communicate pain or hunger.',
          insight:
            'Caregiving becomes a constant act of interpretation — the parent must learn to read distress through behaviour rather than words.',
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
            'Acceptance was not resignation — it was a deliberate decision to love fully, made in the hardest moment.',
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
        'Participant 02 is a mother whose child can handle most daily tasks independently but still faces social and institutional barriers. Her child writes more slowly than classmates and needs patience and understanding at school — patience that was not always given.',
        'Her account centres on a confrontation with her child\u2019s teacher, who allegedly threatened her child over slow handwriting and mocked the family for picking him up from school. She advocated fiercely, brought evidence to the principal, and refused to let the matter go. Her story shows that barriers are often social rather than bodily.',
      ],
      quotations: [
        {
          text: 'Mabagal sumulat \u2019yan, ang gusto ng teacher, sinabi raw dito kay Eric, \u201cBilisan mo \u2019yung pagsulat mo, baka sasampalin kita.\u201d',
          speaker: 'p02',
          context:
            'Recalling what her child\u2019s teacher reportedly said about his slow handwriting.',
          insight:
            'A small accommodation — patience with slower writing — was met with a threat instead of understanding.',
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
            'A parent\u2019s reasonable concern for safety — unsafe roads and crossings — was treated as a joke.',
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
      'This fear stayed with us most — it is not a fear of disability, but of a world that may not understand her child.',
  },
  featuredFraming:
    'Of everything we heard, this stayed with us most. The uncertainty of not knowing where it hurts — and the vigilance it demands — reveals caregiving as a form of love expressed through constant attention.',
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
export const personalReflections: readonly PersonalReflection[] = [
  {
    id: 'kate',
    name: 'Kate Chloe Delos Reyes',
    standfirst: 'On learning to replace sympathy with attention.',
    pullQuote:
      'I came ready to feel sorry for someone. I left having been taught how to pay attention instead.',
    arc: {
      before:
        'Before the interview, I thought of disability mainly as something to feel sorry about. I imagined that the kindest response was sympathy, and I assumed I already understood what these families needed. I was cautious around people with special needs because I was afraid of saying the wrong thing.',
      challenged:
        'Listening to Participant 01 challenged that. Her care for her child was not sad; it was skilled, patient, and clear-eyed. My sympathy suddenly felt shallow next to the ordinary strength she described. I also learned that the parents themselves have a hard time understanding what their child wants, and I started to wonder how frustrating it can get for the children.',
      understand:
        'I now understand that respect asks more of me than pity does. To honour someone, I have to see their whole life — their capability, their love, and their hopes — and not only their difficulty. They are fun to talk to, they are funny, and they are very talented. It is embarrassing to even share my first thought about them now.',
      action:
        'I will catch myself when I start to pity, and turn that impulse into attention: asking, listening, and following the person\u2019s own lead before I decide what they need. I want them to feel that they truly belong in our community.',
    },
    commitments: [
      'I will talk to them, socialise, and overcome the constant anxiety of saying the wrong words — while still being mindful.',
      'I will make sure they feel protected at all times and won\u2019t let anyone discriminate against them.',
      'I will try my very hardest every day to understand their situation instead of concluding things right away.',
    ],
  },
  {
    id: 'jordin',
    name: 'Jordin Rose Dela Cruz',
    standfirst: 'On discovering that the hardest barriers are the ones we build.',
    pullQuote:
      'The cruelty a child meets at school is not caused by disability. It is a choice other people make.',
    arc: {
      before:
        'I used to assume that the difficulties faced by persons with disability came almost entirely from their condition. I thought of the barriers as medical, and therefore as no one\u2019s fault. I expected the conversation to be heavy or hard to handle.',
      challenged:
        'Participant 02\u2019s account changed that. Her child could do a great deal independently, yet still faced bullying, humiliation, and unsafe roads. The heaviest obstacles were made by other people and by an environment that did not care.',
      understand:
        'I now understand that many barriers are social, and that social barriers can be removed. What a community tolerates — cruelty, inaccessibility, indifference — is a choice, and choices can change. The interview taught me about human dignity.',
      action:
        'I will not stay silent when I see someone humiliated for being different, and I will support the small, practical changes that make a school or a street safer for everyone.',
    },
    commitments: [
      'I will be more open, more respectful, and more willing to listen instead of being afraid.',
      'I will treat people naturally and sincerely, not just carefully.',
      'I will speak up when I see cruelty or exclusion, even when staying silent is easier.',
    ],
  },
  {
    id: 'rodger',
    name: 'Rodger C. Pacumba Jr.',
    standfirst: 'On the meaning of dignity when a life needs constant care.',
    pullQuote:
      'A person\u2019s worth was never a question of what they could do without help.',
    arc: {
      before:
        'Before this activity, I quietly measured people by how independent and capable they were. Without meaning to, I treated productivity as though it were the same thing as human worth. I also assumed disability was mostly a mental thing.',
      challenged:
        'The two cases were nothing alike. One participant could handle most daily tasks by himself, but he still got bullied and treated unfairly in school. The other needed a lot more help because of communication difficulties and serious health problems. The disability itself is not always the hardest part. A lot of the struggle comes from other people.',
      understand:
        'I now understand human dignity as inherent. It is not earned through ability, speed, or self-sufficiency, and it cannot be lost by needing care. A person who depends on others is no less a person. The parents carry a lot — from money problems to the physical work of caregiving — and they do all that while still trying to protect their child.',
      action:
        'I will speak and write about disability in language that centres the person, and I will make room for classmates who need support, treating that support as ordinary rather than exceptional.',
    },
    commitments: [
      'I will listen to what PWDs actually need instead of deciding for them.',
      'I will stop treating their condition as the only thing worth knowing about them.',
      'I will make sure PWD classmates are actually included in activities and group work, not just present.',
      'I will support programs that let PWDs and their families take part in the community.',
    ],
  },
];

/* ── Conclusion ────────────────────────────────────────────────────── */
export const conclusion: ConclusionContent = {
  body: [
    'When we set out, we expected to learn about disability. What we learned, more deeply, was about being human — about how much of a person\u2019s life is carried in relationships, in vigilance, in hope, and in the daily work of care.',
    'The two parents changed our understanding by refusing the roles we had half-prepared for them. They were not objects of pity or figures of inspiration. They were people describing their lives plainly, and asking, in effect, to be understood rather than admired from a distance.',
    'Philosophical reflection was necessary because description alone would have let us keep our assumptions. Thinking carefully about dignity, freedom, empathy, and transcendence forced us to see that a person\u2019s worth is not a function of ability, and that many of the barriers we observed are made by people and can be unmade by them.',
    'Inclusion, we now believe, requires both personal change and structural responsibility. It asks each of us to listen and act differently, and it asks our institutions to build environments in which persons with disability and their families can genuinely belong.',
  ],
  finalStatement:
    'We end not with a slogan but with a commitment to keep listening — and to let what we hear continue to change how we live alongside one another.',
};

/* ── References ────────────────────────────────────────────────────── */
export const references: ReferencesContent = {
  intro:
    'The sources below informed this portfolio. The two interviews are cited as personal communications, in keeping with our confidentiality commitment; no identifying detail is disclosed.',
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
        'The community setting in which the interviews were held, on July 9, 2026.',
    },
  ] as readonly DocumentationFigure[],
  confidentiality:
    'Confidentiality statement: The identities of the participants and their children are protected throughout this portfolio. Names have been replaced with anonymous identifiers, and no filename, caption, or description discloses an identity.',
};
