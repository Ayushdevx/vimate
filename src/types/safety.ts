export type ReportReason = 
  | 'inappropriate_content'
  | 'harassment'
  | 'fake_profile'
  | 'spam'
  | 'underage'
  | 'other';

export interface Report {
  id: string;
  reporterId: string;
  reportedUserId: string;
  reason: ReportReason;
  description: string;
  timestamp: number;
  status: 'pending' | 'investigating' | 'resolved' | 'dismissed';
  evidence?: string[];
}

export interface BlockedUser {
  userId: string;
  blockedId: string;
  timestamp: number;
  reason?: string;
}