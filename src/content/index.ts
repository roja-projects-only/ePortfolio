import type {
  CoverMeta,
  IntroductionContent,
  EngagementContent,
  ParticipantProfile,
  VoicesContent,
  FindingsContent,
  PhilosophyContent,
  PersonalReflection,
  CommitmentsContent,
  ConclusionContent,
  ReferencesContent,
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
 *  The English renderings below are faithful to the documented
 *  realities of the two interviews; replace them with your approved
 *  transcript quotations as they are finalised.
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
  // Confirm the exact section identifier before submission.
  gradeSection: 'Grade 12',
  subject: 'Philosophy of the Human Person',
  submission: 'July 2026',
  method: 'An interview-based philosophical inquiry',
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
    {
      id: 'role',
      heading: 'Our role as student researchers',
      body: [
        'We came to this work as students of philosophy and as beginners in listening well. We are not experts on disability, and we do not claim to be. What we offer is careful attention, honest reflection, and a willingness to be changed by what we learned.',
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
  setting: 'Within the participants’ barangay community',
  participantsNote:
    'Two mothers, each caring for a child with a disability, agreed to share their experiences with us. Throughout this portfolio they are identified only as Parent Participant 01 and Parent Participant 02.',
  process: [
    {
      label: 'Consent and permission',
      detail:
        'Before any conversation began, we explained the purpose of the activity and asked for permission to listen, to take notes, and to document respectfully. Participation was voluntary and could be stopped at any point.',
    },
    {
      label: 'Interview',
      detail:
        'We met the parents in their own community and let each conversation unfold at its own pace, following the parents’ lead rather than a rigid script.',
    },
    {
      label: 'Transcription',
      detail:
        'Afterwards we transcribed the recordings carefully, preserving the parents’ own words while removing names and any detail that could identify their families.',
    },
    {
      label: 'Review',
      detail:
        'We reviewed the transcripts together to make sure we had understood each parent correctly and had not read our own assumptions into what they said.',
    },
    {
      label: 'Analysis',
      detail:
        'Finally we identified the recurring themes across both interviews and reflected on the social realities and philosophical questions they raised.',
    },
  ],
  ethics: [
    {
      title: 'Anonymity and confidentiality',
      detail:
        'Real names are never revealed. The parents are referred to only by anonymous identifiers, and their children are never named. Approved photographs may show faces, but no caption, filename, or description discloses an identity.',
    },
    {
      title: 'Respectful documentation',
      detail:
        'We documented the encounter without sensationalising it. We did not record unnecessary medical detail, and we have presented nothing that a participant would not want shared.',
    },
    {
      title: 'Faithful representation',
      detail:
        'We have tried to represent each parent’s meaning accurately. Where we interpret, we say so plainly, so that our reading is never mistaken for the participants’ own words.',
    },
  ],
};

/* ── Participants ──────────────────────────────────────────────────── */
export const participants: readonly ParticipantProfile[] = [
  {
    id: 'p01',
    alias: 'Parent Participant 01',
    summary:
      'A mother caring for a child with Down syndrome, a congenital heart condition, and significant medical and communication support needs.',
    realities: [
      'Her child cannot always identify or express internal pain or illness, so she watches for the smallest signs of distress.',
      'Daily care includes medication, close monitoring, and repeated medical follow-ups.',
      'Emergencies bring real fear for her child’s safety.',
      'Treatment and surgery carry costs the family cannot meet alone.',
      'She relies on, and is grateful for, government and community support.',
      'Over time she moved from the shock of diagnosis toward acceptance.',
      'She now advocates for the inclusion of PWD families in community life.',
    ],
    interpretation:
      'Participant 01’s account shows caregiving as a continuous, attentive practice — a form of love expressed through vigilance. Her movement from shock to acceptance and then to advocacy suggests that acceptance is not resignation but the beginning of action.',
    figureId: 'participant-01',
  },
  {
    id: 'p02',
    alias: 'Parent Participant 02',
    summary:
      'A mother whose child manages many daily activities independently but still meets social and institutional barriers.',
    realities: [
      'Her child writes more slowly and needs patience and understanding at school.',
      'Her child has faced bullying and humiliation from others.',
      'An alleged threat from a teacher deepened the family’s fear.',
      'The family worried the child might have to withdraw from school.',
      'Unsafe roads and crossings are a daily hazard.',
      'She actively protects and advocates for her child.',
      'Family is her steady source of strength, and she has come to accept and value her child’s individuality.',
    ],
    interpretation:
      'Participant 02’s account shows that barriers are often social rather than bodily. Her child’s difficulties at school came less from any condition than from impatience, cruelty, and unsafe surroundings — and her advocacy shows how much a protecting parent can change.',
    figureId: 'participant-02',
  },
];

export const participantsIntro: string =
  'We spoke with two mothers whose experiences differ in almost every practical detail. We present them side by side not to compare or rank them, but to show that disability is diverse, and that social barriers reach different families in different ways. Neither experience is more worthy of attention than the other.';

/* ── Voices & quotations ───────────────────────────────────────────── */
export const voices: VoicesContent = {
  lead: [
    'The passages below are drawn from what the two parents shared with us. Each is presented with the context needed to understand it, because a sentence lifted out of a life can be easily misread. These English renderings stay faithful to the parents’ meaning; the participants’ own recorded words are held in the reviewed transcripts.',
  ],
  featured: {
    text:
      'My greatest fear is what will happen to my child when I am no longer here to care for and protect them — whether they will still be safe, and still be treated with kindness, when I am gone.',
    speaker: 'p01',
    context:
      'Speaking about the future, Participant 01 named a fear that caregiving parents often carry quietly: not for themselves, but for a child who may outlive the person who understands them best.',
  },
  featuredFraming:
    'Of everything we heard, this fear stayed with us most. It is not a fear of disability. It is a fear about a world that may not receive her child with the patience and care she gives every day.',
  secondary: [
    {
      text:
        'Sometimes my child cannot tell me where it hurts, so I have to watch very closely and learn to read the smallest signs.',
      speaker: 'p01',
      context:
        'On the difficulty of recognising a child’s pain when communication is limited — a reality that makes constant attentiveness a form of care.',
    },
    {
      text:
        'At first I was in shock, and I cried. In time I learned to accept my child completely, and to keep caring without losing hope.',
      speaker: 'p01',
      context:
        'On the movement from the shock of diagnosis toward acceptance — described not as giving up, but as steadying herself for the work of love.',
    },
    {
      text:
        'When my child was humiliated at school, I could not stay silent. No child should be made to feel small for learning differently.',
      speaker: 'p02',
      context:
        'On mistreatment at school, and on a parent’s refusal to let cruelty go unanswered.',
    },
    {
      text:
        'The treatments cost more than we can carry alone. Without help from the government and our community, I do not know how we would manage.',
      speaker: 'p01',
      context:
        'On the financial weight of ongoing medical care, and on a family’s dependence on public and community support.',
    },
    {
      text:
        'I will keep protecting my child and speaking up, so that my child can stay in school and be safe.',
      speaker: 'p02',
      context:
        'On parental determination — protection expressed as steady, active advocacy rather than a single dramatic act.',
    },
  ],
};

/* ── Thematic findings ─────────────────────────────────────────────── */
export const findings: FindingsContent = {
  lead: [
    'Reading across both interviews, we identified eight recurring themes. For each, we offer our interpretation, the evidence that supports it, and the broader social reality it points to. Where an experience was shared by both parents we say so; where it belonged to one, we mark it; and where a claim is our reading rather than theirs, we make that clear.',
  ],
  themes: [
    {
      id: 'safety',
      number: 1,
      title: 'Safety and constant parental fear',
      interpretation:
        'For both parents, fear is not an occasional feeling but a background condition of daily life — fear during medical emergencies, fear on unsafe roads, and fear for the future.',
      evidence: [
        { source: 'p01', point: 'Fear for her child’s safety during medical emergencies.' },
        { source: 'p02', point: 'Fear caused by unsafe roads and crossings, and by a threat at school.' },
      ],
      socialReality:
        'When environments and institutions are not made safe and accessible, families are left to absorb the risk themselves, and vigilance becomes a permanent labour.',
    },
    {
      id: 'education',
      number: 2,
      title: 'Educational discrimination and bullying',
      interpretation:
        'School, which should be a place of belonging, became a source of harm for Participant 02’s child through bullying, humiliation, and an alleged threat from a teacher.',
      evidence: [
        { source: 'p02', point: 'Bullying, humiliation, and a fear of having to withdraw from school.' },
        { source: 'p02', point: 'A need for patience and understanding for slower writing.' },
      ],
      socialReality:
        'Exclusion in education is frequently a failure of attitude and accommodation, not of the learner. Small acts of patience or cruelty by adults shape whether a child can remain in school at all.',
    },
    {
      id: 'communication',
      number: 3,
      title: 'Communication and caregiving difficulties',
      interpretation:
        'Where a child cannot easily communicate pain or need, care becomes a constant act of interpretation, carried mostly by the parent.',
      evidence: [
        { source: 'p01', point: 'Difficulty identifying internal pain; reading the smallest signs of distress.' },
        { source: 'p01', point: 'Ongoing medication and close daily monitoring.' },
      ],
      socialReality:
        'Caregiving of this intensity is real, skilled work, yet it is often unseen and unsupported by systems that assume a child can speak for themselves.',
    },
    {
      id: 'medical',
      number: 4,
      title: 'Medical and financial burdens',
      interpretation:
        'Repeated follow-ups, medication, and the prospect of surgery place a financial weight on the family that cannot be met by effort alone.',
      evidence: [
        { source: 'p01', point: 'High treatment and surgery costs; reliance on outside help.' },
        { source: 'p01', point: 'Dependence on government and community support to manage.' },
      ],
      socialReality:
        'Access to care is shaped by cost. Without public and community support, the health of a child can come to depend on a family’s finances rather than on need.',
    },
    {
      id: 'acceptance',
      number: 5,
      title: 'Acceptance of the child’s condition',
      interpretation:
        'Both parents described moving toward acceptance — not as defeat, but as a settled love that sees the child fully.',
      evidence: [
        { source: 'p01', point: 'A movement from shock toward acceptance after diagnosis.' },
        { source: 'p02', point: 'Acceptance of the child’s condition and individuality.' },
      ],
      socialReality:
        'Acceptance within a family often forms in spite of a wider society that still treats disability as a problem to be fixed rather than a life to be valued.',
    },
    {
      id: 'family',
      number: 6,
      title: 'Family strength and parental advocacy',
      interpretation:
        'Family emerged as the most reliable source of strength, and the parents themselves as their child’s first and fiercest advocates.',
      evidence: [
        { source: 'p02', point: 'Family as a source of strength; active protection and advocacy.' },
        { source: 'p01', point: 'Advocacy for the participation of PWD families in the community.' },
      ],
      socialReality:
        'Much of the support that PWD children receive still depends on individual families. This is a testament to parental love and, at the same time, a sign of how much institutions leave undone.',
    },
    {
      id: 'community',
      number: 7,
      title: 'Community participation and government support',
      interpretation:
        'Both accounts point to the importance of belonging — being part of the community — and to the real difference that public support can make.',
      evidence: [
        { source: 'p01', point: 'Reliance on government and community support; advocacy for inclusion.' },
        { source: 'shared', point: 'A shared hope that PWD families are included rather than set apart.' },
      ],
      socialReality:
        'Inclusion is not only a private matter of attitude; it depends on programs, services, and public commitment that make participation genuinely possible.',
    },
    {
      id: 'inclusion',
      number: 8,
      title: 'Inclusion beyond pity or overprotection',
      interpretation:
        'The parents’ hopes were not for pity. They wanted their children to be understood, kept safe, and allowed to belong as themselves.',
      evidence: [
        { source: 'shared', point: 'A desire to be included in community life, not kept apart.' },
        { source: 'p02', point: 'A child who can do much independently, held back mainly by others’ attitudes.' },
      ],
      socialReality:
        'Both pity and overprotection can diminish a person. Genuine inclusion recognises capability and dignity, and removes barriers rather than lowering expectations.',
    },
  ],
  limitation:
    'A necessary limitation: this portfolio reflects the situated experiences of two parents, at one time, in one community. It does not, and cannot, represent all persons with disability or all families. Their accounts open a window onto real social realities; they do not close the question of what disability means for everyone.',
};

/* ── Philosophical reflection ──────────────────────────────────────── */
export const philosophy: PhilosophyContent = {
  lead: [
    'The interviews asked us to think again about what a human person is. The parents did not speak in abstractions, but their experiences pressed us toward a philosophical claim: that a person is never merely a body observed from the outside, and that dignity does not depend on ability.',
  ],
  embodiedSpirit: [
    'We found it most truthful to understand the human person as an embodied spirit. A person is not a mind that happens to be attached to a body, nor a body that a mind merely inhabits. The body, the inner life, the intellect, the emotions, our relationships, and our capacity to make meaning together form one living person.',
    'This matters directly for how we think about disability. A bodily condition is genuinely part of a person’s lived experience — it is not nothing, and pretending otherwise would not be respectful. But a condition of the body does not reduce the person’s humanity or worth. To be embodied is simply part of what it is to be human; it is not a lesser way of being human.',
    'It follows that people should not be measured by physical ability, independence, speed, productivity, or conformity. When we value persons in those terms, we mistake one part of a life for the whole of it. Much of the suffering the parents described came not from the body itself but from a world arranged as if only certain bodies and certain paces truly counted.',
  ],
  aristotleNote: [
    'We connect this, carefully, to an Aristotelian understanding. Aristotle did not teach that a human being is a soul and a body loosely joined, or that the person can be neatly divided into separate parts of body, mind, and spirit. On his view, the soul is the form of a living body: body and soul together constitute one living human being.',
    'We take from this not a technical doctrine but a caution against separation. If body and soul are not two unrelated objects but one unified life, then to touch a person’s body — through illness, through care, through cruelty, or through neglect — is to touch the whole person. That is why dignity cannot be located in ability alone.',
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
        'Freedom is more than the absence of chains. It is the genuine opportunity to participate, to learn, to move safely, to communicate, and to make one’s own choices. A right that cannot actually be exercised is freedom in name only.',
        'The parents showed us how social systems either widen or narrow this freedom. Unsafe roads, an unwelcoming school, or the cost of care can quietly close off a child’s options; patient teachers, accessible support, and inclusive programs can open them. Freedom, in this sense, is something a community builds or withholds.',
      ],
    },
    {
      id: 'empathy',
      name: 'Empathy',
      thesis: 'Empathy is not pity.',
      body: [
        'Pity looks down; empathy stands alongside. Pity reduces a person to their vulnerability and asks nothing of us but a feeling. Empathy begins by listening, recognises the other person’s own perspective, and responds with respect.',
        'Our own listening had to be corrected in this direction. It would have been easy to feel sorry for the parents and stop there. Instead, they asked us — mostly without saying so — to see their children as whole persons, and to let that seeing shape how we act.',
      ],
    },
    {
      id: 'transcendence',
      name: 'Transcendence',
      thesis: 'Transcendence is the making of meaning, not the defeat of disability.',
      body: [
        'Transcendence does not mean overcoming or escaping disability, as if a person had to rise above who they are. It is the human capacity to create meaning, to form relationships, to make commitments, to advocate, to hope, and to move beyond the limiting judgements others impose.',
        'We saw transcendence in the parents’ steady advocacy and in their refusal to let fear have the last word. And we saw it as a possibility for their children — not in spite of their lives, but within them.',
      ],
    },
  ],
  realization:
    'Our central realisation is this: the condition itself is not always the greatest source of suffering. Impatience, discrimination, unsafe environments, inaccessible support, and simple misunderstanding can intensify a person’s limitations far beyond anything the body imposes. Some of the heaviest barriers are the ones a community can choose to remove.',
};

