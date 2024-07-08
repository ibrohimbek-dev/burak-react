import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { Help, Home, Orders, Products, Users } from "./screens";
import { Footer, HomeNavbar, OtherNavbar } from "./components";



import "../css/app.css";
import "../css/home-navbar.css"
import "../css/other-navbar.css"

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
				<Route path={"/members/member"}>
					<Users />
				</Route>
				<Route path={"/help"}>
					<Help />
				</Route>
				<Route path={"/"}>
					<Home />
				</Route>
      </Switch>
      
      <Footer/>
		</>
	);
};

export default App;
