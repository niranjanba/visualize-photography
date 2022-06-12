import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "visualize-photography",
    storageBucket: "visualize-photography.appspot.com",
    messagingSenderId: "888101784503",
    appId: process.env.REACT_APP_APP_ID,
    measurementId: "G-TNV337VTZZ",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;
