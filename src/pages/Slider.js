import React, { useEffect, useState } from 'react'
import firestore from '../firebase';
import Slider_event from '../components/Slider_event';
import './css/slider.scss'

function Slider(){

  const [hrz1,sethrz1] = useState('');
  const [hrz2,sethrz2] = useState('');
  const [hrzde1,sethrzde1] = useState('');
  const [hrzde2,sethrzde2] = useState('');


  const [ver1,setver1] = useState('');
  const [ver2,setver2] = useState('');
  const [verde1,setverde1] = useState('');
  const [verde2,setverde2] = useState('');

  const { innerWidth: width} = window;

  function clearActiveClasses(){
      sethrz1('')
      sethrz2('')
      sethrzde1('')
      sethrzde2('')

      setver1('')
      setver2('')
      setverde1('')
      setverde2('')
  }

  function slide_one(){
      clearActiveClasses();
      if(width>480)
      {
          sethrzde1('deactive_1')
          sethrzde2('deactive_2')
      }

      if(width<=480)
      {
          setverde1('devertical_1');
      }
  }

  function slide_two(){
      clearActiveClasses();
      if(width>480)
      {
          sethrz1('active_1')
          sethrzde2('deactive_2')
      }

      if(width<=480)
      {
          setver1('vertical_1')
          setverde2('devertical_2')
      }
  }

  function slide_three(){
      clearActiveClasses();
      if(width>480)
      {
          sethrz1('active_1')
          sethrz2('active_2')
      }

      if(width<=480)
      {
          setver1('vertical_1')
          setver2('vertical_2')
      }
  }



  const [events, setEvents] = useState([])
    useEffect(() => {
        FetchEvents()
        console.log(events);
    }, [])
    const FetchEvents = () => {
        firestore.collection("events").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setEvents(arr => [...arr, data]);
            });
        })
    }

  return(
  <div className="container_slider">
    <div className="slide slide_3">
      <div className="slide_event_3">  
          <a id="event_3" onClick={slide_three}>
             <span>B</span>
             <span>L</span>
             <span>O</span>
             <span>G</span>
          </a>
      </div>

      <div className={`slide slide_2 ${hrz2} ${hrzde2} ${ver2} ${verde2}`}>
          <div className="slide_event_2">  
              <a id="event_2" onClick={slide_two}>
                 <span>S</span>
                 <span>E</span>
                 <span>R</span>
                 <span>I</span>
                 <span>E</span>
                 <span>S</span>
              </a>
          </div>

          <div className={`slide slide_1 ${hrz1} ${hrzde1} ${ver1} ${verde1}`}>
               {
                events.map((data, index) => {
                    return (
                        <div key={index} className="slider_event">
                        {index==0 || index==1?<Slider_event data={data}/>:""}
                        </div>
                    )
                })
               }
              <div className="slide_event_1">  
                <a id="event_1" onClick={slide_one}>
                   <span>E</span>
                   <span>V</span>
                   <span>E</span>
                   <span>N</span>
                   <span>T</span>
                   <span>S</span>
                </a>
              </div>
          </div>
        </div>
    </div>         
  </div>
  );
}

export default Slider;
