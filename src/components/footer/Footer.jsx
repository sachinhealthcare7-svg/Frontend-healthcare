import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  // Structured data for LocalBusiness
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. S.K Sachin Health Care",
    "description": "Ayurvedic Sexology and Skin Clinic",
    "url": "https://yourclinicwebsite.com",
    "telephone": "+91-7500009985",
    "email": "contact@drsksachin.com",
    "areaServed": ["Dharuhera", "Neemrana", "Rajasthan", "Haryana"],
    "hasMap": [
      "https://maps.google.com/?q=Dr.+S.K+Clinic+Dharuhera",
      "https://maps.google.com/?q=Dr.+S.K+Clinic+Neemrana"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "19:30"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessData)}
        </script>
      </Helmet>

      <footer className="footer" role="contentinfo" aria-label="Footer">
        <div className="footer-container">
          
          {/* Quick Links Section */}
          <div className="footer-section quick-links">
            <h3 className="footer-title">Quick Links</h3>
            <div className="link-columns">
              <ul className="footer-links">
                <li><Link to="/" onClick={scrollToTop}>🏠 Home</Link></li>
                <li><Link to="/about" onClick={scrollToTop}>👨‍⚕️ About Doctor</Link></li>
                <li><Link to="/treatments" onClick={scrollToTop}>🌿 Treatments</Link></li>
                <li><Link to="/contact" onClick={scrollToTop}>📞 Contact Us</Link></li>
              </ul>
              {/* <ul className="footer-links">
                <li><Link to="/privacy-policy">🔒 Privacy Policy</Link></li>
                <li><Link to="/terms">📋 Terms & Conditions</Link></li>
                <li><Link to="/disclaimer">⚠️ Disclaimer</Link></li>
                <li><Link to="/sitemap">🗺️ Sitemap</Link></li>
              </ul> */}
            </div>
          </div>

          {/* Contact & Timing Section */}
          <div className="footer-section timing-card">
            <div className="card-header">
              <span className="icon" aria-hidden="true">📅</span>
              <h3 className="footer-title">Clinic Timings</h3>
            </div>
            
            <div className="timings-list">
              <div className="clinic-item">
                <strong className="clinic-name">📍 Dr. S.K Clinic Dharuhera</strong>
                <div className="timing-row">
                  <span>Monday - Friday</span>
                  <span className="time">10:00 AM – 09:00 PM</span>
                </div>
              </div>
              
              <div className="clinic-item">
                <strong className="clinic-name">📍 Dr. S.K Clinic Neemrana</strong>
                <div className="timing-row">
                  <span>Saturday - Sunday</span>
                  <span className="time">10:00 AM – 07:30 PM</span>
                </div>
              </div>
            </div>

            <div className="emergency-contact">
              <p className="emergency-text">📞 For Emergency:</p>
              <a href="tel:+917500009985" className="emergency-number">+91 75000 9985</a>
            </div>

            <Link to="/contact" className="contact-btn" onClick={scrollToTop}>
              Book Appointment →
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="footer-section social-section">
            <h3 className="footer-title">Connect With Us</h3>
            
            <ul className="social-links" role="list" aria-label="Social media links">
              {/* WhatsApp */}
              <li className="social-item">
                <a
                  href="https://wa.me/917500009985?text=Hello%20Dr.%20Sachin%2C%20I%20need%20consultation"
                  className="social-link whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"/>
                  </svg>
                  <span className="social-label">WhatsApp</span>
                </a>
              </li>

              {/* Facebook */}
              <li className="social-item">
                <a
                  href="https://www.facebook.com/share/1FRM31mBwM/?mibextid=wwXIfr"
                  className="social-link facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Facebook"
                >
                  <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
                    <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
                  </svg>
                  <span className="social-label">Facebook</span>
                </a>
              </li>

              {/* Instagram */}
              <li className="social-item">
                <a
                  href="https://www.instagram.com/sachinhealthcare?igsh=dzUwNDJsdzE3MnZr"
                  className="social-link instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                >
                  <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                  <span className="social-label">Instagram</span>
                </a>
              </li>

              {/* YouTube */}
              <li className="social-item">
                <a
                  href="https://youtube.com/@sachinhealthcare-b1c?si=7Laljy_j1X8npmxk"
                  className="social-link youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe on YouTube"
                >
                  <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
                    <path d="M19.615 3.184A4.376 4.376 0 0 0 16.66 2.63C14.42 2.5 12 2.5 12 2.5s-2.42 0-4.66.13a4.376 4.376 0 0 0-2.955.554A4.411 4.411 0 0 0 2.63 5.54C2.5 7.78 2.5 12 2.5 12s0 4.22.13 6.46a4.376 4.376 0 0 0 .554 2.955 4.411 4.411 0 0 0 1.755 1.755 4.376 4.376 0 0 0 2.955.554C9.58 21.5 12 21.5 12 21.5s2.42 0 4.66-.13a4.376 4.376 0 0 0 2.955-.554 4.411 4.411 0 0 0 1.755-1.755 4.376 4.376 0 0 0 .554-2.955c.13-2.24.13-6.46.13-6.46s0-4.22-.13-6.46a4.376 4.376 0 0 0-.554-2.955 4.411 4.411 0 0 0-1.755-1.755zM10 15.5v-7l6 3.5-6 3.5z"/>
                  </svg>
                  <span className="social-label">YouTube</span>
                </a>
              </li>
            </ul>

            <div className="newsletter">
              <h4 className="newsletter-title">Subscribe to Health Tips</h4>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className="maps-section">
          <h4 className="maps-title">Our Clinic Locations</h4>
          <div className="maps-container">
            
            <div className="map-card">
              <h5 className="map-location">🏥 Dharuhera Clinic</h5>
              <p className="map-address">Main Market, Near Bus Stand, Dharuhera - 123106</p>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.322018953577!2d76.7902!3d28.2104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDEyJzM3LjQiTiA3NsKwNDcnMzIuOCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Dr. S.K Clinic Dharuhera Location"
                  aria-label="Google Maps location of Dharuhera clinic"
                ></iframe>
              </div>
              <a 
                href="https://maps.google.com/?q=Dr.+S.K+Clinic+Dharuhera" 
                className="map-direction"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions →
              </a>
            </div>

            <div className="map-card">
              <h5 className="map-location">🏥 Neemrana Clinic</h5>
              <p className="map-address">RIICO Industrial Area, Neemrana - 301705</p>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.018037491071!2d76.3822!3d27.9881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU5JzE3LjIiTiA3NsKwMjInNTUuOSJF!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Dr. S.K Clinic Neemrana Location"
                  aria-label="Google Maps location of Neemrana clinic"
                ></iframe>
              </div>
              <a 
                href="https://maps.google.com/?q=Dr.+S.K+Clinic+Neemrana" 
                className="map-direction"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Dr. S.K Sachin Health Care. All rights reserved.</p>
            <p className="developed-by">Designed with ❤️ for better health</p>
          </div>
          
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms of Use</Link>
            <span className="separator">|</span>
            <Link to="/disclaimer">Medical Disclaimer</Link>
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop} 
          className="scroll-top" 
          aria-label="Back to top"
          title="Back to top"
        >
          ↑
        </button>
      </footer>
    </>
  );
};

export default Footer;