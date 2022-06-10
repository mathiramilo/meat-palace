import React from 'react';
import { Link } from 'react-router-dom';
// Import icons
import { ReactComponent as AddToCartIcon } from 'assets/icons/add-cart.svg';
import { ReactComponent as InfoIcon } from 'assets/icons/info.svg';
// Import interfaces
import { Product } from 'services/interfaces/product';
// Import styles
import './Item.css';

type props = {
    product: Product;
}

export const Item = ({ product }: props) => {

    /* Product destructuring to get the necesary info
    => name, price, img, category */
    const { id, name, price, category, img } = product;

    return (
        <Link to={`/product/${id}`}>
            <div className="item-card">
                <div className="ic-img">
                    <img src={`/assets/products/${category}/${img}`} alt={name} />

                    <div className="ic-overlay">
                        <button className="quick-add-btn">
                            <AddToCartIcon className="quick-add-icon" />
                        </button>
                        <button className="product-detail-btn">
                            <InfoIcon className="info-icon" />
                        </button>
                    </div>
                </div>
                <div className="ic-name-price">
                    <h4> {name} </h4>
                    <span> US$ {price.toFixed(2)} </span>
                </div>
            </div>
        </Link>
    )
}
