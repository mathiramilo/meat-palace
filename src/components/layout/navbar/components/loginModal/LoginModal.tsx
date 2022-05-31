import React, { useEffect, useState } from 'react';
// Import images
import loginImage from '../../../../../assets/img/others/login.webp';
// Import css
import './LoginModal.css';

type props = {
    isOpen: boolean;
    login: (evt: React.FormEvent<HTMLFormElement>) => void;
    closeModal: () => void;
}

export const LoginModal = ({ isOpen, login, closeModal }: props) => {

    // State that represents if the modal is for login o sign up.
    const [isLogin, setIsLogin] = useState<boolean>(true);

    // Closes the modal if the user clicks outside of it
    const handleModalClose = (evt: any) => {
        let divID = evt.target.getAttribute('id');
        if (divID === 'login-modal-container') {
            setIsLogin(true);
            closeModal();
        }
    }

    return (
        <>
            {/* Modal Main Container */}
            <div 
                onClick={ handleModalClose } 
                style={ isOpen ? { opacity: '1', pointerEvents: 'all' } : { opacity: '0', pointerEvents: 'none' } } 
                className="login-modal-container" 
                id="login-modal-container"
            >

                {/* Login Modal */}
                <div 
                    style={ isOpen ? { transform: 'translateY(0)' } : { transform: 'translateY(-80%)' } } 
                    className="login-modal"
                >

                    {/* Modal Main Section */}
                    <div className="lm-main">

                        {/* Title */}
                        <h1 className="lmm-title"> { isLogin ? 'Login' : 'Sign Up' } </h1>
                        
                        {/* Form */}
                        <form onSubmit={(evt) => login(evt) } autoComplete="off" className="lmm-form">

                            {/* Form Field */}
                            <div className="form-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>

                            {/* Form Field Password */}
                            <div className="form-field">
                                <label htmlFor="password"> { isLogin ? 'Password' : 'Choose a Password' } </label>
                                <input type="password" name="password" id="password" />

                                {/* If the modal is for login => show the choice to remember me */}
                                { isLogin ? 
                                <div className="remember-me">
                                    <input type="checkbox" name="remember-me" id="remember-me" />
                                    <label htmlFor="remember-me">Remember me</label>
                                </div> : <></> }
                            </div>
                            
                            {/* Form Field Repeat Password for Register Modal */}
                            { !isLogin ?
                            <div className="form-field">
                                <label htmlFor="repeat-password">Repeat Password</label>
                                <input type="password" name="repeat-password" id="repeat-password" />
                            </div> : <></> }
                            
                            {/* Submit */}
                            { isLogin ? <input className="login-submit-btn" type="submit" value="Login" />
                                      : <input className="login-submit-btn" type="submit" value="Sign Up" /> }
                        </form>
                            
                        {/* Toggle Login/Signup */}
                        <div className="lmm-signup">
                            <p> { isLogin ? 'Dont have an account yet?' : 'Already have an account ?' } </p>
                            <button onClick={ () => setIsLogin(!isLogin) }>
                                { isLogin ? 'Sign Up' : 'Login' } 
                            </button>
                        </div>
                    </div>

                    {/* Modal Image Section */}
                    <div className="lm-img">
                        <img src={loginImage} alt="T-Bone steaks" />
                    </div>
                </div>
            </div>
        </>
    )
}
