import './css/letter.scss'
import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
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
