// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: 'AIzaSyCYi1pzNClrQ0HD6O9WVW8ue8ZzH2hU74s',
    authDomain: "darly-store.firebaseapp.com",
    projectId: "darly-store",
    storageBucket: "darly-store.appspot.com",
    messagingSenderId: "873717039322",
    appId: "1:873717039322:web:8e345fe731e2343911a5e3",
    measurementId: "G-4KHZXNSFPV"
};


const db = initializeApp(firebaseConfig);

export default db;