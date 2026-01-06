// Personality Traits
export type PersonalityTrait =
  | "Visionary"
  | "Innovator"
  | "Strategist"
  | "Organizer"
  | "Analyst"
  | "Communicator"
  | "Collaborator"
  | "Caregiver"
  | "Builder"
  | "Explorer"
  | "Investigator"
  | "Performer";

export const ALL_TRAITS: PersonalityTrait[] = [
  "Visionary",
  "Innovator",
  "Strategist",
  "Organizer",
  "Analyst",
  "Communicator",
  "Collaborator",
  "Caregiver",
  "Builder",
  "Explorer",
  "Investigator",
  "Performer",
];

// Trait descriptions for results display
export const TRAIT_DESCRIPTIONS: Record<PersonalityTrait, string> = {
  Visionary: "You see the big picture and imagine future possibilities. You're driven by long-term goals and conceptual thinking.",
  Innovator: "You thrive on new ideas and creative problem-solving. You're not afraid to challenge the status quo.",
  Strategist: "You excel at planning and making calculated decisions. You think several steps ahead.",
  Organizer: "You bring structure and order to chaos. You're detail-oriented and systematic in your approach.",
  Analyst: "You love diving deep into data and facts. You make decisions based on evidence and logical reasoning.",
  Communicator: "You excel at expressing ideas and connecting with others. You're persuasive and articulate.",
  Collaborator: "You work well with others and value team success. You're a natural bridge-builder.",
  Caregiver: "You're empathetic and supportive. You prioritize others' wellbeing and create nurturing environments.",
  Builder: "You're hands-on and results-driven. You turn plans into reality through practical execution.",
  Explorer: "You embrace change and seek new experiences. You're adaptable and energized by the unknown.",
  Investigator: "You're curious and love to research. You dig deep to understand how things work.",
  Performer: "You're charismatic and comfortable in the spotlight. You engage and inspire others.",
};

// Question category type
export type QuestionCategory =
  | "creativity_innovation"
  | "organization_structure"
  | "communication_relationship"
  | "analytical_thinking"
  | "hands_on_execution"
  | "emotional_support"
  | "long_term_planning"
  | "risk_adaptability"
  | "teamwork_collaboration"
  | "curiosity_research"
  | "charisma_engagement"
  | "practicality_results";

// Trait mapping with weights (3 = highest alignment, 2 = moderate, 1 = lowest)
export interface TraitMapping {
  trait: PersonalityTrait;
  weight: 1 | 2 | 3;
}

// Question structure
export interface Question {
  id: string;
  category: QuestionCategory;
  statement: string;
  traitMappings: [TraitMapping, TraitMapping, TraitMapping]; // Always exactly 3 traits
}

// Category metadata
export const CATEGORY_NAMES: Record<QuestionCategory, string> = {
  creativity_innovation: "Creativity & Innovation",
  organization_structure: "Organization & Structure",
  communication_relationship: "Communication & Relationships",
  analytical_thinking: "Analytical Thinking",
  hands_on_execution: "Hands-On Work & Execution",
  emotional_support: "Emotional Support & Empathy",
  long_term_planning: "Long-Term Planning",
  risk_adaptability: "Risk-Taking & Adaptability",
  teamwork_collaboration: "Teamwork & Collaboration",
  curiosity_research: "Curiosity & Research",
  charisma_engagement: "Charisma & Public Engagement",
  practicality_results: "Practicality & Results",
};

