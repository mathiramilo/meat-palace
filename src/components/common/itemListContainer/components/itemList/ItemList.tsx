import React from 'react';
// Import Interfaces
import { Product } from 'services/interfaces/product';
// Import components
import { Item } from '../item/Item';
// Import styles
import './ItemList.css';

type props = {
    products: Product[];
}

/* This component recibes an array of products that
will be shown. */
export const ItemList = ({ products }: props) => {
    return (
        <div className="item-list">
            { products.map(({ name, price, category, img }) => <Item name={name} price={price} category={category} img={img} /> ) }
        </div>
    )
}
