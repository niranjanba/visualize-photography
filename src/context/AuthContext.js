import { createContext, useContext, useEffect, useState } from "react";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        signOut(auth)
            .then(() => setCurrentUser(null))
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(true);
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    const values = { signIn, currentUser, logOut };
    return (
        <AuthContext.Provider value={values}>
            {loading && children}
        </AuthContext.Provider>
    );
}
