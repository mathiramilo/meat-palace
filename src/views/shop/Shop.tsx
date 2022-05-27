import React from 'react';
// Components
import { ProductsCatalog } from './components/productsCatalog/ProductsCatalog';
// Css
import './Shop.css';

export const Shop = () => {
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
                    <button className="sm-cat">All Meats</button>
                    <button className="sm-cat">Wagyu Meats</button>
                    <button className="sm-cat">Feedlot Meats</button>
                    <button className="sm-cat">Standard Meats</button>
                    <button className="sm-cat">Other Products</button>
                </div>

                {/* Shop Catalog */}
                <ProductsCatalog products={ [] } />

            </section>

            {/* Shop Legend */}
            <h3 className="shop-legend">“All our meat cuts are of the highest quality, ensuring that all our customers are satisfied.”</h3>

        </div>
    )
}
