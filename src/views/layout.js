import React from 'react'
import { Link } from 'react-router'

export default function Layout() {
  return (
    <div className=''>
        <h1 className='font-bold text-2xl'>Acceuil:</h1>
        <ul>
            <li className='hover:text-purple-900'><Link to={'/calendrier-employe'}>- Interface Calendrier de l'emloye</Link></li>
            <li className='hover:text-purple-900'><Link to={'/create-account'}>- Interface de creation de compte</Link></li>
        </ul>
    </div>
  )
}
