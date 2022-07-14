// Images
import loginImage from 'assets/img/others/login.webp';
import { LSModalContext } from 'contexts/LSModalContext';
// Hooks
import { useLSModal } from 'hooks/useLSModal';
import { useContext } from 'react';
// Styles
import './LoginModal.css';


export const LoginModal = () => {
    
    /* LS Modal Context. */
    const { isOpen, closeModal } = useContext(LSModalContext);

    /* Obtain all the necesary states and functions from
    the hook useLSForm(). */
    const { handleModalClose, formValidation, isLogin, setIsLogin, errors, resetErrors, email, setEmail, password, setPassword, repeatPassword, setRepeatPassword } = useLSModal();

    return (
        <>
            {/* Modal Main Container */}
            <div 
                onClick={ handleModalClose } 
                style={ 
                    isOpen ? { opacity: '1', pointerEvents: 'all' } : { opacity: '0', pointerEvents: 'none' } 
                } 
                className="login-modal-container" 
                id="login-modal-container"
            >

                {/* Login Modal */}
                <div 
                    style={ 
                        isOpen ? { transform: 'translateY(0)' } : { transform: 'translateY(-80%)' } 
                    } 
                    className="login-modal"
                >

                    {/* Modal Main Section */}
                    <div className="lm-main">

                        {/* Title */}
                        <h1 className="lmm-title"> { isLogin ? 'Login' : 'Sign Up' } </h1>
                        
                        {/* Form */}
                        <form 
                            onSubmit={evt => formValidation(evt)} 
                            className="lmm-form"
                            autoComplete="off" 
                        >

                            {/* Form Field */}
                            <div className="form-field">
                                <label htmlFor="email">
                                    Email 
                                    <span
                                        style={
                                            errors.email !== '' ? {animation: 'error 0.5s'} : {}
                                        } 
                                        className="form-error"
                                    > 
                                        {errors.email !== '' && `(${errors.email})`}
                                    </span> 
                                </label>
                                <input 
                                    style={
                                        errors.email !== '' ? {borderColor: 'var(--red-100)'} : {}
                                    }
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={evt => setEmail(evt.target.value)} 
                                />
                            </div>

                            {/* Form Field Password */}
                            <div className="form-field">
                                <label htmlFor="password">
                                    { isLogin ? 'Password' : 'Choose a Password' }
                                    <span className="form-error"> 
                                        {errors.password !== '' && `(${errors.password})`}
                                    </span> 
                                </label>
                                <input 
                                    style={
                                        errors.password !== '' ? {borderColor: 'var(--red-100)'} : {}
                                    }
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    value={password} 
                                    onChange={evt => setPassword(evt.target.value)} 
                                />

                                {/* If the modal is for login => show the choice to remember me */}
                                { isLogin ? 
                                <div className="remember-me">
                                    <input 
                                        type="checkbox" name="remember-me" id="remember-me" 
                                    />
                                    <label htmlFor="remember-me">Remember me</label>
                                </div> : <></> }
                            </div>
                            
                            {/* Form Field Repeat Password for Register Modal */}
                            { !isLogin ?
                            <div className="form-field">
                                <label htmlFor="repeat-password">
                                    Repeat Password
                                    <span className="form-error"> 
                                        {errors.repeatPassword !== '' && `(${errors.repeatPassword})`}
                                    </span> 
                                </label>
                                <input 
                                    style={
                                        errors.repeatPassword !== '' ? {borderColor: 'var(--red-100)'} : {}
                                    }
                                    type="password" name="repeat-password" id="repeat-password"
                                    value={repeatPassword}
                                    onChange={evt => setRepeatPassword(evt.target.value)} 
                                />
                            </div> : <></> }
                            
                            {/* Submit */}
                            { isLogin ? <input className="login-submit-btn" type="submit" value="Login" />
                                      : <input className="login-submit-btn" type="submit" value="Sign Up" /> }
                        </form>
                            
                        {/* Toggle Login/Signup */}
                        <div className="lmm-signup">
                            <p> { isLogin ? 'Dont have an account yet?' : 'Already have an account ?' } </p>
                            <button onClick={ () => {
                                setIsLogin(!isLogin);
                                setEmail('');
                                setPassword('');
                                setRepeatPassword(''); 
                                resetErrors();
                            }}>
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
