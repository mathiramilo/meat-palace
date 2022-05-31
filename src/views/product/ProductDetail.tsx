import React from 'react';
// Import icons
import { ReactComponent as GobackIcon } from '../../assets/icons/go-back.svg';
// Import components
import { ViewHeader } from '../../components/common/viewHeader/ViewHeader';
import { ProductDetailCard } from './components/productDetailCard/ProductDetailCard';
// Import interfaces
import { Category, Product } from '../../services/interfaces/product.d';
// Import css
import './ProductDetail.css';


const TEST_PRODUCT: Product = {
    name: 'Wagyu Tomahawk 1kg',
    price: 38.60,
    description: 'Es el producto de la mejor genética Wagyu australiana y uruguaya, de ganado criado en las reconocidas praderas naturales de Uruguay, engordado y terminado con dietas especiales en Feedlot. Engloba un producto de altísima calidad y consistencia, el cual se exporta desde Uruguay a los mercados mas exigentes del mundo.',
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
