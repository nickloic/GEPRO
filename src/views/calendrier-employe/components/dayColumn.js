// DayColumn.js
import React from 'react';
import Event from './event';

// Limite les heures de 08:00 à 16:00
const hours = Array.from({ length: 9 }, (_, i) => `${(i + 8).toString().padStart(2, '0')}:00`);

const DayColumn = ({ day, events }) => {
  return (
    <div className="border border-gray-200 overflow-hidden">
      {hours.map((hour, index) => (
        <div key={index} className="h-16 max-xl:h-20 border-t border-gray-100 relative flex flex-col">
          {events
            .filter(event => 
              event.start.split(":")[0] === hour.split(":")[0] && event.date === day
            )
            .map((event, i) => <Event key={i} event={event} />)}
        </div>
      ))}
    </div>
  );
};

export default DayColumn;
