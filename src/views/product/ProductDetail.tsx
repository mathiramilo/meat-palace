import React from 'react';
// Import icons
import { ReactComponent as GobackIcon } from 'assets/icons/go-back.svg';
// Import components
import { ViewHeader } from 'components/common/viewHeader/ViewHeader';
import { ProductDetailCard } from './components/productDetailCard/ProductDetailCard';
// Import interfaces
import { Category, Product } from 'services/interfaces/product.d';
// Import css
import './ProductDetail.css';


const TEST_PRODUCT: Product = {
    id: 0,
    name: 'Wagyu Tomahawk 1kg',
    price: 38.60,
    description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
    img: 'tomahawk-wagyu.jpg',
    category: Category.Wagyu,
    cartAmount: 0,
    stock: 25
}

export const ProductDetail = () => {
    return (
        <div className="product-detail">

            {/* View Title Header */}
            <ViewHeader title={'Product Detail'} />

            {/* Product Detail Card & Go Back to shop */}
            <div className="product-detail-gotoshop">
                <button className="gotoshop-btn">
                    <GobackIcon className="goback-icon" />
                    <span>Shop</span>
                </button>
                
                <ProductDetailCard product={TEST_PRODUCT} />
            </div>


        </div>
    )
}
