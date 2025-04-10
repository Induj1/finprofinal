
import React from 'react';
import { FadeInUp } from '@/components/ui/Animation';
import { Users, Calendar, BookOpen, Landmark } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-finpro-gold" />,
      title: 'Exclusive Networking',
      description: 'Connect with top finance professionals from around the world and build meaningful relationships.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-finpro-gold" />,
      title: 'Premier Events',
      description: 'Access invitation-only events, conferences, and workshops led by industry leaders.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-finpro-gold" />,
      title: 'Knowledge Resources',
      description: 'Gain insights from our extensive library of research papers, case studies, and exclusive content.'
    },
    {
      icon: <Landmark className="w-8 h-8 text-finpro-gold" />,
      title: 'Career Advancement',
      description: 'Unlock opportunities for professional growth through mentorship and job placement services.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInUp>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-gold/10 border border-finpro-gold/20">
              <span className="text-sm font-montserrat font-medium text-finpro-gold">Why Choose Finpro</span>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Empowering Finance Professionals
            </h2>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <p className="text-gray-600">
              Our exclusive network provides you with the tools, connections, and resources 
              needed to excel in today's competitive financial landscape.
            </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeInUp key={index} delay={100 * (index + 1)}>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-finpro-gold/10 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 font-montserrat">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
