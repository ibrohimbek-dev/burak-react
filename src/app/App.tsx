import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Help, HomePage, Orders, Products, Users } from "./screens";
import { AuthModal, Footer, HomeNavbar, OtherNavbar } from "./components";
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
	const [signUpOpen, setSignUpOpen] = useState<boolean>(false);
	const [loginOpen, setLoginOpen] = useState<boolean>(false);

	// Auth Handlers:
	const handleSignupClose = () => setSignUpOpen(false);
	const handleLoginClose = () => setLoginOpen(false);

	return (
		<>
			{location.pathname === "/" ? (
				<HomeNavbar
					cartItems={cartItems}
					onAdd={onAdd}
					onRemove={onRemove}
					onDelete={onDelete}
					onDeleteAll={onDeleteAll}
					setSignUpOpen={setSignUpOpen}
					setLoginOpen={setLoginOpen}
				/>
			) : (
				<OtherNavbar
					cartItems={cartItems}
					onAdd={onAdd}
					onRemove={onRemove}
					onDelete={onDelete}
					onDeleteAll={onDeleteAll}
					setSignUpOpen={setSignUpOpen}
					setLoginOpen={setLoginOpen}
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

			<AuthModal
				signUpOpen={signUpOpen}
				loginOpen={loginOpen}
				handleLoginClose={handleLoginClose}
				handleSignupClose={handleSignupClose}
			/>
		</>
	);
};

export default App;
