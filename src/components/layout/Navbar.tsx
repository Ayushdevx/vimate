import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, MessageCircle, User, Calendar, Home, Settings } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated, isExploringMode } = useAuthStore();
  const showNavbar = isAuthenticated || isExploringMode;

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50"
    >
      <div className="max-w-lg mx-auto flex justify-around items-center">
        <NavLink to="/" icon={<Home />} label="Home" active={location.pathname === '/'} />
        <NavLink to="/discover" icon={<Heart />} label="Discover" active={location.pathname === '/discover'} />
        <NavLink to="/matches" icon={<MessageCircle />} label="Matches" active={location.pathname === '/matches'} />
        <NavLink to="/events" icon={<Calendar />} label="Events" active={location.pathname === '/events'} />
        <NavLink to="/profile" icon={<User />} label="Profile" active={location.pathname === '/profile'} />
        <NavLink to="/settings" icon={<Settings />} label="Settings" active={location.pathname === '/settings'} />
      </div>
    </motion.nav>
  );
};

const NavLink: React.FC<{
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}> = ({ to, icon, label, active }) => (
  <Link
    to={to}
    className="flex flex-col items-center gap-1"
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`p-3 rounded-full transition-colors ${
        active ? 'text-purple-600 bg-purple-50' : 'text-gray-500 hover:text-purple-600'
      }`}
    >
      {icon}
    </motion.div>
    <span className={`text-xs ${active ? 'text-purple-600' : 'text-gray-500'}`}>
      {label}
    </span>
  </Link>
);