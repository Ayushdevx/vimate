import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileStats } from '../components/profile/ProfileStats';
import { ProfilePhotos } from '../components/profile/ProfilePhotos';
import { ProfileInterests } from '../components/profile/ProfileInterests';
import { ProfileAchievements } from '../components/profile/ProfileAchievements';
import { ProfileSkills } from '../components/profile/ProfileSkills';
import { ProfileTimeline } from '../components/profile/ProfileTimeline';
import { EditProfileModal } from '../components/profile/EditProfileModal';
import { useAuthStore } from '../store/useAuthStore';

// ... (previous imports and mockUser data remain the same)

export const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuthStore();

  // ... (previous mockUser data and handlers remain the same)

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ProfileHeader
        user={mockUser}
        onEditClick={() => setIsEditing(true)}
        onPhotoChange={handleAddPhoto}
      />

      <div className="px-4 pt-4">
        <div className="max-w-lg mx-auto space-y-6">
          {/* Basic Info */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">{mockUser.name}, {mockUser.age}</h1>
            <div className="flex items-center justify-center gap-2 text-gray-600 mt-1">
              <MapPin className="w-4 h-4" />
              <span>{mockUser.location}</span>
            </div>
          </div>

          <ProfileStats stats={mockUser.stats} />

          {/* Bio */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-lg p-4 shadow-sm"
          >
            <h2 className="font-semibold text-gray-900 mb-2">About Me</h2>
            <p className="text-gray-600">{mockUser.bio}</p>
          </motion.div>

          {/* Academic Info */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-lg p-4 shadow-sm space-y-3"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">{mockUser.department}</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">{mockUser.year}</span>
            </div>
          </motion.div>

          <ProfileSkills />
          <ProfileAchievements />
          <ProfileInterests
            interests={mockUser.interests}
            onAddInterest={handleAddInterest}
            onRemoveInterest={handleRemoveInterest}
          />
          <ProfilePhotos
            photos={mockUser.photos}
            onAddPhoto={handleAddPhoto}
          />
          <ProfileTimeline />
        </div>
      </div>

      <AnimatePresence>
        {isEditing && (
          <EditProfileModal
            onClose={() => setIsEditing(false)}
            onSave={(data) => {
              // Implement save logic
              setIsEditing(false);
            }}
            initialData={mockUser}
          />
        )}
      </AnimatePresence>
    </div>
  );
};