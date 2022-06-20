import { useEffect, useState } from 'react';
// Router
import { Link, useNavigate, useParams } from 'react-router-dom';
// Icons
import { ReactComponent as GobackIcon } from 'assets/icons/go-back.svg';
import { ReactComponent as ErrorIcon } from 'assets/icons/error.svg';
// Components
import { ViewHeader } from 'components/common/viewHeader/ViewHeader';
import { ProductDetail } from './components/productDetail/ProductDetail';
import { Loader } from 'components/common/loader/Loader';
// Services
import { getProducts } from 'services/getProducts';
// Interfaces
import { Product } from 'interfaces/product';
// Utils
import { isObjEmpty } from 'utils/emptyObject';
// Import css
import './ProductDetailContainer.css';


/* This component fetches the product data and
passes it to ProductDetail to be shown */
export const ProductDetailContainer = () => {

    /* Product to be shown */
    const [product, setProduct] = useState<Product>({} as Product);

    /* States that represents the product loading and 
    if there is an error */
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    /* Obtain the product ID from the url 
    using the hook useParams(). */
    const { productID } = useParams();

    /* navigate is a function that recibes
    the new url path as a string parameter
    and navigates there. (useNavigate()
    hook returns this function). */
    const navigate = useNavigate();

    /* Gets the item and handle the component states */
    useEffect(() => {
        
        /* getProducts() returns a promise that contains an 
        array of all the products. */
        getProducts().then((result) => {
            
            /* If exists a product with id equal to
            productID => asign it to the product state, 
            otherwise => navigate to home. */
            result.find(product => product.id === parseInt(productID as string)) ?
                setProduct(result.find(product => product.id === parseInt(productID as string)) as Product)
            :
                navigate('/')
        })
        .catch((error) => setError(true))
        .finally(() => setLoading(false));

    }, [productID, navigate]);

    /* Scroll to top when the component is rendered
    for the first time. */
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="product-detail">

            {/* View Title Header */}
            <ViewHeader title={'Product Detail'} />

            {/* Loading */}
            {loading && <div className="loader-error"><Loader /></div>}

            {/* Error (ex: product not available) */}
            {error && (
                <div className="loader-error">
                    <div style={{ display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1em',
                        color: '#6b6b6b' 
                    }}>
                        <ErrorIcon style={{width: '32px'}} />
                        <h3 className="error-title"> Product not available </h3>
                    </div>
                </div> 
            )}

            {/* Product Detail Card & Go Back to shop */}
            {!isObjEmpty(product) && (
                <div className="product-detail-gotoshop">
                    <Link to={`/shop/all`}>
                        <button className="gotoshop-btn">
                            <GobackIcon className="goback-icon" />
                            <span>Shop</span>
                        </button>
                    </Link>

                    <ProductDetail product={product} />
                </div>
            )}

        </div>
    )
}
