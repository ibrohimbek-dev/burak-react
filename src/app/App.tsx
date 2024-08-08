import React, { MouseEvent, useState } from "react";
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
import { sweetErrorHandling, sweetTopSuccessAlert } from "../lib/sweetAlert";
import { Messages } from "../lib/config";
import MemberService from "./services/MemberService";
import { useGlobals } from "./hooks/useGlobals";

const App = () => {
	const location = useLocation();

	const { setAuthMember } = useGlobals();

	const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasktet();
	const [signUpOpen, setSignUpOpen] = useState<boolean>(false);
	const [loginOpen, setLoginOpen] = useState<boolean>(false);
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	// Auth Handlers:
	const handleSignupClose = () => setSignUpOpen(false);
	const handleLoginClose = () => setLoginOpen(false);

	const handleLogoutClick = (e: MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleCloseLogout = () => setAnchorEl(null);
	const handleLogoutRequest = async () => {
		try {
			const memberService = new MemberService();
			await memberService.userLogout();
			await sweetTopSuccessAlert("success", 700);
			setAuthMember(null);
		} catch (err) {
			console.log(err);
			sweetErrorHandling(Messages.SOMETHING_WENT_WRONG);
		}
	};

	// =============================

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
					handleLogoutClick={handleLogoutClick}
					anchorEl={anchorEl}
					handleCloseLogout={handleCloseLogout}
					handleLogoutRequest={handleLogoutRequest}
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
					handleLogoutClick={handleLogoutClick}
					anchorEl={anchorEl}
					handleCloseLogout={handleCloseLogout}
					handleLogoutRequest={handleLogoutRequest}
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
