
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FadeIn, FadeInUp, ScaleIn, SlideInRight, SlideInLeft } from '@/components/ui/Animation';

const Hero = () => {
  return (
    <section className="relative text-white py-24 overflow-hidden">
      {/* Background image with blur effect only */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full overflow-hidden">
          <ScaleIn duration={1500}>
            <img 
              src="/lovable-uploads/0a591c00-b9af-49fb-ad48-2625800bd6c3.png" 
              alt="FINPRO group" 
              className="w-full h-full object-cover blur-sm transform scale-105"
            />
          </ScaleIn>
          <div className="absolute inset-0 bg-black/30"></div> {/* Dark overlay for text readability instead of blue */}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <FadeInUp duration={800}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Empowering <span className="text-yellow-400 animate-pulse">Finance Professionals</span> Through Community and Education
              </h1>
            </FadeInUp>
            <FadeInUp delay={200} duration={800}>
              <p className="text-xl mb-8 text-gray-100">
                Join our supportive network of professionals dedicated to financial literacy, career growth, and building meaningful connections.
              </p>
            </FadeInUp>
            <FadeInUp delay={400} duration={800}>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full animate-bounce hover:animate-none">
                  <Link to="/events">
                    <span className="text-white">Explore Events</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white text-black hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-glow">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </FadeInUp>
          </div>
          
          <div className="relative hidden lg:block">
            <ScaleIn duration={1000}>
              <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-all duration-500">
                <img
                  src="/lovable-uploads/pune.jpg"
                  alt="Financial Empowerment Workshop"
                  className="w-full h-auto rounded"
                />
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold hover:bg-blue-600 hover:scale-105 transition-all duration-300">
                  Upcoming Workshops
                </div>
              </div>
            </ScaleIn>
            
            <SlideInRight delay={300} duration={1000}>
              <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-lg shadow-xl rotate-6 hover:rotate-0 transition-all duration-500">
                <img
                  src="/lovable-uploads/009eb2bd-d27e-4631-a492-dddd019da8d9.png"
                  alt="Networking Event"
                  className="w-52 h-auto rounded"
                />
                <div className="absolute -bottom-3 -right-3 bg-green-500 text-white px-4 py-1 rounded-full shadow-lg text-sm font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300">
                  Networking
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </div>
      
      {/* Animated decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-20 -right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
