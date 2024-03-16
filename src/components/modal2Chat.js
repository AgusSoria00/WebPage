import React, { useState } from 'react';
import '../App.css';

const Modal2Chat = ({ onClose, data }) => {
  // Define las cabeceras de la tabla manualmente
  const headers = ['Nombre y apellido', 'Telefono', 'E-mail', 'Consulta'];

  // Crea un array de longitud 10
  const rows = new Array(10).fill(null);

  // Agrega un estado para rastrear la página actual
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="grid-modal-container">
      <div className="grid-modal-content">
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="header-cell">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((_, rowIndex) => {
              const dataIndex = (currentPage - 1) * 10 + rowIndex;
              return (
                <tr key={rowIndex}>
                  {headers.map((header, cellIndex) => (
                    <td key={cellIndex} className="grid-cell">{data[dataIndex] ? data[dataIndex][header] : ''}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}>&lt;</button>
          <span>{currentPage}/10</span>
          <button onClick={() => setCurrentPage(currentPage < 10 ? currentPage + 1 : 10)}>&gt;</button>
        </div>
        <button onClick={onClose} className="close-button">Cerrar</button>
      </div>
    </div>
  );
};

export default Modal2Chat;