import { useContext } from 'react';
// Contexts
import { AuthContext } from 'contexts/AuthContext';

export const useAuth = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) throw new Error('There is not AuthProvider');

    return authContext;
}