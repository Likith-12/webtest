

// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import Card from '../components/Card';
import firestore from '../firebase';

import './css/blogs.scss'
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        FetchBlogs()
    }, [])
    const FetchBlogs = () => {
        firestore.collection("blogs").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setBlogs(arr => [...arr, data]);
            });
        })
    }


    return (
        <div className="container" >
            <div className="blogs-container">
                {blogs.map((post) => {
                    return (
                        <Link to={`/blog/${post.slug}`}>
                            <Card key={post.slug} post={post} />
                        </Link>
                    )
                }
                )}
            </div>
        </div>

    )
}
export default Blogs;