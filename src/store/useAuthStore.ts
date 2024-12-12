import { create } from 'zustand';
import { User } from '../types/user';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isExploringMode: boolean;
  login: (user: User) => void;
  logout: () => void;
  startExploring: () => void;
  endExploring: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isExploringMode: false,
  login: (user) => set({ user, isAuthenticated: true, isExploringMode: false }),
  logout: () => set({ user: null, isAuthenticated: false, isExploringMode: false }),
  startExploring: () => set({ isExploringMode: true }),
  endExploring: () => set({ isExploringMode: false }),
}));