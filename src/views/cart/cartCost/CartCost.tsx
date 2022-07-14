import React, { useContext } from 'react';
// Router
import { Link } from 'react-router-dom';
// Hooks
import { useAuth } from 'hooks/useAuth';
// Contexts
import { CartContext } from 'contexts/CartContext';
import { LSModalContext } from 'contexts/LSModalContext';
// Toasts
import { mustLoginToast } from 'utils/toasts';
// Styles
import './CartCost.css';

export const CartCost = () => {

    const { user } = useAuth();

    const { expressShipping, setExpressShipping, getSubtotal, getTotal } = useContext(CartContext);

    const { openModal } = useContext(LSModalContext);

    const handleNotLoggedIn = () => {
        openModal();
        mustLoginToast();
    }

    return (
        <section className="cart-cost">
            <h3 className="cc-title">Cart Total</h3>
            
            <div className="cc-summary">
                <div className="ccs-item">
                    <span>Subtotal</span>
                    <span>US$ {getSubtotal().toFixed(2)}</span>
                </div>
                <div className="ccs-item ccs-shipping">
                    <span>Shipping</span>
                    <div className="ccss-options">
                        <div className="ccsso-item">
                            <input 
                                type="radio" 
                                name="shipping_option" 
                                id="standard" 
                                checked={!expressShipping ? true : false}
                                onChange={() => setExpressShipping(false)} 
                            />
                            <label htmlFor="standard">Standard Shipping (72-120 hs)</label>
                            <span>US$ 12.40</span>
                        </div>
                        <div className="ccsso-item">
                            <input 
                                type="radio" 
                                name="shipping_option" 
                                id="express" 
                                checked={expressShipping ? true : false}
                                onChange={() => setExpressShipping(true)} 
                            />
                            <label htmlFor="express">Express Shipping (48-72 hs)</label>
                            <span>US$ 18.60</span>
                        </div>
                    </div>
                </div>
                <div className="ccs-item">
                    <span>Total</span>
                    <span>US$ {getTotal().toFixed(2)}</span>
                </div>
            </div>

            {user ?
                <Link to='/billing' className="button cc-finish-buying-btn">Finish Buying</Link>
            :
                <button onClick={() => handleNotLoggedIn()} className="button cc-finish-buying-btn" style={{fontSize: '1rem'}}>Finish Buying</button>    
            }

            
        </section>
    )
}
