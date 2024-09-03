import React from 'react'
import Button from '../../Components/Button/Button'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className='name'>
          <h1 className='none'>Dashboard</h1>
          <Button text={ 'Se Déconnecter'} />
    </div>
  )
}
