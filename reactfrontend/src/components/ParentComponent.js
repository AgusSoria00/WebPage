import React, { useState, useEffect } from 'react';
import Modal2Chat from './modal2Chat';

const ParentComponent = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/api/consultas')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error obteniendo las consultas:', error);
      });
  }, []);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Abrir modal</button>
      {isModalOpen && <Modal2Chat onClose={() => setIsModalOpen(false)} data={data} />}
    </div>
  );
};

export default ParentComponent;