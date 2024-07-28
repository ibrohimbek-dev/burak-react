import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { Help, Home, Orders, Products, TestCar, Users } from "./screens";
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

const App = () => {
	const location = useLocation();

	return (
		<>
			{location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
			<Switch>
				<Route path={"/products"}>
					<Products />
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
          {/* <Home /> */}
          <TestCar/>
				</Route>
			</Switch>

			<Footer />
		</>
	);
};

export default App;
