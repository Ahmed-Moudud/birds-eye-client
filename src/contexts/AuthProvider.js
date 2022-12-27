import React, {  createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';



export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(null);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
       }

    const resetPassword =(email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
       }

       const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

       useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{            
            setUser(currentUser);
            setLoading(false)
        });
        return () => unsubscribe();
    },[])

    const authInfo = {
        createUser,
        resetPassword,
        signIn,
        googleSignIn,
        logOut,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;