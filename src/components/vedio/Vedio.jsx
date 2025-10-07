import React from 'react';

const Vedio = () => {
  // Multiple YouTube Video IDs
  const videoIds = [
    "t8T42ZycpGM",  
    "IRdnpRiEUi8", 
    "aMRj9mohaVY",  
    "lF0gFRNLOyA",  
    "Z-dnDwGN3R0",  

  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{color:"#00008b",fontSize:"42px"}}>Diseases and Treatments</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {videoIds.map((id, index) => (
          <div
            key={index}
            style={{
              width: '320px',
              position: 'relative',
              paddingBottom: '18.25%',
              height: 0,
              overflow: 'hidden'
            }}
          >
            <iframe
              title={`YouTube Video ${index + 1}`}
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: "300px"
              }}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vedio;
