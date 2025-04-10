import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import Button from '@/components/common/Button';
import { Users, Star, Award, Target, MapPin, Briefcase, BookOpen } from 'lucide-react';

const About = () => {
  // Member categories
  const memberTypes = [
    "Financial Consultants",
    "Chartered Accountants",
    "Chartered Secretaries",
    "Real Estate",
    "Insolvency Professionals",
    "Registered Valuers",
    "MBAs",
    "Ex-Bankers",
    "Senior Management of Financial Institutions"
  ];

  // Locations
  const locations = [
   "Mumbai",  "Pune", "Delhi", "Hyderabad",  "Bangalore", "Raipur", "Surat"
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
                <span className="text-sm font-montserrat font-medium text-finpro-red">About Us</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                Who We Are
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600 text-lg mb-8">
                FINPRO International is a forum of financial professionals providing services 
                in the financial and allied sectors, with over 90 members across India.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute inset-0 bg-finpro-red/20 blur-2xl rounded-full transform -translate-x-4 translate-y-4"></div>
                <img 
                  src="/lovable-uploads/0a591c00-b9af-49fb-ad48-2625800bd6c3.png" 
                  alt="Finance professionals in a meeting" 
                  className="rounded-2xl shadow-lg relative z-10"
                />
              </div>
            </FadeIn>
            
            <div>
              <FadeInUp>
                <h2 className="text-3xl font-bold mb-6 font-montserrat">Our Mission</h2>
              </FadeInUp>
              
              <FadeInUp delay={100}>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">
                    Our mission is to empower members through collaboration, transparency, 
                    and communication, creating professional growth and uncovering new opportunities.
                  </p>
                  <p className="text-gray-600">
                    FINPRO enables professionals to grow together by transforming competition 
                    into collaboration.
                  </p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2 font-montserrat">Experience & Expertise</h3>
                  <p className="text-gray-600">
                    Our members have a total combined experience of over 2,500 years in the
                    financial sector, bringing unparalleled expertise to the network.
                  </p>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={300}>
                <Button size="lg" variant="secondary">Join Our Community</Button>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Members */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInUp>
              <h2 className="text-3xl font-bold mb-4 font-montserrat">Our Members</h2>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <p className="text-gray-600">
                FINPRO members come from diverse professional backgrounds, bringing varied
                expertise and perspectives to our community.
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberTypes.map((type, index) => (
              <FadeInUp key={index} delay={100 * (index % 3 + 1)}>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center">
                  <div className="w-12 h-12 rounded-2xl bg-finpro-red/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-finpro-red" />
                  </div>
                  <h3 className="text-lg font-bold font-montserrat">{type}</h3>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Reach */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInUp>
              <h2 className="text-3xl font-bold mb-4 font-montserrat">Our Reach Across India</h2>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <p className="text-gray-600">
                FINPRO has active members and hosts events in major cities throughout India.
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {locations.map((location, index) => (
              <FadeInUp key={index} delay={50 * (index + 1)}>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-finpro-red/30 transition-all duration-300 text-center group cursor-pointer">
                  <div className="flex justify-center mb-2">
                    <MapPin className="w-5 h-5 text-finpro-red group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-montserrat font-semibold">{location}</h3>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      
      {/* Membership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20">
                <span className="text-sm font-montserrat font-medium text-finpro-red">Why Join Us</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h2 className="text-3xl font-bold mb-4 font-montserrat">Benefits of Membership</h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600">
                Discover the advantages of being part of our exclusive community of financial professionals.
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { 
                icon: <BookOpen className="w-8 h-8 text-finpro-red" />, 
                title: 'Knowledge Exchange', 
                description: 'Connect with experts and stay updated with industry trends through exclusive seminars and webinars.' 
              },
              { 
                icon: <Users className="w-8 h-8 text-finpro-red" />, 
                title: 'Networking', 
                description: 'Build valuable professional connections and discover new business opportunities.' 
              },
              { 
                icon: <Award className="w-8 h-8 text-finpro-red" />, 
                title: 'Professional Development', 
                description: 'Access mentorship and career advancement programs, participate in conferences.' 
              },
              { 
                icon: <Star className="w-8 h-8 text-finpro-red" />, 
                title: 'Insights and Trends', 
                description: 'Stay informed about market changes and emerging financial trends.' 
              },
              { 
                icon: <Target className="w-8 h-8 text-finpro-red" />, 
                title: 'Collaborative Projects', 
                description: 'Work with fellow members on rewarding financial projects.' 
              },
              { 
                icon: <Award className="w-8 h-8 text-finpro-red" />, 
                title: 'Personal Growth', 
                description: 'Balance work and life through member-focused events and family outings.' 
              },
              { 
                icon: <Star className="w-8 h-8 text-finpro-red" />, 
                title: 'Recognition', 
                description: 'Showcase your expertise within the financial community.' 
              },
              { 
                icon: <Target className="w-8 h-8 text-finpro-red" />, 
                title: 'Member Perks', 
                description: "Free attendance for conferences, access to FINPRO's community, and industry recognition." 
              }
            ].map((benefit, index) => (
              <FadeInUp key={index} delay={100 * (index % 4 + 1)}>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-finpro-red/10 flex items-center justify-center mb-5">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-montserrat">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      
      {/* Membership Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeInUp>
                <h2 className="text-3xl font-bold mb-6 font-montserrat">Membership Details</h2>
              </FadeInUp>
              
              <FadeInUp delay={100}>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 font-montserrat">Investment</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-finpro-red/10 flex items-center justify-center text-finpro-red mr-3 mt-0.5">•</span>
                      <span>One-time joining fee = ₹5,000 (currently waived)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-finpro-red/10 flex items-center justify-center text-finpro-red mr-3 mt-0.5">•</span>
                      <span>Annual Membership Fee (12 months) = ₹21,000 + GST</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-5 h-5 rounded-full bg-finpro-red/10 flex items-center justify-center text-finpro-red mr-3 mt-0.5">•</span>
                      <span>Total Investment = ₹30,680</span>
                    </li>
                    <li className="flex items-start font-semibold text-finpro-red">
                      <span className="w-5 h-5 rounded-full bg-finpro-red/10 flex items-center justify-center text-finpro-red mr-3 mt-0.5">•</span>
                      <span>Special Offer: Waiver of one-time joining fee = ₹24,780</span>
                    </li>
                  </ul>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 font-montserrat">How to Join</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-finpro-red/10 flex items-center justify-center mr-4">
                        <span className="font-bold text-finpro-red">1</span>
                      </div>
                      <span>Complete our professional sign-up form</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-finpro-red/10 flex items-center justify-center mr-4">
                        <span className="font-bold text-finpro-red">2</span>
                      </div>
                      <span>Submit required documentation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-finpro-red/10 flex items-center justify-center mr-4">
                        <span className="font-bold text-finpro-red">3</span>
                      </div>
                      <span>Pay membership fee</span>
                    </div>
                  </div>
                  
                  <Button size="lg" variant="secondary" className="w-full md:w-auto">
                    Become a Member Today
                  </Button>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={300}>
                <div>
                  <h3 className="text-xl font-bold mb-4 font-montserrat">Contact for Questions</h3>
                  <div className="space-y-2">
                    <p>📞 Vijay Agrawwal – 8999960000</p>
                    <p>📞 Rajen Gada – 9920913579</p>
                    <p>📧 indiafinpro@gmail.com</p>
                  </div>
                </div>
              </FadeInUp>
            </div>
            
            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-finpro-red/20 blur-3xl rounded-full transform -translate-x-8 translate-y-8"></div>
                <img 
                  src="/lovable-uploads/79fc5afc-d83b-4e95-b069-2626e8e2e0ff.png" 
                  alt="Finance professionals networking" 
                  className="rounded-2xl shadow-xl relative z-10"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-finpro-red/20 to-transparent opacity-30"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:max-w-xl">
                <FadeInUp>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-montserrat">
                    Join Our Elite Network Today
                  </h2>
                </FadeInUp>
                
                <FadeInUp delay={100}>
                  <p className="text-gray-300 mb-6 md:mb-0">
                    Take the next step in your finance career by becoming part of our exclusive community 
                    of professionals committed to excellence and mutual growth.
                  </p>
                </FadeInUp>
              </div>
              
              <FadeIn delay={200}>
                <Button size="lg" variant="secondary">
                  Become a Member
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
