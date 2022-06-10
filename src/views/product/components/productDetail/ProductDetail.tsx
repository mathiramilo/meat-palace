import React, { ReactComponentElement } from 'react';
// Interfaces
import { Product } from 'services/interfaces/product';
// Components
import { ItemCount } from '../itemCount/ItemCount';
// Styles
import './ProductDetail.css';

// The props that recibes this component have this types.
type props = {
    product: Product;
}

// This component recibes the product to detail.
export const ProductDetail = ({ product }: props) => {

    // Product properties
    const { name, price, description, img, category, cartAmount, stock } = product;

    // This function adds "amount" times a product to the cart and decreases the stock (new stock = stock - amount).
    const onAdd = (amount: number) => {
        
    }

    return (
        <div className="product-detail-card">
            
            {/* Product main info and amount */}
            <div className="pdc-main">
                <div className="pdcm-img">
                    <img src={`/assets/products/${category}/${img}`} alt={name} />
                </div>

                <div className="pdcm-data">
                    <h3> {name} </h3>
                    <span> US$ {price.toFixed(2)} </span>
                    <hr />
                    {/* Item Count component */}
                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                </div>
            </div>

            {/* Product description */}
            <div className="pdc-description">
                <h4>Description</h4>
                <p> {description} </p>
            </div>

        </div>
    )
}