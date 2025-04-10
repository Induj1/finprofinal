
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="mb-6">
              <Link to="/" className="inline-block" aria-label="Finpro Home">
                <img 
                  src="/lovable-uploads/b35d0171-8e12-472a-b26d-d6852f5f37be.png" 
                  alt="Finpro Logo" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-2">
              Building Value Together
            </p>
            <p className="text-gray-400 mb-6">
              A premier networking community for finance professionals dedicated to transforming competition into collaboration.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/finpro-international/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-finpro-red transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/finprointernational/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-finpro-red transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/finrpo" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-finpro-red transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.x.com/finproindia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-finpro-red transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-finpro-red"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-finpro-red transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-finpro-red transition-colors duration-300">Events</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-finpro-red transition-colors duration-300">Testimonials</Link>
              </li>
              <li>
                <Link to="/about#membership" className="text-gray-400 hover:text-finpro-red transition-colors duration-300">Membership</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-finpro-red transition-colors duration-300">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-finpro-red transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-finpro-red"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-finpro-red mr-3" />
                <div>
                  <p className="text-gray-400">Vijay Agrawwal</p>
                  <a href="tel:+918999960000" className="text-gray-400 hover:text-finpro-red transition-colors duration-300">
                    +91 8999960000
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-finpro-red mr-3" />
                <div>
                  <p className="text-gray-400">Rajen Gada</p>
                  <a href="tel:+919920913579" className="text-gray-400 hover:text-finpro-red transition-colors duration-300">
                    +91 9920913579
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-finpro-red mr-3" />
                <a href="mailto:indiafinpro@gmail.com" className="text-gray-400 hover:text-finpro-red transition-colors duration-300">
                  indiafinpro@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-finpro-red"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on events and opportunities.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-finpro-red"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-finpro-red text-white font-semibold rounded-md hover:bg-finpro-red/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} FINPRO International. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <Link to="/privacy-policy" className="hover:text-finpro-red transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms-of-use" className="hover:text-finpro-red transition-colors duration-300">Terms of Use</Link>
              <Link to="/refund-policy" className="hover:text-finpro-red transition-colors duration-300">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
