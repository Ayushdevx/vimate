import { create } from 'zustand';
import { VerificationRequest, VerificationStatus } from '../types/verification';

interface VerificationState {
  verificationRequests: VerificationRequest[];
  submitVerification: (request: Omit<VerificationRequest, 'id' | 'timestamp' | 'status'>) => void;
  updateVerificationStatus: (requestId: string, status: VerificationStatus) => void;
}

export const useVerificationStore = create<VerificationState>((set) => ({
  verificationRequests: [],
  submitVerification: (request) =>
    set((state) => ({
      verificationRequests: [...state.verificationRequests, {
        ...request,
        id: Date.now().toString(),
        timestamp: Date.now(),
        status: 'pending'
      }]
    })),
  updateVerificationStatus: (requestId, status) =>
    set((state) => ({
      verificationRequests: state.verificationRequests.map(request =>
        request.id === requestId
          ? { ...request, status, verifiedAt: status === 'verified' ? Date.now() : undefined }
          : request
      )
    }))
}));