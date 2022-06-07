import React, { useEffect, useState } from 'react';
// Import icons
import { ReactComponent as GobackIcon } from 'assets/icons/go-back.svg';
import { ReactComponent as ErrorIcon } from 'assets/icons/error.svg';
// Import components
import { ViewHeader } from 'components/common/viewHeader/ViewHeader';
import { ProductDetailCard } from './components/productDetail/ProductDetail';
import { Loader } from 'components/common/loader/Loader';
// Import services
import { Category, Product } from 'services/interfaces/product.d';
import { getItem } from 'services/data/getItem';
// Import utils
import { isObjEmpty } from 'utils/emptyObject';
// Import css
import './ProductDetailContainer.css';

/* This component fetches the product data and
passes it to ProductDetail to be shown */
export const ProductDetail = () => {

    /* Product to be shown */
    const [product, setProduct] = useState<Product>({} as Product);

    /* States that represents the product loading and 
    if there is an error */
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    /* Gets the item and handle the component states */
    useEffect(() => {
        const getProduct = getItem();

        getProduct.then((result) => setProduct(result))
        .catch((error) => setError(true))
        .finally(() => setLoading(false));
    }, [])

    return (
        <div className="product-detail">

            {/* View Title Header */}
            <ViewHeader title={'Product Detail'} />

            {/* Loading */}
            {loading && <div style={loaderErrorStyles}><Loader /></div>}

            {/* Error (ex: product not available) */}
            {error && (
                <div style={loaderErrorStyles}>
                    <div style={{ display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1em',
                        color: '#6b6b6b' 
                    }}>
                        <ErrorIcon style={{width: '32px'}} />
                        <h3 style={errorTitle}> Product not available </h3>
                    </div>
                </div> 
            )}

            {/* Product Detail Card & Go Back to shop */}
            {!isObjEmpty(product) && (
                <div className="product-detail-gotoshop">
                    <button className="gotoshop-btn">
                        <GobackIcon className="goback-icon" />
                        <span>Shop</span>
                    </button>

                    <ProductDetailCard product={product} />
                </div>
            )}
            
        </div>
    )
}


/* Styles */
const loaderErrorStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10em'
}

const errorTitle = {
    fontSize: '1rem',
    fontWeight: '300'
}
