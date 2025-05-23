import React from 'react';
import { FadeInUp, ScaleIn } from '@/components/ui/Animation';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';

const EventHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white/60 z-0">
        <ScaleIn duration={1500}>
          <img 
            src="/lovable-uploads/79fc5afc-d83b-4e95-b069-2626e8e2e0ff.png" 
            alt="FINPRO members at conference" 
            className="w-full h-full object-cover mix-blend-overlay opacity-60 transform scale-105"
          />
        </ScaleIn>
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto mb-10">
          <div className="text-center">
            <FadeInUp duration={800}>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20 hover:bg-finpro-red/20 transition-colors duration-300 hover:scale-105 transform">
                <span className="text-sm font-montserrat font-medium text-finpro-red">Featured Event</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100} duration={800}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat relative">
                FINMEET PUNE
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-finpro-red rounded-full"></span>
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={200} duration={800}>
              <p className="text-gray-800 text-lg font-medium mb-4">
                June 14, 2025 | Pune, India
              </p>
            </FadeInUp>
            
            <FadeInUp delay={300} duration={800}>
              <p className="text-gray-700 text-lg mb-8 italic">
                "FinMeet Pune is coming—are you ready to accelerate your deals?"
              </p>
            </FadeInUp>
          </div>
          
          <FadeInUp delay={400} duration={800}>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-700 mb-6">
                Join India's premier finance community for a focused day of high-impact networking, exclusive deal flow, and real-time collaboration.
              </p>
              
              <h3 className="text-xl font-bold mb-4 font-montserrat">Experience:</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li className="text-gray-700">Over ₹1,500 Crore worth of live mandates</li>
                <li className="text-gray-700">100+ seasoned professionals across equity, debt, M&A, and advisory</li>
                <li className="text-gray-700">A curated environment designed to fast-track execution, not just conversations</li>
              </ul>
              
              <p className="text-gray-700 font-medium mb-6">
                This isn't just a meetup, it's where momentum turns into mandates, and relationships turn into results.
              </p>
              
       <div className="flex justify-center gap-4">
  <a 
    href="https://forms.gle/8ZuGq8yyPbJh6WTe7" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Button 
      variant="secondary" 
      size="lg" 
      className="shadow-glow group"
    >
      Member Link
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  </a>

  <a 
    href="https://forms.gle/SudgU6BrJUmvDP9Q7" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Button 
      variant="secondary" 
      size="lg" 
      className="shadow-glow group"
    >
      Guest Link
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  </a>
</div>


              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  #FinMeetPune #FinProInternational #DealFlow #ExecutionEdge #FinanceNetwork #MomentumInMay
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>

        <div className="text-center mt-12">
          <FadeInUp delay={500} duration={800}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-montserrat">
              Upcoming Events Calendar
            </h2>
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