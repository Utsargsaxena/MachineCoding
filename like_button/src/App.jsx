import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./App.css"; 

const App = () => {
  const [liked, setLiked] = useState(false);
  
  const toggleLike = () => {
    setLiked(prev => !prev);
  };

  return (
    <div className="app-container">
      <div className="post-card">
        <h2 className="post-title">React Makes UI Fun 🎯</h2>
        <p className="post-content">
          This is a sample post to demonstrate a working Like/Unlike feature using React.
        </p>

        <div className="like-section" onClick={toggleLike}>
          {liked ? (
            <AiFillHeart className="heart-icon liked" />
          ) : (
            <AiOutlineHeart className="heart-icon" />
          )}
          <span className="like-text">
            {liked ? "You liked this" : "Like this post"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
