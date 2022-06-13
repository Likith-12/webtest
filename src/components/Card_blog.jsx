import React from 'react';
import Tilt from './Card_tilt'
import './css/displayCard.scss'
function Card_blog({ data }) {

    return (
        <>
            <Tilt style={{ height: '400px' }}>
                <div className="card-image">
                    <img src={data.image} alt="blog-image" />
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

export default Card_blog;
