import React from 'react';
import './Navbar.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Hello, I am Garv Batra</h1>
        <p>Developer. Designer. Dreamer. Welcome to my digital space.</p>
      </div>
      <div className="home-image">
        <img src="me.png" alt="Garv Batra" />
      </div>
    </div>
  );
};

export default Home;
