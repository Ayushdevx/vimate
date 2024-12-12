import { create } from 'zustand';
import { ChatMessage, ChatRoom } from '../types/chat';

interface ChatState {
  rooms: ChatRoom[];
  messages: Record<string, ChatMessage[]>;
  activeRoom: string | null;
  setActiveRoom: (roomId: string | null) => void;
  addMessage: (roomId: string, message: ChatMessage) => void;
  markRoomAsRead: (roomId: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  rooms: [],
  messages: {},
  activeRoom: null,
  setActiveRoom: (roomId) => set({ activeRoom: roomId }),
  addMessage: (roomId, message) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [roomId]: [...(state.messages[roomId] || []), message],
      },
      rooms: state.rooms.map((room) =>
        room.id === roomId
          ? { ...room, lastMessage: message, unreadCount: room.unreadCount + 1 }
          : room
      ),
    })),
  markRoomAsRead: (roomId) =>
    set((state) => ({
      rooms: state.rooms.map((room) =>
        room.id === roomId ? { ...room, unreadCount: 0 } : room
      ),
    })),
}));