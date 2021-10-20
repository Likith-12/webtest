import React from 'react'
import './css/member.scss'

const Member = (props) => {
    return (
        <div>

            <div className="img-container">
                <div className="overlay">
                    <div className="box"></div>
                    <div className="arrow">
                    </div>

                </div>
                <img src={props.img__path} alt="" />
            </div>
        </div>
    )
}

export default Member
