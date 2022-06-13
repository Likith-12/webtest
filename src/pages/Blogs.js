import { useEffect, useState } from 'react';
import firestore from '../firebase';
import { Link } from 'react-router-dom';
import './css/blogs.scss'
import Card_event from '../components/Card_event';
import Card_blog from '../components/Card_blog';
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        FetchBlogs()
        console.log(blogs);

    }, [])
    const FetchBlogs = () => {
        firestore.collection("blogs").where("publish", "==", true).get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setBlogs(arr => [...arr, data]);
            });
        })
    }


    return (
        <div className="container" >
            <div className="blogs-container">
                {blogs.map((post, index) => {
                    return (
                        <Link key={index} to={`/blog/${post.slug}`}>
                            <Card_blog data={post} />
                            {/* <Card_event data={post} />
                            <Card data={post} /> */}
                        </Link>
                    )
                }
                )}
            </div>
        </div>

    )
}
export default Blogs;