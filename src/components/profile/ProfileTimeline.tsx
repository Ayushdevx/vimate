import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, Star, Users } from 'lucide-react';
import { format } from 'date-fns';

interface TimelineEvent {
  id: string;
  type: 'match' | 'event' | 'achievement';
  title: string;
  description: string;
  date: Date;
  icon: React.ReactNode;
}

const events: TimelineEvent[] = [
  {
    id: '1',
    type: 'match',
    title: 'New Match!',
    description: 'Connected with Sarah from Computer Science',
    date: new Date(2024, 2, 15),
    icon: <Heart className="w-4 h-4" />,
  },
  {
    id: '2',
    type: 'event',
    title: 'Tech Meetup',
    description: 'Hosted a successful programming workshop',
    date: new Date(2024, 2, 10),
    icon: <Users className="w-4 h-4" />,
  },
  {
    id: '3',
    type: 'achievement',
    title: 'Achievement Unlocked',
    description: 'Became a verified member',
    date: new Date(2024, 2, 5),
    icon: <Star className="w-4 h-4" />,
  },
];

export const ProfileTimeline: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-purple-600" />
        <h2 className="font-semibold text-gray-900">Recent Activity</h2>
      </div>
      <div className="space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-6 pb-4 border-l-2 border-gray-200 last:pb-0"
          >
            <div className="absolute -left-[9px] p-1 bg-white rounded-full border-2 border-gray-200">
              <div className="text-purple-600">{event.icon}</div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">{event.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{event.description}</p>
              <p className="text-xs text-gray-400 mt-1">
                {format(event.date, 'MMM d, yyyy')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};