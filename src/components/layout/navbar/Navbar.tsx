import React, { useState } from 'react';
// Import logo
import logoWhite from '../../../assets/img/logo/logo-white.png';
// Import icons
import { ReactComponent as HamburguerIcon } from '../../../assets/icons/hamburguer-menu.svg';
import { ReactComponent as LoginIcon } from '../../../assets/icons/login.svg';
// Import components
import { HamburguerMenuCanvas } from './components/HamburguerMenuCanvas/HamburguerMenuCanvas';
import { LoginModal } from './components/loginModal/LoginModal';
import { CartWidget } from './components/cartWidget/CartWidget';
// Import css
import './NavBar.css';


export const NavBar = () => {

    // State that represents if the hamburguer menu is open or not.
    const [hamburguerMenuOpen, sethamburguerMenuOpen] = useState<boolean>(false);
    const openHamburguerMenu = () => sethamburguerMenuOpen(true);
    const closeHamburguerMenu = () => sethamburguerMenuOpen(false);

    // State that represents if the login modal is open or not.
    const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
    const openLoginModal = () => setLoginModalOpen(true);
    const closeLoginModal = () => setLoginModalOpen(false);

    return (
        <>
            {/* Hamburguer Menu Canvas */}
            <HamburguerMenuCanvas hamburguerMenuOpen={hamburguerMenuOpen} closeHamburguerMenu={closeHamburguerMenu} />

            {/* Login and Register Modal */}
            <LoginModal isOpen={loginModalOpen} />

            {/* Navbar */}
            <header className="navbar">
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="nc-left">
                        <a href="#">
                            <img src={logoWhite} alt="Meat Palace Logo" />
                        </a>
                    </div>

                    {/* Navigation */}
                    <nav className="nc-right">
                        <a className="navbar-link nbl-section" href="#"> Home </a>
                        <a className="navbar-link nbl-section" href="#"> About Us </a>
                        <a className="navbar-link nbl-section" href="#"> Shop </a>

                        {/* Hamburguer Menu */}
                        <a className="navbar-link hamburguer-menu" 
                           href="#"
                           onClick={ () => openHamburguerMenu() }>
                           <HamburguerIcon className="hamburguer-icon" />
                        </a>

                        {/* Login Button */}
                        <button className="navbar-link login-btn" onClick={ () => openLoginModal() }>
                            <LoginIcon className="login-icon" />
                        </button>

                        {/* Cart Button */}
                        <CartWidget itemsAmount={4} />
                    </nav>
                </div>
            </header>
        </>
    )
}
