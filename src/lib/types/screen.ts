import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

// REACT APP STATE:
export interface AppRootState {
	homePage: HomePageState;
	productPage: ProductsPageState;
	orderPage: OrderPageState;
}

// HOME PAGE TYPE INTERFACES:
export interface HomePageState {
	popularDishes: Product[];
	newDishes: Product[];
	topUsers: Member[];
}

// PRODUCTS PAGE TYPE INTERFACES:
export interface ProductsPageState {
	restaurant: Member | null;
	chosenProduct: Product | null;
	products: Product[];
}

// ORDERS PAGE TYPE INTERFACES:
export interface OrderPageState {
	pausedOrders: Order[];
	processOrders: Order[];
	finishedOrders: Order[];
}
