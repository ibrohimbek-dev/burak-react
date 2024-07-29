import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";

// Mana shu qismda homePage reducer'imizni olib joylashimiz kerak bo'ladi
// SAVOL => Shu qismini yaxshi tushunmadim
export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		// @ts-ignore
		getDefaultMiddleware().concat(reduxLogger),
	reducer: {
		homePage: HomePageReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
