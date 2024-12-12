import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Plus } from 'lucide-react';

interface ProfilePhotosProps {
  photos: string[];
  onAddPhoto: () => void;
}

export const ProfilePhotos: React.FC<ProfilePhotosProps> = ({ photos, onAddPhoto }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="font-semibold text-gray-900 mb-3">Photos</h2>
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative aspect-square"
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white">
              <Camera className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={onAddPhoto}
          className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-600 transition-colors"
        >
          <Plus className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
};