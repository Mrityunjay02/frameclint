import React from "react";
import { FaFacebook, FaGithub,  FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  // Styles
  const footerStyle = {
    backgroundColor: "#1E3A8A", // blue shade
    color: "#fff",
    padding: "50px 80px",
    fontFamily: "Arial, sans-serif"
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "40px",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
    paddingBottom: "30px"
  };

  const colStyle = { flex: "1", minWidth: "200px", margin: "0 20px" };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "15px"
  };

  const paraStyle = { fontSize: "14px", lineHeight: "1.6", color: "#ddd" };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "14px",
    color: "#ddd",
    lineHeight: "2"
  };

  const bottomBar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px"
  };

  const iconsStyle = {
    display: "flex",
    gap: "15px",
    fontSize: "18px",
    cursor: "pointer"
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* About Us */}
        <div style={colStyle}>
          <h3 style={headingStyle}>About Us</h3>
          <p style={paraStyle}>
            With our collective expertise, we turn ideas into reality. <br />
            Whether you're a startup or an established brand, we're here to
            elevate your online presence and help you achieve your goals.
          </p>
        </div>

        {/* Useful Links */}
        <div style={colStyle}>
          <h3 style={headingStyle}>Useful Links</h3>
          <ul style={listStyle}>
            <li>About</li>
            <li>Services</li>
            <li>Team</li>
            <li>Prices</li>
          </ul>
        </div>

        {/* Help */}
        <div style={colStyle}>
          <h3 style={headingStyle}>Help</h3>
          <ul style={listStyle}>
            <li>Customer Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div style={colStyle}>
          <h3 style={headingStyle}>Connect With Us</h3>
          <p style={paraStyle}>27 Division St, New York, NY 10002, USA</p>
          <p style={paraStyle}>+123 324 2653</p>
          <p style={paraStyle}>username@mail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={bottomBar}>
        <p>Copyright 2024 © Frame Digital solutions Pvt Ltd.</p>
        <div style={iconsStyle}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaFacebook /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaGithub /></a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaXTwitter /></a>

          <a href="https://google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><FaGoogle /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
