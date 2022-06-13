import React from 'react';
import './css/card_event.scss'
import Tilt from './Card_tilt'
import './css/tilt.scss'


function Card_event({ data }) {

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

export default Card_event;
