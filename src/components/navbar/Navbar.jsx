// src/components/navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/Vedio', label: 'Treatment' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Left: Logo */}
          <Link to="/" className="navbar-logo">
            <img 
              src="/photos/Blue Modern Minimalist Medical Clinic Logo (1).png" 
              alt="Dr. S.K Sachin Health Care - Ayurvedic Clinic Logo"
              className="logo-image"
            />
            <span className="logo-text">Dr. S.K Sachin</span>
          </Link>

          {/* Mobile Hamburger */}
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Center: Navigation Links */}
          <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link 
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  {isActive(link.path) && <span className="active-indicator"></span>}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Book Now button */}
          <div className="navbar-actions">
            <Link to="/contact" className="book-now-btn">
              <span className="btn-text">Book Consultation</span>
              <svg className="btn-icon" viewBox="0 0 24 24" width="18" height="18">
                <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;