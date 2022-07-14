import React, { useContext, useState } from 'react';
// Hooks
import { useAuth } from './useAuth';
// Toasts
import { loginToast, signupToast } from 'utils/toasts';
// Contexts
import { LSModalContext } from 'contexts/LSModalContext';


export const useLSModal = () => {

    const { signup, login } = useAuth();
    const { closeModal } = useContext(LSModalContext);

    // State that represents if the modal is for login or sign up.
    const [isLogin, setIsLogin] = useState<boolean>(true);

    // Closes the modal if the user clicks outside of it
    const handleModalClose = (evt: any) => {
        let divID = evt.target.getAttribute('id');
        if (divID === 'login-modal-container') {
            setIsLogin(true);
            resetInputs();
            resetErrors();
            closeModal();
        }
    }
    
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
    const resetErrors = () => setErrors({ email: '', password: '', repeatPassword: '' });

    const handleLogin = async (email: string, password: string) => {
        try {
            // Login, reset the form & close modal.
            await login(email, password);
            resetInputs();
            resetErrors();
            closeModal();
            loginToast(email);
        } catch (error) {
            // Wrong Email/Password combination, email has not been registered or any other error.
            setErrors({
                ...errors,
                email: 'Email/Password incorrect',
                password: 'Email/Password incorrect'
            });
        }
    }

    const handleSignup = async (email: string, password: string) => {
        try {
            await signup(email, password);
            setIsLogin(true);
            resetInputs();
            resetErrors();
            closeModal();
            signupToast(email);
        } catch (error) {
            setErrors({
                ...errors,
                email: 'Email not valid, try another',
                password: '',
                repeatPassword: ''
            });
        }
    }

    // Function that validates the login and signup form.
    const formValidation = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        // Login form control.
        if (isLogin) {
            // Email and Password not empty.
            if (email !== '' && password !== '') {
                // Verifies if email and password combination is correct.
                handleLogin(email, password);

            } else {
                // Email or Password Empty.
                if (email === '' && password === '') {
                    setErrors({...errors, email: 'This field is required', password: 'This field is required'});
                } else if (email === '') {
                    setErrors({...errors, email: 'This field is required', password: ''});
                } else {
                    setErrors({...errors, password: 'This field is required', email: ''});
                }
            }

        // Signup form control.
        } else {
            
            // The data entered by the user satisfies all the requirements.
            if (email !== '' && password !== '' && repeatPassword !== '' && password.length > 6 && password.match(/\d/) && password === repeatPassword) {

                handleSignup(email, password);

            } else {

                // Email, password or repeatPassword are empty.
                if (email === '' || password === '' || repeatPassword === '') {
                    setErrors({
                        ...errors, 
                        email: email === '' ? 'This field is required' : '',
                        password: password === '' ? 'This field is required' : '',
                        repeatPassword: repeatPassword === '' ? 'This field is required' : ''
                    })
                } else {
                    // All fields are completed.
                    if (password.length <= 6) {
                        // Password length is not greater than 6.
                        setErrors({...errors, password: 'Minimum 7 characters', email: '', repeatPassword: ''});
                    } else if (!password.match(/\d/)) {
                        // Password doesn`t contain a number.
                        setErrors({...errors, password: 'Must contain a number', email: '', repeatPassword: ''});
                    } else if (password !== repeatPassword) {
                        // Passwords don`t coincide.
                        setErrors({...errors, password: 'Passwords don`t coincide', repeatPassword: 'Passwords don`t coincide', email: ''});
                    }
                } 

            }
        }
    }

    return { handleModalClose, formValidation, isLogin, setIsLogin, errors, resetErrors, email, setEmail, password, setPassword, repeatPassword, setRepeatPassword };
}