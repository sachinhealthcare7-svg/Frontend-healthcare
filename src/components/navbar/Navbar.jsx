// src/components/navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo">
        <img src="/photos/Blue Modern Minimalist Medical Clinic Logo (1).png" alt="Logo" />
      </div>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Center: Links */}
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="/Vedio" onClick={() => setIsOpen(false)}>Diseases</Link></li>
      </ul>

      {/* Right: Book Now button */}
      <div className="navbar-book">
        <button className="book-now-btn">Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
