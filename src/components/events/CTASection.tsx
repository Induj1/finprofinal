import React from 'react';
import { FadeIn, FadeInUp, ScaleIn } from '@/components/ui/Animation';
import { Users, ArrowRight, Calendar, MapPin } from 'lucide-react';
import Button from '@/components/common/Button';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <ScaleIn duration={1000}>
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-finpro-red/30 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            {/* Animated decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-finpro-red/20 rounded-full blur-3xl animate-pulse opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-finpro-gold/20 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '1.5s' }}></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="md:flex-1">
                  <FadeInUp duration={800}>
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-gold/20 border border-finpro-gold/30">
                      <span className="text-sm font-montserrat font-medium text-finpro-gold">Featured Event</span>
                    </div>
                  </FadeInUp>
                  
                  <FadeInUp delay={100} duration={800}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-montserrat">
                      FinMeet Pune 2025
                    </h2>
                  </FadeInUp>
                  
                  <FadeInUp delay={200} duration={800}>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="w-4 h-4 mr-2 text-finpro-gold" />
                        <span>June 14, 2025</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2 text-finpro-gold" />
                        <span>Pune, India</span>
                      </div>
                    </div>
                  </FadeInUp>
                  
                  <FadeInUp delay={300} duration={800}>
                    <p className="text-gray-300 mb-6">
                      Accelerate your deals at India's premier finance networking event with over ₹1,500 Crore worth of live mandates and 100+ seasoned professionals.
                    </p>
                  </FadeInUp>
                </div>
                
                <FadeIn delay={400} duration={800}>
                  <div className="md:w-64 w-full h-64 rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src="/lovable-uploads/79fc5afc-d83b-4e95-b069-2626e8e2e0ff.png"
                      alt="FinMeet Pune" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </FadeIn>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <FadeInUp delay={500} duration={800}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-finpro-gold/20 flex items-center justify-center mr-2 animate-bounce" style={{ animationDuration: '3s' }}>
                      <Users className="w-6 h-6 text-finpro-gold" />
                    </div>
                    <div>
                      <p className="text-white font-bold">100+ Professionals</p>
                      <p className="text-gray-400 text-sm">From across India</p>
                    </div>
                  </div>
                </FadeInUp>
                
                <FadeIn delay={600} duration={800}>
                  <Link to="/events/1">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="shadow-glow hover:scale-105 transition-transform duration-300 group"
                    >
                      Secure Your Spot Now
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};

export default CTASection;
