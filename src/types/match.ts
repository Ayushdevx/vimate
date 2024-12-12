export interface Match {
  id: string;
  users: [string, string];
  timestamp: number;
  lastMessage?: {
    content: string;
    timestamp: number;
    senderId: string;
  };
}