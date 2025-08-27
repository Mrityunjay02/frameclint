import React from 'react';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Hero2 = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Mesh Background Image */}
      <img 
        src={require('../assets/hero2asset/mesh_1.png')} 
        alt="Mesh background"
        style={{
          width: '300px',
          height: '300px',
          position: 'absolute',
          top: '-4%',
          left: '-3%',
          transform: 'rotate(45deg)',
          opacity: 0.8,
          zIndex: 0,
          pointerEvents: 'none',
          filter: 'blur(1px)'
        }}
      />
      
      {/* About Us Text */}
      <div style={{
        position: 'absolute',
        left: '250px',
        top: '55%',
        transform: 'rotate(-90deg) translateX(-50%)',
        transformOrigin: 'left top',
        color: '#F4F4F4',
        fontSize: '32px',
        fontFamily: 'Jacques Francois',
        fontWeight: '400',
        textTransform: 'capitalize',
        lineHeight: '32px',
        whiteSpace: 'nowrap',
        paddingLeft: '20px',
        margin: 0
      }}>
        About us
      </div>
      <div 
        onClick={scrollToTop}
        style={{
          width: '100%', 
          textAlign: 'center', 
          justifyContent: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          color: 'white', 
          fontSize: '90px', 
          fontFamily: 'DM Sans', 
          fontWeight: '700', 
          textTransform: 'uppercase', 
          lineHeight: '117px', 
          wordWrap: 'break-word',
          padding: '40px 0',
          cursor: 'pointer',
          transition: 'opacity 0.3s ease',
          ':hover': {
            opacity: 0.8
          }
      }}>
        User Focused Value<br/> Based Data Driven
      </div>
      <div style={{
        display: 'flex',
        padding: '0 5%',
        marginTop: '-30px',
        alignItems: 'center',
        gap: '40px'
       
      }}>
        {/* Left side - Welcome Text */}
        <div style={{
          width: '50%',
          color: '#F4F4F4',
          fontSize: '18px',
          fontFamily: 'Inter',
          fontWeight: '400',
          textTransform: 'capitalize',
          lineHeight: '27px',
          wordWrap: 'break-word',
          position: 'relative',
          top: '0',
          right: '-250px'
        }}>
          Welcome to Frame Digital! We're a dedicated team offering<br/>top-notch digital solutions including logo design, UI/UX design, <br/>development, marketing, and SEO.<br/><br/>With our collective expertise, we turn ideas into reality. Whether<br/>you're a startup or an established brand, we're here to elevate your<br/>online presence and help you achieve your goals.<br/><br/>At Frame Digital, we prioritize quality, innovation, and client<br/>satisfaction. Let's work together to bring your vision to life.
          
          <div style={{marginTop: '30px'}}>
            <div style={{
              width: 'fit-content',
              padding: '13px 31px',
              background: '#464BF9',
              borderRadius: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              display: 'inline-flex',
              cursor: 'pointer',
              transition: 'transform 0.2s, background 0.2s',
              ':hover': {
                transform: 'scale(1.05)',
                background: '#383dd9'
              }
            }}>
              <div style={{
                color: 'white',
                fontSize: '20px',
                fontFamily: 'Inter',
                fontWeight: '500',
                wordWrap: 'break-word'
              }}>Get in touch</div>
            </div>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <img 
            style={{
              width: '100%',
              maxWidth: '571px',
              height: 'auto',
              objectFit: 'contain'
            }} 
            src={require('../assets/hero2asset/ai.png')}
            alt="AI Illustration"
          />
        </div>
      </div>
      
      {/* Arrow */}
      <img 
        src={require('../assets/hero2asset/Arrow 3.svg')} 
        alt=""
        style={{
          position: 'fixed',
          right: '40px',
          bottom: '40px',
          zIndex: 1000
        }}
      />
    </div>
  );
};


// Add styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";



export default Hero2;
