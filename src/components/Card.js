import './css/card.scss'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
function Card({ post }) {
    return (
        <div className="card" key={post.slug}>
            <div className="card-info" >
                <h1>{post.title}</h1>
                <ReactQuill theme="bubble" value={post.content} readOnly={true} />

            </div>
        </div>
    )
}

export default Card;
