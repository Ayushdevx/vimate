import React from 'react';
import { useParams } from 'react-router-dom';
import { ChatRoom } from '../components/chat/ChatRoom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ChatPage: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();

  if (!roomId) return null;

  return (
    <div className="h-screen bg-white">
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <Link to="/matches" className="text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div>
          <h2 className="font-semibold">Chat Room</h2>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>
      <ChatRoom roomId={roomId} />
    </div>
  );
};