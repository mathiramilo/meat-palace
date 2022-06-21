import { useContext } from 'react';
// Contexts
import { CartContext } from 'contexts/CartContext';
// Components
import { BillingProductCard } from '../billingProductCard/BillingProductCard';
// Interfaces
import { Product } from 'interfaces/product';
// Styles
import './BillingCartResume.css';


export const BillingCartResume = () => {

    const { products } = useContext(CartContext);

    return (
        <div className="billing-cart-resume">
            { products.map( ({id, name, price, img, category, cartAmount }: Product) => <BillingProductCard key={id} name={name} price={price} img={img} category={category} cartAmount={cartAmount} /> ) } 
        </div>
    )
}
