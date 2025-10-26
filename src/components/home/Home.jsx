import React, { useEffect } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import About from '../about/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Content from '../content/Content';
import Vedio from '../vedio/Vedio';
import Contact from "../contact/Contact"
import Format from '../Format';
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <> 
      <div className="hero-section1">
        <div data-aos="fade-up">
          <div className="hero-section">
            <div className="hero-content">

              {/* Left Side Image */}
              <div className="hero-image">
                <img
                  src="/photos/Blue Modern Minimalist Medical Clinic Logo (1).png"
                  alt="Cans"
                  className='logoimage1'
                />
              </div>

              {/* Right Side Text */}
              <div className="hero-text">
                <div data-aos="fade-left">
                  <h1>
                    Dr. <span className="highlight">S.K</span> Sachin <br />
                    <span className="highlight">Health </span> Care
                  </h1>
                </div>

                <div data-aos="fade-up">
                  <p>
                    <h2 className="subheading">(B.A.M.S) Ayurvedic Clinic No.1 Sexologist</h2>
                    A specialist in piles (hemorrhoids), digestive disorders, and skin diseases.
                  </p>

                  {/* Contact + WhatsApp Buttons */}
                  <div className="button-group">
                    <Link to="/Contact" className="hero-button contact-button">
                      Contact Us →
                    </Link>

                    <a
                      href="https://wa.me/7500009985" // Replace with actual number
                      className="hero-button whatsapp-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* <img
                        src="/icons/whatsapp-icon.svg"
                        alt="WhatsApp"
                        className="whatsapp-icon"
                      /> */}
                      WhatsApp→
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG Wave */}
        <div className="hero-wave1">
          <svg
            className="wave-svg1"
            viewBox="0 0 1440 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0"
              stroke="#fff"
              strokeWidth="16"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0  L1440,500 L0,500 Z"
              fill="#D7E0E7"
              style={{
                filter: 'drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))',
              }}
            />
          </svg>
        </div>
      </div>

      {/* Other Components */}
      <About />
      <Content />
      <Vedio />
      <Format />
      <Contact />
    </>
  );
};

export default Home;
