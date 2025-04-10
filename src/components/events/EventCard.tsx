
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';
import Button from '@/components/common/Button';
import { FadeInUp, ScaleIn } from '@/components/ui/Animation';
import { Event } from '@/data/eventsData';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <FadeInUp key={event.id} delay={(index % 3) * 100}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full group">
        <div className="relative">
          <div className="h-48 overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full font-medium text-xs shadow-md">
            {event.date}
          </div>
        </div>
        
        <div className="p-6">
          <ScaleIn delay={100 + (index % 3) * 100}>
            <h3 className="text-xl font-bold mb-2 font-montserrat group-hover:text-finpro-red transition-colors">
              {event.title}
            </h3>
            
            <div className="mb-4">
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2 text-finpro-red" />
                <span className="text-sm">{event.location}</span>
              </div>
              <div className="flex items-start text-gray-600">
                <Calendar className="w-4 h-4 mr-2 text-finpro-red mt-1" />
                <span className="text-sm">{event.description}</span>
              </div>
            </div>
            
            <Link to={`/events/${event.id}`}>
              <Button variant="secondary" className="w-full">
                Register Now
              </Button>
            </Link>
          </ScaleIn>
        </div>
      </div>
    </FadeInUp>
  );
};

export default EventCard;
