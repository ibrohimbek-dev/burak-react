import React, { useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import { Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../../lib/types/product";
import { setChosenProduct, setProducts, setRestaurant } from "./slice";
import { useDispatch } from "react-redux";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

// SAVOL3 => Nega biz slice & selectorni Product.tsx'da yozdik, index.tsx'da emas?
// REDUX SLICE & SELECTOR
const actionDispatch = (dispatch: Dispatch) => ({
	setRestaurant: (data: Product[]) => dispatch(setRestaurant(data)),
	setChosenProduct: (data: Product[]) => dispatch(setChosenProduct(data)),
	setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const ProductPage = () => {
	const productsRoute = useRouteMatch();
	const { setRestaurant, setChosenProduct, setProducts } = actionDispatch(
		useDispatch()
	);

	useEffect(() => {
		const productService = new ProductService();

		productService
			.getAllProducts({
				page: 1,
				limit: 8,
				order: "createdAt",
				productCollection: ProductCollection.DISH,
				search: "",
			})
      .then((data) => {
        console.log("data =>", data)
        setProducts(data)        
      })
      .catch((err) => console.log("Error on getAllProducts =>", err));
    
    
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
