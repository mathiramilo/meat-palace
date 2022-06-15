// Interfaces
import { Product } from 'interfaces/product';
// Components
import { Item } from '../item/Item';
// Styles
import './ItemList.css';

type props = {
    products: Product[];
}

/* This component recibes an array of products that
will be shown. */
export const ItemList = ({ products }: props) => {
    return (
        <div className="item-list">
            { products?.map(product => <Item key={product.id} product={product} /> ) }
        </div>
    )
}
