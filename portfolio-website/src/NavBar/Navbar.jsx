import React, { useState, useEffect } from 'react';
import './Button.css'; // Assuming this holds styles
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <nav className="Navbar">
      {isMobile ? (
        <>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          {menuOpen && (
            <div className="mobile-menu">
              <Link to="/" className="btn" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="btn" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/experience" className="btn" onClick={() => setMenuOpen(false)}>Experience</Link>
              <Link to="/projects" className="btn" onClick={() => setMenuOpen(false)}>Projects</Link>
            </div>
          )}
        </>
      ) : (
        <>
          <Link to="/" className="btn">Home</Link>
          <Link to="/about" className="btn">About</Link>
          <Link to="/experience" className="btn">Experience</Link>
          <Link to="/projects" className="btn">Projects</Link>
        </>
      )}

      <Link to="/contact" className="btn" id="contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
