// Calendar.js
import React from 'react';
import DayColumn from './dayColumn';
import DataProchainesDates from '../datas/dataProchainesDates';

// Jours limités à Lundi - Vendredi
// const days = DataProchainesDates().prochainesDates

// console.log(days);

// Heures limitées de 08:00 à 16:00
const hours = Array.from({ length: 9 }, (_, i) => `${(i + 8).toString().padStart(2, '0')}:00`);

const Calendar = ({ events, days, current_month }) => {

  function obtenirDateAujourdHui() {
    const aujourdHui = new Date();
    const annee = aujourdHui.getFullYear();
    const mois = String(aujourdHui.getMonth() + 1).padStart(2, '0'); // Mois de 0 à 11, on ajoute +1
    const jour = String(aujourdHui.getDate()).padStart(2, '0');

    return `${annee}-${mois}-${jour}`;
}


  return (
    <div className="p-2">
      <div className="grid grid-cols-8 gap-2 mb-4">

      </div>

      {/* Grille horaire */}
      <div className="grid grid-cols-8">
        {/* En-têtes des jours */}
        <div className=''></div> {/* Colonne vide pour l'en-tête des heures */}
        {days.map((day, index) => (
          <div key={index} className="text-center font-bold" style={{ color: day.dateComplete === obtenirDateAujourdHui() ? '#3c5ff0' : '#000000', opacity: day.dateComplete === obtenirDateAujourdHui() ? 1 : 0.5 }}>
            {day.dateComplete === obtenirDateAujourdHui() ? day.jourDeLaSemaine + ', ' + day.jourDansLeMois : day.jourDeLaSemaine[0] + ', ' + day.jourDansLeMois}
          </div>
        ))}
        {/* Colonne des heures */}
        <div className="flex flex-col w-full bg-soft-white">
          {hours.map((hour, index) => (
            <div key={index} className="h-16 max-xl:h-20 flex items-center justify-center text-gray-500">
              {hour}
            </div>
          ))}
        </div>

        {/* Colonnes pour chaque jour */}
        {days.map((day, index) => (
          <DayColumn key={index} day={day.dateComplete} events={events} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
