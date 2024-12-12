import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, Shield, Eye, Moon, Smartphone, Heart, Book, Map, 
  LogOut, Globe, Lock, BellRing, UserPlus, MessageSquare,
  Zap, Sliders, PenTool
} from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { Button } from '../components/ui/Button';
import { Switch } from '../components/ui/Switch';

interface SettingItemProps {
  icon: React.ReactNode;
  label: string;
  description?: string;
  onClick: () => void;
  hasSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  label,
  description,
  onClick,
  hasSwitch,
  switchValue,
  onSwitchChange
}) => (
  <motion.button
    whileHover={{ x: 5 }}
    onClick={onClick}
    className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
  >
    <span className="text-purple-600">{icon}</span>
    <div className="flex-1">
      <span className="text-gray-700 font-medium">{label}</span>
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
    </div>
    {hasSwitch && (
      <Switch
        checked={switchValue || false}
        onCheckedChange={onSwitchChange}
        onClick={(e) => e.stopPropagation()}
      />
    )}
  </motion.button>
);

export const SettingsPage: React.FC = () => {
  const { logout } = useAuthStore();
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    locationServices: true,
    emailNotifications: true,
    profileVisibility: 'everyone',
  });

  const settingSections = [
    {
      title: 'Account',
      items: [
        {
          icon: <Shield className="w-5 h-5" />,
          label: 'Privacy Settings',
          description: 'Control who can see your profile and information',
          onClick: () => {},
        },
        {
          icon: <Eye className="w-5 h-5" />,
          label: 'Profile Visibility',
          description: 'Manage who can discover your profile',
          onClick: () => {},
          hasSwitch: true,
          switchValue: settings.profileVisibility === 'everyone',
          onSwitchChange: (value) => 
            setSettings(s => ({ ...s, profileVisibility: value ? 'everyone' : 'matches' })),
        },
        {
          icon: <BellRing className="w-5 h-5" />,
          label: 'Notifications',
          description: 'Customize your notification preferences',
          onClick: () => {},
          hasSwitch: true,
          switchValue: settings.notifications,
          onSwitchChange: (value) => 
            setSettings(s => ({ ...s, notifications: value })),
        },
      ]
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: <Heart className="w-5 h-5" />,
          label: 'Dating Preferences',
          description: 'Set your matching preferences and filters',
          onClick: () => {},
        },
        {
          icon: <Map className="w-5 h-5" />,
          label: 'Location Settings',
          description: 'Control your location visibility',
          onClick: () => {},
          hasSwitch: true,
          switchValue: settings.locationServices,
          onSwitchChange: (value) => 
            setSettings(s => ({ ...s, locationServices: value })),
        },
        {
          icon: <Moon className="w-5 h-5" />,
          label: 'Dark Mode',
          description: 'Toggle dark mode appearance',
          onClick: () => {},
          hasSwitch: true,
          switchValue: settings.darkMode,
          onSwitchChange: (value) => 
            setSettings(s => ({ ...s, darkMode: value })),
        },
      ]
    },
    {
      title: 'Academic',
      items: [
        {
          icon: <Book className="w-5 h-5" />,
          label: 'Course Preferences',
          description: 'Manage your academic interests',
          onClick: () => {},
        },
        {
          icon: <UserPlus className="w-5 h-5" />,
          label: 'Study Group Settings',
          description: 'Configure study group preferences',
          onClick: () => {},
        },
      ]
    },
    {
      title: 'Communication',
      items: [
        {
          icon: <MessageSquare className="w-5 h-5" />,
          label: 'Message Settings',
          description: 'Control who can message you',
          onClick: () => {},
        },
        {
          icon: <Globe className="w-5 h-5" />,
          label: 'Language',
          description: 'Change your preferred language',
          onClick: () => {},
        },
      ]
    },
    {
      title: 'Advanced',
      items: [
        {
          icon: <Zap className="w-5 h-5" />,
          label: 'App Performance',
          description: 'Optimize app performance and storage',
          onClick: () => {},
        },
        {
          icon: <PenTool className="w-5 h-5" />,
          label: 'Customization',
          description: 'Personalize your app experience',
          onClick: () => {},
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
        
        <div className="space-y-6">
          {settingSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">{section.title}</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {section.items.map((item, itemIndex) => (
                  <SettingItem key={itemIndex} {...item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Button
            onClick={logout}
            variant="outline"
            className="w-full text-red-600 border-red-600 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};