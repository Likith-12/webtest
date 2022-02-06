import React from 'react';
import './css/card_event.scss'
import Tilt from './Tilt'

function Card_event() {

  const options = {
        scale: 1.2,
        speed: 1000,
        max: 30
      };  
  return( 
        <>
          <Tilt className="container" options={options} />  
        </>
  )    
}

export default Card_event;
