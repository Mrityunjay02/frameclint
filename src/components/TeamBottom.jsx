import React from 'react';

const TeamBottom = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Rohit Sharma',
      role: 'Manager',
      img: require('../assets/team/smanager.jpg')
    },
    {
      name: 'Nausheen',
      role: 'Senior Manager',
      img: require('../assets/team/ssmanager.jpg')
    }
  ];

  // Styles
  const styles = {
    section: {
      background: '#000',
      padding: '60px 20px',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      fontFamily: "'Jacques Francois', serif",
      fontSize: '32px',
      color: '#fff',
      marginBottom: '40px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      padding: '0 20px'
    },
    memberCard: {
      textAlign: 'center',
      padding: '20px'
    },
    imageContainer: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      overflow: 'hidden',
      margin: '0 auto 20px',
      border: '3px solid #ffd700'
    },
    memberImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    memberName: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#fff',
      margin: '15px 0 5px'
    },
    memberRole: {
      fontSize: '16px',
      color: 'rgba(244, 244, 244, 0.8)',
      margin: 0
    },
    divider: {
      width: '50px',
      height: '2px',
      backgroundColor: '#ffd700',
      margin: '15px auto',
      opacity: 0.7
    },
    hoverEffect: {
      '&:hover': {
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease'
      }
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Sales Executive Team</h2>
        <div style={styles.grid}>
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              style={styles.memberCard}
              className="team-member-card"
            >
              <div style={styles.imageContainer}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  style={styles.memberImage}
                />
              </div>
              <h3 style={styles.memberName}>{member.name}</h3>
              <div style={styles.divider}></div>
              <p style={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .team-member-card {
          transition: transform 0.3s ease;
        }
        .team-member-card:hover {
          transform: translateY(-10px);
        }
        .team-member-card:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default TeamBottom;
