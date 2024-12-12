export type NotificationType = 'match' | 'message' | 'like' | 'event' | 'system';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: number;
  read: boolean;
  data?: {
    userId?: string;
    matchId?: string;
    eventId?: string;
  };
}