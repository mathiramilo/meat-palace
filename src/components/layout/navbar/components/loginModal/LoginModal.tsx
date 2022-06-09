import React, { useEffect, useState } from 'react';
// Import images
import loginImage from 'assets/img/others/login.webp';
// Import css
import './LoginModal.css';

type props = {
    isOpen: boolean;
    login: (email: string, password: string) => void;
    signup: (email: string, password: string) => void;
    closeModal: () => void;
}

export const LoginModal = ({ isOpen, login, signup, closeModal }: props) => {

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

    /* Form Control */
    
    // States email, password and the password repeat that represents the actual inputs of the form.
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');

    // Resets the inputs.
    const resetInputs = () => {
        setEmail('');
        setPassword('');
        setRepeatPassword('');
    }

    // State that represents errors in the form.
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });
    
    // Function that resets the errors.
    const resetErrors = () => setErrors({email: '', password: '', repeatPassword: ''});

    // Function that validates the login and signup form.
    const formValidation = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        // For debugging.
        console.log(errors);
        console.log(email);
        console.log(password);
        console.log(repeatPassword);

        // Login form control.
        if (isLogin) {

            // Email and Password not empty.
            if (email !== '' && password !== '') {

                // Verifies if email and password combination is correct.
                if (email === 'mathiramilo2290@gmail.com' && password === '12345678') {
                    // Login and reset the form.
                    login(email, password);
                    resetInputs(); 
                    resetErrors();
                } else {
                    // Wrong Email/Password combination.
                    setErrors({
                        ...errors,
                        email: 'Email/Password incorrect',
                        password: 'Email/Password incorrect'
                    });
                } 

            } else {
                // Email or Password Empty.
                email === '' && setErrors({...errors, email: 'This field is required'});
                password === '' && setErrors({...errors, password: 'This field is required'});
            }

        // Signup form control.
        } else {

            // The data entered by the user satisfies all the requirements.
            if (email !== '' && password !== '' && repeatPassword !== '' && password.length > 6 && password.match(/\d/) && password === repeatPassword) {

                signup(email, password);
                setIsLogin(true);
                resetInputs();
                resetErrors();

            } else {

                // Email, password or repeatPassword are empty.
                if (email === '' || password === '' || repeatPassword === '') {
                    email === '' && setErrors({...errors, email: 'This field is required'});
                    password === '' && setErrors({...errors, password: 'This field is required'});
                    repeatPassword === '' && setErrors({...errors, repeatPassword: 'This field is required'});
                } else {
                    // All fields are completed.
                    if (password.length <= 6) {
                        // Password length is not greater than 6.
                        setErrors({...errors, password: 'Minimum 7 characters'});
                    } else if (!password.match(/\d/)) {
                        // Password doesn`t contain a number.
                        setErrors({...errors, password: 'Must contain a number'});
                    } else if (password !== repeatPassword) {
                        // Passwords don`t coincide.
                        setErrors({...errors, password: 'Passwords don`t coincide', repeatPassword: 'Passwords don`t coincide'});
                    }
                } 

            }
        }
    }

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
