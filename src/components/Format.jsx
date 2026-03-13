import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const Format = () => {
  const images = [
    {
      url: '/photos/IMG_7312.JPG',
      alt: 'Dr. S.K Sachin Clinic Treatment Room - Ayurvedic Consultation Setup',
      title: 'Clinic Treatment Room'
    },
    {
      url: '/photos/IMG_7313.JPG',
      alt: 'Dr. S.K Sachin Consultation Chamber - Sexology Specialist Clinic',
      title: 'Consultation Chamber'
    },
    {
      url: '/photos/WhatsApp Image 2025-09-29 at 21.10.25_1c548d0f.jpg',
      alt: 'Ayurvedic Medicines and Treatment Products at Dr. S.K Sachin Clinic',
      title: 'Ayurvedic Formulations'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Auto-play functionality
  useEffect(() => {
    AOS.init({ duration: 2000 });
    
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Pause auto-play on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  return (
    <>
      <Helmet>
        <title>Clinic Gallery | Dr. S.K Sachin - Ayurvedic Sexology Clinic Photos</title>
        <meta name="description" content="View our clinic facilities, treatment rooms, and Ayurvedic medicines at Dr. S.K Sachin Health Care. See our state-of-the-art setup for confidential sexual health treatment." />
        <meta name="keywords" content="clinic photos, ayurvedic clinic images, sexologist clinic pictures, treatment room, Dr. S.K Sachin clinic photos" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Dr. S.K Sachin Clinic Gallery - Ayurvedic Treatment Facility" />
        <meta property="og:description" content="Take a virtual tour of our clinic facilities and treatment rooms." />
        <meta property="og:image" content={images[0].url} />
        <meta property="og:url" content="https://yourclinicwebsite.com/gallery" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourclinicwebsite.com/gallery" />
      </Helmet>

      <section className="gallery-section" id="gallery" aria-label="Clinic Gallery">
        <div className="gallery-container">
          
          {/* Section Header */}
          <div className="gallery-header" data-aos="fade-down">
            <span className="gallery-badge">📸 OUR FACILITY</span>
            <h2 className="gallery-title">
              <span className="blue">Clinic</span> <span className="green">Gallery</span>
            </h2>
            <p className="gallery-subtitle">
              Take a virtual tour of our state-of-the-art Ayurvedic clinic and treatment facilities
            </p>
          </div>

          {/* Main Slider */}
          <div 
            className="slider-main"
            data-aos="fade-up"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={resumeAutoPlay}
          >
            <div className="slider-wrapper">
              {/* Main Image Container */}
              <div 
                className="slider-container"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* Navigation Buttons */}
                <button 
                  className="slider-nav prev" 
                  onClick={prevSlide}
                  aria-label="Previous image"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
                  </svg>
                </button>

                <button 
                  className="slider-nav next" 
                  onClick={nextSlide}
                  aria-label="Next image"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>

                {/* Image Display */}
                <div className="slider-image-container">
                  <img
                    src={images[currentIndex].url}
                    alt={images[currentIndex].alt}
                    className="slider-image"
                    loading="lazy"
                  />
                  
                  {/* Image Caption */}
                  <div className="image-caption">
                    <h3>{images[currentIndex].title}</h3>
                    <p>Dr. S.K Sachin Health Care</p>
                  </div>
                </div>

                {/* Auto-play Indicator */}
                <div className="autoplay-indicator">
                  <div className={`indicator-dot ${isAutoPlaying ? 'active' : ''}`}></div>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="thumbnail-wrapper" data-aos="fade-up">
              <div className="thumbnail-container">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail-btn ${currentIndex === index ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <img
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="thumbnail-image"
                    />
                    <span className="thumbnail-overlay"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="slide-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="slide-counter">
              <span className="current">{currentIndex + 1}</span>
              <span className="separator">/</span>
              <span className="total">{images.length}</span>
            </div>
          </div>

          {/* Gallery Info Cards */}
          <div className="gallery-info" data-aos="fade-up">
            <div className="info-card">
              <div className="info-icon">🏥</div>
              <h4>Modern Facility</h4>
              <p>State-of-the-art Ayurvedic treatment center</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🌿</div>
              <h4>Pure Ayurvedic</h4>
              <p>Traditional medicines and authentic treatments</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🤫</div>
              <h4>Private & Confidential</h4>
              <p>Separate consultation rooms for privacy</p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🧪</div>
              <h4>Lab Facility</h4>
              <p>In-house diagnostic and testing</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="gallery-cta" data-aos="zoom-in">
            <h3>Visit Our Clinic Today</h3>
            <p>Experience the healing environment yourself</p>
            <a href="/contact" className="cta-button">
              Book Appointment
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Format;