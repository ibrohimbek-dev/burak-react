import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const HomeNavbar = () => {
	const authMember = 0;

	return (
		<div className="home-navbar">
			<Container className="">
				<Stack className="">
					<Box className="">
						<NavLink to={"/"}>
							<img className="" alt="" src="/icons/burak.svg" />
						</NavLink>
					</Box>

					<Stack className="hover-line">
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
							<img src="" alt="user" />
						) : (
							<Box>
								<Button variant="contained" className="">Login</Button>
							</Box>
						)}

						{/* BASKET */}
					</Stack>
				</Stack>

				<Stack className="">DETAIL</Stack>
			</Container>
		</div>
	);
};

export default HomeNavbar;
