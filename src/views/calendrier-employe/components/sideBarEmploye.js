import React from 'react'
import Logo from './logo'
import { dataSidebarEmploye, bottomIcons } from '../datas/dataSideBarEmploye'

export default function SideBarEmploye() {
  return (
    <div className='h-screen w-16 flex flex-col items-center p-5 border'>
      <Logo />
      <div className='mt-10 h-full flex flex-col justify-between'>
        <ul className='flex flex-col w-full items-center gap-8'>
          {
            dataSidebarEmploye.map((val, index) => (
              <li key={index}>{val.icon}</li>
            ))
          }
        </ul>
        <ul className='flex flex-col w-full items-center gap-8'>
          {
            bottomIcons.map((val, index) => (
              <li key={index}>{val.icon}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
