import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { Help, HomePage, Orders, Products, Users } from "./screens";
import { Footer, HomeNavbar, OtherNavbar } from "./components";

import "../css/app.css";
import "../css/home-navbar.css";
import "../css/other-navbar.css";
import "../css/footer.css";
import "../css/home.css";
import "../css/product.css";
import "../css/chosen-product.css";
import "../css/order.css";
import "../css/user-page.css";
import "../css/help-page.css";
import { CartItem } from "../lib/types/search";

const App = () => {
	const location = useLocation();

	const cartJson: string | null = localStorage.getItem("cartData");
	const currentCart = cartJson ? JSON.parse(cartJson) : [];
  const [cartItems, setCartItems] = useState<CartItem[]>(currentCart);
  

	// Temproray Handlers:
	const onAdd = (input: CartItem) => {
		const exist: any = cartItems.find((item: CartItem) => {
			return item._id === input._id;
		});

		if (exist) {
			const cartUpdate = cartItems.map((item: CartItem) => {
				return item._id === input._id
					? { ...exist, quantity: exist.quantity + 1 }
					: item;
			});

			setCartItems(cartUpdate);
			localStorage.setItem("cartData", JSON.stringify(cartUpdate));
		} else {
			const cartUpdate = [...cartItems, { ...input }];
			setCartItems(cartUpdate);
			localStorage.setItem("cartData", JSON.stringify(cartUpdate));
		}
	};

	return (
		<>
			{location.pathname === "/" ? <HomeNavbar cartItems={cartItems} /> : <OtherNavbar cartItems={cartItems} />}
			<Switch>
				<Route path={"/products"}>
					<Products onAdd={onAdd} />
				</Route>
				<Route path={"/orders"}>
					<Orders />
				</Route>
				<Route path={"/members-page"}>
					<Users />
				</Route>
				<Route path={"/help"}>
					<Help />
				</Route>
				<Route path={"/"}>
					<HomePage />
				</Route>
			</Switch>

			<Footer />
		</>
	);
};

export default App;
