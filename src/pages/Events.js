import { useEffect, useState } from 'react';
import firestore from '../firebase';
import "./css/events.scss";
import Card_event from '../components/Card_event';

const Events = () => {
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
    return (
        <div className='event-container'>
            <div className='card_event'>
                <Card_event />
            </div>
        </div>
    )
}

export default Events
