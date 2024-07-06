import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import "../css/app.css";
import { Help, Home, Orders, Products, Users } from "./screens";

const App = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/products">Products Page</Link>
					</li>
					<li>
						<Link to="/orders">Orders Page</Link>
					</li>
					<li>
						<Link to="/users">Member Page</Link>
					</li>
					<li>
						<Link to="/help">Help Page</Link>
					</li>
					<li>
						<Link to="/">Home Page</Link>
					</li>
				</ul>
			</nav>

			<Switch>
				<Route path={"/products"}>
					<Products />
				</Route>
				<Route path={"/orders"}>
					<Orders />
				</Route>
				<Route path={"/users"}>
					<Users />
				</Route>
				<Route path={"/help"}>
					<Help />
				</Route>
				<Route path={"/"}>
					<Home />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
