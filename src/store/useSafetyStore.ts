import { create } from 'zustand';
import { Report, BlockedUser, ReportReason } from '../types/safety';

interface SafetyState {
  reports: Report[];
  blockedUsers: BlockedUser[];
  submitReport: (report: Omit<Report, 'id' | 'timestamp' | 'status'>) => void;
  blockUser: (userId: string, blockedId: string, reason?: string) => void;
  unblockUser: (userId: string, blockedId: string) => void;
}

export const useSafetyStore = create<SafetyState>((set) => ({
  reports: [],
  blockedUsers: [],
  submitReport: (report) => 
    set((state) => ({
      reports: [...state.reports, {
        ...report,
        id: Date.now().toString(),
        timestamp: Date.now(),
        status: 'pending'
      }]
    })),
  blockUser: (userId, blockedId, reason) =>
    set((state) => ({
      blockedUsers: [...state.blockedUsers, {
        userId,
        blockedId,
        timestamp: Date.now(),
        reason
      }]
    })),
  unblockUser: (userId, blockedId) =>
    set((state) => ({
      blockedUsers: state.blockedUsers.filter(
        (block) => !(block.userId === userId && block.blockedId === blockedId)
      )
    }))
}));