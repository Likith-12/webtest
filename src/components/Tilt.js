import React, { useEffect, useRef } from 'react';
import './css/tilt.scss'
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return( 
    <div ref={tilt} {...rest}>
        <section className="panel">
                <h2>This is glassmorphism</h2>
                <div className="card__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur vel accusamus. Cumque, iste asperiores. Perferendis odio magnam nisi, eos provident nobis maxime nostrum nam, ipsum blanditiis quasi saepe aliquid!</p>
                </div>
                <a href="#" className='button'>Button</a>
        </section>
    </div>
    )    
  }

  export default Tilt;