import React, { useEffect, useState } from 'react';
// Router
import { useNavigate } from 'react-router-dom';
// Firebase
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
// Icons
import { ReactComponent as ErrorIcon } from 'assets/icons/error.svg';
// Components
import { Loader } from 'components/common/loader/Loader';
import { ItemList } from './components/itemList/ItemList';
// Interfaces
import { Product } from 'interfaces/product';
// Styles
import './ItemListContainer.css';


type props = {
    category: string;
    limit: boolean;
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

    const navigate = useNavigate();

    useEffect(() => {

        /* Reset the products to an empty
        array and loading to true. */
        setProducts([]);
        setLoading(true);

        /* Database */
        const db = getFirestore();
        const productsCollection = collection(db, 'products');

        if (limit) {
            /* 4 products */
            const q = query(
                productsCollection,
                where('category', '==', 'wagyu')
            )
            getDocs(q).then(snapshot => setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).filter(({ name }: any) => name === 'Wagyu Tomahawk 1kg' || name === 'Wagyu Ribeye 1kg' || name === 'Wagyu Outside Skirt 1kg' || name === 'Wagyu Short Ribs 1kg') as Product[]))
            .catch(err => setError(true))
            .finally(() => setLoading(false));
        } else if (category === 'all') {
            /* Category All => all products */
            getDocs(productsCollection).then(snapshot => {
                /* allProducts is an array with all the products */
                const allProducts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
                /* allMeats is an array with all meats */
                const allMeats = allProducts.filter(prod => prod.category !== 'other');
                setProducts(allMeats);
            })
            .catch(err => setError(true))
            .finally(() => setLoading(false));
        } else {
            /* Filter by category */
            const q2 = query(
                productsCollection,
                where('category', '==', category)
            )
            getDocs(q2).then(snapshot => setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[]))
            .catch(err => setError(true))
            .finally(() => setLoading(false));
        }
    
    }, [category, limit]);

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
