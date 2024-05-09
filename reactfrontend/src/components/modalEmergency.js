import React, { useEffect, useState, useRef } from 'react';
import '../App.css';

const CustomModal = ({ buttonLabel, modalTitle, formAction, onSubmit }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef();

  const handleClick = () => {
    setModalVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setModalVisible(false);
    document.body.style.overflow = 'auto'; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Datos del formulario
    const data = {
      nombre_apellido: 'Tu nombre',
      telefono: 'Tu teléfono',
      correo_electronico: 'Tu correo electrónico',
      consulta: 'Tu consulta'
    };
  
    // Enviar los datos del formulario al servidor
    fetch('/api/emergencia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  
    if (onSubmit) {
      onSubmit();
    }
    handleClose();
  };

  useEffect(() => {
    const handleModalClick = (e) => {
      if (modalRef.current && modalRef.current.contains(e.target)) {
        e.stopPropagation(); 
      }
    };

    document.addEventListener('click', handleModalClick);

    return () => {
      document.removeEventListener('click', handleModalClick);
    };
  }, []);

  return (
    <div>
      <button className="enviar-button" onClick={handleClick}>
        {buttonLabel} Enviar
      </button>
      {modalVisible && (
        <div className="modal-background">
          <div className="container-modal" ref={modalRef}>
            <div className="content-modal">
              <h2 className="titulo-modal">{modalTitle}</h2>
              <div className="advertencia">Advertencia</div>
              <div className="mensaje">¿Estás seguro de que deseas enviar esta información?</div>
              <form action={formAction} method="post" className="modal-form" onSubmit={handleSubmit}>
                {/* Puedes agregar campos de formulario personalizados aquí según tus necesidades */}
                <div className="botones">
                  <input type="submit" value="Enviar" className="modal-submit" />
                  <div className="btn-cerrar" onClick={handleClose}>
                    <button htmlFor="btn-modal" className="modal-submit">
                      Cancelar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomModal;