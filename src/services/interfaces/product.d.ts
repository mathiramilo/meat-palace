// Definition of the Product Interface

export enum Category {Wagyu = 'wagyu', Feedlot = 'feedlot', Standard = 'standard', Other = 'other'};

export interface Product {
    name: string;
    price: number;
    description: string;
    img: string;
    category: Category;
    cartAmount: number;
    stock: number;
}