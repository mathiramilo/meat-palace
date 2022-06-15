import { Category, Product } from 'interfaces/product.d';

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
                stock: 13
            },
            {
                id: 1,
                name: 'Wagyu Ribeye 1kg',
                price: 36.40,
                description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                img: 'ribeye-wagyu.jpg',
                category: Category.Wagyu,
                cartAmount: 1,
                stock: 18
            },
            {
                id: 2,
                name: 'Wagyu Outside Skirt 1kg',
                price: 32.90,
                description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                img: 'outside-skirt-wagyu.webp',
                category: Category.Wagyu,
                cartAmount: 2,
                stock: 22
            },
            {
                id: 3,
                name: 'Wagyu Short Ribs 1kg',
                price: 27.40,
                description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                img: 'short-ribs-wagyu.jpg',
                category: Category.Wagyu,
                cartAmount: 1,
                stock: 36
            },
            {
                id: 4,
                name: 'Wagyu Flap Meat 1kg',
                price: 29.20,
                description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                img: 'flap-wagyu.jpg',
                category: Category.Wagyu,
                cartAmount: 0,
                stock: 29
            },
            {
                id: 5,
                name: 'Wagyu Flank Meat 1kg',
                price: 29.90,
                description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                img: 'flank-wagyu.webp',
                category: Category.Wagyu,
                cartAmount: 0,
                stock: 28
            },
            {
                id: 6,
                name: 'Wagyu Strip Loin 1kg',
                price: 30.60,
                description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                img: 'strip-loin-wagyu.jpg',
                category: Category.Wagyu,
                cartAmount: 0,
                stock: 21
            },
            {
                id: 7,
                name: 'Wagyu T-Bone 1kg',
                price: 32.60,
                description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                img: 'tbone-wagyu.jpg',
                category: Category.Wagyu,
                cartAmount: 0,
                stock: 24
            },
            {
                id: 8,
                name: 'Wagyu Tenderloin 1kg',
                price: 38.20,
                description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                img: 'tenderloin-wagyu.avif',
                category: Category.Wagyu,
                cartAmount: 0,
                stock: 14
            },
            {
                id: 9,
                name: 'Wagyu Tritip 1kg',
                price: 26.90,
                description: 'It is the product of the best Australian and Uruguayan Wagyu genetics, from cattle raised in the recognized natural grasslands of Uruguay, fattened and finished with special diets in Feedlot. It encompasses a product of the highest quality and consistency, which is exported from Uruguay to the most demanding markets in the world.',
                img: 'tritip-wagyu.jpg',
                category: Category.Wagyu,
                cartAmount: 0,
                stock: 26
            },
            {
                id: 10,
                name: 'Feedlot Flank Meat 1kg',
                price: 22.20,
                description: 'The Feedlot is an intensive meat production system, under a grain finish. It allows to obtain a tender, marbled meat, with a soft, tasty and quality texture. The production is carried out with a strict sanitary and nutritional control. Guarantee Meat Palace.',
                img: 'flank-feedlot.jpg',
                category: Category.Feedlot,
                cartAmount: 0,
                stock: 34
            },
            {
                id: 11,
                name: 'Feedlot Flap Meat 1kg',
                price: 23.10,
                description: 'The Feedlot is an intensive meat production system, under a grain finish. It allows to obtain a tender, marbled meat, with a soft, tasty and quality texture. The production is carried out with a strict sanitary and nutritional control. Guarantee Meat Palace.',
                img: 'flap-feedlot.jpg',
                category: Category.Feedlot,
                cartAmount: 0,
                stock: 33
            },
            {
                id: 12,
                name: 'Feedlot Outside Skirt 1kg',
                price: 24.40,
                description: 'The Feedlot is an intensive meat production system, under a grain finish. It allows to obtain a tender, marbled meat, with a soft, tasty and quality texture. The production is carried out with a strict sanitary and nutritional control. Guarantee Meat Palace.',
                img: 'outside-skirt-feedlot.jpg',
                category: Category.Feedlot,
                cartAmount: 0,
                stock: 29
            },
            {
                id: 13,
                name: 'Feedlot Ribeye 1kg',
                price: 30.20,
                description: 'The Feedlot is an intensive meat production system, under a grain finish. It allows to obtain a tender, marbled meat, with a soft, tasty and quality texture. The production is carried out with a strict sanitary and nutritional control. Guarantee Meat Palace.',
                img: 'ribeye-feedlot.jpg',
                category: Category.Feedlot,
                cartAmount: 0,
                stock: 19
            },
            {
                id: 14,
                name: 'Feedlot Strip Loin 1kg',
                price: 26.70,
                description: 'The Feedlot is an intensive meat production system, under a grain finish. It allows to obtain a tender, marbled meat, with a soft, tasty and quality texture. The production is carried out with a strict sanitary and nutritional control. Guarantee Meat Palace.',
                img: 'strip-loin-feedlot.jpg',
                category: Category.Feedlot,
                cartAmount: 0,
                stock: 26
            },
            {
                id: 15,
                name: 'Feedlot T-Bone 1kg',
                price: 29.20,
                description: 'The Feedlot is an intensive meat production system, under a grain finish. It allows to obtain a tender, marbled meat, with a soft, tasty and quality texture. The production is carried out with a strict sanitary and nutritional control. Guarantee Meat Palace.',
                img: 'tbone-feedlot.webp',
                category: Category.Feedlot,
                cartAmount: 0,
                stock: 29
            },
            {
                id: 16,
                name: 'Feedlot Tenderloin 1kg',
                price: 33.40,
                description: 'The Feedlot is an intensive meat production system, under a grain finish. It allows to obtain a tender, marbled meat, with a soft, tasty and quality texture. The production is carried out with a strict sanitary and nutritional control. Guarantee Meat Palace.',
                img: 'tenderloin-feedlot.jpg',
                category: Category.Feedlot,
                cartAmount: 0,
                stock: 19
            },
            {
                id: 17,
                name: 'Feedlot Tomahawk 1kg',
                price: 34.10,
                description: 'The Feedlot is an intensive meat production system, under a grain finish. It allows to obtain a tender, marbled meat, with a soft, tasty and quality texture. The production is carried out with a strict sanitary and nutritional control. Guarantee Meat Palace.',
                img: 'tomahawk-feedlot.jpg',
                category: Category.Feedlot,
                cartAmount: 0,
                stock: 18
            },
            {
                id: 18,
                name: 'Feedlot Tritip 1kg',
                price: 22.10,
                description: 'The Feedlot is an intensive meat production system, under a grain finish. It allows to obtain a tender, marbled meat, with a soft, tasty and quality texture. The production is carried out with a strict sanitary and nutritional control. Guarantee Meat Palace.',
                img: 'tritip-feedlot.jpg',
                category: Category.Feedlot,
                cartAmount: 0,
                stock: 31
            },
            {
                id: 19,
                name: 'Standard Flank Meat 1kg',
                price: 18.70,
                description: 'Although our standard meat is of lower quality than wagyu and feedlot, it is still of great quality, with great flavor and tenderness. What differentiates it from the others is its degree of marbling, its maturity and the way the cattle are fed. Don`t be fooled by the standard name as this meat is great.',
                img: 'flank.jpg',
                category: Category.Standard,
                cartAmount: 0,
                stock: 42
            },
            {
                id: 20,
                name: 'Standard Flap Meat 1kg',
                price: 17.90,
                description: 'Although our standard meat is of lower quality than wagyu and feedlot, it is still of great quality, with great flavor and tenderness. What differentiates it from the others is its degree of marbling, its maturity and the way the cattle are fed. Don`t be fooled by the standard name as this meat is great.',
                img: 'flap.webp',
                category: Category.Standard,
                cartAmount: 0,
                stock: 44
            },
            {
                id: 21,
                name: 'Standard Outside Skirt 1kg',
                price: 20.80,
                description: 'Although our standard meat is of lower quality than wagyu and feedlot, it is still of great quality, with great flavor and tenderness. What differentiates it from the others is its degree of marbling, its maturity and the way the cattle are fed. Don`t be fooled by the standard name as this meat is great.',
                img: 'outside-skirt.jpg',
                category: Category.Standard,
                cartAmount: 0,
                stock: 39
            },
            {
                id: 22,
                name: 'Standard Ribeye 1kg',
                price: 29.30,
                description: 'Although our standard meat is of lower quality than wagyu and feedlot, it is still of great quality, with great flavor and tenderness. What differentiates it from the others is its degree of marbling, its maturity and the way the cattle are fed. Don`t be fooled by the standard name as this meat is great.',
                img: 'ribeye.jpg',
                category: Category.Standard,
                cartAmount: 0,
                stock: 28
            },
            {
                id: 23,
                name: 'Standard Short Ribs 1kg',
                price: 16.30,
                description: 'Although our standard meat is of lower quality than wagyu and feedlot, it is still of great quality, with great flavor and tenderness. What differentiates it from the others is its degree of marbling, its maturity and the way the cattle are fed. Don`t be fooled by the standard name as this meat is great.',
                img: 'short-ribs.jpg',
                category: Category.Standard,
                cartAmount: 0,
                stock: 48
            },
            {
                id: 24,
                name: 'Standard T-Bone 1kg',
                price: 23.90,
                description: 'Although our standard meat is of lower quality than wagyu and feedlot, it is still of great quality, with great flavor and tenderness. What differentiates it from the others is its degree of marbling, its maturity and the way the cattle are fed. Don`t be fooled by the standard name as this meat is great.',
                img: 'tbone.jpg',
                category: Category.Standard,
                cartAmount: 0,
                stock: 38
            },
            {
                id: 25,
                name: 'Standard Tenderloin 1kg',
                price: 28.50,
                description: 'Although our standard meat is of lower quality than wagyu and feedlot, it is still of great quality, with great flavor and tenderness. What differentiates it from the others is its degree of marbling, its maturity and the way the cattle are fed. Don`t be fooled by the standard name as this meat is great.',
                img: 'tenderloin.webp',
                category: Category.Standard,
                cartAmount: 0,
                stock: 27
            },
            {
                id: 26,
                name: 'Standard Tomahawk 1kg',
                price: 30.40,
                description: 'Although our standard meat is of lower quality than wagyu and feedlot, it is still of great quality, with great flavor and tenderness. What differentiates it from the others is its degree of marbling, its maturity and the way the cattle are fed. Don`t be fooled by the standard name as this meat is great.',
                img: 'tomahawk.webp',
                category: Category.Standard,
                cartAmount: 0,
                stock: 24
            },
            {
                id: 27,
                name: 'Standard Tritip 1kg',
                price: 16.20,
                description: 'Although our standard meat is of lower quality than wagyu and feedlot, it is still of great quality, with great flavor and tenderness. What differentiates it from the others is its degree of marbling, its maturity and the way the cattle are fed. Don`t be fooled by the standard name as this meat is great.',
                img: 'tritip.jpg',
                category: Category.Standard,
                cartAmount: 0,
                stock: 25
            },
            {
                id: 28,
                name: 'Bread Baguette 650gr',
                price: 12.90,
                description: 'All our breads are homemade by professional chefs, the same recipe is always respected, the right fermentation times of the dough as well as the rest time. All this makes our breads exceptional.',
                img: 'bread-baguette.jpg',
                category: Category.Other,
                cartAmount: 0,
                stock: 57
            },
            {
                id: 29,
                name: 'Bread Basic 500g',
                price: 8.70,
                description: 'All our breads are homemade by professional chefs, the same recipe is always respected, the right fermentation times of the dough as well as the rest time. All this makes our breads exceptional.',
                img: 'bread-basic.jpg',
                category: Category.Other,
                cartAmount: 0,
                stock: 89
            },
            {
                id: 30,
                name: 'Bread Garlic 480gr',
                price: 10.40,
                description: 'All our breads are homemade by professional chefs, the same recipe is always respected, the right fermentation times of the dough as well as the rest time. All this makes our breads exceptional.',
                img: 'bread-garlic.webp',
                category: Category.Other,
                cartAmount: 0,
                stock: 48
            },
            {
                id: 31,
                name: 'Bread Rolls 340gr',
                price: 9.80,
                description: 'All our breads are homemade by professional chefs, the same recipe is always respected, the right fermentation times of the dough as well as the rest time. All this makes our breads exceptional.',
                img: 'bread-rolls.jpg',
                category: Category.Other,
                cartAmount: 0,
                stock: 52
            },
            {
                id: 32,
                name: 'Provolone Cheese Premium 190gr',
                price: 14.40,
                description: 'It is a cheese made with whole cow`s milk, with a soft rind and a semi-hard paste. Some varieties can be smoked. The shapes and sizes in which Provolone can be found are also varied: from its traditional cylindrical shape, to the shape of a pear, a bottle or even a sausage.',
                img: 'provolone-cheese-premium.jpg',
                category: Category.Other,
                cartAmount: 0,
                stock: 47
            },
            {
                id: 33,
                name: 'Provolone Cheese Smoked 160gr',
                price: 10.90,
                description: 'It is a cheese made with whole cow`s milk, with a soft rind and a semi-hard paste. Some varieties can be smoked. The shapes and sizes in which Provolone can be found are also varied: from its traditional cylindrical shape, to the shape of a pear, a bottle or even a sausage.',
                img: 'provolone-cheese-smoked.jpg',
                category: Category.Other,
                cartAmount: 0,
                stock: 51
            },
            {
                id:34,
                name: 'Provolone Cheese Standard 200gr',
                price: 9.80,
                description: 'It is a cheese made with whole cow`s milk, with a soft rind and a semi-hard paste. Some varieties can be smoked. The shapes and sizes in which Provolone can be found are also varied: from its traditional cylindrical shape, to the shape of a pear, a bottle or even a sausage.',
                img: 'provolone-cheese-standard.jpg',
                category: Category.Other,
                cartAmount: 0,
                stock: 77
            },
            {
                id: 35,
                name: 'Sausages Premium 280gr',
                price: 13.80,
                description: 'Our sausages are made from ground meat, often pork, beef, or poultry along with salt, spices and other flavourings. Other ingredients, such as grains or breadcrumbs may be included as fillers or extenders. We use the best ingredients in order to make the perfects sausages.',
                img: 'sausages-premium.jpg',
                category: Category.Other,
                cartAmount: 0,
                stock: 44
            },
            {
                id: 36,
                name: 'Sausages Smoked 240gr',
                price: 12.40,
                description: 'Our sausages are made from ground meat, often pork, beef, or poultry along with salt, spices and other flavourings. Other ingredients, such as grains or breadcrumbs may be included as fillers or extenders. We use the best ingredients in order to make the perfects sausages.',
                img: 'sausages-smoked.jpg',
                category: Category.Other,
                cartAmount: 0,
                stock: 47
            },
            {
                id: 37,
                name: 'Sausages Standard 500gr',
                price: 11.70,
                description: 'Our sausages are made from ground meat, often pork, beef, or poultry along with salt, spices and other flavourings. Other ingredients, such as grains or breadcrumbs may be included as fillers or extenders. We use the best ingredients in order to make the perfects sausages.',
                img: 'sausages-standard.jpg',
                category: Category.Other,
                cartAmount: 0,
                stock: 68
            }
        ])
    }, 2000)
})