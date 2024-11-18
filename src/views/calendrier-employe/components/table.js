import React from 'react'
import Calendar from './calendar';
import { icons } from '../datas/icons';

export default function Table({ events }) {


    return (
        <div>
            {/* header du tableau */}
            <div className='py-5 flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <h1 className='text-2xl'>Novembre 2024</h1>
                        {icons.arrowBottom}
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
                            38 evenements
                        </span>
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <button className='p-2 border rounded-full flex gap-1'>Filtre
                        {icons.filter}
                    </button>

                    <button className='p-2 border rounded-full flex gap-1'>Mois
                        {icons.arrowBottom}
                    </button>

                    <button className='p-2 border rounded-full bg-soft-blue text-white'>+ Nouvel Evenement</button>
                </div>
            </div>
            {/* fin du header */}

            <div>
                <Calendar events={events} />
            </div>
        </div>
    )
}
