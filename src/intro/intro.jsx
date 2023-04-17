import React from 'react'
import './intro.css'

export default function intro() {
  return (
    <div className="intro">
        <div className='text'>
            <p className='par'> This is Mudpie </p>
            <subtitle className='sub'> There will be stuff here soon probably </subtitle>
        </div>
        <img src='src\assets\nyanko-sensei.png' alt="Logo" className='nyan'/>
    </div>  )
}
