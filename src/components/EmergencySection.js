import React from 'react';
import '../App.css';

const EmergencySection = () => {
  const emergencyStyles = {
    marginBottom: '20px',
    fontSize: '18px',
    color: '#333',
  };

  const headingStyles = {
    fontSize: '30px', 
    fontWeight: 'bold', 
    textAlign: 'left',
    color: '#101010',
    right: '115px',
    position: 'absolute', 
    left: '50px',
    top: '25px',
  };

  const imageStyles = {
    width: '75%',
    height: 'auto',
  };

  const pStyle = {
    fontSize: '15px', 
    fontWeight: 'bold', 
    textAlign: 'center',
  }
  return (
    <div style={emergencyStyles}>
      <h2 style={{headingStyles}} className='emergency-titulo'>¿Estás en una situación de urgencia?</h2>
      <div className="primeraImagen">
        <img src="/ilustracionUrgencia.jpg" alt="urgencia" style={imageStyles} />
      </div>
    </div>
  );
};

export default EmergencySection;


