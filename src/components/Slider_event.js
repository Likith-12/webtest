import React from 'react';
import './css/slider_event.scss'
import Tilt from './Tilt'


function Slider_event({ data }) {

  const options = {
    scale: 1.05,
    speed: 500,
    max: 15
  };
  return (
    <>
      {/* <Tilt className="container" options={options} data={data} /> */}
      <div className="event">
        <h2 className="heading">{data.name}</h2>
        <span className="desc">{data.desc}</span>
      </div>

    </>
  )
}

export default Slider_event;