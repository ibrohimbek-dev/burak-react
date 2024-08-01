import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import { Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../../lib/types/product";
import { setChosenProduct, setProducts, setRestaurant } from "./slice";
import { useDispatch } from "react-redux";

// SAVOL3 => Nega biz slice & selectorni Product.tsx'da yozdik, index.tsx'da emas?
// REDUX SLICE & SELECTOR
export const actionDispatch = (dispatch: Dispatch) => ({
	setRestaurant: (data: Product[]) => dispatch(setRestaurant(data)),
	setChosenProduct: (data: Product[]) => dispatch(setChosenProduct(data)),
	setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const ProductPage = () => {
	const productsRoute = useRouteMatch();
	const { setRestaurant, setChosenProduct, setProducts } = actionDispatch(
		useDispatch()
	);

	return (
		<div className="products-page">
			<Switch>
				<Route path={`${productsRoute.path}/:productId`}>
					<ChosenProduct />
				</Route>
				<Route path={`${productsRoute.path}`}>
					<Products />
				</Route>
			</Switch>
		</div>
	);
};

export default ProductPage;
