import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

// Import other components
import About from '../about/About';
import Content from '../content/Content';
import Vedio from '../vedio/Vedio';
import Contact from "../contact/Contact";
import Format from '../Format';

const Home = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  // Structured data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. S.K Sachin Health Care - Ayurvedic Sexology Clinic",
    "description": "Premier Ayurvedic clinic specializing in sexual health, piles treatment, skin diseases, and confidential gupt rog consultation in India.",
    "medicalSpecialty": ["Sexology", "Ayurveda", "Dermatology", "Proctology"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "addressCountry": "IN"
    },
    "telephone": "+91-7500009985",
    "url": "https://yourclinicwebsite.com",
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 09:00-20:00",
    "sameAs": [
      "https://wa.me/917500009985"
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Dr. S.K Sachin | Best Sexologist in India | Ayurvedic Clinic for Sexual Health, Piles & Skin Diseases</title>
        <meta name="description" content="Dr. S.K Sachin (B.A.M.S) offers confidential Ayurvedic treatment for sexual problems, piles, digestive disorders, and skin diseases. India's trusted sexologist with 100% ayurvedic solutions. ✓ 15+ Years Experience ✓ 3000+ Happy Patients" />
        <meta name="keywords" content="sexologist in india, ayurvedic sexologist, sexual health clinic, piles treatment, bawasir ilaj, skin diseases treatment, gupt rog clinic, sexologist doctor, ayurvedic clinic, sexual problems solution, premature ejaculation treatment, erectile dysfunction ayurvedic treatment" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourclinicwebsite.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourclinicwebsite.com" />
        <meta property="og:title" content="Dr. S.K Sachin - Best Sexologist & Ayurvedic Clinic for Sexual Health" />
        <meta property="og:description" content="Confidential Ayurvedic treatment for sexual problems, piles, skin diseases & gupt rog. 100% natural & safe solutions. Book consultation today!" />
        <meta property="og:image" content="https://yourclinicwebsite.com/photos/clinic-logo.png" />
        <meta property="og:site_name" content="Dr. S.K Sachin Health Care" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://yourclinicwebsite.com" />
        <meta name="twitter:title" content="Dr. S.K Sachin - Best Sexologist & Ayurvedic Clinic" />
        <meta name="twitter:description" content="Confidential Ayurvedic treatment for sexual health, piles & skin diseases" />
        <meta name="twitter:image" content="https://yourclinicwebsite.com/photos/clinic-logo.png" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="Your City, Your State" />
        
        {/* Language and Author */}
        <meta name="author" content="Dr. S.K Sachin" />
        <meta name="language" content="English, Hindi" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section className="hero-wrapper" aria-label="Hero Section">
        <div className="hero-container">
          <div className="hero-content-wrapper">
            {/* Left Side Image */}
            <div className="hero-image-wrapper" data-aos="fade-right">
              <div className="hero-image-container">
                <img
                  src="/photos/Blue Modern Minimalist Medical Clinic Logo (1).png"
                  alt="Dr. S.K Sachin Ayurvedic Sexology Clinic - Official Logo"
                  className="hero-logo"
                  loading="eager"
                  width="400"
                  height="400"
                />
              </div>
            </div>

            {/* Right Side Text */}
            <div className="hero-text-wrapper">
              <div data-aos="fade-left">
                <h1 className="hero-title">
                  Dr. <span className="text-primary">S.K</span> Sachin <br />
                  <span className="text-primary">Health </span> Care
                </h1>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <p className="hero-subtitle">
                  <strong className="hero-qualification">(B.A.M.S) Premier Ayurvedic Sexology Clinic in India</strong>
                </p>
                
                <div className="specialties-card">
                  <h2 className="specialties-title">Specialized Ayurvedic Treatments For:</h2>
                  <ul className="specialties-list">
                    <li className="specialty-item">
                      <span className="specialty-icon">🔹</span>
                      <span>Sexual Health Problems <span className="hindi-text">(यौन समस्याएं)</span></span>
                    </li>
                    <li className="specialty-item">
                      <span className="specialty-icon">🔹</span>
                      <span>Piles / Hemorrhoids <span className="hindi-text">(बवासीर)</span></span>
                    </li>
                    <li className="specialty-item">
                      <span className="specialty-icon">🔹</span>
                      <span>Skin Diseases <span className="hindi-text">(त्वचा रोग)</span></span>
                    </li>
                    <li className="specialty-item">
                      <span className="specialty-icon">🔹</span>
                      <span>Digestive Disorders <span className="hindi-text">(पाचन विकार)</span></span>
                    </li>
                    <li className="specialty-item">
                      <span className="specialty-icon">🔹</span>
                      <span>Gupt Rog <span className="hindi-text">(Confidential Diseases)</span></span>
                    </li>
                  </ul>
                </div>

                <p className="hero-description">
                  With over 15 years of experience in Ayurvedic medicine, Dr. S.K Sachin provides 
                  confidential, safe, and natural treatments for all sexual health concerns, piles, 
                  and skin conditions. <strong>100% ayurvedic solutions with proven results.</strong>
                </p>

                {/* CTA Buttons */}
                <div className="cta-group">
                  <Link 
                    to="/Contact" 
                    className="btn btn-primary"
                    aria-label="Contact Dr. S.K Sachin Clinic"
                  >
                    <span>Book Consultation</span>
                    <svg className="btn-icon" viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                  </Link>

                  <a
                    href="https://wa.me/917500009985?text=Hello%20Dr.%20Sachin%2C%20I%20need%20consultation%20for%20sexual%20health"
                    className="btn btn-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp for confidential consultation"
                  >
                    <svg className="whatsapp-icon" viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.11 8.11 0 0 1-1.24-4.28c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.24 8.23z"/>
                      <path fill="currentColor" d="M16.77 14.3c-.26-.13-1.54-.76-1.78-.85-.24-.09-.42-.13-.6.13-.18.26-.7.85-.86 1.02-.16.17-.32.19-.58.06-.26-.13-1.11-.41-2.12-1.31-.78-.7-1.31-1.56-1.46-1.83-.16-.26-.02-.4.12-.53.12-.12.26-.32.39-.48.13-.16.17-.26.26-.43.09-.18.04-.34-.02-.47-.06-.13-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.46-.16 0-.34 0-.52 0-.18 0-.48.07-.73.34-.26.26-1 .98-1 2.4 0 1.42 1.04 2.79 1.18 2.99.14.2 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.56-.08 1.54-.63 1.76-1.24.22-.61.22-1.13.16-1.24-.06-.11-.24-.18-.5-.31z"/>
                    </svg>
                    <span>WhatsApp Consultation</span>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="trust-indicators" data-aos="fade-up" data-aos-delay="400">
                  <div className="trust-item">
                    <span className="trust-icon">✓</span>
                    <span>100% Confidential</span>
                  </div>
                  <div className="trust-item">
                    <span className="trust-icon">✓</span>
                    <span>Ayurvedic Treatment</span>
                  </div>
                  <div className="trust-item">
                    <span className="trust-icon">✓</span>
                    <span>15+ Years Experience</span>
                  </div>
                  <div className="trust-item">
                    <span className="trust-icon">✓</span>
                    <span>3000+ Happy Patients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </section>

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