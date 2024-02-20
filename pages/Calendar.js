import React from 'react';


const Calendar = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const getMonthDays = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className="calendar__day calendar__item">
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