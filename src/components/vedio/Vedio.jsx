import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './vedio.css';

const Vedio = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const videoData = [
    {
      id: "t8T42ZycpGM",
      title: "Understanding Sexual Health Problems & Ayurvedic Solutions",
      description: "Dr. S.K Sachin explains common sexual health issues and their Ayurvedic treatments. Learn about premature ejaculation, ED, and natural remedies.",
      duration: "5:30",
      category: "Sexual Health"
    },
    {
      id: "IRdnpRiEUi8",
      title: "Piles (Bawasir) Treatment Without Surgery | Ayurvedic Approach",
      description: "Complete guide to piles treatment using Ayurvedic methods. Non-surgical solutions for hemorrhoids and fissures.",
      duration: "4:45",
      category: "Piles Treatment"
    },
    {
      id: "aMRj9mohaVY",
      title: "Skin Diseases & Ayurvedic Cure | Acne, Psoriasis, Eczema",
      description: "Natural treatments for various skin conditions including acne, psoriasis, and eczema. Ayurvedic skincare routine explained.",
      duration: "6:15",
      category: "Skin Care"
    },
    {
      id: "lF0gFRNLOyA",
      title: "Gupt Rog (Confidential Diseases) | Causes & Ayurvedic Treatment",
      description: "Confidential discussion about gupt rog, their causes, and effective Ayurvedic treatments. Private consultation benefits.",
      duration: "5:50",
      category: "Gupt Rog"
    },
    {
      id: "Z-dnDwGN3R0",
      title: "Digestive Health & Ayurveda | Natural Remedies for Acidity & Gas",
      description: "Learn about digestive disorders and their Ayurvedic solutions. Tips for better gut health and metabolism.",
      duration: "4:20",
      category: "Digestive Health"
    },
  ];

  const openVideoModal = (index) => {
    setActiveVideo(index);
    setIsPlaying(true);
  };

  const closeVideoModal = () => {
    setActiveVideo(null);
    setIsPlaying(false);
  };

  // Structured data for VideoGallery
  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Dr. S.K Sachin Health Care Video Gallery",
    "description": "Educational videos about Ayurvedic treatments for sexual health, piles, skin diseases, and gupt rog",
    "itemListElement": videoData.map((video, index) => ({
      "@type": "VideoObject",
      "position": index + 1,
      "name": video.title,
      "description": video.description,
      "thumbnailUrl": `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
      "uploadDate": "2024-01-01",
      "duration": video.duration,
      "contentUrl": `https://www.youtube.com/watch?v=${video.id}`,
      "embedUrl": `https://www.youtube.com/embed/${video.id}`
    }))
  };

  return (
    <>
      <Helmet>
        <title>Ayurvedic Treatment Videos | Dr. S.K Sachin - Sexual Health, Piles & Skin Care</title>
        <meta name="description" content="Watch educational videos by Dr. S.K Sachin on Ayurvedic treatments for sexual health problems, piles (bawasir), skin diseases, and gupt rog. Expert advice in Hindi/English." />
        <meta name="keywords" content="ayurvedic treatment videos, sexologist videos, piles treatment video, skin care tips, gupt rog information, sexual health education, dr sk sachin youtube" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Dr. S.K Sachin - Ayurvedic Treatment Video Gallery" />
        <meta property="og:description" content="Expert videos on sexual health, piles treatment, skin diseases & Ayurvedic remedies" />
        <meta property="og:image" content={`https://img.youtube.com/vi/${videoData[0].id}/maxresdefault.jpg`} />
        <meta property="og:url" content="https://yourclinicwebsite.com/videos" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourclinicwebsite.com/videos" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(videoStructuredData)}
        </script>
      </Helmet>

      <section className="video-gallery-section" id="videos" aria-label="Treatment Videos">
        <div className="video-container">
          
          {/* Section Header */}
          <div className="video-header" data-aos="fade-down">
            <span className="video-badge">🎥 HEALTH EDUCATION</span>
            <h2 className="video-main-title">
              <span className="blue">Diseases</span> <span className="green">&</span>{" "}
              <span className="blue">Treatments</span>
            </h2>
            <p className="video-subtitle">
              Watch expert videos by Dr. S.K Sachin on various health conditions and their Ayurvedic solutions
            </p>
          </div>

          {/* Video Stats */}
          <div className="video-stats" data-aos="fade-up">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Educational Videos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100K+</span>
              <span className="stat-label">Views</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Subscribers</span>
            </div>
          </div>

          {/* Video Grid */}
          <div className="video-grid" data-aos="fade-up">
            {videoData.map((video, index) => (
              <div 
                key={index} 
                className="video-card"
                onClick={() => openVideoModal(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && openVideoModal(index)}
                aria-label={`Play video: ${video.title}`}
              >
                <div className="video-thumbnail-wrapper">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="video-thumbnail"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                  />
                  <div className="video-play-overlay">
                    <div className="play-button">
                      <svg viewBox="0 0 24 24" width="48" height="48">
                        <path d="M8 5v14l11-7z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                  <span className="video-duration">{video.duration}</span>
                  <span className="video-category">{video.category}</span>
                </div>
                
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                  
                  <div className="video-meta">
                    <span className="video-views">
                      <svg viewBox="0 0 24 24" width="16" height="16">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                      15K+ views
                    </span>
                    <span className="video-date">Updated 2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Category Filters */}
          <div className="video-categories" data-aos="fade-up">
            <h4>Browse by Category:</h4>
            <div className="category-tags">
              <button className="category-tag active">All Videos</button>
              <button className="category-tag">Sexual Health</button>
              <button className="category-tag">Piles Treatment</button>
              <button className="category-tag">Skin Care</button>
              <button className="category-tag">Gupt Rog</button>
              <button className="category-tag">Digestive Health</button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="video-cta" data-aos="zoom-in">
            <div className="cta-content">
              <h3>Subscribe for Health Tips</h3>
              <p>Get regular updates on Ayurvedic treatments and health advice</p>
              <div className="cta-buttons">
                <a 
                  href="https://youtube.com/@sachinhealthcare-b1c?si=7Laljy_j1X8npmxk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-btn"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M19.615 3.184A4.376 4.376 0 0 0 16.66 2.63C14.42 2.5 12 2.5 12 2.5s-2.42 0-4.66.13a4.376 4.376 0 0 0-2.955.554A4.411 4.411 0 0 0 2.63 5.54C2.5 7.78 2.5 12 2.5 12s0 4.22.13 6.46a4.376 4.376 0 0 0 .554 2.955 4.411 4.411 0 0 0 1.755 1.755 4.376 4.376 0 0 0 2.955.554C9.58 21.5 12 21.5 12 21.5s2.42 0 4.66-.13a4.376 4.376 0 0 0 2.955-.554 4.411 4.411 0 0 0 1.755-1.755 4.376 4.376 0 0 0 .554-2.955c.13-2.24.13-6.46.13-6.46s0-4.22-.13-6.46a4.376 4.376 0 0 0-.554-2.955 4.411 4.411 0 0 0-1.755-1.755zM10 15.5v-7l6 3.5-6 3.5z"/>
                  </svg>
                  Subscribe to YouTube
                </a>
                <a href="/contact" className="consult-btn">
                  Consult Doctor
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {activeVideo !== null && (
          <div className="video-modal" onClick={closeVideoModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeVideoModal} aria-label="Close video">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
              
              <div className="modal-video-wrapper">
                <iframe
                  title={videoData[activeVideo].title}
                  src={`https://www.youtube.com/embed/${videoData[activeVideo].id}?autoplay=1&rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="modal-video"
                ></iframe>
              </div>
              
              <div className="modal-info">
                <h3>{videoData[activeVideo].title}</h3>
                <p>{videoData[activeVideo].description}</p>
                <div className="modal-meta">
                  <span className="modal-category">{videoData[activeVideo].category}</span>
                  <span className="modal-duration">{videoData[activeVideo].duration}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Vedio;