import React from 'react';

// Common styles for team member cards
const circleImageContainer = (size = '100%', maxSize = '300px') => ({
  width: size,
  height: size,
  maxWidth: maxSize,
  maxHeight: maxSize,
  borderRadius: '50%',
  overflow: 'hidden',
  margin: '0 auto 20px',
  border: 'double 3px transparent',
  backgroundImage: 'radial-gradient(white, #000), radial-gradient(circle at top left, #ffd700,rgb(0, 157, 255), #ffd700)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
  }
});

const circleImage = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.1)'
  }
};

const nameStyle = {
  marginTop: "15px",
  fontSize: "20px",
  fontWeight: 600,
  color: "#fff"
};

const roleStyle = {
  color: "rgba(244, 244, 244, 0.8)",
  margin: 0,
  fontSize: "16px"
};

const teamMembers = {
  left: {
    name: 'Manas Mahendra',
    role: 'Founder & CEO',
    img: require('../assets/team/ceo.jpg')
  },
  middle: [
    {
      name: 'Suraj Kumar',
      role: 'Chief UI/UX Designer',
      img: require('../assets/team/chief ui.jpg')
    },
    {
      name: 'Swami Kumar',
      role: 'Senior Designer',
      img: require('../assets/team/sdesign.jpg')
    }
  ],
  right: [
    {
      name: 'Vishal Singh',
      role: 'Co - Founder & CFO',
      img: require('../assets/team/co&ceo.jpg')
    },
    {
      name: 'Nikita Bansal',
      role: 'Manager',
      img: require('../assets/team/manager.jpg')
    },
    {
      name: 'Priya',
      role: 'COO Manager',
      img: require('../assets/team/coo.jpg')
    }
  ]
};

const Team = () => {
  return (
    <div style={{
      backgroundColor: '#000000',
      minHeight: '100vh',
      padding: '80px 40px',
      color: '#fff',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '40px',
        alignItems: 'start'
      }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* Heading */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '32px',
              fontFamily: 'Jacques Francois',
              fontWeight: '400',
              marginBottom: '20px'
            }}>
              Our Team
            </h2>
            <p style={{
              fontSize: '18px',
              fontFamily: 'Inter',
              lineHeight: '1.5',
              color: '#f4f4f4'
            }}>
              Our Dedicated Team Strives To Deliver <br />
              Excellence In Every Service We Provide.
            </p>
          </div>

          {/* CEO Card */}
          <div style={{ textAlign: 'center', transition: 'all 0.3s ease' }} className="team-member-card">
            <div style={circleImageContainer()}>
              <img 
                src={teamMembers.left.img} 
                alt={teamMembers.left.name} 
                style={circleImage} 
                className="team-member-image"
              />
            </div>
            <h3 style={nameStyle}>{teamMembers.left.name}</h3>
            <div style={{
              width: '50px',
              height: '1px',
              backgroundColor: '#ffd700',
              margin: '10px auto 15px',
              opacity: 0.7
            }} />
            <p style={roleStyle}>{teamMembers.left.role}</p>
          </div>
        </div>

        {/* Middle Column (2 big cards stacked) */}
        <div style={{
          display: 'grid',
          gridTemplateRows: 'repeat(2, auto)',
          gap: '40px',
          alignItems: 'center'
        }}>
          {teamMembers.middle.map((member) => (
            <div key={member.id} style={{ textAlign: 'center', transition: 'all 0.3s ease' }} className="team-member-card">
              <div style={circleImageContainer('65%', '220px')}>
                <img
                  src={member.img}
                  alt={member.name}
                  style={circleImage}
                  className="team-member-image"
                />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '5px 0' }}>
                {member.name}
              </h3>
              <div style={{
                width: '50px',
                height: '1px',
                backgroundColor: '#ffd700',
                margin: '10px auto 15px',
                opacity: 0.7
              }} />
              <p style={{ fontSize: '16px', color: 'rgba(244,244,244,0.8)', margin: 0 }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column (1x3 grid) */}
        <div style={{
          display: 'grid',
          gridTemplateRows: 'repeat(3, auto)',
          gap: '40px'
        }}>
          {teamMembers.right.map((member) => (
            <div key={member.id} style={{ textAlign: 'center', transition: 'all 0.3s ease' }} className="team-member-card">
              <div style={circleImageContainer('55%', '180px')}>
                <img
                  src={member.img}
                  alt={member.name}
                  style={circleImage}
                  className="team-member-image"
                />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '5px 0' }}>
                {member.name}
              </h3>
              <div style={{
                width: '50px',
                height: '1px',
                backgroundColor: '#ffd700',
                margin: '10px auto 15px',
                opacity: 0.7
              }} />
              <p style={{ fontSize: '16px', color: 'rgba(244,244,244,0.8)', margin: 0 }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

// Add these styles for hover effects
const style = document.createElement('style');
style.textContent = `
  .team-member-card {
    transition: transform 0.3s ease;
  }
  .team-member-card:hover {
    transform: translateY(-10px);
  }
  .team-member-image {
    transition: transform 0.5s ease;
  }
  .team-member-card:hover .team-member-image {
    transform: scale(1.1);
  }
`;
document.head.appendChild(style);

export default Team;
