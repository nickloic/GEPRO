// Event.js
import React from 'react';

const Event = ({ event }) => {
  return (
    <div 
      className="absolute inset-1 bg-opacity-90 text-white text-xs p-2 max-xl:p-1 rounded-md border" 
      style={{ backgroundColor: event.apparence.bg, color: event.apparence.font, borderColor: event.apparence.font }}
    >
      <p className="font-semibold">{event.name}</p>
      <p className="text-xs">{event.start} - {event.end}</p>
    </div>
  );
};

export default Event;
