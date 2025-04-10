
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Events from '@/components/home/Events';
import Testimonials from '@/components/home/Testimonials';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FadeIn, FadeInUp } from '@/components/ui/Animation';
import Button from '@/components/common/Button';
import { ArrowRight, BookOpen, Users, Award, Target, Star } from 'lucide-react';

const Index = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: 'Transforming Competition into Collaboration',
      excerpt: 'How FINPRO is changing the landscape of financial professionals in India through its unique collaborative approach.',
      author: 'Vijay Agrawal',
      date: 'June 10, 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'The Future of Financial Networking in India',
      excerpt: 'An in-depth look at how professional networks like FINPRO are reshaping career trajectories and business opportunities.',
      author: 'Rajen Gada',
      date: 'May 3, 2024',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const sponsors = [
    { 
      name: "ICICI Lombard",
      logo: "/lovable-uploads/1.png" 
    },
    { 
      name: "Real Value Finloan Services",
      logo: "/lovable-uploads/2.png" 
    },
    { 
      name: "Triumph Consulting",
      logo: "/lovable-uploads/3.png" 
    },
    { 
      name: "Unity",
      logo: "/lovable-uploads/4.png" 
    },
    { 
      name: "WSB",
      logo: "/lovable-uploads/5.png" 
    },
    { 
      name: "Nuvama Wealth",
      logo: "/lovable-uploads/6.png" 
    },
    { 
      name: "Andromeda",
      logo: "/lovable-uploads/7.png" 
    },
    { 
      name: "Grovisor",
      logo: "/lovable-uploads/8.png" 
    },
    { 
      name: "Finbridge Ventures",
      logo: "/lovable-uploads/9.png" 
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About FINPRO Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeInUp>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20">
                  <span className="text-sm font-montserrat font-medium text-finpro-red">About FINPRO</span>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Who We Are
                </h2>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <p className="text-gray-600 mb-4">
                  FINPRO International is a forum of financial professionals providing services in the financial and 
                  allied sectors, with over 90 members across India.
                </p>
                <p className="text-gray-600 mb-6">
                  Our mission is to empower members through collaboration, transparency, and communication, creating 
                  professional growth and uncovering new opportunities.
                </p>
              </FadeInUp>
              
              <FadeInUp delay={300}>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-finpro-red/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-finpro-red" />
                    </div>
                    <span className="font-medium">90+ Members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-finpro-red/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-finpro-red" />
                    </div>
                    <span className="font-medium">7+ Cities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-finpro-red/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-finpro-red" />
                    </div>
                    <span className="font-medium">2,500+ Years Experience</span>
                  </div>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={400}>
                <Link to="/about">
                  <Button variant="secondary" className="group">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </FadeInUp>
            </div>
            
            <FadeIn delay={200}>
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/79fc5afc-d83b-4e95-b069-2626e8e2e0ff.png" 
                  alt="FINPRO Members" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Features />
      
      {/* Why Join Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20">
                <span className="text-sm font-montserrat font-medium text-finpro-red">Why Join FINPRO</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Benefits of Membership
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600">
                Discover the advantages of being part of our exclusive community of financial professionals.
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                icon: <Star className="w-8 h-8 text-finpro-red" />, 
                title: 'Professional Development', 
                description: 'Access mentorship programs and participate in national conferences.' 
              },
              { 
                icon: <Target className="w-8 h-8 text-finpro-red" />, 
                title: 'Collaborative Projects', 
                description: 'Work with fellow members on rewarding financial projects.' 
              }
            ].map((benefit, index) => (
              <FadeInUp key={index} delay={100 * (index + 1)}>
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
          
          <div className="text-center mt-12">
            <FadeIn>
              <Link to="/about#membership">
                <Button 
                  variant="secondary" 
                  className="group"
                  size="lg"
                >
                  Become a Member
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Events />
      
      {/* Membership Investment */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <FadeInUp>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20">
                  <span className="text-sm font-montserrat font-medium text-finpro-red">Membership Details</span>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Your Investment in Growth
                </h2>
              </FadeInUp>
              
              <FadeInUp delay={200}>
                <p className="text-gray-600 mb-6">
                  Join our exclusive network of financial professionals and unlock a world of opportunities, 
                  knowledge sharing, and business growth.
                </p>
              </FadeInUp>
              
              <FadeInUp delay={300}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-finpro-red/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-finpro-red text-xl">90+</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Active Members</h3>
                    <p className="text-gray-600 text-sm">Across 7+ cities in India</p>
                  </div>
                </div>
              </FadeInUp>
              
              <FadeInUp delay={400}>
                <Link to="/contact">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Contact Membership Team
                  </Button>
                </Link>
              </FadeInUp>
            </div>
            
            <div className="lg:col-span-3">
              <FadeIn delay={200}>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-6 font-montserrat">Membership Investment</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                      <div>
                        <h4 className="font-bold">One-time joining fee</h4>
                        <p className="text-sm text-gray-500">Currently waived for new members</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold line-through text-gray-400">₹5,000</span>
                        <span className="ml-2 text-lg font-bold text-finpro-red">₹0</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                      <div>
                        <h4 className="font-bold">Annual Membership Fee (12 months)</h4>
                        <p className="text-sm text-gray-500">Base membership fee</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold">₹21,000</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                      <div>
                        <h4 className="font-bold">GST (18%)</h4>
                        <p className="text-sm text-gray-500">As per government regulations</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold">₹3,780</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                      <div>
                        <h4 className="font-bold text-lg">Total Investment</h4>
                        <p className="text-sm text-gray-500">With special offer</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 line-through">₹30,680</div>
                        <span className="text-xl font-bold text-finpro-red">₹24,780</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link to="/about#membership">
                      <Button variant="secondary" className="w-full">
                        Become a Member Today
                      </Button>
                    </Link>
                    <div className="text-center text-sm text-gray-500">
                      Contact: Vijay Agrawal – 8999960000 | Rajen Gada – 9920913579
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Showcase Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20">
                <span className="text-sm font-montserrat font-medium text-finpro-red">Event Gallery</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Capturing Our Community
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600">
                Browse through moments from our exclusive events and see the FINPRO
                community in action. Building connections that last a lifetime.
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <FadeIn delay={100}>
              <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/0a591c00-b9af-49fb-ad48-2625800bd6c3.png" 
                  alt="Gallery image" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 text-white text-sm">
                    <p className="font-bold">Mumbai</p>
                    <p>October 2023</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/139c2ef1-41be-4d70-a9cc-38103ffc547a.png" 
                  alt="Gallery image" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 text-white text-sm">
                    <p className="font-bold">Delhi</p>
                    <p>January 2024</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/79fc5afc-d83b-4e95-b069-2626e8e2e0ff.png" 
                  alt="Gallery image" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 text-white text-sm">
                    <p className="font-bold">Bangalore</p>
                    <p>December 2023</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/139c2ef1-41be-4d70-a9cc-38103ffc547a.png" 
                  alt="Gallery image" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 text-white text-sm">
                    <p className="font-bold">Lonavala</p>
                    <p>February 2024</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="text-center">
            <FadeIn>
              <Link to="/gallery">
                <Button variant="outline" className="group">
                  View Full Gallery
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Sponsors Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20">
                <span className="text-sm font-montserrat font-medium text-finpro-red">Our Sponsors</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Supported By
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600">
                We're grateful to our sponsors who help make our events and initiatives possible.
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
            {sponsors.map((sponsor, index) => (
              <FadeIn key={index} delay={100 * (index % 5 + 1)}>
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-3 flex items-center justify-center h-28 border border-gray-100 transition-all duration-300">
                  <div className="w-full h-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={sponsor.logo} 
                      alt={`${sponsor.name} logo`} 
                      className="object-contain max-h-full max-w-full transition-all duration-300 filter hover:brightness-110" 
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="text-center">
            <FadeIn>
              <Link to="/contact">
                <Button variant="secondary">
                  Become a Sponsor
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeInUp>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-finpro-red/10 border border-finpro-red/20">
                <span className="text-sm font-montserrat font-medium text-finpro-red">Latest Insights</span>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Expert Financial Insights
              </h2>
            </FadeInUp>
            
            <FadeInUp delay={200}>
              <p className="text-gray-600">
                Stay informed with the latest financial trends, market analysis, and expert 
                advice from our community of financial professionals.
              </p>
            </FadeInUp>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {featuredBlogs.map((blog, index) => (
              <FadeInUp key={blog.id} delay={100 * (index + 1)}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-finpro-red uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 transition-colors group-hover:text-finpro-red">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center text-xs text-gray-500 mt-auto mb-3">
                      <span>{blog.date}</span>
                      <span className="mx-2">•</span>
                      <span>By {blog.author}</span>
                    </div>
                    
                    <Link 
                      to={`/blogs/${blog.id}`} 
                      className="inline-flex items-center text-sm text-finpro-red font-semibold group-hover:underline"
                    >
                      Read Article
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          <div className="text-center">
            <FadeIn>
              <Link to="/blogs">
                <Button 
                  variant="outline" 
                  className="group"
                  icon={<BookOpen className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Browse All Articles
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
