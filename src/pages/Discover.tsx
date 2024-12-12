import React, { useState } from 'react';
import { SwipeableCard } from '../components/discover/SwipeableCard';
import { useMatchStore } from '../store/useMatchStore';
import { useMatchingStore } from '../store/useMatchingStore';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from '../types/user';

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah',
    age: 20,
    bio: 'Computer Science student who loves coding and coffee ☕',
    department: 'Computer Science',
    interests: ['Programming', 'Music', 'Photography'],
    photos: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330'],
    verified: true,
  },
  {
    id: '2',
    name: 'Rahul',
    age: 21,
    bio: 'Basketball player and tech enthusiast 🏀',
    department: 'Electronics',
    interests: ['Sports', 'Technology', 'Travel'],
    photos: ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e'],
    verified: true,
  },
  // Add more mock users
];

export const DiscoverPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const { addMatch } = useMatchStore();
  const { calculateCompatibility } = useMatchingStore();

  const handleSwipe = (direction: 'left' | 'right' | 'up') => {
    if (direction === 'right') {
      const compatibility = calculateCompatibility('currentUser', mockUsers[currentIndex].id);
      if (compatibility.overall > 0.7) {
        addMatch({
          id: Date.now().toString(),
          users: ['currentUser', mockUsers[currentIndex].id],
          timestamp: Date.now(),
        });
      }
    }
    
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 300);
  };

  if (currentIndex >= mockUsers.length) {
    return (
      <div className="min-h-screen bg-gray-50 pt-6 pb-20 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No More Profiles</h2>
          <p className="text-gray-600">Check back later for new matches!</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Discover</h1>
        
        <div className="relative h-[calc(100vh-12rem)]">
          <AnimatePresence>
            <SwipeableCard
              key={currentIndex}
              user={mockUsers[currentIndex]}
              onSwipe={handleSwipe}
              onInfoClick={() => setShowUserInfo(true)}
            />
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showUserInfo && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setShowUserInfo(false)}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6">
              <h3 className="text-xl font-bold mb-4">{mockUsers[currentIndex].name}</h3>
              <p className="text-gray-600 mb-4">{mockUsers[currentIndex].bio}</p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {mockUsers[currentIndex].interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};