import React from 'react';
import sanjanaDp from '../assets/feedback/dp.svg';
import clientImage from '../assets/feedback/boy.jpg';

const Feedback = () => {
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      padding: '80px 40px',
      background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    }}>
      
      {/* Heading */}
      <h1 style={{
        color: '#F4F4F4',
        fontSize: '32px',
        fontFamily: 'Jacques Francois, serif',
        fontWeight: '400',
        marginBottom: '40px'
      }}>
        What Our Clients Say
      </h1>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
      }}>
        
        {/* Left Side - Client Card */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '220px'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
            fontFamily: 'sans-serif'
          }}>
          {/* Client Image */}
          <img 
            src={clientImage}
            alt="Jalen Kyle"
            style={{ 
              width: '100%', 
              height: '300px',
              objectFit: 'cover',
              display: 'block' 
            }}
          />

          {/* Overlay with Name & Designation */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            padding: '12px',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            color: '#fff'
          }}>
            <h3 style={{ margin: '0', fontSize: '16px' }}>Jalen Kyle</h3>
            <p style={{ margin: '2px 0 0 0', fontSize: '12px', opacity: 0.8 }}>
              Founder of Mediahouse
            </p>
          </div>

          {/* Play Button */}
          <button style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            background: 'rgba(255,255,255,0.9)',
            border: 'none',
            borderRadius: '6px',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#333">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
        
        {/* Text below the image */}
        <p style={{ 
          fontSize: '12px', 
          marginTop: '8px', 
          opacity: 0.7,
          color: '#F4F4F4',
          textAlign: 'center'
        }}>
          We supply clients across the entire globe with improved network connections.
        </p>
        </div>

        {/* Right Side (Quote + Profile + Arrows) */}
        <div style={{ flex: 1, color: '#fff' }}>
          <p style={{
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '1.5',
            marginBottom: '30px'
          }}>
            Awsmd focuses on the end-user and helps improve retention.
            <br />They excel in user experience and big-picture thinking.
          </p>

          <hr style={{ border: '0.5px solid #444', margin: '20px 0' }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* Client Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src={sanjanaDp}
           alt="Sanjana"
                style={{ width: '60px', height: '60px', borderRadius: '50%' }}
              />
              <div>
                <h4>Sanjana Singh</h4>
                <p style={{ fontSize: '13px', opacity: 0.7 }}>
                  Founder & CEO, Mountabu School
                </p>
              </div>
            </div>

            {/* Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '22px',
                cursor: 'pointer'
              }}>←</button>
              <button style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '22px',
                cursor: 'pointer'
              }}>→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
