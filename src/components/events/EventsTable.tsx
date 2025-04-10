
import React from 'react';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import { Event } from '@/data/eventsData';

interface EventsTableProps {
  events: Event[];
}

const EventsTable: React.FC<EventsTableProps> = ({ events }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <FadeInUp>
            <h2 className="text-3xl font-bold mb-4 font-montserrat">
              2025 Events Calendar
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <p className="text-gray-600">
              Plan ahead with our full schedule of events for the coming year.
            </p>
          </FadeInUp>
        </div>
        
        <FadeIn>
          <div className="overflow-x-auto rounded-xl shadow-md border border-gray-100">
            <table className="w-full min-w-full bg-white">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Event</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Details</th>
                </tr>
              </thead>
              <tbody>
                {events
                  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                  .map((event, index) => (
                    <tr key={event.id} className={`border-b border-gray-100 ${index % 2 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="px-6 py-4 text-sm font-medium">{event.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{event.date}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{event.location}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{event.description}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default EventsTable;
