import { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import firestore from '../firebase';
import './css/addPost.scss'




const AddEvent = () => {

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [publish, setPublish] = useState("");

    // const submitPost = () => {
    //     // addArticle(title, publish, content, slug);
    //     addPost(title, publish, content, slug);
    //     // setContent('')
    //     // setTitle('')
    //     // setSlug('')
    //     // setPublish('')
    // }
    const submitPost = (e) => {
        e.preventDefault();

        // Add data to the store
        firestore.collection("events").add({
            title: title,
            publish: publish,
            content: content,
            slug: slug
        })
            .then((docRef) => {
                alert("Data Successfully Submitted");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

        setContent('')
        setTitle('')
        setSlug('')
        setPublish('')
    }


    // var handlerOptions = {
    //     handlers: {
    //         // handlers object will be merged with default handlers object
    //         'link': function (value) {
    //             // if (value) {
    //             //     var href = prompt('Enter the URL');
    //             //     quill.format('link', href);
    //             // } else {
    //             //     quill.format('link', false);
    //         }
    //     },
    //     // image: quillImageHandler
    // }

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],

            [{ 'color': ["#ffffff", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#000000", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image', 'video'],
            ['clean'],
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
        },
    };
    return (
        <div className="addPostContainer">
            <form onSubmit={(event) => { submitPost(event) }}>
                <label htmlFor="title">
                    Title
                    <input type="text" name="title" className="textbox" value={title} onChange={(e) => { setTitle(e.target.value) }} /><br></br>
                </label>
                <label htmlFor="slug">
                    Slug
                    <input type="text" name="slug" className="textbox" value={slug} onChange={(e) => { setSlug(e.target.value) }} /><br></br>
                </label>
                <ReactQuill modules={modules} theme="snow" onChange={(e) => { setContent(e) }}
                    value={content} />
                <label htmlFor="publish">
                    Publish:
                    <input type="checkbox" name="publish" value={publish} onChange={(e) => { setPublish(e.target.checked) }} />

                </label><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddEvent;
