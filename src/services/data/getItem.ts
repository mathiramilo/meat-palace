import { Category, Product } from "services/interfaces/product.d";

/* Function that returns a promise that contains
the product to shown */
export const getItem = (): Promise<Product> => new Promise((res, rej) => {
    setTimeout(() => {
        res({
            id: 0,
            name: 'Wagyu Tomahawk 1kg',
            price: 38.60,
            description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
            img: 'tomahawk-wagyu.jpg',
            category: Category.Wagyu,
            cartAmount: 0,
            stock: 25
        });
    }, 1000);
})