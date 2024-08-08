import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
// import reduxLogger from "redux-logger";
import OrderPageReducer from "./screens/ordersPage/slice";
import ProductPageReducer from "./screens/productsPage/slice";

// Mana shu qismda homePage reducer'imizni olib joylashimiz kerak bo'ladi
export const store = configureStore({
	reducer: {
		homePage: HomePageReducer,
		productPage: ProductPageReducer,
		orderPage: OrderPageReducer,
	},
});

// export const store = configureStore({
// 	middleware: (getDefaultMiddleware) =>
// 		// @ts-ignore
// 		getDefaultMiddleware().concat(reduxLogger),
// 	reducer: {
// 		homePage: HomePageReducer,
// 		productPage: ProductsPageReducer,
// 	},
// });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
