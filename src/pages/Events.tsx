import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import Button from '@/components/common/Button';
import { Calendar, MapPin, Clock, Users, Filter } from 'lucide-react';
import EventBannerCarousel from '@/components/events/EventBannerCarousel';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Finance Summit',
      description: 'Join industry leaders for our flagship event focused on the future of finance and investment strategies.',
      date: 'June 24-25, 2024',
      location: 'Marriott Marquis, New York, NY',
      time: '9:00 AM - 5:00 PM',
      category: 'Conference',
      attendees: 500,
      image: '/lovable-uploads/009eb2bd-d27e-4631-a492-dddd019da8d9.png'
    },
    {
      id: 2,
      title: 'Investment Strategies Workshop',
      description: 'A hands-on workshop exploring cutting-edge investment approaches for today\'s volatile markets.',
      date: 'July 12, 2024',
      location: 'Chicago Hilton, Chicago, IL',
      time: '10:00 AM - 3:00 PM',
      category: 'Workshop',
      attendees: 150,
      image: '/lovable-uploads/42e4b216-1597-4926-bb1b-86e890cbeeeb.png'
    },
    {
      id: 3,
      title: 'Emerging Markets Symposium',
      description: 'Explore opportunities in developing economies with experts from across the global financial sector.',
      date: 'August 8, 2024',
      location: 'Brickell City Centre, Miami, FL',
      time: '11:00 AM - 4:00 PM',
      category: 'Symposium',
      attendees: 200,
      image: '/lovable-uploads/4e084f73-1940-48ad-b228-a15028189d9f.png'
    },
    {
      id: 4,
      title: 'FinTech Innovation Forum',
      description: 'Discover the latest technological disruptions shaping the future of financial services.',
      date: 'September 15, 2024',
      location: 'Moscone Center, San Francisco, CA',
      time: '9:00 AM - 6:00 PM',
      category: 'Forum',
      attendees: 350,
      image: '/lovable-uploads/e57c76a9-d8d2-4e59-8883-e68fa520eecb.png'
    },
    {
      id: 5,
      title: 'Global Risk Management Conference',
      description: 'Learn strategies to navigate risk in an increasingly uncertain global economic landscape.',
      date: 'October 10-11, 2024',
      location: 'The Dorchester, London, UK',
      time: '10:00 AM - 4:00 PM',
      category: 'Conference',
      attendees: 400,
      image: '/lovable-uploads/d66f8199-f0e9-4091-9af2-db766ac646c0.png'
    },
    {
      id: 6,
      title: 'Women in Finance Leadership Summit',
      description: 'Celebrating and empowering women leaders in the financial industry through networking and mentorship.',
      date: 'November 18, 2024',
      location: 'Four Seasons Hotel, Boston, MA',
      time: '8:30 AM - 5:30 PM',
      category: 'Summit',
      attendees: 250,
      image: '/lovable-uploads/cd3ea0f7-6032-42c9-8194-b97305243880.png'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Banner Carousel Section */}
      <section className="pt-20 pb-0">
        <EventBannerCarousel />
      </section>
      
      {/* Hero Section */}
      <section className="pt-16 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-gold/10 border border-finpro-gold/20">
                <span className="text-sm font-montserrat font-medium text-finpro-gold">Events Calendar</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                Upcoming Events
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600 text-lg mb-8">
                Discover our exclusive events designed to connect, educate, and inspire finance professionals around the world.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>
      
      {/* Filters Section */}
      <section className="py-8 border-b border-gray-200 bg-white sticky top-16 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-finpro-gold mr-2" />
              <span className="font-montserrat font-semibold">Filter Events:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-1.5 bg-finpro-gold text-white rounded-full text-sm font-medium font-montserrat">
                All Events
              </button>
              <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium font-montserrat hover:bg-gray-200 transition-colors">
                Conferences
              </button>
              <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium font-montserrat hover:bg-gray-200 transition-colors">
                Workshops
              </button>
              <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium font-montserrat hover:bg-gray-200 transition-colors">
                Networking
              </button>
              <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium font-montserrat hover:bg-gray-200 transition-colors">
                Virtual
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Events Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <FadeInUp key={event.id} delay={100 * (index % 3 + 1)}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full group border border-gray-100">
                  <div className="relative overflow-hidden h-56">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-finpro-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                      {event.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 font-montserrat">{event.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-finpro-gold" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-finpro-gold" />
                        <span className="text-sm line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-finpro-gold" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-finpro-gold" />
                        <span className="text-sm">{event.attendees} Expected Attendees</span>
                      </div>
                    </div>
                    
                    <Button className="w-full">Register Now</Button>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden border border-gray-100">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-finpro-gold/5 rounded-l-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <FadeInUp>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-montserrat">
                    Want to Host an Event?
                  </h2>
                </FadeInUp>
                
                <FadeInUp delay={100}>
                  <p className="text-gray-600 mb-6">
                    Finpro members can propose and organize events with our support. 
                    Share your expertise and grow your network by leading a session 
                    or workshop for our community.
                  </p>
                </FadeInUp>
                
                <FadeInUp delay={200}>
                  <Button>Submit Event Proposal</Button>
                </FadeInUp>
              </div>
              
              <FadeIn>
                <img 
                  src="/lovable-uploads/0a591c00-b9af-49fb-ad48-2625800bd6c3.png" 
                  alt="Event hosting" 
                  className="rounded-xl shadow-md w-full"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
