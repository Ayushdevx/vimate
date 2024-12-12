export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startTime: number;
  endTime: number;
  organizer: string;
  attendees: string[];
  maxAttendees?: number;
  tags: string[];
  imageUrl?: string;
}