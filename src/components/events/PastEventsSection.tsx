
import React from 'react';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import { MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { PastEvent } from '@/data/eventsData';

interface PastEventsSectionProps {
  pastEvents: PastEvent[];
}

const PastEventsSection: React.FC<PastEventsSectionProps> = ({ pastEvents }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <FadeInUp>
            <h2 className="text-3xl font-bold mb-4 font-montserrat">
              Past Events
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <p className="text-gray-600">
              Browse our gallery of past events and gatherings across India.
            </p>
          </FadeInUp>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {pastEvents.map((event, index) => (
            <FadeIn key={index} delay={(index % 5) * 50}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group h-full">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{event.title}</h3>
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <CalendarIcon className="w-3 h-3 mr-1" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
