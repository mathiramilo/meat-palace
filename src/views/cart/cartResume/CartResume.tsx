import React, { useContext } from 'react';
// Components
import { CartResumeItem } from '../cartResumeItem/CartResumeItem';
// Contexts
import { CartContext } from 'contexts/CartContext';
// Styles
import './CartResume.css';

export const CartResume = () => {
    
    const { products } = useContext(CartContext);

    return (
        <div className="cart-resume">
            {products.map(product => (
                <CartResumeItem key={product.id} product={product} />
            ))}
        </div>
    )
}
