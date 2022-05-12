import React, { useEffect, useState } from 'react'
import firestore from '../firebase';
import './css/slider.scss'
import InstaCards from './InstaCards';
import Card from '../components/Card'
import Card_event from './Card_event';

const Slider = () => {
    const [active, setActive] = useState(2)

    const [events, setEvents] = useState([])
    const [series, setSeries] = useState([])
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        if (window.innerWidth >= 1000) {
            FetchEvents(3)
            FetchBlogs(3)
            FetchSeries(1)
        } else {
            FetchEvents(1)
            FetchBlogs(1)
            FetchSeries(1)
        }
    }, [])

    const FetchEvents = (lim) => {
        firestore.collection("events").limit(lim).get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setEvents(arr => [...arr, data]);
            });
        })

    }
    const FetchSeries = (lim) => {
        firestore.collection("series").limit(lim).get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setSeries(data.url);
            });
        })
        console.log(series);

    }
    const FetchBlogs = (lim) => {
        firestore.collection("blogs").limit(lim).get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setBlogs(arr => [...arr, data]);
            });
        })

    }

    return (
        <>
            <ul className='ul'>

                <li
                    style={{ background: `#A40000`, backgroundPosition: '50% 30%' }}
                    role="button"
                    className={active == 0 ? 'active' : ''}
                    onClick={() => setActive(0)}
                >
                    <h3>Events</h3>
                    <div className='section-content'>
                        <div className='inner'>

                            {
                                events.map((event) => <Card_event data={event} />)
                            }
                        </div>
                        <button onClick={() => { window.location.href = "/events" }} className="btn third">Read More</button>

                    </div>
                </li >
                <li
                    style={{ background: `white`, backgroundPosition: '50% 30%' }}
                    role="button"
                    className={active == 1 ? 'active' : ''}
                    onClick={() => setActive(1)}
                >

                    <h3>Series</h3>
                    <div className='section-content'>
                        <div className='inner'>

                            <InstaCards urls={series} />
                        </div>
                        <button onClick={() => { window.location.href = "/series" }} style={{ color: '#000', border: ' 1px solid #000', outline: 'solid #000 1px', boxShadow: '0 0 40px 40px rgb(255, 255, 255) inrgb(255, 255, 255) 0 0 0 0 rgb(255, 255, 255)' }} className="btn third">Read More</button>

                    </div>
                </li >
                <li
                    style={{ background: `#04724D` }}
                    role="button"
                    className={active == 2 ? 'active' : ''}
                    onClick={() => setActive(2)}
                >

                    <h3>Blogs</h3>
                    <div className='section-content'>
                        <div className='inner'>
                            {
                                blogs.map((blog) => {
                                    return (
                                        <Card data={blog} />
                                    )
                                })
                            }

                        </div>
                        <button onClick={() => { window.location.href = "/blogs" }} className="btn third">Read More</button>
                    </div>
                </li >

            </ul >
        </>
    );
}

export default Slider