import React from 'react';

const EmergencySection = () => {
  const emergencyStyles = {
    marginBottom: '20px', // Ejemplo de estilo en línea
    fontSize: '18px',
    color: '#333',
  };

  const headingStyles = {
    fontSize: '30px', // Ejemplo de modificación del tamaño de fuente
    fontWeight: 'bold', // Ejemplo de modificación del peso de la fuente
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
    fontSize: '15px', //modificación del tamaño de fuente
    fontWeight: 'bold', // modificación del peso de la fuente
    textAlign: 'center',
  }
  return (
    <div style={emergencyStyles}>
      <h2 style={headingStyles}>¿Estás en una situación de urgencia?</h2>
        {/* Contenido */}
      <div className="primeraImagen">
        <img src="/ilustracionUrgencia.jpg" alt="urgencia" style={imageStyles} />
      </div>
    </div>
  );
};

export default EmergencySection;


