import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
// import { useCollection } from 'react-firebase-hooks/firestore';


var firebaseConfig = {

    //config
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export const signIn = async () => {
    auth.signInWithPopup(provider)
}
export const signOut = () => {
    auth.signOut()
}

const firestore = firebase.firestore()

export default firestore;
// const firestore = firebase.firestore()
var blogRef = firestore.collection("blogs");

export const getPosts = async () => {
    await blogRef.get().then((doc) => {
        if (doc) {
            console.log("Document data:", doc.data());
            return doc.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

}

// const blogCollection = firestore.collection('blogs')
// const blogQuery = blogCollection.orderBy('date', 'desc').limit(100)
// // const [querySnapshot] = useCollection(blogQuery)
// const messages = {}
// const unsubscribe = blogQuery.onSnapshot(snapshot => {
//     messages.value = snapshot.docs
//         .map(doc => ({ id: doc.id, ...doc.data() }))
// });
// console.log(unsubscribe);
// export const getPosts = () => {
//     const blogQuery = blogCollection.orderBy('date', 'desc').limit(100)
//     const [querySnapshot] = useCollection(blogQuery)
//     const posts = querySnapshot?.docs.map((doc) => doc.data());
// }
export const addPost = async (title, published, content, slug) => {
    await blogRef.add({
        title: title,
        published: published,
        content: content,
        slug: slug,
    })
}
