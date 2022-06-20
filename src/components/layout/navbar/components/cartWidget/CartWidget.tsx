import React, { useContext } from 'react';
// Icons
import { ReactComponent as CartIcon } from 'assets/icons/cart.svg';
// Contexts
import { CartContext } from 'contexts/CartContext';
// Styles
import './CartWidget.css';


export const CartWidget = () => {

    const { cartLength } = useContext(CartContext);

    return (
        <button className="navbar-link cart-btn">
            <CartIcon className="cart-icon" />
            <span className="cart-items-amount">{ cartLength() }</span>
        </button>
    )
}
