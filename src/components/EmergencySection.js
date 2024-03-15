import React from 'react';
import '../App.css'; // Asegúrate de que este es el camino correcto al archivo CSS

const EmergencySection = () => {
  return (
    <div className="emergency-section">
      <h2 className='emergency-titulo'>¿Estás en una situación de urgencia?</h2>
      <div className="primeraImagen">
        <img src="/ilustracionUrgencia.jpg" alt="urgencia" />
      </div>
    </div>
  );
};

export default EmergencySection;