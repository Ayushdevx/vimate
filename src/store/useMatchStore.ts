import { create } from 'zustand';
import { Match } from '../types/match';

interface MatchState {
  matches: Match[];
  addMatch: (match: Match) => void;
  removeMatch: (matchId: string) => void;
}

export const useMatchStore = create<MatchState>((set) => ({
  matches: [],
  addMatch: (match) => set((state) => ({ matches: [...state.matches, match] })),
  removeMatch: (matchId) => set((state) => ({
    matches: state.matches.filter((match) => match.id !== matchId)
  })),
}));