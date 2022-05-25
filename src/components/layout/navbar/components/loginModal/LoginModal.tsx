import React, { useState } from 'react';
// Import images
import loginImage from '../../../../../assets/img/others/login.webp';
// Import css
import './LoginModal.css';

type props = {
    isOpen: boolean;
}

export const LoginModal = ({ isOpen }: props) => {

    // State that represents if the modal is for login o sign up.
    const [isLogin, setIsLogin] = useState<boolean>(false);

    // Closes the modal if the user clicks outside
    const handleModalClose = (evt: React.MouseEvent<HTMLDivElement>) => {
        
    }

    return (
        <>
            <div onClick={ handleModalClose } style={ isOpen ? { opacity: '1', pointerEvents: 'all' } : { opacity: '0', pointerEvents: 'none' } } className="login-modal-container" id="login-modal-container">
                <div style={ isOpen ? { transform: 'translateY(0)' } : { transform: 'translateY(-80%)' } } className="login-modal">
                    {/* Modal main */}
                    <div className="lm-main">
                        <h1 className="lmm-title"> { isLogin ? 'Login' : 'Sign Up' } </h1>
                        
                        <form autoComplete="off" className="lmm-form">
                            <div className="form-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>

                            <div className="form-field">
                                <label htmlFor="password"> { isLogin ? 'Password' : 'Choose a Password' } </label>
                                <input type="password" name="password" id="password" />
                                { isLogin ? 
                                <div className="remember-me">
                                    <input type="checkbox" name="remember-me" id="remember-me" />
                                    <label htmlFor="remember-me">Remember me</label>
                                </div> : <></> }
                            </div>

                            { !isLogin ?
                            <div className="form-field">
                                <label htmlFor="repeat-password">Repeat Password</label>
                                <input type="password" name="repeat-password" id="repeat-password" />
                            </div> : <></> }
                            
                            { isLogin ? <input className="login-submit-btn" type="submit" value="Login" />
                                      : <input className="login-submit-btn" type="submit" value="Sign Up" /> }
                        </form>

                        <div className="lmm-signup">
                            <p> { isLogin ? 'Dont have an account yet?' : 'Already have an account ?' } </p>
                            <button onClick={ () => setIsLogin(!isLogin) }> { isLogin ? 'Sign Up' : 'Login' } </button>
                        </div>
                    </div>
                    {/* Modal image */}
                    <div className="lm-img">
                        <img src={loginImage} alt="T-Bone steaks" />
                    </div>
                </div>
            </div>
        </>
    )
}
