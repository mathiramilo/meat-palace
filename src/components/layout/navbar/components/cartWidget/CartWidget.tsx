import React from 'react';
// Import icons
import { ReactComponent as CartIcon } from 'assets/icons/cart.svg';
//Import css
import './CartWidget.css';


type props = {
    itemsAmount: number;
}

export const CartWidget = ({ itemsAmount }: props) => {
    return (
        <button className="navbar-link cart-btn">
            <CartIcon className="cart-icon" />
            <span className="cart-items-amount">{ itemsAmount }</span>
        </button>
    )
}
