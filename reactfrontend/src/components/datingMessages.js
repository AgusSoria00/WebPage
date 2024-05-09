import React from 'react';
import '../App.css';


const DatingMessages = () => {
  const lineStyle = {
    border: '1px solid black',
    width: '20px', 
    height: '20px', 
  };

  const generateLines = () => {
    const lines = [];
    for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 5; j++) {
        lines.push(<div key={`${i}-${j}`} style={lineStyle}></div>);
      }
      // Línea de salto después de cada fila
      lines.push(<br key={`br-${i}`} />);
    }
    return lines;
  };

  return (
    <div>
      {generateLines()}
    </div>
  );
};

export default DatingMessages;