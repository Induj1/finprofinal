
import React from 'react';
import { Link } from 'react-router-dom';
import { FadeInUp, FadeIn } from '@/components/ui/Animation';
import Button from '@/components/common/Button';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'FINMEET',
      date: 'February 8, 2025',
      location: 'Delhi',
      time: 'Professional Networking & Knowledge Exchange',
      image: '/lovable-uploads/delhi.jpg'
    },
    {
      id: 2,
      title: 'FINMEET',
      date: 'April 12, 2025',
      location: 'Delhi',
      time: 'Industry Insights & Collaboration',
      image: '/lovable-uploads/delhi.jpg'
    },
    {
      id: 3,
      title: 'FINMEET',
      date: 'June 14, 2025',
      location: 'Bangalore',
      time: 'National Conference & Workshops',
      image: '/lovable-uploads/blr.jpg'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="md:max-w-2xl mb-6 md:mb-0">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20">
                <span className="text-sm font-montserrat font-medium text-finpro-red">Upcoming Events</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Connect at Our Exclusive Events
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600">
                Join industry experts at our premier events where innovation meets expertise.
                Network with like-minded professionals and stay ahead of industry trends.
              </p>
            </FadeInUp>
          </div>
          
          <FadeIn delay={300}>
            <Link to="/events">
              <Button variant="outline" className="group">
                View All Events
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <FadeInUp key={event.id} delay={100 * (index + 1)}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full group">
                <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-montserrat">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-finpro-red" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-finpro-red" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-finpro-red" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                  
                  <Link to={`/events/${event.id}`}>
                    <Button className="w-full" variant="secondary">Register Now</Button>
                  </Link>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