// All 36 questions (12 categories × 3 questions each)
export const QUESTIONS: Question[] = [
  // Category 1: Creativity & Innovation
  {
    id: "ci_1",
    category: "creativity_innovation",
    statement: "I enjoy thinking about new ideas and coming up with creative solutions.",
    traitMappings: [
      { trait: "Visionary", weight: 3 },
      { trait: "Innovator", weight: 2 },
      { trait: "Strategist", weight: 1 },
    ],
  },
  {
    id: "ci_2",
    category: "creativity_innovation",
    statement: "I'm energized by innovation and love exploring uncharted territory.",
    traitMappings: [
      { trait: "Innovator", weight: 3 },
      { trait: "Explorer", weight: 2 },
      { trait: "Visionary", weight: 1 },
    ],
  },
  {
    id: "ci_3",
    category: "creativity_innovation",
    statement: "I like thinking about the future and imagining how things could evolve.",
    traitMappings: [
      { trait: "Visionary", weight: 3 },
      { trait: "Strategist", weight: 2 },
      { trait: "Innovator", weight: 1 },
    ],
  },

  // Category 2: Organization & Structure
  {
    id: "os_1",
    category: "organization_structure",
    statement: "I prefer having a clear plan and organized approach to my work.",
    traitMappings: [
      { trait: "Organizer", weight: 3 },
      { trait: "Strategist", weight: 2 },
      { trait: "Analyst", weight: 1 },
    ],
  },
  {
    id: "os_2",
    category: "organization_structure",
    statement: "I'm good at creating systems and processes that improve efficiency.",
    traitMappings: [
      { trait: "Organizer", weight: 3 },
      { trait: "Builder", weight: 2 },
      { trait: "Analyst", weight: 1 },
    ],
  },
  {
    id: "os_3",
    category: "organization_structure",
    statement: "I feel most comfortable when there's structure and clear expectations.",
    traitMappings: [
      { trait: "Organizer", weight: 3 },
      { trait: "Analyst", weight: 2 },
      { trait: "Strategist", weight: 1 },
    ],
  },

  // Category 3: Communication & Relationships
  {
    id: "cr_1",
    category: "communication_relationship",
    statement: "I find it easy to express my thoughts and ideas to others.",
    traitMappings: [
      { trait: "Communicator", weight: 3 },
      { trait: "Performer", weight: 2 },
      { trait: "Collaborator", weight: 1 },
    ],
  },
  {
    id: "cr_2",
    category: "communication_relationship",
    statement: "Building and maintaining relationships comes naturally to me.",
    traitMappings: [
      { trait: "Collaborator", weight: 3 },
      { trait: "Communicator", weight: 2 },
      { trait: "Caregiver", weight: 1 },
    ],
  },
  {
    id: "cr_3",
    category: "communication_relationship",
    statement: "I'm skilled at mediating conflicts and finding common ground.",
    traitMappings: [
      { trait: "Communicator", weight: 3 },
      { trait: "Collaborator", weight: 2 },
      { trait: "Caregiver", weight: 1 },
    ],
  },

  // Category 4: Analytical Thinking
  {
    id: "at_1",
    category: "analytical_thinking",
    statement: "I enjoy analyzing data and using facts to solve complex problems.",
    traitMappings: [
      { trait: "Analyst", weight: 3 },
      { trait: "Strategist", weight: 2 },
      { trait: "Visionary", weight: 1 },
    ],
  },
  {
    id: "at_2",
    category: "analytical_thinking",
    statement: "I prefer making decisions based on logic rather than intuition.",
    traitMappings: [
      { trait: "Analyst", weight: 3 },
      { trait: "Investigator", weight: 2 },
      { trait: "Organizer", weight: 1 },
    ],
  },
  {
    id: "at_3",
    category: "analytical_thinking",
    statement: "I'm good at breaking down complex problems into manageable parts.",
    traitMappings: [
      { trait: "Analyst", weight: 3 },
      { trait: "Strategist", weight: 2 },
      { trait: "Organizer", weight: 1 },
    ],
  },

  // Category 5: Hands-On Work & Execution
  {
    id: "he_1",
    category: "hands_on_execution",
    statement: "I prefer doing practical work rather than just planning or theorizing.",
    traitMappings: [
      { trait: "Builder", weight: 3 },
      { trait: "Explorer", weight: 2 },
      { trait: "Innovator", weight: 1 },
    ],
  },
  {
    id: "he_2",
    category: "hands_on_execution",
    statement: "I get satisfaction from completing tangible tasks and seeing results.",
    traitMappings: [
      { trait: "Builder", weight: 3 },
      { trait: "Organizer", weight: 2 },
      { trait: "Analyst", weight: 1 },
    ],
  },
  {
    id: "he_3",
    category: "hands_on_execution",
    statement: "I'm comfortable taking action even when I don't have all the information.",
    traitMappings: [
      { trait: "Builder", weight: 3 },
      { trait: "Explorer", weight: 2 },
      { trait: "Innovator", weight: 1 },
    ],
  },

  // Category 6: Emotional Support & Empathy
  {
    id: "es_1",
    category: "emotional_support",
    statement: "I'm often the person others come to for emotional support.",
    traitMappings: [
      { trait: "Caregiver", weight: 3 },
      { trait: "Communicator", weight: 2 },
      { trait: "Collaborator", weight: 1 },
    ],
  },
  {
    id: "es_2",
    category: "emotional_support",
    statement: "I'm highly attuned to how others are feeling.",
    traitMappings: [
      { trait: "Caregiver", weight: 3 },
      { trait: "Collaborator", weight: 2 },
      { trait: "Communicator", weight: 1 },
    ],
  },
  {
    id: "es_3",
    category: "emotional_support",
    statement: "I prioritize creating a supportive and inclusive environment.",
    traitMappings: [
      { trait: "Caregiver", weight: 3 },
      { trait: "Collaborator", weight: 2 },
      { trait: "Organizer", weight: 1 },
    ],
  },

  // Category 7: Long-Term Planning
  {
    id: "lp_1",
    category: "long_term_planning",
    statement: "I think several steps ahead when making decisions.",
    traitMappings: [
      { trait: "Strategist", weight: 3 },
      { trait: "Visionary", weight: 2 },
      { trait: "Analyst", weight: 1 },
    ],
  },
  {
    id: "lp_2",
    category: "long_term_planning",
    statement: "I'm good at setting long-term goals and creating plans to achieve them.",
    traitMappings: [
      { trait: "Strategist", weight: 3 },
      { trait: "Organizer", weight: 2 },
      { trait: "Visionary", weight: 1 },
    ],
  },
  {
    id: "lp_3",
    category: "long_term_planning",
    statement: "I consider the long-term consequences of my actions.",
    traitMappings: [
      { trait: "Strategist", weight: 3 },
      { trait: "Analyst", weight: 2 },
      { trait: "Organizer", weight: 1 },
    ],
  },

  // Category 8: Risk-Taking & Adaptability
  {
    id: "ra_1",
    category: "risk_adaptability",
    statement: "I'm comfortable taking calculated risks to achieve my goals.",
    traitMappings: [
      { trait: "Explorer", weight: 3 },
      { trait: "Innovator", weight: 2 },
      { trait: "Builder", weight: 1 },
    ],
  },
  {
    id: "ra_2",
    category: "risk_adaptability",
    statement: "I adapt quickly when circumstances change unexpectedly.",
    traitMappings: [
      { trait: "Explorer", weight: 3 },
      { trait: "Builder", weight: 2 },
      { trait: "Innovator", weight: 1 },
    ],
  },
  {
    id: "ra_3",
    category: "risk_adaptability",
    statement: "I see change as an opportunity rather than a threat.",
    traitMappings: [
      { trait: "Explorer", weight: 3 },
      { trait: "Visionary", weight: 2 },
      { trait: "Innovator", weight: 1 },
    ],
  },

  // Category 9: Teamwork & Collaboration
  {
    id: "tc_1",
    category: "teamwork_collaboration",
    statement: "I work best when collaborating with others on shared goals.",
    traitMappings: [
      { trait: "Collaborator", weight: 3 },
      { trait: "Communicator", weight: 2 },
      { trait: "Caregiver", weight: 1 },
    ],
  },
  {
    id: "tc_2",
    category: "teamwork_collaboration",
    statement: "I value diverse perspectives and actively seek input from others.",
    traitMappings: [
      { trait: "Collaborator", weight: 3 },
      { trait: "Caregiver", weight: 2 },
      { trait: "Communicator", weight: 1 },
    ],
  },
  {
    id: "tc_3",
    category: "teamwork_collaboration",
    statement: "I'm skilled at bringing people together and fostering team unity.",
    traitMappings: [
      { trait: "Collaborator", weight: 3 },
      { trait: "Communicator", weight: 2 },
      { trait: "Performer", weight: 1 },
    ],
  },

  // Category 10: Curiosity & Research
  {
    id: "cr2_1",
    category: "curiosity_research",
    statement: "I have a strong desire to learn and understand new things.",
    traitMappings: [
      { trait: "Investigator", weight: 3 },
      { trait: "Analyst", weight: 2 },
      { trait: "Explorer", weight: 1 },
    ],
  },
  {
    id: "cr2_2",
    category: "curiosity_research",
    statement: "I enjoy researching topics in depth before forming an opinion.",
    traitMappings: [
      { trait: "Investigator", weight: 3 },
      { trait: "Analyst", weight: 2 },
      { trait: "Strategist", weight: 1 },
    ],
  },
  {
    id: "cr2_3",
    category: "curiosity_research",
    statement: "I ask a lot of questions to get to the root of issues.",
    traitMappings: [
      { trait: "Investigator", weight: 3 },
      { trait: "Analyst", weight: 2 },
      { trait: "Communicator", weight: 1 },
    ],
  },

  // Category 11: Charisma & Public Engagement
  {
    id: "ce_1",
    category: "charisma_engagement",
    statement: "I'm comfortable speaking in front of groups and presenting ideas.",
    traitMappings: [
      { trait: "Performer", weight: 3 },
      { trait: "Communicator", weight: 2 },
      { trait: "Visionary", weight: 1 },
    ],
  },
  {
    id: "ce_2",
    category: "charisma_engagement",
    statement: "I can energize and motivate others with my enthusiasm.",
    traitMappings: [
      { trait: "Performer", weight: 3 },
      { trait: "Communicator", weight: 2 },
      { trait: "Collaborator", weight: 1 },
    ],
  },
  {
    id: "ce_3",
    category: "charisma_engagement",
    statement: "I enjoy being the center of attention in social situations.",
    traitMappings: [
      { trait: "Performer", weight: 3 },
      { trait: "Explorer", weight: 2 },
      { trait: "Communicator", weight: 1 },
    ],
  },

  // Category 12: Practicality & Results
  {
    id: "pr_1",
    category: "practicality_results",
    statement: "I focus on what's realistic and achievable rather than idealistic.",
    traitMappings: [
      { trait: "Builder", weight: 3 },
      { trait: "Organizer", weight: 2 },
      { trait: "Analyst", weight: 1 },
    ],
  },
  {
    id: "pr_2",
    category: "practicality_results",
    statement: "I measure success by tangible outcomes and deliverables.",
    traitMappings: [
      { trait: "Builder", weight: 3 },
      { trait: "Analyst", weight: 2 },
      { trait: "Organizer", weight: 1 },
    ],
  },
  {
    id: "pr_3",
    category: "practicality_results",
    statement: "I'm driven by efficiency and making the best use of resources.",
    traitMappings: [
      { trait: "Builder", weight: 3 },
      { trait: "Organizer", weight: 2 },
      { trait: "Strategist", weight: 1 },
    ],
  },
];

// Helper to get questions by category
export function getQuestionsByCategory(category: QuestionCategory): Question[] {
  return QUESTIONS.filter((q) => q.category === category);
}

// Get all unique categories in order
export function getCategories(): QuestionCategory[] {
  return Object.keys(CATEGORY_NAMES) as QuestionCategory[];
}

