import React, { useEffect, useState, useRef } from 'react';
import ventanaModal from '../cssFolder/ventanaModal.module.css';
import Calendar from './Calendar.js';

const Modal = () => {
  // Estados
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [step, setStep] = useState(1);
  const modalRef = useRef();
  const [selectedModality, setSelectedModality] = useState('');

  // Funciones de manipulación de eventos
  const handleClick = () => {
    setModalVisible(!modalVisible);
    document.body.style.overflow = modalVisible ? 'auto' : 'hidden';
  };

  const handleClose = () => {
    setModalVisible(false);
    document.body.style.overflow = 'auto';
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setDatePickerVisible(false);
    const availableTimesForDate = [17, 18, 19, 20];
    setAvailableTimes(availableTimesForDate);

    // Al seleccionar la fecha, también selecciona la primera hora disponible
    setSelectedTime(availableTimesForDate[0]);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  const handleDateClick = () => {
    setDatePickerVisible(!datePickerVisible);
  };

  useEffect(() => {
    const handleModalClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalVisible(false);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('click', handleModalClick);

    return () => {
      document.removeEventListener('click', handleModalClick);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
    console.log('Fecha seleccionada:', selectedDate);
    console.log('Hora seleccionada:', selectedTime);
    handleClose();
  };

  // Renderizado del componente
  return (
    <div>
      <button className={`cita-button ${ventanaModal.button}`} onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}>
        Solicitar cita
      </button>
      {modalVisible && (
        <div className={ventanaModal.modalBackground}>
          <div className={ventanaModal.containerModal} ref={modalRef}>
            <div className={ventanaModal.contentModal} ref={modalRef} onClick={(e) => e.stopPropagation()}>
              <h2 className={ventanaModal.tituloModal}>Por favor ingrese sus datos</h2>
              <form
                method="post"
                className={ventanaModal.formModal}
                onSubmit={handleSubmit}
              >
                {/* Resto del código */}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;