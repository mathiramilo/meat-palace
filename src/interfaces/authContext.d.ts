export interface IAuthContext {
    user;
    signup: (email: string, password: string) => void;
    login: (email: string, password: string) => void;
    logout: () => void;
    setUserLS: () => void;
}