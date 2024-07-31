import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

// REDUX SLICE:
const actionDispatch = (dispatch: Dispatch) => ({
	setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

// Quyidagi component home screen sectional component hisoblanadi
const HomePage = () => {
	const { setPopularDishes } = actionDispatch(useDispatch());
	useEffect(() => {
		// Fetch data from the backend

		const productService = new ProductService();
		productService
			.getProducts({
				page: 1,
				limit: 4,
				order: "productViews",
				productCollection: ProductCollection.DISH,
			})
      .then((data) => {
				setPopularDishes(data);
			})
			.catch(err => console.log("Error on data =>", err));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);



	return (
		<div className="home-page">
			<Statistics />
			<PopularDishes />
			<NewDishes />
			<Advertisement />
			<ActiveUsers />
			<Events />
		</div>
	);
};

export default HomePage;
