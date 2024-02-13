import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
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
    
    // Al seleccionar la fecha, también seleccionamos la primera hora disponible
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
      <button className="cita-button" onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}>
        Solicitar cita
      </button>
      {modalVisible && (
        <div className="modal-background">
          <div className="container-modal" ref={modalRef}>
            <div className="content-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
              {/* Contenido de la ventana modal */}
              <h2 className="titulo-modal">Por favor ingrese sus datos</h2>
              <form
              method="post"
              className="modal-form"
              onSubmit={handleSubmit}
              >

{step === 1 && (
  <>
    <div className="campo-label">
      <label htmlFor="nombre">Nombre y apellido</label>
    </div>
    <div className="campo-input">
      <input type="text" name="nombre" id="nombre" required />
    </div>
    <div className="campo-label">
      <label htmlFor="telefono">Teléfono</label>
    </div>
    <div className="campo-input">
      <input type="tel" name="telefono" id="telefono" required />
    </div>
    <div className="campo-label">
      <label htmlFor="email">Correo electrónico</label>
    </div>
    <div className="campo-input">
      <input type="email" name="email" id="email" required />
    </div>
  </>
)}
{step === 2 && (
  <>
    <div className="campo-label">
      <label htmlFor="fecha">Fecha</label>
    </div>
    <div className="campo-input">
      <input type="text" name="fecha" id="fecha" readOnly onClick={handleDateClick} value={selectedDate} required />
      {datePickerVisible && (
        <div className="date-picker">
          {/* Contenido del selector de fechas */}
          <Calendar onSelectDate={handleSelectDate} onSelectTime={handleSelectTime} />
        </div>
      )}
    </div>
    <div className="campo-label">
      <label htmlFor="hora">Hora</label>
    </div>
    <div className="campo-input">
      <select name="hora" id="hora" required value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
        {selectedDate && availableTimes.map((time) => (
          <option key={time} value={time}>{time}:00</option>
        ))}
      </select>
    </div>
    <div className="campo-label">
      <label htmlFor="modalidad">Seleccione la modalidad</label>
    </div>
    <div className="campo-input">
      <select name="modalidad" id="modalidad" required value={selectedModality} onChange={(e) => setSelectedModality(e.target.value)}>
        <option value="">Seleccione una opción</option>
        <option value="presencial">Presencial</option>
        <option value="videollamada">Videollamada</option>
        <option value="chat_en_linea">Chat en línea</option>
        <option value="a_domicilio">A domicilio</option>
      </select>
    </div>
  </>
)}
<div className="cerrar-enviar">
{step === 1 ? (
  <button type="button" className="modal-submit" onClick={handleNextStep}>
    Siguiente
  </button>
) : (
  <input type="submit" value="Enviar" className="modal-submit" />
)}

<div className="btn-cerrar" onClick={step === 1 ? handleClose : () => setStep(step - 1)}>
  {step === 1 ? (
    <button type="button" className="modal-submit">
      Cerrar
    </button>
  ) : (
    <button type="button" className="modal-submit">
      Atrás
    </button>
  )}
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

export default Modal;
