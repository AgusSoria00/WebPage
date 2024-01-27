import React, { useState, useEffect } from 'react';
import '../App.css';

const EducationalVideos = () => {
  const videoFiles = ['video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4', 'video5.mp4', 'video6.mp4'];
  const videoDescriptions = [
    'Descripción del Video 1',
    'Descripción del Video 2',
    'Descripción del Video 3',
    'Descripción del Video 4',
    'Descripción del Video 5',
    'Descripción del Video 6',
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    // ... (resto del código de useEffect)
  }, [currentVideoIndex]);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    margin: '0 auto', // Centra el contenedor horizontalmente
    marginTop: '50px',
  };

  const videoItemStyle = (index) => {
    const transformValue = -((currentVideoIndex - index) * 100) + 'vw';
    return {
      flex: '0 0 auto',
      marginRight: '-28%', // Ajusta el espacio entre los videos
      transition: 'transform 0.3s ease-in-out',
      transform: `translateX(${transformValue})`,
    };
  };

  const videoStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  const descriptionStyle = {
    marginTop: '30px',
    textAlign: 'center',
  };

  return (
    <div id="videos">
      <h2>Videos que pueden interesarte</h2>
      <div className="video-gallery">
        <button data-increment="-1" onClick={() => setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoFiles.length) % videoFiles.length)}>
          ←
        </button>
        <div className="video-container" style={containerStyle}>
          {videoFiles.map((video, index) => (
            <div
              key={index}
              className="video-item"
              style={videoItemStyle(index)}
              onClick={() => setCurrentVideoIndex(index)}
            >
              <video controls style={videoStyle}>
                <source src={`/videos/${video}`} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <div style={descriptionStyle}>{videoDescriptions[index]}</div>
            </div>
          ))}
        </div>
        <button data-increment="1" onClick={() => setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoFiles.length)}>
          →
        </button>
      </div>
    </div>
  );
};

export default EducationalVideos;










