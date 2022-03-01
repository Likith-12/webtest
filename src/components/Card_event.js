import React from 'react';
import './css/card_event.scss'
import Tilt from './Tilt'

function Card_event() {

  const options = {
    scale: 1.05,
    speed: 500,
    max: 15
  };
  return (
    <>
      <Tilt className="container" options={options} />
    </>
  )
}

export default Card_event;
