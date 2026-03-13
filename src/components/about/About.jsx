// src/components/AboutSection/AboutSection.jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

// Import doctor image (uncomment and add your image)
// import doctorImage from '../../images/dr-sk-sachin.webp';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  // Structured data for About page
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Dr. S.K Sachin - Ayurvedic Sexologist & Skin Specialist",
    "description": "Learn about Dr. S.K Sachin (BAMS), India's leading Ayurvedic sexologist and skin specialist with 8+ Years of experience in treating sexual health issues, piles, and skin diseases.",
    "mainEntity": {
      "@type": "Person",
      "name": "Dr. S.K Sachin",
      "jobTitle": "Ayurvedic Sexologist & Skin Specialist",
      "worksFor": {
        "@type": "MedicalOrganization",
        "name": "Dr. S.K Sachin Health Care"
      },
      "description": "Dr. S.K Sachin (BAMS) is a renowned Ayurvedic practitioner specializing in sexology, dermatology, and proctology with over 15 years of clinical experience.",
      "medicalSpecialty": ["Sexology", "Ayurveda", "Dermatology", "Proctology"]
    }
  };

  return (
    <>
      <Helmet>
        <title>About Dr. S.K Sachin | Best Ayurvedic Sexologist & Skin Specialist in India</title>
        <meta name="description" content="Meet Dr. S.K Sachin (BAMS) - India's trusted Ayurvedic sexologist and skin specialist with 8+ Years experience in treating sexual disorders, piles, skin diseases & gupt rog. Book consultation today." />
        <meta name="keywords" content="dr sk sachin about, ayurvedic sexologist profile, best skin specialist india, experienced sexologist, ayurvedic doctor qualifications, gupt rog specialist, piles specialist doctor" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="About Dr. S.K Sachin - Leading Ayurvedic Sexologist & Skin Specialist" />
        <meta property="og:description" content="8+ Years of experience in Ayurvedic treatment for sexual health, piles, and skin diseases. 3000+ happy patients." />
        <meta property="og:image" content="https://yourclinicwebsite.com/images/dr-sachin-profile.webp" />
        <meta property="og:url" content="https://yourclinicwebsite.com/about" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourclinicwebsite.com/about" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(aboutStructuredData)}
        </script>
      </Helmet>

      <section className="about-section" id="about" aria-label="About Dr. S.K Sachin">
        <div className="about-container">
          <div className="about-content">
            
            {/* Left Side - Text Content */}
            <div className="about-text-wrapper">
              <div className="about-text" data-aos="fade-right" data-aos-duration="3000">
                
                {/* Section Badge */}
                <span className="section-badge">👨‍⚕️ ABOUT US</span>
                
                <h2>
                  Meet <span className="highlight-blue">Dr. S.K Sachin</span> 
                  <span className="highlight-green"> (B.A.M.S)</span>
                </h2>
                
                <p className="doctor-qualification">
                  <strong>India's Leading Ayurvedic Sexologist & Skin Specialist</strong> 
                  <span className="experience-badge">8+ Years Experience</span>
                </p>

                <div className="about-description">
                  <p className="about-paragraph">
                    <strong>Dr. S.K Sachin (BAMS)</strong> is a renowned and trusted expert in the fields of 
                    <strong> Sexology, Dermatology, and Proctology</strong>, widely recognized as one of the 
                    <strong> No.1 Sexologists and Skin Specialists</strong> in India. With a unique blend of 
                    <strong> ancient Ayurvedic wisdom and modern medical understanding</strong>, Dr. S.K offers 
                    safe, effective, and personalized treatments for a wide range of health concerns.
                  </p>

                  <p className="about-paragraph">
                    His holistic approach combines traditional Ayurvedic formulations with evidence-based 
                    practices, helping patients find <strong>long-term relief from various conditions</strong> 
                    including sexual health issues, chronic skin disorders, piles, and digestive problems. 
                    Every treatment plan is customized according to the patient's unique body constitution (Prakriti).
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="key-highlights">
                  <h3>Why Choose Dr. S.K Sachin?</h3>
                  
                  <div className="highlights-grid">
                    <div className="highlight-item">
                      <span className="highlight-icon">🔬</span>
                      <div className="highlight-text">
                        <strong>8+ Years Clinical Experience</strong>
                        <p>Successfully treated 3000+ patients</p>
                      </div>
                    </div>

                    <div className="highlight-item">
                      <span className="highlight-icon">🌿</span>
                      <div className="highlight-text">
                        <strong>100% Ayurvedic Treatment</strong>
                        <p>Pure herbal formulations, no side effects</p>
                      </div>
                    </div>

                    <div className="highlight-item">
                      <span className="highlight-icon">🤝</span>
                      <div className="highlight-text">
                        <strong>100% Confidential Consultation</strong>
                        <p>Private and discreet environment</p>
                      </div>
                    </div>

                    <div className="highlight-item">
                      <span className="highlight-icon">🏆</span>
                      <div className="highlight-text">
                        <strong>Multi-Specialty Expert</strong>
                        <p>Sexology, Skin, Piles & Digestive Health</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specializations */}
                <div className="specializations">
                  <h3>Areas of Expertise:</h3>
                  <div className="specialization-tags">
                    <span className="specialization-tag">Sexual Health</span>
                    <span className="specialization-tag">Piles (Bawasir)</span>
                    <span className="specialization-tag">Skin Diseases</span>
                    <span className="specialization-tag">Gupt Rog</span>
                    <span className="specialization-tag">Premature Ejaculation</span>
                    <span className="specialization-tag">Erectile Dysfunction</span>
                    <span className="specialization-tag">Acne/Pimples</span>
                    <span className="specialization-tag">Digestive Disorders</span>
                    <span className="specialization-tag">Psoriasis</span>
                    <span className="specialization-tag">Eczema</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="about-cta">
                  <a href="/contact" className="about-button-primary">
                    Book Consultation →
                  </a>
                  <a 
                    href="https://wa.me/917500009985?text=Hello%20Dr.%20Sachin%2C%20I%20want%20to%20know%20more%20about%20your%20treatments" 
                    className="about-button-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="whatsapp-icon">📱</span> Chat on WhatsApp
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="trust-indicators">
                  <div className="trust-item">
                    <span className="trust-number">3000+</span>
                    <span className="trust-label">Happy Patients</span>
                  </div>
                  <div className="trust-item">
                    <span className="trust-number">8+</span>
                    <span className="trust-label">Years Experience</span>
                  </div>
                  <div className="trust-item">
                    <span className="trust-number">100%</span>
                    <span className="trust-label">Confidential</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="about-image-wrapper" data-aos="fade-left" data-aos-duration="3000">
              <div className="about-image-container">
                {/* Uncomment when you have the image */}
                {/* <img 
                  src={doctorImage} 
                  alt="Dr. S.K Sachin - Best Ayurvedic Sexologist and Skin Specialist in India" 
                  className="about-image"
                  loading="lazy"
                  width="500"
                  height="500"
                /> */}
                
                {/* Placeholder - Remove this when you add actual image */}
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <span className="placeholder-icon">👨‍⚕️</span>
                    <span className="placeholder-text">Dr. S.K Sachin</span>
                    <span className="placeholder-subtext">B.A.M.S (Sexology & Skin Specialist)</span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="experience-card">
                  <span className="experience-years">8+</span>
                  <span className="experience-label">Years of Excellence</span>
                </div>

                {/* Patient Rating */}
                <div className="rating-card">
                  <div className="stars">★★★★★</div>
                  <span className="rating-text">4.9/5 (500+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="about-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-dots"></div>
        </div>
      </section>
    </>
  );
};

export default About;