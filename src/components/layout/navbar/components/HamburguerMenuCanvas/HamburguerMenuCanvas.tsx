import React from 'react';
import { Link } from 'react-router-dom';
// Import icons
import { ReactComponent as CloseIcon } from 'assets/icons/x.svg';
// Import styles
import './HamburguerMenuCanvas.css';

// Props type
type props = {
    hamburguerMenuOpen: boolean;
    closeHamburguerMenu: () => void;
}

export const HamburguerMenuCanvas = ({ hamburguerMenuOpen, closeHamburguerMenu }: props) => {

    return (
        // Hamburguer Menu Canvas
        <div 
            className="hm-canva"
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
            <button className="close-btn" onClick={ () => closeHamburguerMenu() }>
                <CloseIcon className="close-icon" />
            </button>
            
            {/* Links */}
            <Link className="navbar-link nbl-hm" to='/' onClick={ () => closeHamburguerMenu() }> Home </Link>
            <Link className="navbar-link nbl-hm" to='/#about-us' onClick={ () => closeHamburguerMenu() }> About Us </Link>
            <Link className="navbar-link nbl-hm" to='/shop/all' onClick={ () => closeHamburguerMenu() }> Shop </Link>
        </div>    
    )
}
