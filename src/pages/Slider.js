import React,{useState} from 'react'

import './css/slider.scss'


function Slider() {
  
  let list_1 = 'active';
  let list_2 ='';
  let list_3 ='';

  function clearActiveClasses() {
    list_1='';
    list_2='';
    list_3='';
  }

  function slide_one(){
    clearActiveClasses();
    list_1='active';
  }
  
  function slide_two(){
    clearActiveClasses();
    list_2='active';
  }
  
  function slide_three(){
    clearActiveClasses();
    list_3='active';
  }
  
    return(
        <div className="container">
        <div className={`slide ${list_1} slide_1`} onClick={slide_one} id="slide_1">
          <div className="slide_event_1">  
            <a className="event">
               <span>E</span>
               <span>V</span>
               <span>E</span>
               <span>N</span>
               <span>T</span>
               <span>S</span>
            </a>
          </div>
        </div>
        <div className={`slide ${list_2} slide_2`}  onClick={slide_two} id="slide_2">
          <div className="slide_event_2">  
              <a className="event">
                 <span>S</span>
                 <span>E</span>
                 <span>R</span>
                 <span>I</span>
                 <span>E</span>
                 <span>S</span>
              </a>
          </div>
        </div>
        <div className={`slide slide_3 ${list_3}`} onClick={slide_three} id="slide_3">
          <div className="slide_event_3">  
              <a className="event">
                 <span>B</span>
                 <span>L</span>
                 <span>O</span>
                 <span>G</span>
              </a>
          </div>
        </div>         
      </div>
    );  
}
export default Slider;