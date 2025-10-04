// src/components/AboutSection/AboutSection.jsx
import React from 'react';
import './about.css';

// import aboutImage from '../../images/about image.webp'; 

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        
        <div className="about-text">
          <div data-aos="fade-up"
            data-aos-duration="3000">

          <h2>
            About <span className="highlight-green">Us</span>
          </h2></div>
          <div data-aos="fade-right"
          data-aos-duration="3000"
          >

          <p>
           Dr. S.K. (BAMS) is a renowned and trusted expert in the fields of Sexology and Skin care, widely recognized as one of the No.1 Sexologists and Skin Specialists in the region. With a deep understanding of both Ayurvedic and modern (English) medicine, Dr. S.K. offers safe, effective, and personalized treatments for a wide range of health concerns. His holistic approach helps patients find long-term relief from issues such as acne, pimples, chronic skin disorders, sexual health problems, and more. Whether you're struggling with skin conditions or seeking confidential solutions to sexual wellness, Dr. S.K. provides compassionate care and proven results—helping patients lead healthier and more confident lives.
          </p>
          <p>
            Our mission is to revolutionize the way people consume water by ensuring purity, longevity, and health benefits in every drop.
          </p>
          <a href="/about" className="about-button">Learn More →</a>
        </div>
</div>
      
        <div className="about-image">
          {/* <img src={aboutImage} alt="About" />  */}
        </div>
      </div>
      
    </div>
  );
};

export default About;
