import React, { useEffect, useState, useRef } from 'react';
import nextVenana from '../cssFolder/nextVenana.module.css';

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
        <div className={nextVenana.modalBackground}>
          <div className={nextVenana.containerModal} ref={modalRef}>
            <div className={nextVenana.contentModal}>
              <h2 className={nextVenana.tituloModal}>{modalTitle}</h2>
              <div className={nextVenana.advertencia}>Advertencia</div>
              <div className={nextVenana.mensaje}>¿Estás seguro de que deseas enviar esta información?</div>
              <form action={formAction} method="post" className={nextVenana.modalForm} onSubmit={handleSubmit}>
                {/* Puedes agregar campos de formulario personalizados aquí según tus necesidades */}
                <div className={nextVenana.botones}>
                  <input type="submit" value="Enviar" className={nextVenana.modalSubmit} />
                  <div className={nextVenana.btnCerrar} onClick={handleClose}>
                    <label htmlFor="btn-modal" className={nextVenana.labelCerrar}>
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