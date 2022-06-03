import React, { useState } from 'react';
// Components
import { ItemListContainer } from 'components/common/itemListContainer/ItemListContainer';
// Import interfaces
import { Category } from 'services/interfaces/product.d';
// Css
import './Shop.css';

export const Shop = () => {

    const [category, setCategory] = useState<Category>();

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
                        onClick={() => setCategory(undefined)}
                        style={category === undefined ? {color: 'var(--white-50)'} : {}} 
                        className="sm-cat"
                    >
                        All Meats
                    </button>
                    <button 
                        onClick={() => setCategory(Category.Wagyu)}
                        style={category === 'wagyu' ? {color: 'var(--white-50)'} : {}} 
                        className="sm-cat"
                    >
                        Wagyu Meats
                    </button>
                    <button 
                        onClick={() => setCategory(Category.Feedlot)}
                        style={category === 'feedlot' ? {color: 'var(--white-50)'} : {}} 
                        className="sm-cat"
                    >
                        Feedlot Meats
                    </button>
                    <button 
                        onClick={() => setCategory(Category.Standard)}
                        style={category === 'standard' ? {color: 'var(--white-50)'} : {}} 
                        className="sm-cat"
                    >
                        Standard Meats
                    </button>
                    <button 
                        onClick={() => setCategory(Category.Other)}
                        style={category === 'other' ? {color: 'var(--white-50)'} : {}} 
                        className="sm-cat"
                    >
                        Other Products
                    </button>
                </div>

                {/* Shop Catalog */}
                <ItemListContainer category={category} />

            </section>

            {/* Shop Legend */}
            <h3 className="shop-legend">“All our meat cuts are of the highest quality, ensuring that all our customers are satisfied.”</h3>

        </div>
    )
}
