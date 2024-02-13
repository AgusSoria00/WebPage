import React from 'react';
import '../App.css';


const DatingMessages = () => {
  // Estilo para las líneas
  const lineStyle = {
    border: '1px solid black',
    width: '20px', // Ancho de las líneas
    height: '20px', // Alto de las líneas
  };

  // Función para generar las líneas
  const generateLines = () => {
    const lines = [];
    // Generar 11 filas
    for (let i = 0; i < 11; i++) {
      // Generar 5 columnas por fila
      for (let j = 0; j < 5; j++) {
        lines.push(<div key={`${i}-${j}`} style={lineStyle}></div>);
      }
      // Insertar una línea de salto después de cada fila
      lines.push(<br key={`br-${i}`} />);
    }
    return lines;
  };

  return (
    <div>
      {/* Renderizar las líneas */}
      {generateLines()}
    </div>
  );
};

export default DatingMessages;
