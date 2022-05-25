import React, { useEffect, useRef } from 'react';
import './css/tilt.scss'
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const { options, data, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div ref={tilt} {...rest}>
      <section className="panel">
        <h2>{data.name}</h2>
        <div className="card__text">
          <p>{data.desc}</p>
        </div>
      </section>
    </div>
  )
}

export default Tilt;