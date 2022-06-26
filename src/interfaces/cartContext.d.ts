import {Product} from 'interfaces/product.d';

export interface ICartContext {
    products: Product[];
    expressShipping: boolean;
    setExpressShipping: Dispatch<SetStateAction<boolean>>;
    cardPayment: boolean;
    setCardPayment: Dispatch<SetStateAction<boolean>>;
    addProduct: (product: Product, amount: number) => void;
    quickAdd: (product: Product) => void;
    increaseProduct: (id: string) => void;
    removeProduct: (id: string) => void;
    decreaseProduct: (id: string) => void;
    clear: () => void;
    isInCart: (id: string) => boolean;
    getProduct: (id: string) => Product;
    cartLength: () => number;
    getSubtotal: () => number;
    getTotal: () => number;
}