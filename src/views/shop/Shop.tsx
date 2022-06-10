import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Components
import { ItemListContainer } from 'components/common/itemListContainer/ItemListContainer';
// Import interfaces
import { Category } from 'services/interfaces/product.d';
// Css
import './Shop.css';


export const Shop = () => {

    /* Obtain the category parameter from the
    url with useParams() hook. */
    const { category } = useParams();

    /* Hook to navigate to another path. */
    const navigate = useNavigate();

    /* Scroll to top when the component
    is rendered for the first time. */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="shop">
            
            {/* Shop Banner */}
            <div className="shop-banner"></div>

            {/* Meat Shop */}
            <section className="shop-main">

                <div className="sm-header">
                    <div className="smh-line"></div>
                    <h1>Meat Shop</h1>
                    <div className="smh-line"></div>
                </div>

                {/* Categories Wrapper */}
                <div className="sm-cat-wrapper">
                    <button 
                        onClick={() => navigate('/shop/all')}
                        style={category === 'all' ? {color: 'var(--white-50)'} : {}} 
                        className="sm-cat"
                    >
                        All Meats
                    </button>
                    <button 
                        onClick={() => navigate('/shop/wagyu')}
                        style={category === 'wagyu' ? {color: 'var(--white-50)'} : {}} 
                        className="sm-cat"
                    >
                        Wagyu Meats
                    </button>
                    <button 
                        onClick={() => navigate('/shop/feedlot')}
                        style={category === 'feedlot' ? {color: 'var(--white-50)'} : {}} 
                        className="sm-cat"
                    >
                        Feedlot Meats
                    </button>
                    <button 
                        onClick={() => navigate('/shop/standard')}
                        style={category === 'standard' ? {color: 'var(--white-50)'} : {}} 
                        className="sm-cat"
                    >
                        Standard Meats
                    </button>
                    <button 
                        onClick={() => navigate('/shop/other')}
                        style={category === 'other' ? {color: 'var(--white-50)'} : {}} 
                        className="sm-cat"
                    >
                        Other Products
                    </button>
                </div>

                {/* Shop Catalog */}
                <ItemListContainer category={category as string} limit={{hasLimit: false}} />

            </section>

            {/* Shop Legend */}
            <h3 className="shop-legend">“All our meat cuts are of the highest quality, ensuring that all our customers are satisfied.”</h3>

        </div>
    )
}
