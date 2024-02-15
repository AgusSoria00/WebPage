import React, { useState, useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const EducationalVideos = () => {
  const videoFiles = [
    'https://www.youtube.com/embed/Ls3XRgd2_Wk',
    'https://www.youtube.com/embed/TWSxjZuYq9M',
    'https://www.youtube.com/embed/k6Op1gHtdoo',
    'https://www.youtube.com/embed/nZskLAI1cN0',
    'https://www.youtube.com/embed/KUTh9fBg_nQ',
    'https://www.youtube.com/embed/k1JBsvT2Qjw',
  ];
  const videoDescriptions = [
    'Primera descripcion',
    'Descripción del Video 2',
    'Descripción del Video 3',
    'Descripción del Video 4',
    'Descripción del Video 5',
    'Descripción del Video 6',
  ];
  const arrowButtonStyle = {
    position: 'relative',
    top: '50%',
    fontSize: '35px', 
    cursor: 'pointer',
  };
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
  }, [currentVideoIndex]);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    margin: '0 auto', 
    marginTop: '50px',
    marginLeft: '19%'
  };

  const videoItemStyle = (index) => {
    const transformValue = -((currentVideoIndex - index) * 100) + 'vw';
    return {
      flex: '0 0 auto',
      marginRight: '-80%', 
      transition: 'transform 0.3s ease-in-out',
      transform: `translateX(${transformValue})`,
      width: '80%'
    };
  };

  const descriptionStyle = {
    marginTop: '30px',
    textAlign: 'center',
  };

  return (
    <div id="videos">
      <h2>Videos informativos de interes</h2>
      <div className="video-gallery" style={{ display: 'flex', alignItems: 'center', position: 'relative', margin: '0 7%' }}>
      <button className="arrow-button" style={{ ...arrowButtonStyle, left: 0 }} data-increment="-1" onClick={() => setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoFiles.length) % videoFiles.length)}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
        <div className="video-container" style={containerStyle}>
          {videoFiles.map((video, index) => (
            <div
              key={index}
              className="video-item"
              style={videoItemStyle(index)}
              onClick={() => setCurrentVideoIndex(index)}
            >
              <iframe
                title={`Video ${index + 1}`}
                width="560"
                height="315"
                src={video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div style={descriptionStyle}>{videoDescriptions[index]}</div>
            </div>
          ))}
        </div>
        <button className="arrow-button" style={{ ...arrowButtonStyle, right: 0 }} data-increment="1" onClick={() => setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoFiles.length)}>
        <FontAwesomeIcon icon={faChevronRight} />
    </button>
      </div>
    </div>
  );
};

export default EducationalVideos;











