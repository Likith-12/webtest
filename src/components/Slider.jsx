import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase';
import './css/slider.scss'
import InstaCards from './InstaCards';
import CardEvent from './CardEvent';
import { Link } from 'react-router-dom'
import CardBlog from './CardBlog';


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
        firestore.collection("events").where("publish", "==", true).limit(lim).get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setEvents(arr => [...arr, data]);
            });
        })

    }
    const FetchSeries = (lim) => {
        firestore.collection("series").where("publish", "==", true).limit(lim).get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                const uri = data.url
                if (window.innerWidth < 500) {
                    uri.map((u, index) => index === 0 && setSeries([u]))
                } else {
                    setSeries(data.url)
                }
            });
        })

    }
    const FetchBlogs = (lim) => {
        firestore.collection("blogs").where("publish", "==", true).limit(lim).get().then((querySnapshot) => {
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
                    className={active === 0 ? 'active' : ''}
                    onClick={() => setActive(0)}
                >
                    <h3>Events</h3>
                    <div className='section-content'>
                        <div className='inner'>
                            {
                                events.map((event, index) => <CardEvent key={index} data={event} />)
                            }
                        </div>
                        <Link to='/events'>
                            <button className="btn third">Read More</button>
                        </Link>

                    </div>
                </li >
                <li
                    style={{ background: `white`, backgroundPosition: '50% 30%' }}
                    role="button"
                    className={active === 1 ? 'active' : ''}
                    onClick={() => setActive(1)}
                >

                    <h3>Series</h3>
                    <div className='section-content'>
                        <div className='inner'>
                            {/* {
                                window.innerWidth > 500 && <InstaCards urls=series
                            } */}

                            <InstaCards urls={series} />

                        </div>
                        <Link to='/series'>
                            <div style={{ color: '#000', border: ' 1px solid #000', outline: 'solid #000 1px', boxShadow: '0 0 40px 40px rgb(255, 255, 255) inrgb(255, 255, 255) 0 0 0 0 rgb(255, 255, 255)' }} className="btn third">Read More</div>
                        </Link>

                    </div>
                </li >
                <li
                    style={{ background: `#04724D` }}
                    role="button"
                    className={active === 2 ? 'active' : ''}
                    onClick={() => setActive(2)}
                >

                    <h3>Blogs</h3>
                    <div className='section-content'>
                        <div className='inner'>
                            {
                                blogs.map((blog, index) => <CardBlog key={index} data={blog} />)
                            }
                        </div>
                        <Link to='/blogs'>

                            <button className="btn third">Read More</button>
                        </Link>
                    </div>
                </li >

            </ul >
        </>
    );
}

export default Slider