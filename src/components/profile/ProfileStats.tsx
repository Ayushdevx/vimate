import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Calendar } from 'lucide-react';

interface ProfileStatsProps {
  stats: {
    matches: number;
    likes: number;
    events: number;
  };
}

export const ProfileStats: React.FC<ProfileStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-white rounded-lg p-4 shadow-sm">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="text-center"
      >
        <div className="flex justify-center mb-2">
          <Heart className="w-5 h-5 text-purple-600" />
        </div>
        <div className="text-2xl font-bold text-purple-600">{stats.matches}</div>
        <div className="text-sm text-gray-600">Matches</div>
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="text-center"
      >
        <div className="flex justify-center mb-2">
          <Users className="w-5 h-5 text-purple-600" />
        </div>
        <div className="text-2xl font-bold text-purple-600">{stats.likes}</div>
        <div className="text-sm text-gray-600">Likes</div>
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="text-center"
      >
        <div className="flex justify-center mb-2">
          <Calendar className="w-5 h-5 text-purple-600" />
        </div>
        <div className="text-2xl font-bold text-purple-600">{stats.events}</div>
        <div className="text-sm text-gray-600">Events</div>
      </motion.div>
    </div>
  );
};