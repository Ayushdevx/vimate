import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy, Zap } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
}

const achievements: Achievement[] = [
  {
    id: 'social-butterfly',
    title: 'Social Butterfly',
    description: 'Connected with 50+ students',
    icon: <Star className="w-5 h-5" />,
    unlocked: true,
  },
  {
    id: 'event-organizer',
    title: 'Event Organizer',
    description: 'Successfully hosted 5 events',
    icon: <Trophy className="w-5 h-5" />,
    unlocked: true,
  },
  {
    id: 'perfect-match',
    title: 'Perfect Match',
    description: 'Found a 100% compatibility match',
    icon: <Zap className="w-5 h-5" />,
    unlocked: false,
  },
];

export const ProfileAchievements: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Award className="w-5 h-5 text-purple-600" />
        <h2 className="font-semibold text-gray-900">Achievements</h2>
      </div>
      <div className="space-y-3">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            whileHover={{ scale: 1.02 }}
            className={`p-3 rounded-lg border ${
              achievement.unlocked
                ? 'border-purple-200 bg-purple-50'
                : 'border-gray-200 bg-gray-50 opacity-60'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`${
                achievement.unlocked ? 'text-purple-600' : 'text-gray-400'
              }`}>
                {achievement.icon}
              </div>
              <div>
                <h3 className={`font-medium ${
                  achievement.unlocked ? 'text-purple-900' : 'text-gray-500'
                }`}>
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};