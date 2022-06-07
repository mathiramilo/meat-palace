import { Category, Product } from "services/interfaces/product.d"

/* Function that returns a promise that contains
all the products */
export const getProducts = (): Promise<Product[]> => new Promise((res, rej) => {
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
                img: 'outside-skirt-wagyu.webp',
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