/* ── Personal reflections ──────────────────────────────────────────── */
export const personalReflections: readonly PersonalReflection[] = [
  {
    id: 'kate',
    name: 'Kate Chloe Delos Reyes',
    standfirst:
      'On learning to replace sympathy with attention.',
    pullQuote:
      'I came ready to feel sorry for someone. I left having been taught how to pay attention instead.',
    arc: {
      before:
        'Before the interview, I thought of disability mainly as something to feel sorry about. I imagined that the kindest response was sympathy, and I assumed I already understood what these families needed.',
      challenged:
        'Listening to Participant 01 challenged that. Her care for her child was not sad; it was skilled, patient, and clear-eyed. My sympathy suddenly felt shallow next to the ordinary strength she described.',
      understand:
        'I now understand that respect asks more of me than pity does. To honour someone, I have to see their whole life — their capability, their love, and their hopes — and not only their difficulty.',
      action:
        'I will catch myself when I start to pity, and turn that impulse into attention: asking, listening, and following the person’s own lead before I decide what they need.',
    },
  },
  {
    id: 'jordin',
    name: 'Jordin Rose Dela Cruz',
    standfirst:
      'On discovering that the hardest barriers are the ones we build.',
    pullQuote:
      'The cruelty a child meets at school is not caused by disability. It is a choice other people make.',
    arc: {
      before:
        'I used to assume that the difficulties faced by persons with disability came almost entirely from their condition. I thought of the barriers as medical, and therefore as no one’s fault.',
      challenged:
        'Participant 02’s account changed that. Her child could do a great deal independently, yet still faced bullying, humiliation, and unsafe roads. The heaviest obstacles were made by other people and by an environment that did not care.',
      understand:
        'I now understand that many barriers are social, and that social barriers can be removed. What a community tolerates — cruelty, inaccessibility, indifference — is a choice, and choices can change.',
      action:
        'I will not stay silent when I see someone humiliated for being different, and I will support the small, practical changes that make a school or a street safer for everyone.',
    },
  },
  {
    id: 'rodger',
    name: 'Rodger C. Pacumba Jr.',
    standfirst:
      'On the meaning of dignity when a life needs constant care.',
    pullQuote:
      'A person’s worth was never a question of what they could do without help.',
    arc: {
      before:
        'Before this activity, I quietly measured people by how independent and capable they were. Without meaning to, I treated productivity as though it were the same thing as human worth.',
      challenged:
        'The fear Participant 01 shared — about what would happen to her child when she is gone — undid that assumption. Her child’s worth, to her, had nothing to do with independence. It was simply, unconditionally there.',
      understand:
        'I now understand human dignity as inherent. It is not earned through ability, speed, or self-sufficiency, and it cannot be lost by needing care. A person who depends on others is no less a person.',
      action:
        'I will speak and write about disability in language that centres the person, and I will make room for classmates who need support, treating that support as ordinary rather than exceptional.',
    },
  },
];

