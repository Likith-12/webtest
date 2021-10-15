import React from 'react'
import './css/member.scss'

const Member = (props) => {
    return (
        <div>
            <div className="img-container">
                <img src={props.img__path} alt="" />
                <div className="overlay">
                    <div className="title">{props.title}</div>
                    <p className="desc">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Member
