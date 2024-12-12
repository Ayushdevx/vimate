import React from 'react';
import { Event } from '../../types/event';
import { Calendar, MapPin, Users } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '../ui/Button';

interface EventCardProps {
  event: Event;
  onAttend: () => void;
  onLeave: () => void;
  isAttending: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  onAttend,
  onLeave,
  isAttending,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {event.imageUrl && (
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <p className="text-gray-600 mt-1">{event.description}</p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>
              {format(event.startTime, 'MMM d, h:mm a')}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4" />
            <span>
              {event.attendees.length}
              {event.maxAttendees && ` / ${event.maxAttendees}`} attending
            </span>
          </div>
        </div>

        <div className="mt-4">
          <Button
            onClick={isAttending ? onLeave : onAttend}
            variant={isAttending ? 'outline' : 'primary'}
            className="w-full"
          >
            {isAttending ? 'Leave Event' : 'Attend Event'}
          </Button>
        </div>
      </div>
    </div>
  );
};