import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAy8kTGtzNK52Uj887V5DElhLk40UDWxdk",
    authDomain: "react-app-cursos-54b96.firebaseapp.com",
    databaseURL: "https://react-app-cursos-54b96.firebaseio.com",
    projectId: "react-app-cursos-54b96",
    storageBucket: "react-app-cursos-54b96.appspot.com",
    messagingSenderId: "691171296901",
    appId: "1:691171296901:web:bb0d3ce3fc8b1a3037cbec"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
