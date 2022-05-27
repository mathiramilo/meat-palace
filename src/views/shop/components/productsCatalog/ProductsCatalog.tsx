import React from 'react';
import './ProductsCatalog.css';

type props = {
    products: [];
}

export const ProductsCatalog = ({ products }: props) => {
    return (
        <div className="products-catalog">
            The products of the selected category will be shown here!
        </div>
    )
}
