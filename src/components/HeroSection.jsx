import React from 'react';
import Navigation from './Navigation';

const HeroSection = () => {
  return (
    <div style={{
      height: '100vh',
      overflow: 'hidden',
      background: 'radial-gradient(circle at center, #FFFFFF 0%, #BDBEFF 50%, #8084FF 100%)',
      color: 'white',
      position: 'relative'
    }}>
      {/* Navigation */}
      <div className="container mx-auto px-6" style={{
        paddingTop: '24px',
        paddingBottom: '24px'
      }}>
        <Navigation />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center" style={{
        height: 'calc(100vh - 88px)',
        padding: '20px 0',
        boxSizing: 'border-box',
        position: 'relative'
      }}>
        <h1 style={{
          color: '#132D85',
          fontSize: '84px',
          fontFamily: 'Inter',
          fontWeight: '600',
          lineHeight: '89px',
          wordWrap: 'break-word',
          marginBottom: '1.5rem'
        }}>
          Supercharge Your Business
        </h1>
        
        <p style={{
          color: 'black',
          fontSize: '25px',
          fontFamily: 'Inter',
          fontWeight: '500',
          lineHeight: '35px',
          wordWrap: 'break-word',
          marginBottom: '2.5rem',
          maxWidth: '42rem'
        }}>
          Fueling Growth Through Tailored Solutions
        </p>
        
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
          {/* Main content */}
          <div className="relative flex flex-col items-center" style={{zIndex: 10, marginBottom: '40px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                Get in Touch
              </button>
              
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
