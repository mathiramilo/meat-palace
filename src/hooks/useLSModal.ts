import React, { useState } from 'react';

type params = {
    closeModal: () => void;
    login: (email: string, password: string) => void;
    signup: (email: string, password: string) => void;
}

export const useLSModal = ({ closeModal, login, signup }: params) => {

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

                signup(email, password);
                setIsLogin(true);
                resetInputs();
                resetErrors();

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