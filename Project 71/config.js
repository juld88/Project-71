import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB-jevDu5c28ijrTTF6Yng6odMlVFqfMQ4",
    authDomain: "eride-c44b1.firebaseapp.com",
    projectId: "eride-c44b1",
    storageBucket: "eride-c44b1.appspot.com",
    messagingSenderId: "746253837061",
    appId: "1:746253837061:web:aaf59ba9bdb86c41ca8d6c"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
