import React, { useState } from 'react';
import '../App.css';

const EducationalVideos = () => {
  const videoFiles = ['video1.mp4', 'video2.mp4', 'video3.mp4'];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoChange = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div id="videos">
      <h2>Videos Informativos</h2>
      <div className="video-gallery">
        <button onClick={() => handleVideoChange((currentVideoIndex - 1 + videoFiles.length) % videoFiles.length)}>
          ←
        </button>
        <div className="video-container">
          {videoFiles.map((video, index) => (
            <div
              key={index}
              className={`video-item ${index === currentVideoIndex ? 'active' : ''} ${
                index < currentVideoIndex ? 'slide-right' : index > currentVideoIndex ? 'slide-left' : ''
              }`}
            >
              <video controls>
                <source src={`/videos/${video}`} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          ))}
        </div>
        <button onClick={() => handleVideoChange((currentVideoIndex + 1) % videoFiles.length)}>→</button>
      </div>
    </div>
  );
};

export default EducationalVideos;


