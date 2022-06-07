import React, { useEffect, useState } from 'react';
// Import icons
import { ReactComponent as ErrorIcon } from 'assets/icons/error.svg';
// Import components
import { Loader } from 'components/common/loader/Loader';
import { ItemList } from './components/itemList/ItemList';
// Import services
import { Category, Product } from 'services/interfaces/product.d';
import { getProducts } from 'services/data/getProducts';
// Import styles
import './ItemListContainer.css';

type props = {
    category: Category | string | undefined;
}

/* This component shows all the products of the category recibed. */
export const ItemListContainer = ({ category }: props) => {

    /* State that represents the array of products that will be
    shown in the ItemList component. */
    const [products, setProducts] = useState<Product[]>([]);
    /* States that represents if the products are loading and other
    that represents if there was any error. */
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        /* getProducts() returns a promise that will be
        resolved in 2 seconds and the result is an array with
        the products to be shown. */
        const getAllProducts = getProducts();

        /* Handle the promise */
        getAllProducts.then((result) => {
            setProducts(result as Product[]);
        })
        .catch((error) => {
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
    
    }, [])

    return (
        <>
            {/* Loading */}
            { loading && <div className="loader-error"><Loader /></div> }

            {/* Error (ex: no products availables) */}
            { error && 
                <div className="loader-error">
                    <div style={{ display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1em',
                        color: '#6b6b6b' 
                    }}>
                        <ErrorIcon style={{width: '32px'}} />
                        <h3 className="error-title"> No products availables </h3>
                    </div>
                </div> }

            { products && <ItemList products={products} /> }
        </>
    )
}
