import React from 'react';
import { Product } from 'services/interfaces/product';
import { BillingProductCard } from '../billingProductCard/BillingProductCard';

type props = {
    products: Product[];
}

export const BillingCartResume = ({ products }: props) => {
    return (
        <div className="billing-cart-resume">
            { products.map( ({id, name, price, img, category, cartAmount }: Product) => <BillingProductCard key={id} name={name} price={price} img={img} category={category} cartAmount={cartAmount} /> ) } 
        </div>
    )
}
