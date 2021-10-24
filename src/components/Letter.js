import './css/letter.scss'
import React from 'react'
import FluidAnimation from 'react-fluid-animation'
const Letter = (props) => {
    return (
        <div>
           <div className="letter">
               <p>{props.letter}</p></div> 
        </div>
    )
}

export default Letter
