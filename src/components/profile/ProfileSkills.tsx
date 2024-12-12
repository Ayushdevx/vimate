import React from 'react';
import { motion } from 'framer-motion';
import { Code, Book, Music, Camera, Palette, Coffee } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

const skills: Skill[] = [
  { name: 'Programming', level: 90, icon: <Code className="w-4 h-4" />, category: 'Technical' },
  { name: 'Photography', level: 75, icon: <Camera className="w-4 h-4" />, category: 'Creative' },
  { name: 'Music', level: 60, icon: <Music className="w-4 h-4" />, category: 'Creative' },
  { name: 'Art', level: 45, icon: <Palette className="w-4 h-4" />, category: 'Creative' },
];

export const ProfileSkills: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="font-semibold text-gray-900 mb-4">Skills & Expertise</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.02 }}
            className="space-y-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-purple-600">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};