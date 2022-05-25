import React, { useState } from 'react';
// Import logo
import logoWhite from '../../../assets/img/logo/logo-white.png';
// Import icons
import { ReactComponent as CartIcon } from '../../../assets/icons/cart.svg';
import { ReactComponent as HamburguerIcon } from '../../../assets/icons/hamburguer-menu.svg';
import { ReactComponent as LoginIcon } from '../../../assets/icons/login.svg';
// Import components
import { HamburguerMenuCanvas } from './components/HamburguerMenuCanvas/HamburguerMenuCanvas';
import { LoginModal } from './components/loginModal/LoginModal';
// Import css
import './styles/Navbar.css';


export const Navbar = () => {

    // State that represents if the hamburguer menu is open or not.
    const [hamburguerMenuOpen, sethamburguerMenuOpen] = useState<boolean>(false);
    const openHamburguerMenu = () => sethamburguerMenuOpen(true);
    const closeHamburguerMenu = () => sethamburguerMenuOpen(false);

    // State that checks if the login modal is open.
    const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
    const openLoginModal = () => setLoginModalOpen(true);
    const closeLoginModal = () => setLoginModalOpen(false);

    return (
        <>
            {/* Hamburguer Menu Canvas */}
            <HamburguerMenuCanvas hamburguerMenuOpen={hamburguerMenuOpen} closeHamburguerMenu={closeHamburguerMenu} />

            <LoginModal isOpen={loginModalOpen} />

            {/* Navbar */}
            <header className="navbar">
                <div className="navbar-container">
                    <div className="nc-left">
                        <a href="#">
                            <img src={logoWhite} alt="Meat Palace Logo" />
                        </a>
                    </div>
                    <nav className="nc-right">
                        <a className="navbar-link nbl-section" href="#"> Home </a>
                        <a className="navbar-link nbl-section" href="#"> About Us </a>
                        <a className="navbar-link nbl-section" href="#"> Shop </a>

                        <a className="navbar-link hamburguer-menu" 
                           href="#"
                           onClick={ openHamburguerMenu }
                        >
                            <HamburguerIcon className="hamburguer-icon" />
                        </a>

                        <button className="navbar-link login-btn" onClick={ openLoginModal }>
                            <LoginIcon className="login-icon" />
                        </button>

                        <button className="navbar-link cart-btn">
                            <CartIcon className="cart-icon" />
                        </button>
                    </nav>
                </div>
            </header>
        </>
    )
}
