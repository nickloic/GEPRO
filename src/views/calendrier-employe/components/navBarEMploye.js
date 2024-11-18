import React from 'react'
import { icons } from '../datas/icons'

export default function NavBarEMploye() {
    return (
        <div className='flex justify-between'>
            <h1 className='text-3xl'>Calendar</h1>
            <div className='flex w-1/2 max-xl:w-2/3 items-center justify-between text-xs'>
                <button className='p-2 border rounded-full flex justify-center items-center gap-2'>
                {icons.googleCalendar}
                    synchroniser Google Calendar
                </button>
                <div className='flex w-1/2 gap-1 justify-between border rounded-full bg-soft-white'>
                    <div className='w-1/2 p-2 rounded-full flex items-center justify-center gap-2 border bg-white'>
                        Clair
                        {icons.sun}
                    </div>

                    <div className='w-1/2 p-2 rounded-full flex items-center justify-center gap-2 opacity-50'>
                        Sombre
                        {icons.moon}
                    </div>
                </div>
            </div>
        </div>
    )
}
