import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, UserPlus, LogIn } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../store/useAuthStore';

export const AuthWelcome: React.FC = () => {
  const navigate = useNavigate();
  const { startExploring } = useAuthStore();

  const handleExplore = () => {
    startExploring();
    navigate('/discover');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Heart className="w-16 h-16 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Welcome to VIMate</h1>
          <p className="text-lg text-gray-600">
            Connect, date, and make meaningful relationships with fellow VITians
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => navigate('/signup')}
            className="w-full flex items-center justify-center gap-2"
          >
            <UserPlus className="w-5 h-5" />
            Sign Up
          </Button>

          <Button
            onClick={() => navigate('/login')}
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" />
            Log In
          </Button>

          <button
            onClick={handleExplore}
            className="w-full text-gray-600 hover:text-purple-600 text-sm font-medium"
          >
            Skip for now and explore
          </button>
        </div>

        <p className="text-sm text-gray-500">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};