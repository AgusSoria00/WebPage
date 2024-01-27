import React, { useState } from 'react';
import '../App.css';

const Calendar = ({ onSelectDate, onSelectTime }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableTimes, setAvailableTimes] = useState([]);
  
    const getAvailableDates = () => {
      const availableDates = ['2024-01-20', '2024-01-25', '2024-01-30'];
      return availableDates;
    };
  
    const handleDateClick = (date) => {
      setSelectedDate(date);
      onSelectDate(date);
      generateTimeOptions(date);
    };
  
    const generateTimeOptions = (date) => {
        const availableTimesForDate = [17, 18, 19, 20];
        setAvailableTimes(availableTimesForDate);
        onSelectTime(availableTimesForDate[0]);
    };
  
    const availableDates = getAvailableDates();
  
    return (
      <div className="calendar">
        {availableDates.map((date) => (
          <div key={date} onClick={() => handleDateClick(date)}>
            {date}
          </div>
        ))}
  
        {selectedDate && (
          <div>
            <label>Seleccione la hora:</label>
            <select onChange={(e) => onSelectTime(parseInt(e.target.value))}>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}:00
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  };
  
  export default Calendar;  


