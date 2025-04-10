
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "FINPRO has truly unlocked the value of collaboration — helping me grow my business and expand my professional network.",
      name: "Anil Kumar",
      title: "Financial Consultant",
      company: "AK Financial Services",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      quote: "Being part of FINPRO has opened doors to new opportunities and partnerships I never would have discovered otherwise.",
      name: "Priya Sharma",
      title: "Chartered Accountant",
      company: "PS & Associates",
      image: "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
      id: 3,
      quote: "The knowledge sharing and networking events have been invaluable for staying ahead of industry trends and regulations.",
      name: "Rajesh Patel",
      title: "Insolvency Professional",
      company: "FinSecure Consultants",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 4,
      quote: "I've found incredible value in the collaborative projects and business referrals that have come through my FINPRO membership.",
      name: "Meera Desai",
      title: "Registered Valuer",
      company: "Desai Valuations",
      image: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      id: 5,
      quote: "The family outings and professional events create the perfect balance, making FINPRO more than just a business network.",
      name: "Vikram Singh",
      title: "Financial Advisor",
      company: "Wealth Maximizers",
      image: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
      id: 6,
      quote: "FINPRO has transformed how I approach my practice, shifting from competition to collaboration with remarkable results.",
      name: "Sunita Kapoor",
      title: "Practicing Advocate",
      company: "SK Legal Associates",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20">
                <span className="text-sm font-montserrat font-medium text-finpro-red">Member Testimonials</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                Success Stories
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600 text-lg mb-8">
                Hear directly from our members about how FINPRO has helped them transform competition into collaboration.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInUp key={testimonial.id} delay={100 * (index % 3 + 1)}>
                <div className="bg-white rounded-2xl shadow-md p-8 h-full border border-gray-100 hover:shadow-lg transition-all duration-300 relative">
                  <div className="absolute top-6 left-6 text-finpro-red opacity-10">
                    <Quote className="w-16 h-16" />
                  </div>
                  
                  <div className="relative z-10">
                    <p className="font-medium text-lg text-gray-700">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center mt-8">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-finpro-red">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.title}</p>
                        <p className="text-finpro-red text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Video Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeInUp>
              <h2 className="text-3xl font-bold mb-4 font-montserrat">
                Featured Video Testimonial
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <p className="text-gray-600">
                Watch how FINPRO membership has transformed the careers of our members.
              </p>
            </FadeInUp>
          </div>
          
          <FadeIn>
            <div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/lovable-uploads/79fc5afc-d83b-4e95-b069-2626e8e2e0ff.png" 
                  alt="Video testimonial thumbnail" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="w-20 h-20 bg-finpro-red rounded-full flex items-center justify-center hover:bg-white hover:text-finpro-red transition-colors duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Membership Banner */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-finpro-red/30 to-transparent opacity-50"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <FadeInUp>
                <h2 className="text-3xl font-bold mb-4 text-white font-montserrat">
                  Ready to Experience FINPRO?
                </h2>
              </FadeInUp>
              
              <FadeInUp delay={100}>
                <p className="text-gray-300 mb-8">
                  Join the community of 90+ financial professionals across India who are building value together.
                </p>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="/about#membership" 
                    className="px-6 py-3 bg-finpro-red text-white font-semibold rounded-md hover:bg-finpro-red/90 transition-colors duration-300"
                  >
                    View Membership Details
                  </a>
                  <a 
                    href="/contact" 
                    className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
