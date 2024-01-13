import React, { useEffect, useState, useRef } from 'react';
import '../App.css';

const CustomModal = ({ buttonLabel, modalTitle, formAction, onSubmit }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef();

  const handleClick = () => {
    setModalVisible(true);
    document.body.style.overflow = 'hidden'; // Desactivar el desplazamiento del fondo
  };

  const handleClose = () => {
    setModalVisible(false);
    document.body.style.overflow = 'auto'; // Restaurar el desplazamiento del fondo
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
    handleClose();
  };

  useEffect(() => {
    const handleModalClick = (e) => {
      if (modalRef.current && modalRef.current.contains(e.target)) {
        e.stopPropagation(); // Evita que el evento se propague a través de la ventana modal
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
                    <label htmlFor="btn-modal" className="label-cerrar">
                      Cancelar
                    </label>
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
