import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Help, HomePage, Orders, Products, Users } from "./screens";
import { Footer, HomeNavbar, OtherNavbar } from "./components";
import useBasktet from "./hooks/useBasket";

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

// SAVOL => Nega biz local storage'dan kelgan ma'lumotlarni redux store'ga saqlamayapmiz?

const App = () => {
	const location = useLocation();	
	const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasktet();

	return (
		<>
			{location.pathname === "/" ? (
				<HomeNavbar
					cartItems={cartItems}
					onAdd={onAdd}
					onRemove={onRemove}
					onDelete={onDelete}
					onDeleteAll={onDeleteAll}
				/>
			) : (
				<OtherNavbar
					cartItems={cartItems}
					onAdd={onAdd}
					onRemove={onRemove}
					onDelete={onDelete}
					onDeleteAll={onDeleteAll}
				/>
			)}
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
