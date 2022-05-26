import React from 'react';
import './ItemListContainer.css';

type props = {
    greeting: string;
}

export const ItemListContainer = ({ greeting }: props) => {
    return (
        <>
            <div className="bs-products-wrapper">
                {/* Bestsellers Products Here! (CardItem Components)*/}
                <h3>{greeting}</h3>
            </div>
        </>
    )
}
