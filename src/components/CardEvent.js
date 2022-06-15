import React from 'react';
import './css/card_event.scss'
import Tilt from './CardTilt'
import './css/tilt.scss'


function CardEvent({ data }) {

  return (
    <>
      <Tilt style={{ height: '480px' }}>
        <h2>{data.name}</h2>
        <div className="card__text">
          <p>{data.desc}</p>
        </div>
      </Tilt>
    </>
  )
}

export default CardEvent;
