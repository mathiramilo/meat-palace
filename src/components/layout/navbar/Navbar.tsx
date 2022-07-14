import { useContext, useState } from 'react';
// Router
import { Link } from 'react-router-dom';
// Toasts
import { logoutToast } from 'utils/toasts';
// Logo
import logoWhite from 'assets/img/logo/logo-white.png';
// Icons
import { ReactComponent as HamburguerIcon } from 'assets/icons/hamburguer-menu.svg';
import { ReactComponent as LoginIcon } from 'assets/icons/login.svg';
import { ReactComponent as UserIcon } from 'assets/icons/user.svg';
// Components
import { HamburguerMenuCanvas } from './components/HamburguerMenuCanvas/HamburguerMenuCanvas';
import { LoginModal } from './components/loginModal/LoginModal';
import { CartWidget } from './components/cartWidget/CartWidget';
import { UserInfo } from './components/userInfo/UserInfo';
// Auth
import { useAuth } from 'hooks/useAuth';
// Styles
import './NavBar.css';
import { LSModalContext } from 'contexts/LSModalContext';


export const NavBar = () => {

    // State that represents if the hamburguer menu is open or not.
    const [hamburguerMenuOpen, sethamburguerMenuOpen] = useState<boolean>(false);
    const openHamburguerMenu = () => sethamburguerMenuOpen(true);
    const closeHamburguerMenu = () => sethamburguerMenuOpen(false);

    // Function openModal() from LSModalContext.
    const { openModal } = useContext(LSModalContext);

    // State that represents if the user info modal is open or not.
    const [userInfoOpen, setUserInfoOpen] = useState<boolean>(false);
    const toggleUserInfo = () => setUserInfoOpen(!userInfoOpen);
    const closeUserInfo = () => setUserInfoOpen(false);

    /* Login/Signup */

    // Get the user from AuthContext
    const { user, logout } = useAuth();

    // logout() sets an empty user as logged user and closes de user info.
    const handleLogout = () => {
        logout();
        closeUserInfo();
        logoutToast();
    };
    
    return (
        <>
            {/* Hamburguer Menu Canvas */}
            <HamburguerMenuCanvas hamburguerMenuOpen={hamburguerMenuOpen} closeHamburguerMenu={closeHamburguerMenu} />

            {/* Login and Register Modal */}
            <LoginModal />

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

                        { user ?
                                // User Button
                                <div>
                                    <button className="user-btn" onClick={ () => toggleUserInfo() }>
                                        <UserIcon className="user-icon" />
                                    </button>
                                    <UserInfo 
                                        isOpen={userInfoOpen} 
                                        email={user.email} logout={handleLogout} closeUserInfo={closeUserInfo} 
                                    />
                                </div>
                                :
                                // Login Button
                                <button 
                                    className="navbar-link login-btn" 
                                    onClick={ () => openModal() }
                                >
                                    <LoginIcon className="login-icon" />
                                </button> }


                        {/* Cart Button */}
                        <Link to='/cart'>
                            <CartWidget />
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
