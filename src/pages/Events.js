import { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import "./css/events.scss";
import CardEvent from '../components/CardEvent';

const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        FetchEvents()
    }, [])
    const FetchEvents = () => {
        firestore.collection("events").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setEvents(arr => [...arr, data]);
            });
        })
    }
    return (
        <div className='event-container'>

            {
                events.map((data, index) => {
                    return (
                        <div key={index} className='card_event'>
                            <CardEvent data={data} />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Events
