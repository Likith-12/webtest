import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import firestore from '../firebase';
import './css/blog.scss'

function Blog() {
    let match = useRouteMatch("/blog/:slug");

    const [blog, setBlog] = useState([])
    useEffect(() => {
        console.log(match.params.slug);
        fetchBlog();
    }, [])
    const fetchBlog = async () => {
        // const response = firestore.collection('blogs');
        // const data = await response.get();
        // data.docs.forEach(item => {
        //     setBlog([...blog, item.data()])
        // })
        // console.log(blog);
        firestore.collection("blogs").where("slug", "==", match.params.slug).get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setBlog(data);
            });
        })


    }
    return (
        <div className="blog-container">
            <div className="head">
                <div className="head-img">
                    <img src="https://bit.ly/3AeQKOI" alt="" />
                </div>
                <div className="head-info">
                    <h1 style={{ color: "red" }}>{blog.name}</h1>
                    <h3>post.date</h3>
                </div>
            </div>
            <div className="article">
                <ReactQuill theme="bubble" value={blog.content} readOnly={true} />

            </div>
        </div>
    )
}

export default Blog