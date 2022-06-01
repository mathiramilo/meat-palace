import React from 'react';
// Import images
import TomaHawk from 'assets/img/products/wagyu/tomahawk-wagyu.jpg';
// Import interfaces
import { Category } from 'services/interfaces/product';
// Import styles
import './BillingProductCard.css';

type props = {
    name: string;
    price: number;
    img: string;
    category: Category;
    cartAmount: number;
}

// This component recibes the product name, price, img and cartAmount and shows it in a card.
export const BillingProductCard = ({ name, price, img, category, cartAmount }: props) => {
    return (
        <div className="billing-product-card">
            
            {/* Image and info section */}
            <div className="bpc-data">
                <img src={require(`assets/img/products/wagyu/tomahawk-wagyu.jpg`)} alt={name} />
                <div className="bpc-data-info">
                    <div>
                        <span className="bdi-name"> {name} </span>
                        <span className="bdi-price"> US$ {price.toFixed(2)} </span>
                    </div>
                    <span className="bdi-amount"> Amount: {cartAmount} </span>
                </div>
            </div>

            {/* Product total cost */}
            <div className="bpc-total">
                <span> US$ {(cartAmount * price).toFixed(2)} </span>
            </div>

        </div>
    )
}
