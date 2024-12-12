import React from 'react';
import { User } from '../../types/user';
import { Heart, X } from 'lucide-react';

interface ProfileCardProps {
  user: User;
  onLike: () => void;
  onPass: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user, onLike, onPass }) => {
  return (
    <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="aspect-[3/4] relative">
        <img
          src={user.photos[0]}
          alt={user.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white">{user.name}, {user.age}</h3>
          <p className="text-white/90">{user.department}</p>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <p className="text-gray-600">{user.bio}</p>
        <div className="flex flex-wrap gap-2">
          {user.interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 p-4 border-t border-gray-100">
        <button
          onClick={onPass}
          className="p-4 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <button
          onClick={onLike}
          className="p-4 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
        >
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};