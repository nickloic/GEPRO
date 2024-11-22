import React from 'react'
import DataProchainesDates from '../datas/dataProchainesDates'
import { icons } from '../datas/icons'

export default function ListeRDV({ RDVs }) {

    const prochainesDates = DataProchainesDates().prochainesDates

    return (
        <div className=' p-5 h-screen overflow-y-scroll max-xl:bg-white max-xl:p-2'>
            <div className='h-1/4 flex flex-col justify-between'>
                {/* profil */}
                <div className='w-full flex justify-between'>
                    <div className='flex gap-3'>
                        <img src='/images/Kiyotaka.jpg' className='w-12 h-12 max-xl:w-8 max-xl:h-8 rounded-full ' />
                        <div>
                            <h1 className='text-xl font-semibold max-xl:text-sm'>Artemis code</h1>
                            <p className='text-sm opacity-50 max-xl:text-xs'>artemis@gmail.com</p>
                        </div>
                    </div>
                    {icons.arrowBottom}
                </div>
                {/* fin profil */}

                {/* searchBar */}
                <div className='m-auto border rounded-lg flex p-1 w-full'>
                    <input type='' className='outline-none w-full' placeholder='Rechercher...' />
                    <button type='button' className='bg-soft-blue w-8 h-8 rounded-full flex justify-center items-center'>
                        {icons.search}
                    </button>
                </div>
                {/* fin searchBar */}
            </div>

            {
                prochainesDates.map((valDates, index) => (
                    <div key={index} className=''>
                        <div className='flex items-center gap-5 bg-soft-blue-bg p-2 rounded-lg'>
                            {icons.arrowTopFill}
                            <h1 className='text-sm text-soft-blue'>{valDates.jourDeLaSemaine}, {valDates.jourDansLeMois}</h1>
                        </div>

                        {
                            RDVs.filter(rdv => rdv.date === valDates.dateComplete).map((rdv, index) => (
                                <div key={index} className='my-5 ml-3'>
                                    <h1 className='font-semibold text-sm pl-2 border-l-4' style={{ borderColor: rdv.apparence.font }}>{rdv.name}</h1>
                                    <div className='opacity-50 flex gap-1 text-sm'>
                                        {icons.clock}
                                        <p>{rdv.start} - {rdv.end}</p>
                                    </div>
                                    <hr className='my-3'/>
                                </div>
                            ))
                        }
                    </div>
                ))
            }


        </div>
    )
}
