import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCBu8EzcR_n5bniXWBM-QJK5goN_lt4ipw",
    authDomain: "galaxygram-e775b.firebaseapp.com",
    projectId: "galaxygram-e775b",
    storageBucket: "galaxygram-e775b.appspot.com",
    messagingSenderId: "673318246579",
    appId: "1:673318246579:web:9947b188c244a527bdb8c6"
}).auth();
