import { Member } from "./member";
import { Product } from "./product";

// REACT APP STATE:
export interface AppRootState {
	homePage: HomePageState;
}


// HOME PAGE INTERFACES:
export interface HomePageState {
	popularDishes: Product[];
	newDishes: Product[];
	topUsers: Member[];
}

// PRODUCTS PAGE INTERFACES:


// ORDERS PAGE INTERFACES:
