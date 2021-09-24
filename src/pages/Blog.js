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
            <ReactQuill theme="bubble" value={blog.content} readOnly={true} />
            {/* <div className="head">
                <div className="head-img">
                    <img src="https://bit.ly/3AeQKOI" alt="" />
                </div>
                <div className="head-info">
                    <h1 style={{ color: "red" }}>porro rem cum repellat incidunt</h1>
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic, dicta porro rem cum repellat incidunt reprehenderit veritatis fugit quas!



                    </h3>
                    <h3>post.date</h3>
                </div>
            </div>
            <div className="article">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quae voluptatem vel tempora maiores dolores nesciunt? Iste blanditiis corrupti quis, minus ad reiciendis quibusdam nam ut. Numquam iste explicabo corrupti quas dignissimos nihil hic velit illo rem, ex delectus, reprehenderit nesciunt id quod quia? Sequi, repellendus soluta. Rem molestias rerum impedit ipsam recusandae distinctio earum aliquid, odio quae sit culpa nisi alias debitis, dolorum reiciendis! Esse officiis labore quisquam dolores aliquam laudantium sapiente magnam excepturi rem sunt exercitationem in voluptates sequi quas commodi aut quia ad, molestiae neque omnis et ratione maiores nostrum nesciunt? Voluptatum unde ratione doloribus nulla deserunt. Distinctio et odit necessitatibus magnam saepe tenetur, pariatur laboriosam cumque illo iusto beatae nam sed optio quos minus quo vitae molestias perspiciatis, delectus deserunt voluptatum iure dolorum! Corrupti veritatis accusamus dignissimos dolore nobis? Maiores possimus asperiores omnis nihil quas, unde reprehenderit odit culpa. A excepturi unde laudantium explicabo, facilis veniam maiores neque amet saepe vitae in sequi quos doloremque architecto tenetur, vel non nisi reiciendis, repudiandae commodi facere eum voluptate. Eos earum exercitationem, totam iure voluptatibus amet sit in vel voluptatum vero enim qui rem ducimus ipsa alias ipsam fugit non libero quos quasi est esse dolores adipisci! Obcaecati harum libero tempore? Sed quidem tempora, hic vitae aliquid ipsum nihil corporis quisquam a accusamus veniam voluptatem rerum repudiandae corrupti perferendis asperiores optio. Fugit esse pariatur sit, sequi ipsum sapiente ratione eum. Sapiente magni laudantium, saepe deleniti vero quia ratione, maiores nemo ex perspiciatis impedit debitis autem dolor ad commodi facilis minima velit architecto totam animi consectetur. Cumque quos ullam dicta, maiores quibusdam veniam impedit facere minus repudiandae, non quisquam possimus corporis vitae assumenda quo nobis est blanditiis dolorum eveniet consequuntur quod laborum! Placeat, quas cumque nemo laboriosam iusto amet facilis quis maiores laudantium vel, libero eos adipisci minima neque facere.

                </p>
            </div> */}
        </div>
    )
}

export default Blog