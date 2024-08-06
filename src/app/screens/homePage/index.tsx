import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import MemberService from "../../services/MemberService";
import { Member } from "../../../lib/types/member";

// REDUX SLICE:
const actionDispatch = (dispatch: Dispatch) => ({
	setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
	setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
	setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

// Quyidagi component home screen sectional component hisoblanadi
const HomePage = () => {
	const { setPopularDishes, setNewDishes, setTopUsers } = actionDispatch(
		useDispatch()
	);

	useEffect(() => {
		// Fetch data from the backend
		const productService = new ProductService();
		const memberService = new MemberService();

		productService
			.getAllProducts({
				page: 1,
				limit: 4,
				order: "productViews",
				productCollection: ProductCollection.DISH,
			})
			.then((data) => setPopularDishes(data))
			.catch((err) => console.log("Error on data setPopularDishes =>", err));

		productService
			.getAllProducts({
				page: 1,
				limit: 4,
				order: "createdAt",
				productCollection: ProductCollection.DISH,
			})
			.then((data) => setNewDishes(data))
			.catch((err) => console.log("Error on data setNewDishes =>", err));

		memberService
			.getTopUsers()
			.then((data) => setTopUsers(data))
			.catch((err) => console.log("Error on getTopUsers =>", err));
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
