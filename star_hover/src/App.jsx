import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./App.css";

const App = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const totalStars = 5;

  const handleClick = (index) => setRating(index + 1);
  const handleMouseEnter = (index) => setHover(index + 1);
  const handleMouseLeave = () => setHover(null);

  return (
    <div className="app-container">
      <div className="post-card">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Landscape"
          className="post-image"
        />

        <div className="post-content">
          <h2 className="post-title">🌄 Rate this view</h2>
          <p className="post-description">
            How would you rate this stunning landscape?
          </p>

          <div className="stars-row">
            {[...Array(totalStars)].map((_, index) => (
              <span
                key={index}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="star"
              >
                {index < (hover ?? rating) ? (
                  <AiFillStar size={24} color="gold" />
                ) : (
                  <AiOutlineStar size={24} color="gray" />
                )}
              </span>
            ))}
          </div>

          <p className="rating-text">
            {rating === 0
              ? "Hover to rate"
              : `You rated this ${rating} out of ${totalStars}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
