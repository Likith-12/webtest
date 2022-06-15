import firebase from "firebase/app";
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAEUW9mdm0gQG_dNaMd5wrhxw20X1hsDZw",
    authDomain: "ipf-website.firebaseapp.com",
    projectId: "ipf-website",
    storageBucket: "ipf-website.appspot.com",
    messagingSenderId: "1067768690265",
    appId: "1:1067768690265:web:b8aecf3d75642339dc2348"
    //config
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()
