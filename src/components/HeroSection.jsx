import React, { useState } from 'react';

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
    // Close the form after submission
    setIsFormOpen(false);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  return (
    <div className="min-h-screen overflow-x-hidden" style={{
      background: 'radial-gradient(circle at center, #FFFFFF 0%, #BDBEFF 50%, #8084FF 100%)',
      color: 'white',
      position: 'relative',
      paddingTop: '100px' /* Extra space for fixed header */
    }}>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center py-12 md:py-20" style={{
        minHeight: 'calc(100vh - 80px)',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style={{
          color: '#132D85',
          fontFamily: 'Inter',
          fontWeight: '600',
          lineHeight: '1.1',
          wordWrap: 'break-word',
          marginBottom: '1.5rem',
          padding: '0 1rem'
        }}>
          Supercharge Your Business
        </h1>
        
        <p className="px-4 text-lg sm:text-xl md:text-2xl" style={{
          color: 'black',
          fontFamily: 'Inter',
          fontWeight: '500',
          lineHeight: '1.4',
          wordWrap: 'break-word',
          margin: '0 auto 2.5rem',
          maxWidth: '42rem'
        }}>
          Fueling Growth Through Tailored Solutions
        </p>
        
        <div className="w-full" style={{position: 'relative'}}>
          {/* Main content */}
          <div className="relative flex flex-col items-center px-4" style={{zIndex: 10, marginBottom: '2.5rem'}}>
            <div className="flex flex-col items-center space-y-5 w-full">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
              >
                Get in Touch
              </button>
              
              {isFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start md:items-center justify-center z-50 p-4 overflow-y-auto">
                  <div className="bg-white rounded-lg p-5 sm:p-6 md:p-8 max-w-md w-full relative my-8 mx-auto">
                    <button 
                      onClick={() => setIsFormOpen(false)}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 text-2xl"
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5 sm:mb-6 text-center">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            +91
                          </span>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="98765 43210"
                            pattern="[0-9]{10}"
                            title="Please enter a valid 10-digit Indian phone number"
                            className="flex-1 min-w-0 block w-full px-4 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-black mb-1">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows="4"
                          className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        ></textarea>
                      </div>
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-base sm:text-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              
              {/* Vector below button */}
              <div style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #1D4ED8, #6D28D9)',
                padding: '10px',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                <img 
                  src={require('../assets/heroasset/Vector.svg')?.default || ''}
                  alt="Vector"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
              
              {/* Decorative elements - Right side */}
              <div style={{ 
                position: 'relative',
                width: '150px',
                height: '250px',
                marginTop: '20px',
                marginRight: '20px'
              }}>
                {/* Top image - Right side */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '500px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  zIndex: 2,
                }}>
                  <img 
                    src={require('../assets/heroasset/Frame-1.png')}
                    alt="Frame 1"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      transformOrigin: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                
                {/* Icon at the end of black line */}
                <div style={{
                  position: 'absolute',
                  bottom: '150px',
                  right: '-600px',
                  width: '80px',
                  height: '80px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  zIndex: 10,
                }}>
                  <img 
                    src={require('../assets/heroasset/Frame.png')}
                    alt="Frame"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      transformOrigin: 'center'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              </div>
            </div>
            
            {/* Image in bottom right corner */}
            <div style={{
              position: 'absolute',
              right: '-200px',
              bottom: '-90px',
              width: '250px',
              height: '200px',
              zIndex: 5,
              overflow: 'hidden'
            }}>
              <img 
                src={require('../assets/heroasset/visual.png')}
                alt="Visual element"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '8px'
                }}
              />
            </div>
            
            {/* Vector container */}
            {/* Left side image */}
            <div style={{ 
              position: 'absolute',
              left: '-19%',
              top: '-15%',
              transform: 'translateY(-50%)',
              width: '25%',
              maxWidth: '200px',
              zIndex: 1,
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <img 
                src={require('../assets/heroasset/tours 2.png')} 
                alt="Tours"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
