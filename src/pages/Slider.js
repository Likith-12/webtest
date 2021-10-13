import React, { useEffect, useState } from 'react'

import './css/slider.scss'


function Slider() {
  const [list1, setList1] = useState('active');
  const [list2, setList2] = useState('');
  const [list3, setList3] = useState('');



  function clearActiveClasses() {
    setList1('')
    setList2('')
    setList3('')
  }

  function slide_one(event) {
    clearActiveClasses();
    setList1('active')

  }

  function slide_two() {
    clearActiveClasses();
    setList2('active')
  }

  function slide_three() {
    clearActiveClasses();
    setList3('active')
  }

  return (
    <div className="container">
      <div className={`slide ${list1} slide_1`} onClick={slide_one} id="slide_1">
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
      <div className={`slide ${list2} slide_2`} onClick={slide_two} id="slide_2">
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
      <div className={`slide slide_3 ${list3}`} onClick={slide_three} id="slide_3">
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