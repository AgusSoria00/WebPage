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
    'La gestión emocional es la capacidad o habilidad de reconocer, entender y manejar nuestras emociones de manera efectiva',
    'Se explora el impacto de confrontar la propia mortalidad y la pérdida de seres queridos, reflexionando sobre la vida y el significado que atribuimos a nuestras experiencias.',
    'Descubre cómo la inteligencia emocional beneficia a nuestros hijos, potenciando su bienestar y relaciones desde la infancia',
    'Analiza el impacto psicológico y emocional de enfrentar la noticia de nuestra muerte inminente, explorando cómo afrontar esta realidad y encontrar significado en el tiempo que nos queda',
    'Explora cómo las emociones influyen significativamente en el desarrollo cognitivo de los niños, destacando la importancia de la inteligencia emocional desde temprana edad',
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

  let containerStyle = {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    margin: '0 auto', 
    marginTop: '50px',
    marginLeft: '15%',
  };
  
  if (window.matchMedia("(max-width: 900px)").matches) {
    containerStyle = {
      ...containerStyle,
      marginLeft: '-5%',
    }
  }

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

  let descriptionStyle = {
    marginTop: '30px',
    textAlign: 'center',
    fontSize: '1.6rem',
  };

  if (window.matchMedia("(max-width: 1000px)").matches) {
    descriptionStyle = {
      ...descriptionStyle,
      display: 'none', 
    };
  } else {
    descriptionStyle = {
      ...descriptionStyle,
      display: 'block', 
    };
  }

  return (
    <div id="videos">
      <h1>Videos informativos de interes</h1>
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










