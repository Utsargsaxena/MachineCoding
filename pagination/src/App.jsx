import React, { useState } from "react";
import "./App.css";

const App = () => { 
  const posts = [
    { header: "Understanding React Hooks", content: "React, JavaScript", description: "An in-depth guide to mastering useState, useEffect, and custom hooks." },
    { header: "JavaScript ES6 Cheatsheet", content: "JavaScript", description: "Quick reference for ES6 syntax: arrow functions, destructuring, promises, and more." },
    { header: "Responsive Web Design Principles", content: "HTML, CSS", description: "Learn how to build layouts that work on all devices using Flexbox and Media Queries." },
    { header: "Getting Started with TypeScript", content: "TypeScript", description: "A beginner’s introduction to strongly typed JavaScript using TypeScript." },
    { header: "Backend with Node.js & Express", content: "Node.js", description: "Set up a basic REST API with Express, middleware, and routing." },
    { header: "State Management with Redux", content: "Redux", description: "Explore Redux Toolkit for scalable state handling in modern apps." },
    { header: "Deploying with Vercel & Render", content: "DevOps", description: "Step-by-step deployment of full-stack applications using Vercel and Render." },
    { header: "Firebase Authentication Guide", content: "Firebase", description: "Secure login/signup using Firebase Auth with React integration." },
    { header: "Performance Tips for React Apps", content: "React", description: "Optimize render cycles, lazy loading, memoization, and more." },
    { header: "The Complete Git Workflow", content: "Git, GitHub", description: "From cloning to pull requests — everything you need to know about Git." },
  ];

  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / postsPerPage); 

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const changePage = (page) => setCurrentPage(page);

  return (
    <>
      <div className="outer-container">
        <div className="post-feed">
          <h2 className="feed-title">📚 Developer Blog Feed</h2>

          {currentPosts.map((post, index) => (
            <div key={index} className="post-structure">
              <h4>{post.header}</h4>
              <h6>{post.content}</h6>
              <p>{post.description}</p>
            </div>
          ))}

          <div className="pagination">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="nav-btn"
            >
              ⬅ Back
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => changePage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="nav-btn"
            >
              Next ➡
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;