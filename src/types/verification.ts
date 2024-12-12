export type VerificationStatus = 
  | 'unverified'
  | 'pending'
  | 'verified'
  | 'rejected';

export interface VerificationRequest {
  id: string;
  userId: string;
  studentId: string;
  institutionalEmail: string;
  documentProof?: string;
  status: VerificationStatus;
  timestamp: number;
  verifiedAt?: number;
}