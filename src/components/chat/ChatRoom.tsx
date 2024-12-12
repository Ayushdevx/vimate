import React, { useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { Send } from 'lucide-react';
import { useChatStore } from '../../store/useChatStore';
import { Button } from '../ui/Button';

interface ChatRoomProps {
  roomId: string;
}

export const ChatRoom: React.FC<ChatRoomProps> = ({ roomId }) => {
  const [message, setMessage] = React.useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, addMessage } = useChatStore();
  const roomMessages = messages[roomId] || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [roomMessages]);

  const handleSend = () => {
    if (!message.trim()) return;

    addMessage(roomId, {
      id: Date.now().toString(),
      content: message,
      senderId: 'currentUser', // Replace with actual user ID
      receiverId: 'otherUser', // Replace with actual receiver ID
      timestamp: Date.now(),
      read: false,
      type: 'text',
    });

    setMessage('');
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {roomMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.senderId === 'currentUser' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                msg.senderId === 'currentUser'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p>{msg.content}</p>
              <p className="text-xs mt-1 opacity-70">
                {format(msg.timestamp, 'HH:mm')}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-purple-500"
          />
          <Button onClick={handleSend} className="rounded-full p-2">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};