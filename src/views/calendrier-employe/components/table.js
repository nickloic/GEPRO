import React, { useState, useEffect } from 'react'
import Calendar from './calendar';
import { icons } from '../datas/icons';
import DataProchainesDates from '../datas/dataProchainesDates';
import { motion } from 'framer-motion';

export default function Table({ events }) {

    const [days, setdays] = useState(DataProchainesDates().prochainesDates);
    const chargerJoursSuivants = DataProchainesDates().chargerJoursSuivants(days)
    const chargerPrecedentsJours = DataProchainesDates().chargerJoursPrecedents(days)
    const moisDeLAnnee = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const getNextMonthDays = (id) => {
        const premiersJoursDuMois = DataProchainesDates().chargerJoursDuMois(id)
        setdays(premiersJoursDuMois)
    }

    const calendarVariantNext = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: '0%' }
    }
    const calendarVariantPrev = {
        hidden: { opacity: 0, x: '-100%' },
        visible: { opacity: 1, x: '0%' }
    }

    const [next, setnext] = useState(true);

    const [animationKey, setAnimationKey] = useState(0); // Clé dynamique pour redémarrer l'animation
    
    const playNextAnimation = () => {
        setnext(true)
        setAnimationKey(prevKey => prevKey + 1); // Incrémente la clé pour forcer un nouveau rendu
    };
    const playBackAnimation = () => {
        setnext(false)
        setAnimationKey(prevKey => prevKey + 1); // Incrémente la clé pour forcer un nouveau rendu
    };

    return (
        <div>
            {/* header du tableau */}
            <div className='py-5 flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-2xl'>{days[0].mois} {days[0].annee}</h1>
                        <span onClick={() => { setdays(chargerPrecedentsJours); playBackAnimation() }} className='w-fit h-fit hover:bg-soft-blue-bg transition-colors duration-300 rounded-full'>
                            {icons.arrowLeft}
                        </span>
                        <span onClick={() => { setdays(chargerJoursSuivants); playNextAnimation() }} className='w-fit h-fit hover:bg-soft-blue-bg transition-colors duration-300 rounded-full'>
                            {icons.arrowRight}
                        </span>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex w-14'>
                            <img src='/images/Kiyotaka.jpg' className='w-7 rounded-full relative z-0 right-0' />
                            <img src='/images/Kiyotaka.jpg' className='w-7 rounded-full relative z-10 right-3' />
                            <img src='/images/Kiyotaka.jpg' className='w-7 rounded-full relative z-20 right-6' />
                        </div>
                        <p className='opacity-50 flex'> 12 membres
                            {icons.dot}
                        </p>
                        <span className='flex gap-1 text-soft-blue'>
                            {icons.calendarCheck}
                            40 evenements
                        </span>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <button onClick={() => {  }}
                        className='p-2 border rounded-full flex gap-1'>Filtre
                        {icons.filter}
                    </button>

                    <select onChange={(e) => {
                        getNextMonthDays(e.target.value)
                    }}
                        className='p-2 hover:bg-soft-white cursor-pointer border rounded-full flex bg-white'>
                        <option>Mois</option>
                        {moisDeLAnnee.map((val, id) => (
                            <option key={id} value={id}>{val}</option>
                        ))}
                    </select>

                    <button className='p-2 border rounded-full bg-soft-blue text-white'>+ Nouvel Evenement</button>
                </div>
            </div>
            {/* fin du header */}

            <motion.div className='calendar'
                key={animationKey} // Nouvelle clé force la recréation du composant
                variants={next ? calendarVariantNext : calendarVariantPrev}
                initial='hidden'
                animate='visible'
            >
                <Calendar events={events} days={days} current_month={days[0].mois} />
            </motion.div>
        </div>
    )
}
