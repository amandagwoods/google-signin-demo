import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCd6fNnN-l3KDM6l8YexJK1v94qyl8BS3I",
    authDomain: "movie-project-8e73a.firebaseapp.com",
    projectId: "movie-project-8e73a",
    storageBucket: "movie-project-8e73a.appspot.com",
    messagingSenderId: "890657962380",
    appId: "1:890657962380:web:5e7d9d00485c45fb3afea9"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);