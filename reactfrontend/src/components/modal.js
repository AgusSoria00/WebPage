import React, { useEffect, useState, useRef } from 'react';
import '../App.css';
import Calendar from './Calendar.js';
import { fireEvent } from '@testing-library/react';

const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef(null);

  const [step, setStep] = useState(1);
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedModality, setSelectedModality] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
  const availableHours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

  const handleClick = () => {
    setModalVisible(!modalVisible);
    document.body.style.overflow = modalVisible ? 'auto' : 'hidden';
  };

  const handleClose = () => {
    setModalVisible(false);
    document.body.style.overflow = 'auto';
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  const handleDateClick = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (step === 1 && nombre && telefono && email) {
      handleNextStep();
    } else if (step === 2 && selectedDate && selectedTime && selectedModality) {
      const fecha = selectedDate;
      const hora = selectedTime;
  
      try {
        const response = await fetch('http://localhost:3001/api/create/usuario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nombre_completo: nombre,
            telefono,
            email,
            fecha,
            hora,
            modalidad: selectedModality
          })
        });
        
        const data = await response.json();
  
        if (response.status === 200) {
          console.log('Cita programada con éxito');
          setConfirmationModalVisible(true);
          handleClick();
        }
      } catch (error) {
        console.error('Error programando la cita:', error);
      }
    }
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
                      <input type="text" name="nombre" id="nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="campo-label">
                      <label htmlFor="telefono">Teléfono</label>
                    </div>
                    <div className="campo-input">
                      <input type="tel" name="telefono" id="telefono" required value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <div className="campo-label">
                      <label htmlFor="email">Correo electrónico</label>
                    </div>
                    <div className="campo-input">
                      <input type="email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
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
                    <input type="submit" value="Enviar" className="modal-submit" onClick={(e) => { e.stopPropagation(); handleSubmit(e);handleClick();}}/> //handleClick();// 
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