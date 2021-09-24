import { useState, useEffect } from 'react'
import AddPost from './AddPost'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firestore, { signIn } from '../firebase';
import AddEvent from './AddEvent';


const Admin = () => {
    const [blogs, setBlogs] = useState([])
    const [events, setEvents] = useState([])
    const [series, setSeries] = useState([])

    useEffect(() => {
        FetchBlogs()
        // FetchBlogs()
        // FetchSeries()
    }, [])
    const FetchBlogs = () => {
        firestore.collection("blogs").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                console.log(data);
                setBlogs(arr => [...arr, data]);
                console.log(blogs)
            });
        })
    }
    // const FetchEvents = () => {
    //     firestore.collection("events").get().then((querySnapshot) => {
    //         querySnapshot.forEach(element => {
    //             var data = element.data();
    //             setEvents(arr => [...arr, data]);
    //         });
    //     })
    // }
    // const FetchSeries = () => {
    //     firestore.collection("series").get().then((querySnapshot) => {
    //         // Loop through the data and store
    //         // it in array to display
    //         querySnapshot.forEach(element => {
    //             var data = element.data();
    //             setSeries(arr => [...arr, data]);
    //         });
    //     })
    // }
    return (
        <div>
            <button onClick={signIn}>Login</button>
            <Router>
                <Switch>
                    <Route exact path="/admin">
                        <div>
                            {
                                blogs.map((data) => {
                                    return (
                                        <div key={data.slug}>
                                            <h3>{data.title}</h3>
                                            <p>{data.slug}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </Route>
                    <Route path="/admin/add-post">
                        <AddPost />
                    </Route>
                    <Route path="/admin/add-event">
                        <AddEvent />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Admin
