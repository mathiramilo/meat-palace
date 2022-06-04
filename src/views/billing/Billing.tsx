import React from 'react';
// Import components
import { ViewHeader } from 'components/common/viewHeader/ViewHeader';
import { BillingCartResume } from './components/billingCartResume/BillingCartResume';
// Import styles
import './Billing.css';
// Import interfaces
import { Category, Product } from 'services/interfaces/product.d';


// Products array for testing the BillingCartResume component
const TEST_PRODUCTS: Product[] = [
    {
        id: 0,
        name: 'Wagyu Tomahawk 1kg',
        price: 38.60,
        description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
        img: 'tomahawk-wagyu.jpg',
        category: Category.Wagyu,
        cartAmount: 5,
        stock: 25
    },
    {
        id: 1,
        name: 'Wagyu Ribeye 1kg',
        price: 36.40,
        description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
        img: 'ribeye-wagyu.jpg',
        category: Category.Wagyu,
        cartAmount: 1,
        stock: 25
    },
    {
        id: 2,
        name: 'Wagyu Outside Skirt 1kg',
        price: 32.90,
        description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
        img: 'outside-skirt-wagyu.webp',
        category: Category.Wagyu,
        cartAmount: 2,
        stock: 25
    },
    {
        id: 3,
        name: 'Wagyu Short Ribs 1kg',
        price: 37.40,
        description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
        img: 'short-ribs-wagyu.jpg',
        category: Category.Wagyu,
        cartAmount: 1,
        stock: 25
    }
]


// This view component must get the cart info in order to display the products that the user is going to buy.
export const Billing = () => {

    // I have to code the form control and validation.

    return (
        <div className="billing">
            <ViewHeader title={'Finish Buying'} />

            {/* Main grid */}
            <form autoComplete="off" className="billing-main-grid">

                {/* Billing information */}
                <div className="billing-information">
                    <h3 className="bi-title">Billing Information</h3>
                    
                    {/* Form fields */}
                    <div className="bi-fields">

                        {/* Name and Lastname */}
                        <div className="name-lastname">
                            <div className="form-field">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="lastname">Lastname</label>
                                <input type="text" name="lastname" id="lastname" />
                            </div>
                        </div>

                        {/* Country/Region */}
                        <div className="form-field">
                            <label htmlFor="country">Country/Region</label>
                            <select name="country" id="country">
                                <option value="" selected disabled></option>
                                <option value="uruguay">Uruguay</option>
                                <option value="argentina">Argentina</option>
                                <option value="brazil">Brazil</option>
                                <option value="brazil">United States</option>
                                <option value="brazil">China</option>
                            </select>
                        </div>

                        {/* Town/City */}
                        <div className="form-field">
                            <label htmlFor="city">Town/City</label>
                            <input type="text" name="city" id="city" />
                        </div>

                        {/* Streen and house number */}
                        <div className="form-field">
                            <label htmlFor="street">Street & House Number</label>
                            <input type="text" name="street" id="street" />
                        </div>

                        {/* Postal Code and Phone */}
                        <div className="postal-phone">
                            <div className="form-field">
                                <label htmlFor="postal-code">Postal Code</label>
                                <input type="number" name="postal_code" id="postal-code" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" name="phone" id="phone" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Order resume */}
                <div className="order-resume">
                    <h3 className="or-title">Your Order</h3>

                    {/* Cart Resume */}
                    <BillingCartResume products={TEST_PRODUCTS} />

                    {/* Cart Cost */}
                    <div className="or-cost">
                        <div className="orc-subtotal">
                            <span>Subtotal</span>
                            <span>US$ 322.60</span>
                        </div>
                        <div className="orc-shipping">
                            <span>Shipping</span>
                            <div className="orcs-select">
                                <div>
                                    <input type="radio" name="shipping_type" id="express" />
                                    <label htmlFor="express">Express Shipping (48-72 hs)</label>
                                </div>
                                <div>
                                    <input type="radio" name="shipping_type" id="standard" />
                                    <label htmlFor="standard">Standard Shipping (72-120 hs)</label>
                                </div>
                            </div>
                            <div className="orcs-prices">
                                <span>US$ 18.00</span>
                                <span>US$ 12.40</span>
                            </div>
                        </div>
                        <div className="orc-total orc-subtotal">
                            <span>Total</span>
                            <span>US$ 341.20</span>
                        </div>
                    </div>

                    {/* Payment Options */}
                    <div className="payment-options">
                        <div>
                            <input type="radio" name="payment_type" id="delivery" />
                            <label htmlFor="delivery">Payment on delivery</label>
                        </div>
                        <div>
                            <input type="radio" name="payment_type" id="card" />
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