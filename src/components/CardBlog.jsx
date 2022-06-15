import React from 'react';
import Tilt from './CardTilt'
import './css/displayCard.scss'
function CardBlog({ data }) {

    return (
        <>
            <Tilt style={{ height: '480px' }}>
                <div className="card-image">
                    <img src={data.image} alt="blog" />
                </div>

                <div className="card-title">
                    <h2>
                        {data.name}
                    </h2>
                </div>
                <div style={{ color: "white" }}>
                </div>
            </Tilt>
        </>
    )
}

export default CardBlog;
