import React from 'react';
import '../App.css';

const Calendar = ({ onSelectDate }) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const normalizeDate = (date) => {
    date.setHours(0, 0, 0, 0);
    return date;
  };

  const today = normalizeDate(new Date());
  const twoMonthsFromNow = normalizeDate(new Date());
  twoMonthsFromNow.setDate(today.getDate() + 60);

  const handleSelectDate1 = (day) => {
    const selectedDate = normalizeDate(new Date(year, month, day));
    if (selectedDate >= today && selectedDate <= twoMonthsFromNow) {
      onSelectDate(selectedDate);
    } else {
      alert('Por favor, selecciona una fecha dentro de los próximos dos meses.');
    }
  };

  const getMonthDays = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = normalizeDate(new Date(year, month, i));
      const isDisabled = dayDate < today || dayDate > twoMonthsFromNow;
      days.push(
        <div key={i} className={`calendar__day calendar__item ${isDisabled ? 'calendar__day--disabled' : ''}`} onClick={() => handleSelectDate1(i)}>
          {i}
        </div>
      );
    }
    return days;
  };

  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="calendar">
      <div className="calendar__info">
        <div className="calendar__prev" onClick={handlePrevMonth}>&#9664;</div>
        <div className="calendar__month" id="month">{monthNames[month]}</div>
        <div className="calendar__year" id="year">{year}</div>
        <div className="calendar__next" onClick={handleNextMonth}>&#9654;</div>
      </div>
      <div className="calendar__week">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="calendar__day calendar__item">{day}</div>
        ))}
      </div>
      <div className="calendar__dates" id="dates">
        {getMonthDays(month, year)}
      </div>
    </div>
  );
};

export default Calendar;