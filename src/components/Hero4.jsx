import React from 'react';

const Hero4 = () => {
  const styles = {
    heroContainer: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#000000',
      padding: '40px 60px',
      display: 'flex',
      justifyContent: 'center',
      margin: 0,
      position: 'relative',
      zIndex: 1,
    },
    contentWrapper: {
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto',
      textAlign: 'center',
    },
    header: {
      color: '#F4F4F4',
      fontSize: '32px',
      fontFamily: 'Jacques Francois',
      fontWeight: '400',
      textTransform: 'capitalize',
      lineHeight: '120px',
      wordWrap: 'break-word',
      marginBottom: '1.5rem',
    },
    subheader: {
      fontSize: '1.25rem',
      color: '#aaa',
      marginBottom: '4rem',
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: 1.6,
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
    },
    serviceCard: {
      background: '#1a1a1a',
      borderRadius: '12px',
      padding: '2.5rem 2rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      border: '1px solid #333',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.5)',
      },
    },
    serviceIcon: {
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
    },
    serviceTitle: {
      fontSize: '1.5rem',
      color: '#ffffff',
      marginBottom: '1rem',
      fontWeight: '600',
    },
    serviceDescription: {
      color: '#aaa',
      lineHeight: 1.6,
      fontSize: '1rem',
    },
  };

  // Box component
  const Box = ({ name, position, style = {}, children }) => {
    const positions = {
      'top-left': { marginRight: '-50px', marginBottom: '40px' },
      'bottom-left': { marginRight: '-50px' },
      'top-right': { marginLeft: '-50px', marginBottom: '40px' },
      'bottom-right': { marginLeft: '-50px' }
    };

    return (
      <div 
        style={{
          width: '400px',
          height: '280px',
          backgroundColor: '#191919',
          borderRadius: '12px',
          boxSizing: 'border-box',
          position: 'relative',
          ...positions[position],
          ...style
        }}
      >
        {children || (
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            {name}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={styles.heroContainer}>
      <div style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '60px 100px 80px 0',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <div style={{ 
          ...styles.header, 
          textAlign: 'right',
          maxWidth: '800px',
          width: '100%',
          marginRight: '-170px'
        }}>
          Why Choose Us
        </div>
      </div>
      <div style={{
        ...styles.contentWrapper,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '60px',
        position: 'relative',
        minHeight: '600px',
        padding: '15px 0'
      }}>
        <div style={{ 
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '20px',
          paddingTop: '300px' // Added padding to push content below the phone image
        }}>
          {/* Phone Image */}
          <img 
            src={require('../assets/hero4asset/phone.jpg')} 
            alt="Phone" 
            style={{
              position: 'absolute',
              width: '975px',
              height: '500px',
              borderRadius: '0',
              left: '-650px',
              top: '200px',
              transform: 'translateY(0)',
              zIndex: 2
            }}
          />
          
          {/* ====================== LEFT SIDE ====================== */}
          {/* Left Side - Top Box */}
          <Box position="top-left">
            <div style={{
              width: '100%', 
              height: '100%', 
              padding: '40px',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px'
            }}>
              <img 
                src={require('../assets/hero4asset/dollar.png')} 
                alt="Dollar" 
                style={{
                  width: '80px',
                  height: '80px',
                  marginBottom: '15px',
                  objectFit: 'contain',
                  marginTop: '-10px'
                }}
              />
              <div style={{
                color: '#F4F4F4', 
                fontSize: '32px', 
                fontFamily: 'Inter', 
                fontWeight: '500', 
                textTransform: 'capitalize', 
                lineHeight: '1.2',
                wordWrap: 'break-word'
              }}>
                Affordable Price
              </div>
              <div style={{
                textAlign: 'center',
                color: '#F4F4F4',
                fontSize: '18px',
                fontFamily: 'Inter',
                fontWeight: '400',
                textTransform: 'capitalize',
                lineHeight: '27px',
                wordWrap: 'break-word'
              }}>
                We provide websites to all startups<br/>at very affordable prices.
              </div>
            </div>
          </Box>
          
          {/* Left Side - Bottom Box */}
          <Box position="bottom-left">
            <div style={{
              width: '100%', 
              height: '100%', 
              padding: '40px',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px'
            }}>
              <img 
                src={require('../assets/hero4asset/check.png')} 
                alt="Checkmark" 
                style={{
                  width: '80px',
                  height: '80px',
                  marginBottom: '15px',
                  objectFit: 'contain',
                  marginTop: '-10px'
                }}
              />
              <div style={{
                color: '#F4F4F4', 
                fontSize: '32px', 
                fontFamily: 'Inter', 
                fontWeight: '500', 
                textTransform: 'capitalize', 
                lineHeight: '1.2',
                wordWrap: 'break-word',
                textAlign: 'center'
              }}>
                Industry Standard
              </div>
              <div style={{
                textAlign: 'center',
                color: '#F4F4F4',
                fontSize: '18px',
                fontFamily: 'Inter',
                fontWeight: '400',
                textTransform: 'capitalize',
                lineHeight: '27px',
                wordWrap: 'break-word'
              }}>
                We ensure our work meets<br/>industry standards.
              </div>
            </div>
          </Box>
        </div>

        {/* ====================== RIGHT SIDE ====================== */}
        <div style={{ 
          position: 'relative',
          zIndex: 1,
          padding: '0 50px',
          marginLeft: '0',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Right Side - Top Box */}
          <Box position="top-right">
            <div style={{
              width: '100%', 
              height: '100%', 
              padding: '40px',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px'
            }}>
              <img 
                src={require('../assets/hero4asset/wallet.png')} 
                alt="Wallet" 
                style={{
                  width: '80px',
                  height: '80px',
                  marginBottom: '15px',
                  objectFit: 'contain',
                  marginTop: '-10px'
                }}
              />
              <div style={{
                color: '#F4F4F4', 
                fontSize: '32px', 
                fontFamily: 'Inter', 
                fontWeight: '500', 
                textTransform: 'capitalize', 
                lineHeight: '1.2',
                wordWrap: 'break-word',
                textAlign: 'center'
              }}>
                Personal Connection
              </div>
              <div style={{
                textAlign: 'center',
                color: '#F4F4F4',
                fontSize: '18px',
                fontFamily: 'Inter',
                fontWeight: '400',
                textTransform: 'capitalize',
                lineHeight: '27px',
                wordWrap: 'break-word'
              }}>
                We Build a Personal Connection<br/>with All company Owners
              </div>
            </div>
          </Box>
          
          {/* Right Side - Bottom Box */}
          <Box position="bottom-right">
            <div style={{
              width: '100%', 
              height: '100%', 
              padding: '40px',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px'
            }}>
              <img 
                src={require('../assets/hero4asset/like.png')} 
                alt="Like" 
                style={{
                  width: '80px',
                  height: '80px',
                  marginBottom: '15px',
                  objectFit: 'contain',
                  marginTop: '-10px'
                }}
              />
              <div style={{
                color: '#F4F4F4', 
                fontSize: '32px', 
                fontFamily: 'Inter', 
                fontWeight: '500', 
                textTransform: 'capitalize', 
                lineHeight: '1.2',
                wordWrap: 'break-word',
                textAlign: 'center'
              }}>
                100% Trust
              </div>
              <div style={{
                textAlign: 'center',
                color: '#F4F4F4',
                fontSize: '18px',
                fontFamily: 'Inter',
                fontWeight: '400',
                textTransform: 'capitalize',
                lineHeight: '27px',
                wordWrap: 'break-word'
              }}>
                We give 100% trust to our clients<br/>and their startups.
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
