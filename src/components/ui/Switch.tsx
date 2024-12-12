import React from 'react';
import { motion } from 'framer-motion';

interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  onClick?: (e: React.MouseEvent) => void;
}

export const Switch: React.FC<SwitchProps> = ({ checked, onCheckedChange, onClick }) => {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={(e) => {
        onClick?.(e);
        onCheckedChange(!checked);
      }}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors
        ${checked ? 'bg-purple-600' : 'bg-gray-200'}
      `}
    >
      <motion.span
        layout
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white transition-transform
          ${checked ? 'translate-x-6' : 'translate-x-1'}
        `}
      />
    </button>
  );
};