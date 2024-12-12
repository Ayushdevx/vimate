import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit2, Shield } from 'lucide-react';
import { Button } from '../ui/Button';

interface ProfileHeaderProps {
  user: {
    name: string;
    photos: string[];
    verified: boolean;
  };
  onEditClick: () => void;
  onPhotoChange: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, onEditClick, onPhotoChange }) => {
  return (
    <>
      <div className="relative h-64 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black/20" />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onEditClick}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white"
        >
          <Edit2 className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="relative -mt-20 px-4">
        <div className="max-w-lg mx-auto">
          <div className="relative">
            <img
              src={user.photos[0]}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <button 
              onClick={onPhotoChange}
              className="absolute bottom-0 right-0 p-2 rounded-full bg-purple-600 text-white shadow-lg"
            >
              <Camera className="w-5 h-5" />
            </button>
            {user.verified && (
              <div className="absolute top-0 right-0 bg-green-500 text-white p-1 rounded-full">
                <Shield className="w-4 h-4" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};