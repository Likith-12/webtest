import React from 'react';
import Tilt from './CardTilt'
import './css/displayCard.scss'
import { Link } from 'react-router-dom';
function CardBlog({ data }) {

    return (
     
        <Link  to={`/blog/${data.slug}`}>
            <div className='card__wrapper'>
            <Tilt style={{ height: '500px',
              }}>
        
        
                
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
            </div>
                
            </Link>
        
    )
}

export default CardBlog;
