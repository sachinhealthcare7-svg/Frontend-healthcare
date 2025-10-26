import React from 'react';
import './vedio.css'; // Import the CSS file

const Vedio = () => {
  const videoIds = [
    "t8T42ZycpGM",
    "IRdnpRiEUi8",
    "aMRj9mohaVY",
    "lF0gFRNLOyA",
    "Z-dnDwGN3R0",
  ];

  return (
    <div className="vedio-container">
      <h1 className="vedio-title">Diseases and Treatments</h1>
      <div className="vedio-wrapper">
        {videoIds.map((id, index) => (
          <div key={index} className="vedio-box">
            <iframe
              title={`YouTube Video ${index + 1}`}
              src={`https://www.youtube.com/embed/${id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vedio;