/* ── Commitments ───────────────────────────────────────────────────── */
export const commitments: CommitmentsContent = {
  lead: [
    'Reflection that changes nothing is incomplete. The following commitments are deliberately small and specific — the kind of things three students can actually do — because we would rather promise what we can keep than announce what we cannot.',
  ],
  turningStatement:
    'We cannot fix the systems that make disability harder to live with. But we can change how we listen, how we speak, and how we treat the people around us — and that is where inclusion begins.',
  commitments: [
    {
      title: 'Listen before assuming',
      detail:
        'We will ask and listen before deciding what another person needs, and let them correct our picture of their life.',
    },
    {
      title: 'Use person-centred language',
      detail:
        'We will speak of persons with disability with care, putting the person first and dropping words that reduce anyone to a diagnosis.',
    },
    {
      title: 'Include classmates meaningfully',
      detail:
        'We will make sure PWD classmates are genuinely part of group work and activities, not merely present in the room.',
    },
    {
      title: 'Speak up against bullying',
      detail:
        'We will not stay silent when someone is humiliated for being different, whether by a classmate or by an adult.',
    },
    {
      title: 'Support safe, accessible spaces',
      detail:
        'We will back practical changes that make our school and its surroundings safer and easier to move through.',
    },
    {
      title: 'Share accurate understanding',
      detail:
        'We will pass on what we learned honestly, correcting the myths and pity that so often stand in for understanding.',
    },
    {
      title: 'Support inclusive community programs',
      detail:
        'We will encourage and take part in programs that include PWDs and their families in community life.',
    },
    {
      title: 'Avoid both exclusion and excessive pity',
      detail:
        'We will resist the two easy failures — leaving people out, and smothering them with pity — and aim instead for respect.',
    },
  ],
  caveat:
    'These are commitments, not solutions. Three students cannot resolve the systemic barriers that persons with disability face. What we can do is act consistently, in the places we actually stand, and refuse to look away.',
};

