import React from "react";

const ContactForm = () => {
  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "none",
    borderBottom: "1px solid #777",
    background: "transparent",
    color: "#fff",
    outline: "none",
    fontSize: "14px"
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "80px 40px",
      background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
      boxSizing: 'border-box',
      width: '100vw'
    }}>
      
      {/* Left Section */}
      <div style={{ flex: 1, marginRight: "40px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "400", marginBottom: "10px" }}>
          Have An Idea?
        </h3>
        <h1 style={{ fontSize: "48px", color: "#3B82F6", margin: "10px 0" }}>
          Drop us a <br /> line
        </h1>
        <p style={{ margin: "20px 0", fontSize: "14px" }}>
          Kumar manas8084@Gmail.Com 📋
        </p>
        
        {/* Social Buttons */}
        <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
          <button style={{
            border: "1px solid #25D366",
            background: "rgba(37, 211, 102, 0.1)",
            padding: "10px 20px",
            color: "#25D366",
            cursor: "pointer",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 14.4l-2-1c-.3-.1-.5-.1-.7.1l-1.7 1.5c-.1.2-.3.2-.5.1-1.3-.5-3.4-2.3-4.1-3.6-.1-.2 0-.4.1-.5l1.7-1.4c.2-.2.2-.4.1-.6l-2-3.5c-.1-.2-.3-.3-.5-.3l-5.9-.4c-.2 0-.4.2-.5.4-.5 1.7 0 7.1 4.3 11.4 3.8 3.9 8.9 5.2 11.4 5.2h.1c.4 0 .6-.3.6-.6l-.4-5.9c0-.3-.2-.5-.4-.6zM19.1 4h-5.9c-.5 0-1 .4-1 1v1.5c0 .5.4.9.9 1 .6.1 1.2.3 1.8.5.2 0 .4 0 .5.1.1 0 .2.1.2.1.1.1.2.2.1.4-.3.6-.7 1.1-1.1 1.6-.1.1-.1.3 0 .4.1.1.2.2.4.2h.1c.3 0 .6 0 .9-.1.1 0 .3 0 .4.1s.2.2.2.3c.2.8.3 1.6.3 2.4 0 .2-.1.3-.3.3s-.3-.1-.4-.1c-.3-.1-.7-.3-1-.4-.1 0-.3 0-.4.1l-.7.6c-.2.2-.4.4-.6.6-.5.6-.9 1.4-1.5 1.9-.2.2-.3.3-.1.5.1.1.2.1.2.2.4.2.8.4 1.3.6h.1c.2 0 .3.1.4.3.1.3.1.7.1 1 0 .2-.1.3-.3.3-1.1-.2-2.8-.5-4.2-1.4-.8-.5-1.4-1.1-2-1.9-1.5-1.9-2.5-5.8-1.6-8.1v-.3c0-.2.2-.4.4-.5 1.9-.8 5.1-1.4 7.3-.1h.1c.2.1.3.3.3.5v2.8c0 .2.2.4.4.4.5 0 .9-.1 1.4-.2h.5c.2 0 .4-.2.4-.4V5c.1-.6-.4-1-.9-1z" fill="#25D366"/>
            </svg>
            WhatsApp
          </button>
          <button style={{
            border: "1px solid #0077B5",
            background: "rgba(0, 119, 181, 0.1)",
            padding: "10px 20px",
            color: "#0077B5",
            cursor: "pointer",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.3A1.8 1.8 0 118.3 6.5a1.78 1.78 0 01-1.8 1.8zM19 19h-3v-4.7c0-1.1-.9-2-2-2s-2 .9-2 2V19h-3v-9h3v1.2a3.2 3.2 0 012.8-1.6c2.1 0 3.2 1.4 3.2 3.5V19z" fill="#0077B5"/>
            </svg>
            LinkedIn
          </button>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div style={{ flex: 1 }}>
        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ flex: 1 }}>
              <label>Your Name*</label>
              <input type="text" style={inputStyle} />
            </div>
            <div style={{ flex: 1 }}>
              <label>Your Email*</label>
              <input type="email" style={inputStyle} />
            </div>
          </div>
          
          <div>
            <label>Tell Us About Your Project</label>
            <textarea style={{ ...inputStyle, height: "100px" }}></textarea>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label style={{ cursor: "pointer" }}>📎 Attach File</label>
            <span style={{ fontSize: "12px", color: "#aaa" }}>0/1000</span>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input type="checkbox" />
            <label>I Agree With Your <span style={{ color: "#3B82F6" }}>Privacy Policy</span></label>
          </div>
          
          <button style={{
            background: "#3B82F6",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "24px",
            fontSize: "16px",
            cursor: "pointer",
            alignSelf: "flex-start"
          }}>
            ➝ Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
