import React, { useEffect, useState } from 'react';
// Import icons
import { ReactComponent as ErrorIcon } from 'assets/icons/error.svg';
// Import components
import { Loader } from 'components/common/loader/Loader';
import { ItemList } from './components/itemList/ItemList';
// Import interfaces
import { Category, Product } from 'services/interfaces/product.d';
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
    that represents if there was any error */
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        /* Here goes the promise that must be resolved in 2 seconds
        and it returns an array with the products to bo shown. */
        const fetchProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                    {
                        id: 0,
                        name: 'Wagyu Tomahawk 1kg',
                        price: 38.60,
                        description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                        img: 'tomahawk-wagyu.jpg',
                        category: Category.Wagyu,
                        cartAmount: 5,
                        stock: 25
                    },
                    {
                        id: 1,
                        name: 'Wagyu Ribeye 1kg',
                        price: 36.40,
                        description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                        img: 'ribeye-wagyu.jpg',
                        category: Category.Wagyu,
                        cartAmount: 1,
                        stock: 25
                    },
                    {
                        id: 2,
                        name: 'Wagyu Outside Skirt 1kg',
                        price: 32.90,
                        description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                        img: 'outside-skirt-wagyu.jpg',
                        category: Category.Wagyu,
                        cartAmount: 2,
                        stock: 25
                    },
                    {
                        id: 3,
                        name: 'Wagyu Short Ribs 1kg',
                        price: 37.40,
                        description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                        img: 'short-ribs-wagyu.jpg',
                        category: Category.Wagyu,
                        cartAmount: 1,
                        stock: 25
                    }
                ])
            }, 2000)
        })

        /* Handle the promise */
        fetchProducts.then((result) => {
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
            { loading && <div style={loaderErrorStyles}><Loader /></div> }

            {/* Error (ex: no products availables) */}
            { error && 
                <div style={loaderErrorStyles}>
                    <div style={{ display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1em',
                        color: '#6b6b6b' 
                    }}>
                        <ErrorIcon style={{width: '32px'}} />
                        <h3 style={errorTitle}> No products availables </h3>
                    </div>
                </div> }

            { products && <ItemList products={products} /> }
        </>
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