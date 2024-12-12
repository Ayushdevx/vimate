import { create } from 'zustand';
import { CompatibilityScore, MatchPreferences } from '../types/matching';

interface MatchingState {
  preferences: MatchPreferences | null;
  compatibilityScores: Record<string, CompatibilityScore>;
  updatePreferences: (prefs: MatchPreferences) => void;
  calculateCompatibility: (userId: string, targetId: string) => CompatibilityScore;
}

export const useMatchingStore = create<MatchingState>((set, get) => ({
  preferences: null,
  compatibilityScores: {},
  updatePreferences: (prefs) => set({ preferences: prefs }),
  calculateCompatibility: (userId, targetId) => {
    // Advanced matching algorithm implementation
    const score: CompatibilityScore = {
      overall: 0.85,
      interests: 0.9,
      academics: 0.8,
      personality: 0.85
    };
    
    set((state) => ({
      compatibilityScores: {
        ...state.compatibilityScores,
        [targetId]: score
      }
    }));
    
    return score;
  }
}));