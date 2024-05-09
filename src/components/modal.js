import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import Calendar from './Calendar.js';
import axios from 'axios';

const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [step, setStep] = useState(1);
  const modalRef = useRef();
  const [selectedModality, setSelectedModality] = useState('');
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);

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
    Calendar.handleSelectDate1();
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

 // Añade la lógica de la ventana modal de confirmación en la función handleSubmit
 async function handleSubmit(event) {
  event.preventDefault();

  if (step === 1) {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const fecha = selectedDate;
    const hora = selectedTime;

    // Imprime los datos del formulario
    console.log({
      nombre_apellido: nombre,
      telefono,
      correo_electronico: email,
      fecha,
      hora
    });

    try {
      const response = await axios.post('/api/citas', {
        nombre_apellido: nombre,
        telefono,
        correo_electronico: email,
        fecha,
        hora
      });

      // Imprime la respuesta del servidor
      console.log(response);

      if (response.status === 200) {
        console.log('Cita programada con éxito');
        setConfirmationModalVisible(true); // Muestra la ventana modal de confirmación
      }
    } catch (error) {
      // Imprime cualquier error que ocurra durante la solicitud POST
      console.error('Error programando la cita:', error);
    }
  }
}
  const availableHours = [...Array(5).keys()].map(i => i + 8).concat([...Array(6).keys()].map(i => i + 16));
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
  {datePickerVisible && (
    <div className="date-picker">
      <Calendar onSelectDate={handleSelectDate} onSelectTime={handleSelectTime} />
    </div>
  )}
  <input type="date" name="fecha" id="fecha" required value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
</div>
    <div className="campo-label">
      <label htmlFor="hora">Hora</label>
    </div>
    <div className="campo-input">
  <select name="hora" id="hora" required value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
    {selectedDate && availableHours.map((time) => (
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
  <input type="submit" value="Enviar" className="modal-submit" onClick={handleClick}/>
)}
{confirmationModalVisible && (
  <div className="modal">
    <div className="modal-content">
      <h2>Cita programada con éxito</h2>
      <p>Tu cita ha sido programada con éxito. Te enviaremos un correo electrónico con los detalles.</p>
      <button onClick={() => setConfirmationModalVisible(false)}>Cerrar</button>
    </div>
  </div>
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
