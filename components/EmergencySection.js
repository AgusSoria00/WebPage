import React from 'react';
import videosCss from '../cssFolder/emergencySeccion.module.css';

const EmergencySection = () => {
  return (
    <div className={videosCss.emergencyContainer}>
      <h2 className={videosCss.emergencyTitle}>¿Estás en una situación de urgencia?</h2>
      <div className={videosCss.emergencyImageContainer}>
        <img src="/ilustracionUrgencia.jpg" alt="urgencia" className={videosCss.emergencyImage} />
      </div>
    </div>
  );
};

export default EmergencySection;