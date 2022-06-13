import React, { Children, useEffect, useRef } from 'react';
import './css/tilt.scss'
import VanillaTilt from 'vanilla-tilt';

function Card_Tilt(props) {
    const { children, ...rest } = props;
    const tilt = useRef(null);

    const options = {
        scale: 1.05,
        speed: 500,
        max: 15
    };
    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return (
        <div ref={tilt} {...rest}>
            <section className="panel">
                {children}
            </section>
        </div>
    )
}

export default Card_Tilt;