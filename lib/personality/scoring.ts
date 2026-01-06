import { QUESTIONS, ALL_TRAITS, PersonalityTrait, TRAIT_DESCRIPTIONS } from "./questions";

// Response type: questionId -> rating (1-5)
export type AssessmentResponses = Record<string, number>;

// Score for a single trait
export interface TraitScore {
  trait: PersonalityTrait;
  score: number;
  percentage: number;
  description: string;
}

// Full assessment results
export interface AssessmentResults {
  traitScores: TraitScore[];
  topTraits: PersonalityTrait[];
  responses: AssessmentResponses;
}

const MAX_POSSIBLE_SCORES: Record<PersonalityTrait, number> = (() => {
  const scores = {} as Record<PersonalityTrait, number>;
  for (const trait of ALL_TRAITS) {
    scores[trait] = 0;
  }
  for (const question of QUESTIONS) {
    for (const { trait, weight } of question.traitMappings) {
      scores[trait] += 5 * weight; // Max rating is 5
    }
  }
  return scores;
})();

/**
 * Calculate trait scores from assessment responses using weighted scoring.
 */
export function calculateScores(responses: AssessmentResponses): AssessmentResults {
  const rawScores = {} as Record<PersonalityTrait, number>;
  for (const trait of ALL_TRAITS) {
    rawScores[trait] = 0;
  }

  // Single pass through questions - accumulate weighted scores
  for (const question of QUESTIONS) {
    const rating = responses[question.id];
    
    // Skip if no response for this question
    if (rating == null) continue;

    for (const { trait, weight } of question.traitMappings) {
      rawScores[trait] += rating * weight;
    }
  }

  // Convert raw scores to TraitScore objects with percentages
  const traitScores: TraitScore[] = new Array(ALL_TRAITS.length);
  for (let i = 0; i < ALL_TRAITS.length; i++) {
    const trait = ALL_TRAITS[i];
    const maxScore = MAX_POSSIBLE_SCORES[trait];
    traitScores[i] = {
      trait,
      score: rawScores[trait],
      percentage: maxScore > 0 ? Math.round((rawScores[trait] / maxScore) * 100) : 0,
      description: TRAIT_DESCRIPTIONS[trait],
    };
  }

  const sortedTraits = traitScores.slice().sort((a, b) => b.score - a.score);
  const topTraits: PersonalityTrait[] = [
    sortedTraits[0].trait,
    sortedTraits[1].trait,
    sortedTraits[2].trait,
  ];

  return {
    traitScores,
    topTraits,
    responses,
  };
}

/**
 * Validate that all questions have been answered with valid ratings.
 * 
 * @param responses - Map of questionId to rating
 * @returns Object with isValid flag and any missing question IDs
 */
export function validateResponses(responses: AssessmentResponses): {
  isValid: boolean;
  missingQuestions: string[];
  invalidRatings: string[];
} {
  const missingQuestions: string[] = [];
  const invalidRatings: string[] = [];

  QUESTIONS.forEach((question) => {
    const rating = responses[question.id];
    
    if (rating === undefined || rating === null) {
      missingQuestions.push(question.id);
    } else if (rating < 1 || rating > 5 || !Number.isInteger(rating)) {
      invalidRatings.push(question.id);
    }
  });

  return {
    isValid: missingQuestions.length === 0 && invalidRatings.length === 0,
    missingQuestions,
    invalidRatings,
  };
}

/**
 * Get a summary of the assessment results suitable for display.
 * 
 * @param results - The calculated assessment results
 * @returns Object with formatted summary data
 */
export function getResultsSummary(results: AssessmentResults): {
  topThree: TraitScore[];
  allTraitsSorted: TraitScore[];
  dominantTrait: TraitScore;
} {
  const allTraitsSorted = [...results.traitScores].sort((a, b) => b.score - a.score);
  const topThree = allTraitsSorted.slice(0, 3);
  const dominantTrait = allTraitsSorted[0];

  return {
    topThree,
    allTraitsSorted,
    dominantTrait,
  };
}

/**
 * Serialize results for storage in Supabase.
 * 
 * @param results - The assessment results
 * @returns Object ready for database insertion
 */
export function serializeForStorage(results: AssessmentResults, email: string) {
  return {
    email,
    responses: results.responses,
    trait_scores: results.traitScores.reduce((acc, ts) => {
      acc[ts.trait] = { score: ts.score, percentage: ts.percentage };
      return acc;
    }, {} as Record<string, { score: number; percentage: number }>),
    top_traits: results.topTraits,
  };
}

