import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import logo
import logoWhite from 'assets/img/logo/logo-white.png';
// Import icons
import { ReactComponent as HamburguerIcon } from 'assets/icons/hamburguer-menu.svg';
import { ReactComponent as LoginIcon } from 'assets/icons/login.svg';
import { ReactComponent as UserIcon } from 'assets/icons/user.svg';
// Import components
import { HamburguerMenuCanvas } from './components/HamburguerMenuCanvas/HamburguerMenuCanvas';
import { LoginModal } from './components/loginModal/LoginModal';
import { CartWidget } from './components/cartWidget/CartWidget';
import { UserInfo } from './components/userInfo/UserInfo';
// Import interfaces
import { User } from 'services/interfaces/user';
// Import utilities
import { isObjEmpty } from 'utils/emptyObject';
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

    /* Login/Signup */

    // State that represents the logged user.
    const [loggedUser, setLoggedUser] = useState<User>({} as User);

    // login() sets the logged user and closes the modal.
    const login = (email: string, password: string) => {
        setLoggedUser({ email: email, password: password });
        closeLoginModal();
        loginToast(loggedUser?.email);
    };

    // logout() sets an empty user as logged user and closes de user info.
    const logout = () => {
        setLoggedUser({} as User);
        closeUserInfo();
        logoutToast();
    };

    // signup() sets the logged user and registrates him in the database.
    const signup = (email: string, password: string) => {
        setLoggedUser({ email: email, password: password });
        closeLoginModal();
        signupToast(loggedUser?.email);
    }

    // State that represents if the user info modal is open or not.
    const [userInfoOpen, setUserInfoOpen] = useState<boolean>(false);
    const toggleUserInfo = () => setUserInfoOpen(!userInfoOpen);
    const closeUserInfo = () => setUserInfoOpen(false);

    // Login toast
    const loginToast = (email: string) => toast.info(`Logged in as ${email}`, {
        className: 'toast-custom'
    })

    // Logout toast
    const logoutToast = () => toast.info('Logged out', {
        className: 'toast-custom'
    });

    // Signup toast
    const signupToast = (email: string) => toast.info(`Registered as ${email}`, {
        className: 'toast-custom'
    })
    
    return (
        <>
            {/* Hamburguer Menu Canvas */}
            <HamburguerMenuCanvas hamburguerMenuOpen={hamburguerMenuOpen} closeHamburguerMenu={closeHamburguerMenu} />

            {/* Login and Register Modal */}
            <LoginModal isOpen={loginModalOpen} login={login} signup={signup} closeModal={closeLoginModal} />

            {/* Navbar */}
            <header className="navbar">
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="nc-left">
                        <Link to='/'>
                            <img src={logoWhite} alt="Meat Palace Logo" />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="nc-right">
                        <Link className="navbar-link nbl-section" to='/'> Home </Link>
                        <Link className="navbar-link nbl-section" to='/#about-us'> About Us </Link>
                        <Link className="navbar-link nbl-section" to='/shop/all'> Shop </Link>

                        {/* Hamburguer Menu */}
                        <button 
                            className="navbar-link hamburguer-menu" 
                            onClick={ () => openHamburguerMenu() }
                        >
                           <HamburguerIcon className="hamburguer-icon" />
                        </button>


                        {/* If there is a logged user => show the user button
                            Otherwise => show the login button */}

                        { !isObjEmpty(loggedUser) ?
                                // User Button
                                <div>
                                    <button className="user-btn" onClick={ () => toggleUserInfo() }>
                                        <UserIcon className="user-icon" />
                                    </button>
                                    <UserInfo 
                                        isOpen={userInfoOpen} 
                                        email={loggedUser.email} logout={logout} closeUserInfo={closeUserInfo} 
                                    />
                                </div>
                                :
                                // Login Button
                                <button 
                                    className="navbar-link login-btn" 
                                    onClick={ () => openLoginModal() }
                                >
                                    <LoginIcon className="login-icon" />
                                </button> }


                        {/* Cart Button */}
                        <Link to='/cart'>
                            <CartWidget itemsAmount={4} />
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
