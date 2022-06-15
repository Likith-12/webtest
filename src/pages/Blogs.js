import { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
import './css/blogs.scss'
import CardBlog from '../components/CardBlog';
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
                            <CardBlog data={post} />
                            {/* <CardEvent data={post} />
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