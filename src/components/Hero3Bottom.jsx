import React from 'react';
import Frame1Svg from '../assets/hero3asset/Frame (1).svg';
import FrameSvg from '../assets/hero3asset/Frame.svg';
import Frame2Svg from '../assets/hero3asset/Frame (2).svg';
import Frame3Svg from '../assets/hero3asset/Frame (3).svg';


const Hero3Bottom = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'white',
      padding: '80px 60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      gap: '60px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        padding: '0',
        textAlign: 'left',
        margin: '0 auto'
      }}>
        <div style={{
          color: '#333',
          fontSize: '40px',
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: '500',
          lineHeight: '60px',
          textTransform: 'capitalize',
          wordWrap: 'break-word',
          maxWidth: '1500px',
          margin: '0 auto',
          textAlign: 'left'
        }}>
          As a tight-knit team of experts, we create memorable and emotional websites,
          <br/>digital experiences, and native apps.
        </div>
      </div>
      <div style={{
        position: 'absolute',
        left: '120px',
        top: '20%',
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'left center',
        whiteSpace: 'nowrap',
        color: '#373737',
        fontSize: '30px',
        fontFamily: 'Jacques Francois',
        fontWeight: '400',
        textTransform: 'capitalize',
        lineHeight: '120px'
      }}>
        Our Features
      </div>
      
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          width: '100%',
          height: '400px',
          backgroundColor: 'black',
          borderRadius: '12px',
          marginBottom: '40px',
          position: 'relative',
          overflow: 'hidden',
          padding: '40px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            position: 'absolute',
            top: '70px',
            left: '50px',
            maxWidth: '500px'
          }}>
            <img 
              src={FrameSvg} 
              alt="" 
              style={{
                width: '48px',
                height: '48px',
                marginBottom: '10px'
              }}
            />
            <div style={{
              color: 'white',
              fontSize: '30px',
              fontFamily: 'Inter',
              fontWeight: '700',
              lineHeight: '24px',
              wordWrap: 'break-word'
            }}>
              Your ultra-capable teammate
            </div>
            <div style={{
              color: 'white',
              fontSize: '18px',
              fontFamily: 'Inter',
              fontWeight: '400',
              lineHeight: '23px',
              letterSpacing: '0.01em',
              wordWrap: 'break-word',
              maxWidth: '500px'
            }}>
              Messy notes? Have Notion AI summarize what's important and actionable. No need to jump back and forth between your notes and a separate AI app.
            </div>
          </div>
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            backgroundColor: '#E2E6F8',
            right: '40px',
            top: '50%',
            transform: 'translateY(-50%)',
            borderRadius: '8px'
          }} />
        </div>
        
        {/* Three independent square boxes */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '60px',
          gap: '20px'
        }}>
          {/* Box 1 */}
          <div style={{
            flex: 1,
            aspectRatio: '1',
            backgroundColor: 'black',
            borderRadius: '12px',
            maxWidth: 'calc(33.333% - 14px)',
            padding: '60px 24px 24px 32px',
            boxSizing: 'border-box',
            color: 'white',
            fontSize: '18px',
            fontFamily: 'Inter',
            fontWeight: '700',
            lineHeight: '24px',
            wordWrap: 'break-word',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <img 
              src={Frame1Svg}
              alt=""
              style={{
                width: '40px',
                height: '40px',
                marginBottom: '16px'
              }}
            />
            <div>Action item</div>
            <div style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: '400',
              lineHeight: '23px',
              letterSpacing: '0.01em',
              wordWrap: 'break-word',
              opacity: 0.8
            }}>
              Analyze meeting notes to generate next steps, instantly.
            </div>
          </div>

          {/* Box 2 */}
          <div style={{
            flex: 1,
            aspectRatio: '1',
            backgroundColor: 'black',
            borderRadius: '12px',
            maxWidth: 'calc(33.333% - 14px)',
            padding: '60px 24px 24px 32px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <img 
              src={Frame2Svg}
              alt=""
              style={{
                width: '40px',
                height: '40px',
                marginBottom: '16px'
              }}
            />
            <div style={{
              justifyContent: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              color: 'white', 
              fontSize: '18px', 
              fontFamily: 'Inter', 
              fontWeight: '700', 
              lineHeight: '24px', 
              wordWrap: 'break-word'
            }}>Summaries</div>
            <div style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: '400',
              lineHeight: '23px',
              letterSpacing: '0.01em',
              wordWrap: 'break-word',
              opacity: 0.8
            }}>
             Write a summary in 30 seconds, not 30 minutes.
            </div>
          </div>

          {/* Box 3 */}
          <div style={{
            flex: 1,
            aspectRatio: '1',
            backgroundColor: 'black',
            borderRadius: '12px',
            maxWidth: 'calc(33.333% - 14px)',
            padding: '60px 24px 24px 32px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <img 
              src={Frame3Svg}
              alt=""
              style={{
                width: '40px',
                height: '40px',
                marginBottom: '16px'
              }}
            />
            <div style={{
              justifyContent: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              color: 'white', 
              fontSize: '18px', 
              fontFamily: 'Inter', 
              fontWeight: '700', 
              lineHeight: '24px', 
              wordWrap: 'break-word'
            }}>Takeaways</div>
            <div style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: '400',
              lineHeight: '23px',
              letterSpacing: '0.01em',
              wordWrap: 'break-word',
              opacity: 0.8
            }}>
              Surface what’s important from research, sales calls & more.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3Bottom;
