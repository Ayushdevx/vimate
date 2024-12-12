import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface ProfileInterestsProps {
  interests: string[];
  onAddInterest: () => void;
  onRemoveInterest: (interest: string) => void;
}

export const ProfileInterests: React.FC<ProfileInterestsProps> = ({
  interests,
  onAddInterest,
  onRemoveInterest,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="font-semibold text-gray-900 mb-3">Interests</h2>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <motion.span
            key={interest}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm flex items-center gap-2"
          >
            {interest}
            <button
              onClick={() => onRemoveInterest(interest)}
              className="w-4 h-4 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center"
            >
              ×
            </button>
          </motion.span>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onAddInterest}
          className="px-3 py-1 border-2 border-dashed border-gray-300 rounded-full text-sm text-gray-500 hover:border-purple-500 hover:text-purple-500 flex items-center gap-1"
        >
          <Plus className="w-4 h-4" /> Add Interest
        </motion.button>
      </div>
    </div>
  );
};