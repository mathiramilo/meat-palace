import React, { useEffect, useState } from 'react';
// Import icons
import { ReactComponent as ErrorIcon } from 'assets/icons/error.svg';
// Import components
import { Loader } from 'components/common/loader/Loader';
import { ItemList } from './components/itemList/ItemList';
// Import services
import { Product } from 'interfaces/product';
import { getProducts } from 'services/getProducts';
// Import styles
import './ItemListContainer.css';


/* ItemListContainer recibes by props a
Limit object that specifies if there is
a limit of products to by shown and his value. */
interface Limit {
    hasLimit: boolean;
    value?: number;
}

type props = {
    category: string;
    limit: Limit;
}

/* This component shows all the products . */
export const ItemListContainer = ({ category, limit }: props) => {

    /* State that represents the array of products that will be
    shown in the ItemList component. */
    const [products, setProducts] = useState<Product[]>([]);

    /* States that represents if the products are loading and other
    that represents if there was any error. */
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        /* Reset the products to an empty
        array and loading to true. */
        setProducts([]);
        setLoading(true);

        /* getProducts() returns a promise that will be
        resolved in 2 seconds and the result is an array with
        the products to be shown. */
        const getAllProducts = getProducts();

        /* Handle the promise */
        getAllProducts.then((result) => {

            /* If there is a limit => return only
            the amount of products as limit indicates.
            Otherwise => return the products of the category
            indicated by props. */
            if (limit.hasLimit) { 
                setProducts(result.filter(product => product.id < 4));
            } else {
                category === 'all' ?
                    setProducts(result)
                :
                    setProducts(result.filter(product => product.category === category));
            }  
        })
        .catch((error) => {
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
    
    }, [category, limit.hasLimit])

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