/* ── Conclusion ────────────────────────────────────────────────────── */
export const conclusion: ConclusionContent = {
  body: [
    'When we set out, we expected to learn about disability. What we learned, more deeply, was about being human — about how much of a person’s life is carried in relationships, in vigilance, in hope, and in the daily work of care.',
    'The two parents changed our understanding by refusing the roles we had half-prepared for them. They were not objects of pity or figures of inspiration. They were people describing their lives plainly, and asking, in effect, to be understood rather than admired from a distance.',
    'Philosophical reflection was necessary because description alone would have let us keep our assumptions. Thinking carefully about dignity, freedom, empathy, and transcendence forced us to see that a person’s worth is not a function of ability, and that many of the barriers we observed are made by people and can be unmade by them.',
    'Inclusion, we now believe, requires both personal change and structural responsibility. It asks each of us to listen and act differently, and it asks our institutions to build environments in which persons with disability and their families can genuinely belong.',
  ],
  finalStatement:
    'We end not with a slogan but with a commitment to keep listening — and to let what we hear continue to change how we live alongside one another.',
};

/* ── References & documentation ────────────────────────────────────── */
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
        'Parent Participant 01, photographed with permission during the interview. Shared in keeping with our confidentiality commitment.',
    },
    {
      id: 'participant-02',
      alt: 'Approved documentation photograph of Parent Participant 02 during the interview.',
      caption:
        'Parent Participant 02, photographed with permission during the interview. Shared in keeping with our confidentiality commitment.',
    },
    {
      id: 'setting',
      alt: 'Approved documentation photograph of the community setting where the interviews took place.',
      caption:
        'The community setting in which the interviews were held, on July 9, 2026.',
    },
  ],
  contributions: [
    { name: 'Kate Chloe Delos Reyes', role: 'Interviewing, transcription review, and the reflection on empathy.' },
    { name: 'Jordin Rose Dela Cruz', role: 'Thematic analysis, social-realities interpretation, and documentation.' },
    { name: 'Rodger C. Pacumba Jr.', role: 'Philosophical reflection, references, and editing.' },
  ],
  confidentiality:
    'Confidentiality statement: The identities of the participants and their children are protected throughout this portfolio. Names have been replaced with anonymous identifiers, and no filename, caption, or description discloses an identity. Photographs are shown only with permission.',
  methodology: [
    'Two semi-structured interviews were conducted with two parents of children with disabilities within their barangay community on July 9, 2026.',
    'With the participants’ permission, the conversations were recorded, transcribed, and reviewed for accuracy, with all identifying details removed. We then analysed the transcripts for recurring themes and reflected on the social and philosophical questions they raised.',
    'This is a small, qualitative inquiry. Its findings are situated and interpretive, and are not offered as generalisations about all persons with disability.',
  ],
};
