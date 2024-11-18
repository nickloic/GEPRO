import React from 'react'

export default function DataRDVs() {

   let green = {
        font: '#90c78f',
        bg: '#f5fff5'
    }
   let blue = {
        font: '#3c5ff0',
        bg: '#eff2ff'
    }
   let purple = {
        font: '#a173ec',
        bg: '#f6f0ff'
    }
   let orange = {
        font: '#fe6d42',
        bg: '#fff2ee'
    }

    const events = [
        { name: "Finishing Project", date: '2024-11-15', start: "08:00", end: "09:30", apparence: green },
        { name: "Finishing Project", date: '2024-11-24', start: "08:00", end: "09:30", apparence: green },
        { name: "Consultation Project", date: '2024-11-18', start: "13:00", end: "14:45", apparence: purple },
        { name: "Feedback Project", date: '2024-11-19', start: "15:30", end: "16:00", apparence: blue },
        { name: "Design Review", date: '2024-11-18', start: "10:00", end: "11:00", apparence: blue },
        { name: "Team Meeting", date: '2024-11-19', start: "09:00", end: "10:30", apparence: orange },
        { name: "Design Review", date: '2024-11-20', start: "10:00", end: "11:00", apparence: green },
        { name: "Design Review", date: '2024-11-16', start: "11:00", end: "12:00", apparence: green },
        { name: "Design Review", date: '2024-11-21', start: "12:00", end: "13:00", apparence: orange },
        // Plus d'événements
      ];

  return events
}
