import { CartItem } from "./search";

export interface T {
	[key: string]: any;
}


export interface BasketProps {
	cartItems: CartItem[];
	onAdd: (item: CartItem) => void;
	onRemove: (item: CartItem) => void;
	onDelete: (item: CartItem) => void;
	onDeleteAll: () => void;
}

export interface ProductsPageProps {
	onAdd: (item: CartItem) => void;
}