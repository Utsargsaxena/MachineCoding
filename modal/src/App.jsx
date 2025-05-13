import React, { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at center, rgba(0,0,0,0.8), #000)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    backdropFilter: "blur(4px)",
    animation: "fadeIn 0.3s ease-in-out",
  };

  const modalStyle = {
    background: "linear-gradient(145deg, #ffffff, #e4e4e4)",
    padding: "2rem",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1), 0 0 60px rgba(255, 255, 255, 0.15)",
    position: "relative",
    fontFamily: "'Segoe UI', sans-serif",
    textAlign: "center",
    transform: "scale(1)",
    transition: "transform 0.3s ease-in-out",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "15px",
    border: "none",
    background: "transparent",
    fontSize: "1.6rem",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#999",
    transition: "color 0.2s",
  };

  const openButtonStyle = {
    padding: "14px 28px",
    fontSize: "1.1rem",
    cursor: "pointer",
    backgroundImage: "linear-gradient(to right, #ff6a00, #ee0979)",
    color: "white",
    border: "none",
    borderRadius: "40px",
    fontWeight: "bold",
    marginTop: "150px",
    boxShadow: "0 8px 30px rgba(238, 9, 121, 0.4)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "1.2rem",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    background: "#f9f9f9",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
    transition: "box-shadow 0.3s ease",
  };

  const loginButtonStyle = {
    width: "100%",
    padding: "12px",
    backgroundImage: "linear-gradient(to right, #43cea2, #185a9d)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button
        style={openButtonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 10px 40px rgba(238, 9, 121, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(238, 9, 121, 0.4)";
        }}
        onClick={() => setIsOpen(true)}
      >
        Open Login Modal
      </button>

      {isOpen && (
        <div style={overlayStyle} onClick={() => setIsOpen(false)}>
          <div
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={closeButtonStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#333")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <h2 style={{ marginBottom: "1.5rem", color: "#333" }}>Login to Continue</h2>
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
            <button
              style={loginButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
              }}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
