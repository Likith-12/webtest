import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { firestore } from '../firebase';
import './css/blog.scss'

function Blog() {
    let match = useRouteMatch("/blog/:slug");
    console.log(new Date().toDateString());

    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetchBlog();
    }, [])
    const fetchBlog = async () => {
        firestore.collection("blogs").where("slug", "==", match.params.slug).where("publish", "==", true).get().then((querySnapshot) => {
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
                    <img src={blog.image} alt="" />
                </div>
                <div className="head-info">
                    <h1 style={{ color: "red" }}>{blog.name}</h1>
                    <h3>{blog?.date
                    }</h3>
                </div>
            </div>
            <div className="article">
                <ReactQuill theme="bubble" value={blog.content} readOnly={true} />
                

            </div>
        </div>
    )
}

export default Blog