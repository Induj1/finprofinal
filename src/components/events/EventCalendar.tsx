
import React from 'react';
import { Event } from '@/data/eventsData';
import EventCard from './EventCard';

interface EventCalendarProps {
  activeEvents: Event[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ activeEvents }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
        
        {activeEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No events currently scheduled in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventCalendar;
