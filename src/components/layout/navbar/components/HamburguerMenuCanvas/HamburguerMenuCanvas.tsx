import React from 'react';
import { ReactComponent as CloseIcon } from '../../../../../assets/icons/x.svg';
import './styles/HamburguerMenuCanvas.css';

// Props type
type props = {
    hamburguerMenuOpen: boolean;
    closeHamburguerMenu: () => void;
}

export const HamburguerMenuCanvas = ({ hamburguerMenuOpen, closeHamburguerMenu }: props) => {
    return (
        <div className="hm-canva"
        style={
            hamburguerMenuOpen ? 
            {
                opacity: '1',
                pointerEvents: 'all',
                transform: 'translateX(0)'
            } 
            : {
                opacity: '0',
                pointerEvents: 'none',
                transform: 'translateX(-95%)'
            }
        }
        >
            {/* Close Button */}
            <button className="close-btn" onClick={ closeHamburguerMenu }>
                <CloseIcon className="close-icon" />
            </button>
            {/* Links */}
            <a className="navbar-link nbl-hm" href="#" onClick={ closeHamburguerMenu }> Home </a>
            <a className="navbar-link nbl-hm" href="#" onClick={ closeHamburguerMenu }> About Us </a>
            <a className="navbar-link nbl-hm" href="#" onClick={ closeHamburguerMenu }> Shop </a>
        </div>    
    )
}
