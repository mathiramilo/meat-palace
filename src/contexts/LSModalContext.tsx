import { createContext, useState } from 'react';
// Interfaces
import { ILSModalContext } from 'interfaces/lsModalContext';

export const LSModalContext = createContext<ILSModalContext>({
    isOpen: false,
    openModal: () => {},
    closeModal: () => {}
}); 

type props = {
    children: JSX.Element | JSX.Element[];
}

export const LSModalContextProvider = ({ children }: props) => {
    const [isOpen, setOpen] = useState(false);
    
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <LSModalContext.Provider value={{
            isOpen,
            openModal,
            closeModal
        }}>
            {children}
        </LSModalContext.Provider>
    )
}