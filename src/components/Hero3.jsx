import React from 'react';
import cursorImg from '../assets/hero3asset/cursor.png';

const Hero3 = () => {
  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Left Side Image */}
      <div style={{
        position: 'absolute',
        left: '50px',
        top: '50%',
        transform: 'translateY(-50%)'
      }}>
        <img 
          src={require('../assets/hero3asset/Group.png')} 
          alt="Group"
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </div>
      
      {/* Right Side Text */}
      {/* Our Products Text */}
      <div style={{
        position: 'absolute',
        top: '40%',
        right: '400px',
        transform: 'translateY(-50%)',
        textAlign: 'right',
        zIndex: 10,
        fontFamily: 'Jacques Francois',
        fontSize: '80px',
        fontWeight: '400',
        textTransform: 'capitalize',
        lineHeight: '120px',
        color: '#373737'
      }}>
        Our Products
      </div>

      {/* Description Text */}
      <div style={{
        position: 'absolute',
        top: '65%',
        left: '65%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 10,
        maxWidth: '800px',
        fontFamily: 'serif',
        fontSize: '40px',
        lineHeight: '1.75', /* leading-relaxed */
        color: 'black'
      }}>
        <p>Our User-Centered Design</p>
        <p>Encourages Productivity</p>
        <p>And Boosts Revenue</p>
      </div>

      {/* New Text */}
      {/* Text Container */}
      <div style={{
        position: 'absolute',
        bottom: '100px',
        left: '65%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: '100%'
      }}>
        <div style={{
          color: '#373737',
          fontSize: '18px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          textTransform: 'capitalize',
          lineHeight: '27px',
          wordWrap: 'break-word',
          display: 'inline-block'
        }}>
          We don't do cookie-cutter solutions
        </div>
      </div>

      {/* Button Container */}
      <div style={{
        position: 'absolute',
        bottom: '5px',
        left: '60%',
        transform: 'translateX(-50%)',
        width: '100%',
        textAlign: 'center'
      }}>
        <div style={{
          width: 'fit-content',
          padding: '13px 31px',
          background: '#464BF9',
          borderRadius: '50px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(70, 75, 249, 0.3)'
          }
        }}>
          <div style={{
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '500',
            wordWrap: 'break-word',
            whiteSpace: 'nowrap'
          }}>
            Get in touch
          </div>
        </div>
      {/* Cursor Image */}
      <div style={{
        position: 'absolute',
        bottom: '-70px',
        left: 'calc(50% + 60px)',
        width: '60px',
        height: '60px',
        }}>
          <img 
            style={{
              width: '100%',
              height: '100%',
              transform: 'rotate(-60deg)',
              transformOrigin: 'top left',
              pointerEvents: 'none',
              zIndex: 1
            }} 
            src={cursorImg} 
            alt="Cursor decoration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero3;
