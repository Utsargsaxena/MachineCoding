import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [hovercheck, setHoverCheck] = useState(false);

  return (
    <div className="container">
      <div
        className="card"
        onMouseEnter={() => setHoverCheck(true)}
        onMouseLeave={() => setHoverCheck(false)}
      >
        <h3 className="card-title">🔔 Notification</h3>
        <p className="card-content">
          Hover over this card to see more info.
        </p>
        {hovercheck && (
          <div className="tooltip">
            This is a tooltip with helpful information.
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
