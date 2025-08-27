import React from 'react';
import Link2Image from '../assets/hero4asset/Link 2.png';

const Hero5 = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#000000',
      padding: '60px 40px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{
        color: '#F4F4F4',
        fontSize: '32px',
        fontFamily: 'Jacques Francois',
        fontWeight: '400',
        textTransform: 'capitalize',
        lineHeight: '120px',
        wordWrap: 'break-word',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        How our Product helps you
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* First Row */}
        <img src={Link2Image} alt="Feature 1" style={{ width: '100%', borderRadius: '12px' }} />
        <img src={Link2Image} alt="Feature 2" style={{ width: '100%', borderRadius: '12px' }} />
        <img src={Link2Image} alt="Feature 3" style={{ width: '100%', borderRadius: '12px' }} />
        
        {/* Second Row */}
        <img src={Link2Image} alt="Feature 4" style={{ width: '100%', borderRadius: '12px' }} />
        <img src={Link2Image} alt="Feature 5" style={{ width: '100%', borderRadius: '12px' }} />
        <img src={Link2Image} alt="Feature 6" style={{ width: '100%', borderRadius: '12px' }} />
      </div>
    </div>
  );
};

export default Hero5;
