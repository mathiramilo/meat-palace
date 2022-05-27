import React, { useState } from 'react';
// Import logo
import logoWhite from '../../../assets/img/logo/logo-white.png';
// Import icons
import { ReactComponent as HamburguerIcon } from '../../../assets/icons/hamburguer-menu.svg';
import { ReactComponent as LoginIcon } from '../../../assets/icons/login.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';
// Import components
import { HamburguerMenuCanvas } from './components/HamburguerMenuCanvas/HamburguerMenuCanvas';
import { LoginModal } from './components/loginModal/LoginModal';
import { CartWidget } from './components/cartWidget/CartWidget';
import { UserInfo } from './components/userInfo/UserInfo';
// Import interfaces
import { User } from '../../../services/interfaces/user';
// Import utilities
import { isObjEmpty } from '../../../utils/emptyObject';
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

    // State that represents the logged user.
    const [loggedUser, setLoggedUser] = useState<User>({} as User);
    const login = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        setLoggedUser({ email: 'mathiramilo2290@gmail.com', password: '1234' });
        closeLoginModal();
    };
    const logout = () => {
        setLoggedUser({} as User);
        closeUserInfo();
    };

    // State that represents if the user info modal is open or not.
    const [userInfoOpen, setUserInfoOpen] = useState<boolean>(false);
    const toggleUserInfo = () => setUserInfoOpen(!userInfoOpen);
    const closeUserInfo = () => setUserInfoOpen(false);
    
    return (
        <>
            {/* Hamburguer Menu Canvas */}
            <HamburguerMenuCanvas hamburguerMenuOpen={hamburguerMenuOpen} closeHamburguerMenu={closeHamburguerMenu} />

            {/* Login and Register Modal */}
            <LoginModal isOpen={loginModalOpen} login={login as () => void} />

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


                        {/* If there is a logged user => show the user button
                            Otherwise => show the login button */}

                        { !isObjEmpty(loggedUser) ?
                                // User Button
                                <div>
                                    <button className="user-btn" onClick={ () => toggleUserInfo() }>
                                        <UserIcon className="user-icon" />
                                    </button>
                                    <UserInfo isOpen={userInfoOpen} email={loggedUser.email} logout={ logout } />
                                </div>
                                :
                                // Login Button
                                <button className="navbar-link login-btn" onClick={ () => openLoginModal() }>
                                    <LoginIcon className="login-icon" />
                                </button> }


                        {/* Cart Button */}
                        <CartWidget itemsAmount={4} />
                    </nav>
                </div>
            </header>
        </>
    )
}
