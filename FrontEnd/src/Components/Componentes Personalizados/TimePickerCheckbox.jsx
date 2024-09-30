import React, { useState } from 'react';
import "../../styles/checkbox.css";

const TimePickerCheckbox = ({ onTimeChange }) => {
  const [selectedTime, setSelectedTime] = useState('');
  const times=["13:30", "15:00", "20:30", "22:00"];

  const handleTimeChange = (event) => {
    const newTime = event.target.value;

    // Solo actualiza el estado si se selecciona un nuevo checkbox
    if (selectedTime !== newTime) {
      setSelectedTime(newTime);
      onTimeChange(newTime); // Llama a la función pasada como prop y le pasa la hora seleccionada
    }
  };

  return (
    <div className="time-picker">
      <div className="time-checkbox">
        <label>
          <input
            type="checkbox"
            value={times[0]}
            checked={selectedTime === times[0]}
            onChange={handleTimeChange}
          />
          <span className="checkbox-button">{times[0]}</span>
        </label>
      </div>
      <div className="time-checkbox">
        <label>
          <input
            type="checkbox"
            value={times[1]}
            checked={selectedTime === times[1]}
            onChange={handleTimeChange}
          />
          <span className="checkbox-button">{times[1]}</span>
        </label>
      </div>
      <div className="time-checkbox">
        <label>
          <input
            type="checkbox"
            value={times[2]}
            checked={selectedTime === times[2]}
            onChange={handleTimeChange}
          />
          <span className="checkbox-button">{times[2]}</span>
        </label>
      </div>
      <div className="time-checkbox">
        <label>
          <input
            type="checkbox"
            value={times[3]}
            checked={selectedTime === times[3]}
            onChange={handleTimeChange}
          />
          <span className="checkbox-button">{times[3]}</span>
        </label>
      </div>
    </div>
  );
};

export default TimePickerCheckbox;
