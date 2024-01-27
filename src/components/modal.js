import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import Calendar from './Calendar.js';

const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const modalRef = useRef();

  const handleClick = () => {
    setModalVisible(!modalVisible);
    document.body.style.overflow = modalVisible ? 'auto' : 'hidden';
  };

  const handleClose = () => {
    setModalVisible(false);
    document.body.style.overflow = 'auto';
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setDatePickerVisible(false);
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
                action="pagina_citas.php"
                method="post"
                className="modal-form"
                onSubmit={handleSubmit}
              >
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
              </form>
              <div className="cerrar-enviar">
                <input type="submit" value="Enviar" className="modal-submit" />
                <div className="btn-cerrar" onClick={handleClose}>
                  <label htmlFor="btn-modal" className="label-cerrar">
                    Cerrar
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

