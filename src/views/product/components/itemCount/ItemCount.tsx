import React, { useState } from 'react';
// Import icons
import { ReactComponent as PlusIcon } from '../../../../assets/icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../../../assets/icons/minus.svg';
// Impot styles
import './ItemCount.css';

// The props that recibes this component have this types.
type props = {
  stock: number;
  initial: number;
  onAdd: (amount: number) => void;
}

// This component recibes the available stock of the product, the initial value for the counter and an onAdd function that adds the product to the cart with the selected amount.
export const ItemCount = ({ stock, initial, onAdd }: props) => {

    // This state represents the amount of items that will be added to the cart. Also we have a function to increase or decrease by 1 this amount.
    const [count, setCount] = useState<number>(initial);
    const increase = () => (count < stock) && setCount(count + 1);
    const decrease = () => (count > initial) && setCount(count - 1);

    return (
        <div className="item-count">

            {/* Controls to increase or decrease the product amount and stock control. */}
            <div className="ic-controls">
                <div className="icc-buttons">
                    <button onClick={() => decrease()}> <MinusIcon className="mp-icon" /> </button>
                    <span> {count} </span>
                    <button onClick={() => increase()}> <PlusIcon className="mp-icon" /> </button>
                </div>
                <span className="icc-stock">
                    Stock: {stock} unidades
                </span>
            </div>

            {/* Button add to cart. */}
            <button onClick={() => onAdd(count)} className="button add-to-cart-btn">
                Add To Cart    
            </button>    
        </div>
    )
  }
