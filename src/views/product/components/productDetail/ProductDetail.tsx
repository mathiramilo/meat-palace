import { useState } from 'react';
// Router
import { Link } from 'react-router-dom';
// Interfaces
import { Product } from 'interfaces/product';
// Components
import { ItemCount } from '../itemCount/ItemCount';
// Toasts
import { onAddToast } from 'utils/toasts';
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

    // State that represents if the user has added the product to the cart and the amount.
    const [addedToCart, setAddedToCart] = useState({
        isAdded: false,
        amount: 0 
    });

    // This function adds "amount" times a product to the cart and decreases the stock (new stock = stock - amount).
    const onAdd = (amount: number) => {
        setAddedToCart({
            isAdded: true,
            amount: amount
        });
        onAddToast(name, amount);
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

                    {/* If the product have been added to the cart
                    show the amount, otherwise show ItemCount component */}
                    {
                        addedToCart.isAdded ? 
                            <div className="finish-buying">
                                <span className="fb-info">{`x${addedToCart.amount} ${name} added to cart`}</span>
                                <div className="fb-buttons">
                                    <Link to="/cart" className="button fb-btn">Finish Buying</Link>
                                    <Link to="/shop" className="button fb-continue-shopping-btn">Continue Shopping</Link>
                                </div>
                            </div>
                        : 
                            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                    }
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