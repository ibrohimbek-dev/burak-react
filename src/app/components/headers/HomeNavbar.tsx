import { Box, Button, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
	cartItems: CartItem[];
}

const HomeNavbar = (props: HomeNavbarProps) => {
	const { cartItems } = props;
	const authMember = 0;
	const [count, setCount] = useState<number>(0);
	const [value, setValue] = useState<boolean>(true);

	useEffect(() => {
		setCount(count + 1);

		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]); // This is componentDidUpdate (dependencies)

	// HANDLERS
	const buttonHandler = () => {
		setValue(!value);
	};

	return (
		<div className="home-navbar">
			<Container className="navbar-container">
				<Stack className="menu">
					<Box className="">
						<NavLink to={"/"}>
							<img className="brand-logo" alt="" src="/icons/burak.svg" />
						</NavLink>
					</Box>

					<Stack className="links">
						<Box className="hover-line">
							<NavLink activeClassName="underline" to={"/"}>
								Home
							</NavLink>
						</Box>

						<Box className="hover-line">
							<NavLink activeClassName="underline" to={"/products"}>
								Products
							</NavLink>
						</Box>

						{authMember ? (
							<>
								<Box className="hover-line">
									<NavLink activeClassName="underline" to={"/orders"}>
										Orders
									</NavLink>
								</Box>
								<Box className="hover-line">
									<NavLink activeClassName="underline" to={"/members-page"}>
										My Page
									</NavLink>
								</Box>
							</>
						) : null}

						<Box className="hover-line">
							<NavLink activeClassName="underline" to={"/help"}>
								Help
							</NavLink>
						</Box>

						<Basket cartItems={cartItems} />

						{authMember ? (
							<img
								className="user-avatar"
								src={"/icons/default-user.svg"}
								alt="user"
							/>
						) : (
							<Box>
								<Button variant="contained" className="login">
									Login
								</Button>
							</Box>
						)}
					</Stack>
				</Stack>

				<Stack className="header-frame">
					<Stack className="detail">
						<Box className="head-txt">World's Most Delicious Cousinne</Box>
						<Box className="wel-txt">The Choice, not just a choice</Box>
						<Box className="service-txt">{count} hours service</Box>
						<Box className="signup">
							{!authMember ? (
								<Button
									className="signup-btn"
									variant="contained"
									onClick={buttonHandler}
								>
									Sign Up
								</Button>
							) : null}
						</Box>
					</Stack>

					<Box className="logo-frame">
						<div className="logo-img"></div>
					</Box>
				</Stack>
			</Container>
		</div>
	);
};

export default HomeNavbar;
