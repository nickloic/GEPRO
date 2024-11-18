import React from 'react'
import NavBarEMploye from './navBarEMploye'
import Table from './table'

export default function TableauRDV({events}) {
  

  return (
    <div className='w-3/4 relative left-1/4 p-5'>
      <NavBarEMploye/>
      <Table events = {events}/>
    </div>
  )
}
