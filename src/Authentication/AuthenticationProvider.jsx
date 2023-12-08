import React, { createContext, useEffect, useState } from 'react';
import { app } from './firebase.config';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
export let AuthContext = createContext();
const auth = getAuth(app);

const AuthenticationProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);
    let [loggedInUser, setLoggedInUser] = useState(null);

    let signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    let signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    let logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            setLoggedInUser(user);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    let authentication = {
        signUp,
        signIn,
        loggedInUser,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationProvider;
