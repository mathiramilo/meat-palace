import { createContext, useEffect, useState } from 'react';
// Toasts
import { onAddToast } from 'utils/toasts';
import { noStockToast } from 'utils/toasts';
// Interfaces
import { Product } from 'interfaces/product.d';
// Contexts
import { ICartContext } from 'interfaces/cartContext';


const DEFAULT_PRODUCT = {
    id: 'customID0238920',
    name: 'Wagyu Tomahawk 1kg',
    price: 38.60,
    description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
    img: 'tomahawk-wagyu.jpg',
    category: 'wagyu',
    cartAmount: 5,
    stock: 13
}

export const CartContext = createContext<ICartContext>({
    products: [],
    expressShipping: false,
    setExpressShipping: () => {},
    cardPayment: false,
    setCardPayment: () => {},
    addProduct: () => {},
    quickAdd: () => {},
    increaseProduct: () => {},
    removeProduct: () => {},
    decreaseProduct: () => {},
    clear: () => {},
    isInCart: () => false,
    getProduct: () => DEFAULT_PRODUCT,
    cartLength: () => 0,
    getSubtotal: () => 0,
    getTotal: () => 0
});

type props = {
    children: JSX.Element | JSX.Element[];
}

export const CartContextProvider = ({ children }: props) => {

    /* This state is an array of products that
    represents the products in the cart. */
    const [products, setProducts] = useState<Product[]>([]);

    /* This state is true if the user selects an express
    shipping or false for a standard shipping.  */
    const [expressShipping, setExpressShipping] = useState(false);

    const [cardPayment, setCardPayment] = useState(false);

    /* This function adds an amount of a product to the cart. */
    const addProduct = (product: Product, amount: number) => {
        /* Check if the product is already in the cart,
        if is in the cart => update his quantity
        otherwise => add the product to the cart. */
        if (isInCart(product.id)) {
            /* Product already on the cart => get the index of
            the product on the products array. Creates an auxiliary
            array and updates the product cartAmount. Finally set the products state. */
            let prod = getProduct(product.id);
            let index = products.indexOf(prod);

            let productsCopy = [...products];
            productsCopy[index].cartAmount += amount;

            setProducts(productsCopy);
            setProductsLS(productsCopy);
        } else {
            /* Product isn't on the cart => creates a new product with cartAmount = amount and add new product to the products array. */
            const newProduct = {
                ...product,
                cartAmount: amount
            }
            setProducts([...products, newProduct]);
            /* Update cart in session storage. */
            setProductsLS([...products, newProduct]);
        }
        /* Display a toast. */
        onAddToast(product.name, amount);
    }

    /* This function adds 1 unit of a product. */
    const quickAdd = (product: Product) => {
        if (isInCart(product.id)) {
            const prod = getProduct(product.id);
            if (prod.stock - prod.cartAmount > 0) {
                const index = products.indexOf(prod);

                let productsCopy = [...products];
                productsCopy[index].cartAmount++;
                setProducts(productsCopy);
                setProductsLS(productsCopy);

                onAddToast(product.name, 1);
            } else noStockToast(product.name);
        } else {
            if (product.stock > 0) {
                const newProduct = {
                    ...product,
                    cartAmount: 1
                }
                setProducts([...products, newProduct]);
                setProductsLS([...products, newProduct]);

                onAddToast(product.name, 1);
            } else noStockToast(product.name);
        }
    }

    /* This function increases a product amount by 1. */
    const increaseProduct = (id: string) => {
        let prod = getProduct(id);
        let index = products.indexOf(prod);

        let productsCopy = [...products];
        productsCopy[index].cartAmount++;

        setProducts(productsCopy);
        setProductsLS(productsCopy);
    }

    /* This function removes a product from the cart. */
    const removeProduct = (id: string) => {
        const newProds = products.filter(product => product.id !== id);
        setProducts(newProds);
        setProductsLS(newProds);
    } 

    /* This function decreases a product amount by 1. */
    const decreaseProduct = (id: string) => {
        let prod = getProduct(id);
        let index = products.indexOf(prod);

        let productsCopy = [...products];
        productsCopy[index].cartAmount--;

        setProducts(productsCopy);
        setProductsLS(productsCopy);
    }

    /* This function removes all products from the cart, leaving it empty. */
    const clear = () => {
        setProducts([]);
        setProductsLS([]);
    };

    /* This function returns true if a product is in the cart. */
    const isInCart = (id: string): boolean => products.some(product => product.id === id);

    /* This function returns the product with id equal to "id". */
    const getProduct = (id: string): Product => products.find(product => product.id === id) as Product;

    /* This Function returns the amount of items in the cart */
    const cartLength = (): number => products.reduce((acc, product) => acc += product.cartAmount, 0);

    /* This function return the subtotal cost of the cart. */
    const getSubtotal = (): number => products.reduce((acc, {cartAmount, price}) => acc += (cartAmount * price), 0);

    /* This function returns the shippment cost. */
    const shippingPrice = (): number => expressShipping ? 18.60 : 12.40;

    /* This function returns the total cost of the cart. */
    const getTotal = (): number => getSubtotal()*1.22 + shippingPrice();

    /* This function updates the session storage. */
    const setProductsLS = (products: Product[]) => localStorage.setItem('cart', JSON.stringify(products));

    /* This function fetchs the cart from session storage. */
    const getProductsLS = (): Product[] => JSON.parse(localStorage.getItem('cart') || '[]');

    /* Every time the products state change set the cart
    of the session storage equals to products. */
    useEffect(() => setProducts(getProductsLS()), []);

    return (
        <CartContext.Provider 
            value={{
                products, 
                expressShipping,
                cardPayment,
                setExpressShipping,
                setCardPayment,
                addProduct, 
                quickAdd,
                increaseProduct,
                removeProduct, 
                decreaseProduct,
                clear, 
                isInCart, 
                getProduct,
                cartLength,
                getSubtotal,
                getTotal
            }}
        >
            { children }
        </CartContext.Provider>
    )
}