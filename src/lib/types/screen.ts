import { Member } from "./member";
import { Product } from "./product";

// REACT APP STATE:
export interface AppRootState {
	homePage: HomePageState;
	productsPage: ProductsPageState;
}

// HOME PAGE INTERFACES:
export interface HomePageState {
	popularDishes: Product[];
	newDishes: Product[];
	topUsers: Member[];
}

// PRODUCTS PAGE INTERFACES:
// SAVOL3 => Nega yoki null? Nega so'roq emas? '?'
export interface ProductsPageState {
	restaurant: Member | null;
	chosenProduct: Product[] | null;
	products: Product[];
}

// ORDERS PAGE INTERFACES:
