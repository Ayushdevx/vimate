export interface CompatibilityScore {
  overall: number;
  interests: number;
  academics: number;
  personality: number;
}

export interface MatchPreferences {
  ageRange: [number, number];
  departments: string[];
  interests: string[];
  personalityTraits: string[];
  lookingFor: 'friendship' | 'dating' | 'both';
}

export interface PersonalityTraits {
  extroversion: number;
  openness: number;
  conscientiousness: number;
  agreeableness: number;
  stability: number;
}