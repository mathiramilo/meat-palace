// Definition of Product and Category Interface

export enum Category {Wagyu = 'wagyu', Feedlot = 'feedlot', Standard = 'standard', Other = 'other'};

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
    category: Category;
    cartAmount: number;
    stock: number;
}