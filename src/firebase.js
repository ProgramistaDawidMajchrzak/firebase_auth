// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxV3HxOiHDK2gfwlcQUYGmYzFcUTA_dEA",
    authDomain: "cmas-web-88006.firebaseapp.com",
    projectId: "cmas-web-88006",
    storageBucket: "cmas-web-88006.appspot.com",
    messagingSenderId: "236312154808",
    appId: "1:236312154808:web:96d8ae83f558440ee11a4d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);