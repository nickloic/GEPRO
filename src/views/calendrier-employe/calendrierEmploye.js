import React from 'react'
import SideBarEmploye from './components/sideBarEmploye'
import ListeRDV from './components/listeRDV'
import TableauRDV from './components/tableauRDV'
import DataRDVs from './datas/dataRDVs'

export default function CalendrierEmploye() {

  let RDVs = DataRDVs()

  return (
    <div className='flex'>
     <div className='flex fixed w-1/4'>
     <SideBarEmploye/>
     <ListeRDV RDVs = {RDVs}/>
     </div>
      <TableauRDV events = {RDVs}/>
    </div>
  )
}
