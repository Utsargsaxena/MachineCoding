import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 3000);
    return () => clearTimeout(timer);
  }, [showToast]);

  const handleShowToast = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  const handleCloseToast = () => setShowToast(false);

  return (
    <>
      {showToast && (
        <div className="toast">
          ✅ Your Response has been saved!
          <span className="toast-close" onClick={handleCloseToast}>×</span>
        </div>
      )}

      <div className="app-container">
        <form className="form-box" onSubmit={handleShowToast}>
          <h2 className="form-heading">Get in Touch</h2>
          <input type="text" placeholder="Full Name" className="form-input" />
          <input type="email" placeholder="Email Address" className="form-input" />
          <textarea placeholder="Your Message" className="form-textarea" rows="4" />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
