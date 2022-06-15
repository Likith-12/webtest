import firebase from "firebase/app";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCkUNhxV9irixJ9hQGxx5mTtVs8ll4F2B0",
    authDomain: "ipf-website-official.firebaseapp.com",
    projectId: "ipf-website-official",
    storageBucket: "ipf-website-official.appspot.com",
    messagingSenderId: "660111767947",
    appId: "1:660111767947:web:2afbf6e16fff2ced45178e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()
