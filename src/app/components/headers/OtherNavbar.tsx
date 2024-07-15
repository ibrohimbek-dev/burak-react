import { Box, Button, Container, Stack } from "@mui/material";
import React from 'react'
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

const OtherNavbar = () => {
  const authMember = 1;


  return (
		<div className="other-navbar">
			<Container className="navbar-container">
				<Stack className="menu">
					<Box className="">
						<NavLink to={"/"}>
							<img className="brand-logo" alt="" src="/icons/burak.svg" />
						</NavLink>
					</Box>

					<Stack className="links">
						<Box className="hover-line">
							<NavLink to={"/"}>
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
            
            <Basket/>

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
			</Container>
		</div>
	);
}

export default OtherNavbar