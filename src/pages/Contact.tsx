
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import Button from '@/components/common/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20">
                <span className="text-sm font-montserrat font-medium text-finpro-red">Contact Us</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                Get In Touch
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600 text-lg mb-8">
                Have questions about FINPRO membership or events? Reach out to our team for more information.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <FadeInUp>
                <h2 className="text-3xl font-bold mb-8 font-montserrat">Contact Information</h2>
              </FadeInUp>
              
              <div className="space-y-8">
                <FadeInUp delay={100}>
                  <div className="flex">
                    <div className="w-14 h-14 rounded-2xl bg-finpro-red/10 flex items-center justify-center mr-6 flex-shrink-0">
                      <Phone className="w-6 h-6 text-finpro-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-montserrat">Phone</h3>
                      <p className="text-gray-600 mb-1">Vijay Agrawwal – 8999960000</p>
                      <p className="text-gray-600">Rajen Gada – 9920913579</p>
                    </div>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={200}>
                  <div className="flex">
                    <div className="w-14 h-14 rounded-2xl bg-finpro-red/10 flex items-center justify-center mr-6 flex-shrink-0">
                      <Mail className="w-6 h-6 text-finpro-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-montserrat">Email</h3>
                      <p className="text-gray-600">indiafinpro@gmail.com</p>
                    </div>
                  </div>
                </FadeInUp>
                
                <FadeInUp delay={300}>
                  <div className="flex">
                    <div className="w-14 h-14 rounded-2xl bg-finpro-red/10 flex items-center justify-center mr-6 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-finpro-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-montserrat">Event Locations</h3>
                      <p className="text-gray-600">FINPRO hosts events in multiple cities across India, including:</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune', 'Surat', 'Raipur', 'Indore'].map((city, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              </div>
              
              <FadeIn delay={400}>
                <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 font-montserrat">Membership Inquiries</h3>
                  <p className="text-gray-600 mb-4">
                    Interested in becoming a FINPRO member? Contact our membership team directly for personal assistance and details.
                  </p>
                  <Button variant="secondary" className="w-full sm:w-auto" icon={<Phone className="w-4 h-4" />} iconPosition="left">
                    Call Membership Team
                  </Button>
                </div>
              </FadeIn>
            </div>
            
            {/* Contact Form */}
            <FadeIn delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 font-montserrat">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finpro-red"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finpro-red"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finpro-red"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finpro-red"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finpro-red"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" variant="secondary" className="w-full" icon={<Send className="w-4 h-4" />} iconPosition="right">
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Locations Map */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeInUp>
              <h2 className="text-3xl font-bold mb-4 font-montserrat">
                Our Reach Across India
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <p className="text-gray-600">
                FINPRO has active members and hosts events in these major cities throughout India.
              </p>
            </FadeInUp>
          </div>
          
          <FadeIn>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7736591.048461488!2d69.79632155562394!3d22.843856935934867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce40ffcfacbd%3A0x353c478a7e476d2c!2sIndia!5e0!3m2!1sen!2sus!4v1653395278104!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="FINPRO locations across India"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Sponsorship CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-finpro-red/30 to-transparent opacity-40"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <FadeInUp>
                <h2 className="text-3xl font-bold mb-4 text-white font-montserrat">
                  Become a FINPRO Sponsor
                </h2>
              </FadeInUp>
              
              <FadeInUp delay={100}>
                <p className="text-gray-300 mb-8">
                  Interested in sponsoring our events and gaining exposure to our network of financial professionals?
                  Reach out to discuss partnership opportunities.
                </p>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <Button size="lg" variant="secondary">
                  Explore Sponsorship
                </Button>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
