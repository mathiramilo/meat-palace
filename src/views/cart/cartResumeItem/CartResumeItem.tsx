import React, { useContext, useState } from 'react';
// Import icons
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as MinusIcon } from 'assets/icons/minus.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/x.svg';
// Interfaces
import { Product } from 'interfaces/product';
// Contexts
import { CartContext } from 'contexts/CartContext';
// Styles
import './CartResumeItem.css';

type props = {
    product: Product;
}

export const CartResumeItem = ({ product }: props) => {

    const { id, name, price, img, category, cartAmount, stock } = product;

    const { removeProduct, increaseProduct, decreaseProduct } = useContext(CartContext);

    const handleIncrease = () => stock - cartAmount > 0 && increaseProduct(id);

    const handleDecrease = () => cartAmount > 1 && decreaseProduct(id);

    return (
        <div className="cart-resume-item">
            <div className="cri-img-np">
                <div className="cri-img">
                    <img src={`/assets/products/${category}/${img}`} alt={name} />
                </div>

                <div className="cri-name-price">
                    <h4> {name} </h4>
                    <span> US$ {price.toFixed(2)} </span>
                </div>
            </div>
            
            <div className="cri-controls-tp">
                <div className="cri-controls">
                    <div className="icc-buttons">
                        <button onClick={() => handleDecrease()}> <MinusIcon className="mp-icon" /> </button>
                        <span className="cric-item-amount"> {cartAmount} </span>
                        <button onClick={() => handleIncrease()}> <PlusIcon className="mp-icon" /> </button>
                    </div>
                    <span className="crib-stock">
                        {stock - cartAmount > 0 ?
                            `Stock: ${stock - cartAmount}`
                        :
                            `No Stock`
                        }
                    </span>
                </div>

                <span className="cri-total-price"> US$ {(cartAmount * price).toFixed(2)} </span>
            </div>
            
            <button onClick={() => removeProduct(id)} className="cri-delete">
                <DeleteIcon className="close-icon" />
            </button>
        </div>
    )
}
