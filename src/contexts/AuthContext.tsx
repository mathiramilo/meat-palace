import { createContext } from 'react';

export const AuthContext = createContext({});

type props = {
    children: JSX.Element | JSX.Element[];
}

export function AuthContextProvider({ children }: props) {


    return <AuthContext.Provider value={{}}>
        { children }
    </AuthContext.Provider>
}