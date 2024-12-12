import { create } from 'zustand';
import { Event } from '../types/event';

interface EventState {
  events: Event[];
  addEvent: (event: Event) => void;
  updateEvent: (eventId: string, updates: Partial<Event>) => void;
  removeEvent: (eventId: string) => void;
  attendEvent: (eventId: string, userId: string) => void;
  leaveEvent: (eventId: string, userId: string) => void;
}

export const useEventStore = create<EventState>((set) => ({
  events: [],
  addEvent: (event) =>
    set((state) => ({ events: [...state.events, event] })),
  updateEvent: (eventId, updates) =>
    set((state) => ({
      events: state.events.map((event) =>
        event.id === eventId ? { ...event, ...updates } : event
      ),
    })),
  removeEvent: (eventId) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== eventId),
    })),
  attendEvent: (eventId, userId) =>
    set((state) => ({
      events: state.events.map((event) =>
        event.id === eventId
          ? { ...event, attendees: [...event.attendees, userId] }
          : event
      ),
    })),
  leaveEvent: (eventId, userId) =>
    set((state) => ({
      events: state.events.map((event) =>
        event.id === eventId
          ? {
              ...event,
              attendees: event.attendees.filter((id) => id !== userId),
            }
          : event
      ),
    })),
}));