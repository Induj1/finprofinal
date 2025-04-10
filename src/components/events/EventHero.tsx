
import React from 'react';
import { FadeInUp, ScaleIn } from '@/components/ui/Animation';

const EventHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white/60 z-0">
        <ScaleIn duration={1500}>
          <img 
            src="/lovable-uploads/0a591c00-b9af-49fb-ad48-2625800bd6c3.png" 
            alt="FINPRO members at conference" 
            className="w-full h-full object-cover mix-blend-overlay opacity-60 transform scale-105"
          />
        </ScaleIn>
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <FadeInUp duration={800}>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20 hover:bg-finpro-red/20 transition-colors duration-300 hover:scale-105 transform">
              <span className="text-sm font-montserrat font-medium text-finpro-red">Event Calendar</span>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={100} duration={800}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat relative">
              Upcoming Events
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-finpro-red rounded-full"></span>
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={200} duration={800}>
            <p className="text-gray-600 text-lg mb-8">
              Join us for knowledge sharing, networking, and professional growth at our upcoming FINPRO events.
            </p>
          </FadeInUp>
        </div>
      </div>
      
      {/* Animated decorative elements */}
      <div className="absolute top-20 -left-16 w-32 h-32 bg-finpro-red/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 -right-16 w-32 h-32 bg-finpro-gold/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default EventHero;
