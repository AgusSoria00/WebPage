import React from 'react';
import appointments from '../cssFolder/appoinments.module.css';

const AppointmentForm = () => {
  return (
    <div className={appointments.container}> 
      <h2 className={appointments.title}>Acompañante terapeutico a su alcance</h2> {/* Usar la clase aquí */}
      <h3 className={appointments.subtitle}>Únase como el resto de personas que ya han dado el primer paso 
para mejorar su bienestar.</h3> 
      <h3 className={appointments.subtitle}>Ahora podrás pedir una cita con tu asistente emocional de manera online a 
        cualquier hora y en cualquier lugar</h3> 
    </div>
  );
};

export default AppointmentForm;