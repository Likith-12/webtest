import React from 'react'
import './css/member.scss'

const Member = (props) => {
    return (
        <div>

            <div className="img-container">
                <div className="name" style={{background:props.color==='green'?'green':'red'}}>
                <span>{props.title}</span>
                </div>
                <div className={'overlay '+props.colors}>
                    <div className='box' style={{background:props.color==='green'?'green':'red'}}>
                    <i class="far fa-envelope-open"></i>
                    <i class="fab fa-linkedin"></i>
                    </div>
                    <div className='arrow' style={{borderTopColor:props.color==='green'?'green':'red'}}>
                    </div>

                </div>
                <img src={props.img__path} alt="" />
            </div>
        </div>
    )
}

export default Member
