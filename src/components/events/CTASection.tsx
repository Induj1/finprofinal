
import React from 'react';
import { FadeIn, FadeInUp, ScaleIn } from '@/components/ui/Animation';
import { Users, ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';

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
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:max-w-xl">
                <FadeInUp duration={800}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-finpro-red/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 animate-bounce" style={{ animationDuration: '3s' }}>
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white font-montserrat">
                      Attend As A Member
                    </h2>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={100} duration={800}>
                  <p className="text-gray-300 mb-6 md:mb-0">
                    FINPRO members enjoy free attendance to all-day conferences, exclusive networking
                    opportunities, and priority registration for limited-capacity events.
                  </p>
                </FadeInUp>
              </div>
              
              <FadeIn delay={200} duration={800}>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="hover:scale-105 transition-transform duration-300 group"
                >
                  Become a Member
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </FadeIn>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};

export default CTASection;
