import React, { useState } from 'react';
import { useEventStore } from '../store/useEventStore';
import { useAuthStore } from '../store/useAuthStore';
import { EventCard } from '../components/events/EventCard';
import { CreateEventModal } from '../components/events/CreateEventModal';
import { EventFilters, type EventFilters as EventFiltersType } from '../components/filters/EventFilters';
import { Plus, Filter } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const EventsPage: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<EventFiltersType | null>(null);
  const { events, attendEvent, leaveEvent } = useEventStore();
  const { user } = useAuthStore();

  const handleAttend = (eventId: string) => {
    if (user) {
      attendEvent(eventId, user.id);
    }
  };

  const handleLeave = (eventId: string) => {
    if (user) {
      leaveEvent(eventId, user.id);
    }
  };

  const handleApplyFilters = (filters: EventFiltersType) => {
    setActiveFilters(filters);
    // Apply filtering logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Campus Events</h1>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowFilters(true)}
              className={activeFilters ? 'bg-purple-50 text-purple-600' : ''}
            >
              <Filter className="w-4 h-4 mr-2" />
              {activeFilters ? 'Filters Active' : 'Filter'}
            </Button>
            <Button size="sm" onClick={() => setShowCreateModal(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>
        </div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              layout
            >
              <EventCard
                event={event}
                onAttend={() => handleAttend(event.id)}
                onLeave={() => handleLeave(event.id)}
                isAttending={user ? event.attendees.includes(user.id) : false}
              />
            </motion.div>
          ))}

          {events.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No events yet. Be the first to create one!</p>
            </div>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {showCreateModal && (
          <CreateEventModal onClose={() => setShowCreateModal(false)} />
        )}
        {showFilters && (
          <EventFilters 
            onClose={() => setShowFilters(false)}
            onApply={handleApplyFilters}
          />
        )}
      </AnimatePresence>
    </div>
  );
};