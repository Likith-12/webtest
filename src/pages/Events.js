import React from 'react'
import "./css/events.scss";
import Card_event from '../components/Card_event';

const Events = () => {
    return (
        <div className='event-container'>
        {/* <div className="left"></div>
        <div className="right">
            <p className="content"> Write your content here</p>
            <div className="read_more">
                <a href="#">Read more</a>
            </div>
        </div> */}
        <div className='card_event'>
            <Card_event/>
        </div>    
        </div>
    )
}

export default Events
