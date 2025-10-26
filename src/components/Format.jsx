import React,{useState,useEffect} from 'react'
const Format = () => {
   const images = [
    '/photos/IMG_7312.JPG',
    '/photos/IMG_7313.JPG',
    '/photos/WhatsApp Image 2025-09-29 at 21.10.25_1c548d0f.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>React Image Slider</h2>
      <div style={styles.slider}>
        <button style={{ ...styles.button, left: 10 }} onClick={prevSlide}>
          &#10094;
        </button>

        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={styles.image}
        />

        <button style={{ ...styles.button, right: 10 }} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100%',
  
  },
  heading: {
    marginBottom: '1rem',
  },
  slider: {
    position: 'relative',
    width: '100%',
    maxWidth: '700px',
    margin: 'auto',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    transition: 'all 0.5s ease-in-out',
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    zIndex: 1,
  },
};


export default Format
