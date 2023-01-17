import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

console.log(process.env.REACT_APP_API_KEY);
const firebaseConfig = {
    apiKey: 'AIzaSyDAaZjhJhdK2NSRgYmh-WncsLTJ8OGk-PY',
    authDomain: 'visualize-photography.firebaseapp.com',
    projectId: "visualize-photography",
    storageBucket: "visualize-photography.appspot.com",
    messagingSenderId: "888101784503",
    appId: '1:888101784503:web:3277776b2bf5f2dd903632',
    measurementId: "G-TNV337VTZZ",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;
