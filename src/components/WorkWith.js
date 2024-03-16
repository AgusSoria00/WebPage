import React from 'react';
import '../App.css';

const WorkWith = () => {
  const textStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '2vw', 
    fontSize: '1.5vw'
  }
  const h1Style = {
    fontSize: '30px',
  }
  return (
    <div>
      <h1 style={h1Style}>Las distintas modalidades de sesion</h1>
    <p style={textStyle}>Existen distintas modalidades para realizar una consulta online, 
    que podrás realizar a través de tu computadora o smartphone</p>
    </div>
  );
};

export default WorkWith;

