import React, { useState } from 'react';
import '../App.css';

const Calendar = ({ onSelectDate, onSelectTime }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Lógica para obtener las fechas disponibles (deberías ajustar según tus necesidades)
  const getAvailableDates = () => {
    // Aquí deberías implementar la lógica para obtener las fechas disponibles
    // Puedes usar librerías como moment.js o JavaScript puro para manejar fechas
    // Por ejemplo, puedes tener un array de fechas disponibles y actualizarlo dinámicamente
    const availableDates = ['2024-01-20', '2024-01-25', '2024-01-30'];
    return availableDates;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onSelectDate(date);
    generateTimeOptions(date);
  };

  const availableDates = getAvailableDates();

  const generateTimeOptions = (date) => {
    // Lógica para generar opciones de hora basadas en la fecha seleccionada
    // Puedes ajustar esto según tus necesidades
    const availableTimes = [17, 18, 19, 20];
    setSelectedTime(null); // Reiniciar la hora seleccionada

    onSelectTime(availableTimes); // Llamar a la función externa para manejar la hora
  };

  return (
    <div className="calendar">
      {availableDates.map((date) => (
        <div key={date} onClick={() => handleDateClick(date)}>
          {date}
        </div>
      ))}
    </div>
  );
};

export default Calendar;

