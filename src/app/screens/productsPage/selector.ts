import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";

const selectProductsPage = (state: AppRootState) => state.productPage;

export const retrieveRestaurant = createSelector(
	selectProductsPage,
	(ProductPage) => ProductPage.restaurant
);

export const retrieveChosenProduct = createSelector(
	selectProductsPage,
	(ProductPage) => ProductPage.chosenProduct
);

export const retrieveProducts = createSelector(
	selectProductsPage,
	(ProductPage) => ProductPage.products
);
