import React, { useState, useEffect } from 'react';
import Logo from '../assets/heroasset/Vector.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    if (window.innerWidth <= 1024) {
      setIsOpen(false);
    }
  };

  const navItems = ['About Us', 'Portfolio', 'Services', 'Products', 'Contact Us'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 w-full ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="block">
              <img 
                src={Logo} 
                alt="Frame Digital Logo" 
                className={`h-10 md:h-12 w-auto transition-all duration-300 ${
                  scrolled ? 'h-10' : 'h-12'
                }`} 
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="px-2.5 py-1.5 bg-sky-100 rounded-[50px] border-2 border-sky-200 shadow-lg">
              <div className="flex justify-center items-center gap-6 xl:gap-8">
                {navItems.map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sky-800 text-base xl:text-lg font-semibold leading-[120%] hover:text-sky-600 transition-colors duration-200 px-2"
                    style={{
                      fontFamily: 'Inter',
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sky-800 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Right side SVG - Hidden on mobile */}
          <div className="hidden lg:block w-[50px] flex-shrink-0">
            <img 
              src={require('../assets/heroasset/Group 266.svg').default} 
              alt="Right Side Decoration" 
              className="h-8 w-auto" 
            />
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-lg mt-4 py-4 px-6 absolute left-4 right-4 z-[1001]">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sky-800 text-lg font-semibold py-2 px-4 rounded-lg hover:bg-sky-50 transition-colors duration-200"
                  onClick={closeMobileMenu}
                  style={{
                    fontFamily: 'Inter',
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
