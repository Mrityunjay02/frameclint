import React from 'react';
import Logo from '../assets/heroasset/Vector.svg';

const Navigation = () => {
  return (
    <div className="w-full flex justify-between items-center">
      {/* Logo */}
      <div className="w-[69px] h-[71px] flex items-center justify-center flex-shrink-0">
        <img src={Logo} alt="Frame Digital Logo" className="h-12 w-auto" />
      </div>
      
      {/* Navigation Links - Centered */}
      <div className="flex-1 flex justify-center">
        <div className="px-2.5 py-1.5 bg-sky-100 rounded-[50px] border-2 border-sky-200 shadow-lg">
          <div className="flex justify-center items-center gap-12">
            {['About Us', 'Portfolio', 'Services', 'Products', 'Contact Us'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sky-800 text-lg font-semibold leading-[120%] hover:text-sky-600 transition-colors duration-200"
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
      
      {/* Right side SVG */}
      <div className="w-[50px] flex-shrink-0">
        <img 
          src={require('../assets/heroasset/Group 266.svg').default} 
          alt="Right Side Decoration" 
          className="h-8 w-auto" 
        />
      </div>
    </div>
  );
};

export default Navigation;
