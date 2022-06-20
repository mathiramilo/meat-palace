import {Product} from 'interfaces/product.d';

export interface ICartContext {
    products: Product[];
    expressShipping: boolean;
    setExpressShipping: Dispatch<SetStateAction<boolean>>;
    addProduct: (product: Product, amount: number) => void;
    quickAdd: (product: Product) => void;
    increaseProduct: (id: number) => void;
    removeProduct: (id: number) => void;
    decreaseProduct: (id: number) => void;
    clear: () => void;
    isInCart: (id: number) => boolean;
    getProduct: (id: number) => Product;
    cartLength: () => number;
    getSubtotal: () => number;
    getTotal: () => number;
}