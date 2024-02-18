import React from 'react';
import howItWork from '../cssFolder/howItWork.module.css';

const HowItWork = () => {
  return (
    <div className={howItWork.howItWorkContainer}>
      <h2 className={howItWork.howItWorkTitle}>¿Cómo funciona?</h2>
      <h4 className={howItWork.howItWorkDescription}>Solicite su cita con facilidad en unos minutos
        y disfrute de las sesiones de apoyo personal adaptadas a su ritmo y necesidades.</h4>
    </div>
  );
};

export default HowItWork;