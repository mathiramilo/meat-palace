import React, { useState } from 'react';
// Import logo
import logoWhite from '../../../assets/img/logo/logo-white.png';
// Import icons
import { ReactComponent as LoginIcon } from '../../../assets/icons/login.svg';
import { ReactComponent as CartIcon } from '../../../assets/icons/cart.svg';
import { ReactComponent as HamburguerIcon } from '../../../assets/icons/hamburguer-menu.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/x.svg';
// Import css
import './Navbar.css';

// Future use propr
type props = {
    isLandingPage: boolean;
}

export const Navbar = ({ isLandingPage }: props) => {

    // State that represents if the hamburguer menu is open or not.
    const [hamburguerMenuOpen, sethamburguerMenuOpen] = useState<boolean>(false);
    // Open and close hamburguer menu handlers.
    const openHamburguerMenu = () => sethamburguerMenuOpen(true);
    const closeHamburguerMenu = () => sethamburguerMenuOpen(false);

    return (
        <>
            {/* Hamburguer Menu Canvas */}
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

            {/* Navbar */}
            <section className="navbar">
                <div className="navbar-container">
                    <div className="nc-left">
                        <a href="#">
                            <img src={logoWhite} alt="Meat Palace Logo" />
                        </a>
                    </div>
                    <div className="nc-right">
                        <a className="navbar-link nbl-section" href="#"> Home </a>
                        <a className="navbar-link nbl-section" href="#"> About Us </a>
                        <a className="navbar-link nbl-section" href="#"> Shop </a>

                        <a className="navbar-link hamburguer-menu" 
                           href="#"
                           onClick={ openHamburguerMenu }
                        >
                            <HamburguerIcon className="hamburguer-icon" />
                        </a>

                        <a className="navbar-link" href="#"><LoginIcon className="login-icon" /></a>
                        <a className="navbar-link" href="#"><CartIcon className="cart-icon" /></a>
                    </div>
                </div>
            </section>
        </>
    )
}
