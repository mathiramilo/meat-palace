import React, { useState } from 'react';
// Import logo
import logoWhite from '../../../assets/img/logo/logo-white.png';
// Import icons
import { ReactComponent as LoginIcon } from '../../../assets/icons/login.svg';
import { ReactComponent as CartIcon } from '../../../assets/icons/cart.svg';
import { ReactComponent as HamburguerIcon } from '../../../assets/icons/hamburguer-menu.svg';
// Import css
import './styles/Navbar.css';
// Import components
import { HamburguerMenuCanvas } from './components/HamburguerMenuCanvas/HamburguerMenuCanvas';


export const Navbar = () => {

    // State that represents if the hamburguer menu is open or not.
    const [hamburguerMenuOpen, sethamburguerMenuOpen] = useState<boolean>(false);
    // Open and close hamburguer menu handlers.
    const openHamburguerMenu = () => sethamburguerMenuOpen(true);
    const closeHamburguerMenu = () => sethamburguerMenuOpen(false);

    return (
        <>
            {/* Hamburguer Menu Canvas */}
            <HamburguerMenuCanvas hamburguerMenuOpen={hamburguerMenuOpen} closeHamburguerMenu={closeHamburguerMenu} />

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
