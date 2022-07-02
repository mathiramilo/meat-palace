import React, { useContext, useEffect, useState } from 'react';
// Router
import { Link } from 'react-router-dom';
// Icons
import { ReactComponent as ErrorIcon } from 'assets/icons/error.svg';
import { ReactComponent as GobackIcon } from 'assets/icons/go-back.svg';
// Components
import { ViewHeader } from 'components/common/viewHeader/ViewHeader';
import { Loader } from 'components/common/loader/Loader';
import { CartResume } from './cartResume/CartResume';
import { CartCost } from './cartCost/CartCost';
// Contexts
import { CartContext } from 'contexts/CartContext';
// Styles
import './Cart.css';

export const Cart = () => {
    
    const { cartLength } = useContext(CartContext);

    
    const [loading, setLoading] = useState<boolean>(true);

    /* Sets loading to false after 1 seg. */
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [])
    
    /* Scroll to top when the component
    is rendered for the first time. */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="cart">

            {/* View Title Header */}
            <ViewHeader title={'Cart'} />

            {/* Loading */}
            {loading ? 
                <div className="loader-error"><Loader /></div>
            : 
                cartLength() === 0 ? 
                    <div className="loader-error">
                        <div style={{ display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1em',
                            color: '#6b6b6b' 
                        }}>
                            <ErrorIcon style={{width: '32px'}} />
                            <h3 className="error-title">Your cart is empty please add some products</h3>
                            <Link to='/shop' className="error-btn">Go To the Shop</Link>
                        </div>
                    </div> 
                :
                    <section className="cart-main">
                        <Link to={`/shop/all`}>
                            <button className="gotoshop-btn">
                                <GobackIcon className="goback-icon" />
                                <span>Shop</span>
                            </button>
                        </Link>

                        <CartResume />

                        <CartCost />
                    </section> 
            }

        </div>
    )
}
