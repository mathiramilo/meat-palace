import { createContext, useEffect, useState } from 'react';
// Firebase Auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from 'index';
// Interfaces
import { IAuthContext } from 'interfaces/authContext';

export const AuthContext = createContext<IAuthContext>({
    user: null,
    signup: () => {},
    login: () => {},
    logout: () => {},
    setUserLS: () => {}
});

type props = {
    children: JSX.Element | JSX.Element[];
}

export function AuthContextProvider({ children }: props) {
    const [user, setUser] = useState<any>(null);

    const signup = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password); 

    const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })

        return () => unsuscribe();
    }, [])

    /* This function updates the user saved in local storage. */
    const setUserLS = () => localStorage.setItem('user', JSON.stringify(user));

    /* This function fetchs the user from local storage. */
    const getUserLS = () => JSON.parse(localStorage.getItem('user') || 'null');

    /* Every time the user state change set the user
    of the local storage equals to user. */
    useEffect(() => setUser(getUserLS()), []);

    return <AuthContext.Provider value={{
        user,
        signup,
        login,
        logout,
        setUserLS
    }}>
        { children }
    </AuthContext.Provider>
}