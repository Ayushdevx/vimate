import React from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Users, MapPin, Tag } from 'lucide-react';
import { Button } from '../ui/Button';

interface EventFiltersProps {
  onClose: () => void;
  onApply: (filters: EventFilters) => void;
}

export interface EventFilters {
  date: string;
  location: string;
  type: string[];
  capacity: string;
}

export const EventFilters: React.FC<EventFiltersProps> = ({ onClose, onApply }) => {
  const [filters, setFilters] = React.useState<EventFilters>({
    date: '',
    location: '',
    type: [],
    capacity: ''
  });

  const eventTypes = [
    'Social', 'Academic', 'Sports', 'Cultural', 'Tech'
  ];

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      date: '',
      location: '',
      type: [],
      capacity: ''
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 touch-none"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Filter Events</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2"
              >
                <option value="">All Locations</option>
                <option value="main-campus">Main Campus</option>
                <option value="tech-park">Tech Park</option>
                <option value="library">Library</option>
                <option value="sports-complex">Sports Complex</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Type
            </label>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    const newTypes = filters.type.includes(type)
                      ? filters.type.filter(t => t !== type)
                      : [...filters.type, type];
                    setFilters({ ...filters, type: newTypes });
                  }}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    filters.type.includes(type)
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Capacity
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filters.capacity}
                onChange={(e) => setFilters({ ...filters, capacity: e.target.value })}
                className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2"
              >
                <option value="">Any Capacity</option>
                <option value="small">Small (under 20)</option>
                <option value="medium">Medium (20-50)</option>
                <option value="large">Large (50+)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white p-4 border-t border-gray-100 flex gap-2">
          <Button variant="outline" onClick={handleReset} className="flex-1">
            Reset
          </Button>
          <Button onClick={handleApply} className="flex-1">
            Apply Filters
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};