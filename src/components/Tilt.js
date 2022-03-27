import React, { useEffect, useRef } from 'react';
import './css/tilt.scss'
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const event = props.data
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    console.log(props);
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div ref={tilt} {...rest}>
      <section className="panel">
        <h2>{props.data.name}</h2>
        <div className="card__text">
          <p>{props.data.desc}</p>
        </div>
      </section>
    </div>
  )
}

export default Tilt;