import React, {useContext, useEffect, useState} from 'react';
// Components
import { ViewHeader } from 'components/common/viewHeader/ViewHeader';
import { BillingCartResume } from './components/billingCartResume/BillingCartResume';
// Contexts
import { CartContext } from 'contexts/CartContext';
// Utils
import { containNumbers, containLetters } from 'utils/formValidation';
// Styles
import './Billing.css';


// This view component must get the cart info in order to display the products that the user is going to buy.
export const Billing = () => {

    const { expressShipping, cardPayment, setExpressShipping, setCardPayment, getSubtotal, getTotal } = useContext(CartContext);

    // States that represents the actual inputs of the form.
    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [direction, setDirection] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    // State that represents errors in the form.
    const [errors, setErrors] = useState({
        name: '',
        lastname: '',
        country: '',
        city: '',
        direction: '',
        postalCode: '',
        phone: ''
    });

    // Resets the inputs.
    const resetInputs = () => {
        setName('');
        setLastname('');
        setCountry('');
        setCity('');
        setDirection('');
        setPostalCode('');
        setPhone('');
    }
    
    // Function that resets the errors.
    const resetErrors = () => setErrors({
        name: '', 
        lastname: '', 
        country: '', 
        city: '', 
        direction: '', 
        postalCode: '', 
        phone: '' 
    });

    // Form Validation.
    const formValidation = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        // if there is an empty input => error(all fields are required).
        if (name === '' || lastname === '' || country === '' || city === '' || direction === '' || postalCode === '' || phone === '') {
            setErrors({
                name: name === '' ? 'This field is required' : '',
                lastname: lastname === '' ? 'This field is required' : '',
                country: country === '' ? 'This field is required' : '',
                city: city === '' ? 'This field is required' : '',
                direction: direction === '' ? 'This field is required' : '',
                postalCode: postalCode === '' ? 'This field is required' : '',
                phone: phone === '' ? 'This field is required' : ''
            });
            window.scrollTo(0, 0);
        } else {
            // All fields are complete.

            // Name, lastname or city contains numbers or direction don't.
            if (containNumbers(name) || containNumbers(lastname) || containNumbers(city) || !containNumbers(direction) || !containLetters(direction)) {
                setErrors({
                    name: containNumbers(name) ? 'Numbers are not valid here' : '',
                    lastname: containNumbers(lastname) ? 'Numbers are not valid here' : '',
                    country: '',
                    city: containNumbers(city) ? 'Numbers are not valid here' : '',
                    direction: !containNumbers(direction) || !containLetters(direction) ? 'Letters and numbers required here' : '',
                    postalCode: '',
                    phone: '',
                });
                window.scrollTo(0, 0);
            } else {
                // Name, lastname, city, postalCode and phone length.
                if (name.length < 2 || lastname.length < 2 || city.length < 2 || postalCode.length !== 5 || phone.length < 6) {
                    setErrors({
                        name: name.length < 2 ? 'Too short' : '',
                        lastname: lastname.length < 2 ? 'Too short' : '',
                        country: '',
                        city: city.length < 2 ? 'Too short' : '',
                        direction: '',
                        postalCode: postalCode.length !== 5 ? 'Postal code must have 5 digits' : '',
                        phone: phone.length < 6 ? 'Too short' : '',
                    })
                    window.scrollTo(0, 0);
                } else {
                    // Form Validation Passed.
                    alert('Form validation have been passed');
                    resetInputs();
                    resetErrors();
                    window.scrollTo(0, 0);
                }
            }
        }
    }

    /* Scroll to top when the component
    is rendered for the first time. */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="billing">
            <ViewHeader title={'Finish Buying'} />

            {/* Main grid */}
            <form 
                autoComplete="off" 
                className="billing-main-grid"
                onSubmit={(evt) => formValidation(evt)}
            >

                {/* Billing information */}
                <div className="billing-information">
                    <h3 className="bi-title">Billing Information</h3>
                    
                    {/* Form fields */}
                    <div className="bi-fields">

                        {/* Name and Lastname */}
                        <div className="name-lastname">
                            <div className="form-field">
                                <label htmlFor="name">
                                    Name
                                    <span
                                        style={
                                            errors.name !== '' ? {animation: 'error 0.5s'} : {}
                                        } 
                                        className="form-error"
                                    > 
                                        {errors.name !== '' && `(${errors.name})`}
                                    </span> 
                                </label>
                                <input 
                                    style={
                                        errors.name !== '' ? {borderColor: 'var(--red-100)'} : {}
                                    }
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    value={name} 
                                    onChange={evt => setName(evt.target.value)} 
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="lastname">
                                    Lastname
                                    <span
                                        style={
                                            errors.lastname !== '' ? {animation: 'error 0.5s'} : {}
                                        } 
                                        className="form-error"
                                    > 
                                        {errors.lastname !== '' && `(${errors.lastname})`}
                                    </span> 
                                </label>
                                <input 
                                    style={
                                        errors.lastname !== '' ? {borderColor: 'var(--red-100)'} : {}
                                    }
                                    type="text" 
                                    name="lastname" 
                                    id="lastname"
                                    value={lastname}
                                    onChange={(evt) => setLastname(evt.target.value)}
                                />
                            </div>
                        </div>

                        {/* Country/Region */}
                        <div className="form-field">
                            <label htmlFor="country">
                                Country/Region
                                <span
                                    style={
                                        errors.country !== '' ? {animation: 'error 0.5s'} : {}
                                    } 
                                    className="form-error"
                                > 
                                    {errors.country !== '' && `(${errors.country})`}
                                </span> 
                            </label>
                            <select 
                                style={
                                    errors.country !== '' ? {borderColor: 'var(--red-100)'} : {}
                                }
                                name="country" 
                                id="country" 
                                value={country} 
                                onChange={(evt) => setCountry(evt.target.value)}
                            >
                                <option value="" disabled></option>
                                <option value="uruguay">Uruguay</option>
                                <option value="argentina">Argentina</option>
                                <option value="brazil">Brazil</option>
                                <option value="eeuu">United States</option>
                                <option value="china">China</option>
                            </select>
                        </div>

                        {/* Town/City */}
                        <div className="form-field">
                            <label htmlFor="city">
                                Town/City
                                <span
                                    style={
                                        errors.city !== '' ? {animation: 'error 0.5s'} : {}
                                    } 
                                    className="form-error"
                                > 
                                    {errors.city !== '' && `(${errors.city})`}
                                </span> 
                            </label>
                            <input 
                                style={
                                    errors.city !== '' ? {borderColor: 'var(--red-100)'} : {}
                                }
                                type="text" 
                                name="city" 
                                id="city"
                                value={city} 
                                onChange={evt => setCity(evt.target.value)} 
                            />
                        </div>

                        {/* Streen and house number */}
                        <div className="form-field">
                            <label htmlFor="street">
                                Street & House Number
                                <span
                                    style={
                                        errors.direction !== '' ? {animation: 'error 0.5s'} : {}
                                    } 
                                    className="form-error"
                                > 
                                    {errors.direction !== '' && `(${errors.direction})`}
                                </span> 
                            </label>
                            <input 
                                style={
                                    errors.direction !== '' ? {borderColor: 'var(--red-100)'} : {}
                                }
                                type="text" 
                                name="street" 
                                id="street"
                                value={direction} 
                                onChange={evt => setDirection(evt.target.value)} 
                            />
                        </div>

                        {/* Postal Code and Phone */}
                        <div className="postal-phone">
                            <div className="form-field">
                                <label htmlFor="postal-code">
                                    Postal Code
                                    <span
                                        style={
                                            errors.postalCode !== '' ? {animation: 'error 0.5s'} : {}
                                        } 
                                        className="form-error"
                                    > 
                                        {errors.postalCode !== '' && `(${errors.postalCode})`}
                                </span>     
                                </label>
                                <input 
                                    style={
                                        errors.postalCode !== '' ? {borderColor: 'var(--red-100)'} : {}
                                    }
                                    type="number" 
                                    name="postal_code" 
                                    id="postal-code"
                                    value={postalCode} 
                                    onChange={evt => setPostalCode(evt.target.value)} 
                                />
                            </div>
                            <div className="form-field">
                                <label htmlFor="phone">
                                    Phone
                                    <span
                                        style={
                                            errors.phone !== '' ? {animation: 'error 0.5s'} : {}
                                        } 
                                        className="form-error"
                                    > 
                                        {errors.phone !== '' && `(${errors.phone})`}
                                </span> 
                                </label>
                                <input 
                                    style={
                                        errors.phone !== '' ? {borderColor: 'var(--red-100)'} : {}
                                    }
                                    type="number" 
                                    name="phone" 
                                    id="phone"
                                    value={phone} 
                                    onChange={evt => setPhone(evt.target.value)} 
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Order resume */}
                <div className="order-resume">
                    <h3 className="or-title">Your Order</h3>

                    {/* Cart Resume */}
                    <BillingCartResume />

                    {/* Cart Cost */}
                    <div className="or-cost">
                        <div className="orc-subtotal">
                            <span>Subtotal</span>
                            <span>US$ {getSubtotal().toFixed(2)}</span>
                        </div>
                        <div className="orc-shipping">
                            <span>Shipping</span>
                            <div className="orcs-select">
                                <div>
                                    <input 
                                        type="radio" 
                                        name="shipping_type" 
                                        id="standard"
                                        checked={!expressShipping ? true : false}
                                        onChange={() => setExpressShipping(false)}
                                    />
                                    <label htmlFor="standard">Standard Shipping (72-120 hs)</label>
                                </div>
                                <div>
                                    <input 
                                        type="radio" 
                                        name="shipping_type" 
                                        id="express"
                                        checked={expressShipping ? true : false}
                                        onChange={() => setExpressShipping(true)} 
                                    />
                                    <label htmlFor="express">Express Shipping (48-72 hs)</label>
                                </div>
                            </div>
                            <div className="orcs-prices">
                                <span>US$ 18.00</span>
                                <span>US$ 12.40</span>
                            </div>
                        </div>
                        <div className="orc-total orc-subtotal">
                            <span>Total</span>
                            <span>US$ {getTotal().toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Payment Options */}
                    <div className="payment-options">
                        <div>
                            <input 
                                type="radio" 
                                name="payment_type" 
                                id="delivery" 
                                checked={!cardPayment ? true : false}
                                onChange={() => setCardPayment(false)}
                            />
                            <label htmlFor="delivery">Payment on delivery</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="payment_type" 
                                id="card" 
                                checked={cardPayment ? true : false}
                                onChange={() => setCardPayment(true)}
                            />
                            <label htmlFor="card">Payment with credit / debit card</label>
                        </div>
                    </div>

                    {/* Finish Order Button */}
                    <input type="submit" value="Finish Order" className="button finish-order-btn" />
                </div>

            </form>
        </div>
    )
}