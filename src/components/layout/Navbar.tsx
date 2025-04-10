
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '@/components/common/Button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Events', path: '/events' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Blogs', path: '/blogs' },
    { title: 'Testimonials', path: '/testimonials' },
    { title: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-2 bg-white/90 backdrop-blur-md shadow-md'
          : 'py-4 bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            aria-label="Finpro Home"
          >
            <img 
              src="/lovable-uploads/b35d0171-8e12-472a-b26d-d6852f5f37be.png" 
              alt="Finpro Logo" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      'font-montserrat font-medium text-sm transition-all duration-300 py-2',
                      location.pathname === link.path
                        ? 'text-finpro-red font-semibold'
                        : 'text-gray-700 hover:text-finpro-red'
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="primary">Join Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-finpro-red" />
            ) : (
              <Menu className="w-6 h-6 text-finpro-red" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-x-0 top-[65px] bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out z-40',
          isMenuOpen ? 'opacity-100 h-auto' : 'opacity-0 h-0 pointer-events-none'
        )}
      >
        <div className="container-custom py-4">
          <ul className="flex flex-col space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    'block py-2 font-montserrat font-medium transition-colors duration-300',
                    location.pathname === link.path
                      ? 'text-finpro-red font-semibold'
                      : 'text-gray-700 hover:text-finpro-red'
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button variant="primary" className="w-full">
                Join Now
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
