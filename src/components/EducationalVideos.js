import React, { useState, useEffect } from 'react';
import videosCss from '../cssFolder/videos.module.css';
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
  }
  }