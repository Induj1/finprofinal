
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import Button from '@/components/common/Button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Calendar, MapPin, Clock, Users, ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const EventRegistration = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock event data based on eventId - in a real app, you would fetch this from a database
  const events = [
    {
      id: "1",
      title: 'Annual Finance Summit',
      description: 'Join industry leaders for two days of insightful discussions on the future of finance. Network with professionals from around the globe while gaining valuable knowledge from expert speakers.',
      date: 'June 24-25, 2024',
      location: 'Marriott Conference Center, New York, NY',
      time: '9:00 AM - 5:00 PM',
      price: '$599',
      capacity: 250,
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: "2",
      title: 'Investment Strategies Workshop',
      description: 'A hands-on workshop exploring cutting-edge investment approaches for today\'s volatile markets. Learn practical strategies from seasoned investment professionals.',
      date: 'July 12, 2024',
      location: 'Chicago Hilton, Chicago, IL',
      time: '10:00 AM - 3:00 PM',
      price: '$349',
      capacity: 120,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: "3",
      title: 'Emerging Markets Symposium',
      description: 'Discover opportunities in emerging markets with insights from global finance experts. This symposium offers a comprehensive look at international investment trends.',
      date: 'August 8, 2024',
      location: 'Fontainebleau Miami Beach, Miami, FL',
      time: '11:00 AM - 4:00 PM',
      price: '$449',
      capacity: 180,
      image: 'https://images.unsplash.com/photo-1620662736427-c3fff752c5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  const event = events.find(e => e.id === eventId);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    dietaryRestrictions: '',
    specialRequirements: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Registration data:', { eventId, ...formData });
    
    toast({
      title: "Registration Successful!",
      description: `You've registered for ${event?.title}. Check your email for confirmation.`,
      variant: "default",
    });
    
    // Redirect to events page after successful registration
    setTimeout(() => navigate('/events'), 2000);
  };
  
  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
            <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/events')}>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Events
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-24">
        <div className="container-custom">
          <FadeIn>
            <button 
              onClick={() => navigate('/events')}
              className="flex items-center text-finpro-gold font-medium mb-8 hover:underline"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Events
            </button>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Event Details */}
            <div className="lg:col-span-1">
              <FadeInUp>
                <div className="sticky top-24">
                  <div className="rounded-2xl overflow-hidden shadow-md mb-6">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  
                  <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 mr-3 text-finpro-gold" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-finpro-gold" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 mr-3 text-finpro-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 mr-3 text-finpro-gold" />
                      <span>Capacity: {event.capacity} attendees</span>
                    </div>
                  </div>
                  
                  <div className="bg-finpro-gold/10 rounded-lg p-4 mb-6">
                    <p className="text-finpro-gold font-semibold">Registration Fee</p>
                    <p className="text-2xl font-bold">{event.price}</p>
                  </div>
                </div>
              </FadeInUp>
            </div>
            
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <FadeInUp delay={100}>
                <div className="bg-white rounded-2xl shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6">Register for this Event</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block font-medium text-gray-700">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finpro-gold/50 focus:border-finpro-gold"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block font-medium text-gray-700">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finpro-gold/50 focus:border-finpro-gold"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finpro-gold/50 focus:border-finpro-gold"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="block font-medium text-gray-700">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finpro-gold/50 focus:border-finpro-gold"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="dietaryRestrictions" className="block font-medium text-gray-700">
                        Dietary Restrictions
                      </label>
                      <input
                        type="text"
                        id="dietaryRestrictions"
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finpro-gold/50 focus:border-finpro-gold"
                        placeholder="Please specify any dietary needs"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="specialRequirements" className="block font-medium text-gray-700">
                        Special Requirements
                      </label>
                      <textarea
                        id="specialRequirements"
                        name="specialRequirements"
                        value={formData.specialRequirements}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finpro-gold/50 focus:border-finpro-gold"
                        placeholder="Any accessibility requirements or other special needs"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Complete Registration
                    </Button>
                    
                    <p className="text-sm text-gray-600 text-center">
                      By registering, you agree to our terms and conditions
                    </p>
                  </form>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventRegistration;
