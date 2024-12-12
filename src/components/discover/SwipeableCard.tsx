import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { useGesture } from '@use-gesture/react';
import { User } from '../../types/user';
import { Heart, X, Star, Info } from 'lucide-react';

interface SwipeableCardProps {
  user: User;
  onSwipe: (direction: 'left' | 'right' | 'up') => void;
  onInfoClick: () => void;
}

export const SwipeableCard: React.FC<SwipeableCardProps> = ({ user, onSwipe, onInfoClick }) => {
  const [exitX, setExitX] = useState(0);
  const [exitY, setExitY] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const controls = useAnimation();

  const bind = useGesture({
    onDrag: ({ movement: [mx, my], direction: [dx, dy], velocity }) => {
      x.set(mx);
      y.set(my);

      if (velocity > 0.3) {
        const exitDirection = Math.abs(dx) > Math.abs(dy) 
          ? (dx > 0 ? 'right' : 'left')
          : (dy < 0 ? 'up' : null);

        if (exitDirection) {
          setExitX(dx * 200);
          setExitY(dy * 200);
          controls.start({ x: exitX, y: exitY, opacity: 0 });
          onSwipe(exitDirection);
        }
      }
    },
    onDragEnd: ({ movement: [mx, my], velocity }) => {
      if (velocity < 0.3) {
        controls.start({ x: 0, y: 0, transition: { type: 'spring' } });
      }
    },
  });

  return (
    <motion.div
      {...bind()}
      style={{ x, y, rotate, opacity }}
      animate={controls}
      className="absolute w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden touch-none"
    >
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

        <div className="absolute top-4 right-4">
          <button
            onClick={onInfoClick}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
          >
            <Info className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-8 p-4 border-t border-gray-100">
        <button
          onClick={() => onSwipe('left')}
          className="p-4 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <button
          onClick={() => onSwipe('up')}
          className="p-4 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
        >
          <Star className="w-6 h-6" />
        </button>
        <button
          onClick={() => onSwipe('right')}
          className="p-4 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
        >
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
};