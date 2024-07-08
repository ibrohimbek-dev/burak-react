import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const HomeNavbar = () => {
	const authMember = 0;

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
									<NavLink activeClassName="underline" to={"/members/member"}>
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

				{/* BASKET */}
				<Stack className="header-frame">
					<Stack className="detail">
						<Box className="head-txt">World's Most Delicious Cousinne</Box>
						<Box className="wel-txt">The Choice, not just a choice</Box>
						<Box className="service-txt">24 hours service</Box>
						<Box className="signup">
							{!authMember ? (
								<Button className="signup-btn" variant="contained">
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
