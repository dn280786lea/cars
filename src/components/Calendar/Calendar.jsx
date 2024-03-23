import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

const MyCalendar = ({ onChange, value }) => {
  return (
    <div className="calendar-overlay">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default MyCalendar;
