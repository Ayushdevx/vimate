import React from 'react';
import { useMatchStore } from '../store/useMatchStore';
import { MessageCircle } from 'lucide-react';

export const MatchesPage: React.FC = () => {
  const { matches } = useMatchStore();

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Matches</h1>
        
        {matches.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No matches yet. Keep swiping!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {matches.map((match) => (
              <div
                key={match.id}
                className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-gray-200" />
                <div className="flex-1">
                  <h3 className="font-medium">Match Name</h3>
                  {match.lastMessage && (
                    <p className="text-sm text-gray-500 truncate">
                      {match.lastMessage.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};