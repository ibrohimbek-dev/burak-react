import {
	Box,
	Button,
	Container,
	ListItemIcon,
	Menu,
	MenuItem,
	Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { Logout } from "@mui/icons-material";

import { NavbarProps } from "../../../lib/types/common";

const HomeNavbar = (props: NavbarProps) => {
	const {
		cartItems,
		anchorEl,
		onAdd,
		onRemove,
		onDelete,
		onDeleteAll,
		setSignUpOpen,
		setLoginOpen,
		handleLogoutClick,
		handleCloseLogout,
		handleLogoutRequest,
	} = props;
	const { authMember } = useGlobals();

	return (
		<div className="home-navbar">
			<Container className="navbar-container">
				<Stack className="menu">
					<Box className={"hover-line"}>
						<NavLink to="/">
							<img alt="burak" src="/icons/burak.svg" className="brand-logo" />
						</NavLink>
					</Box>
					<Stack className="links">
						<Box className={"hover-line"}>
							<NavLink to="/" activeClassName="underline">
								Home
							</NavLink>
						</Box>
						<Box className={"hover-line"}>
							<NavLink to="/products" activeClassName="underline">
								Products
							</NavLink>
						</Box>
						{authMember ? (
							<>
								<Box className={"hover-line"}>
									<NavLink to="/orders" activeClassName="underline">
										Orders
									</NavLink>
								</Box>
								<Box className={"hover-line"}>
									<NavLink to="/members-page" activeClassName="underline">
										My Page
									</NavLink>
								</Box>
							</>
						) : null}
						<Box className={"hover-line"}>
							<NavLink to="/help" activeClassName="underline">
								Help
							</NavLink>
						</Box>
						<Basket
							cartItems={cartItems}
							onAdd={onAdd}
							onRemove={onRemove}
							onDelete={onDelete}
							onDeleteAll={onDeleteAll}
						/>

						{!authMember ? (
							<Box>
								<Button
									className="login"
									variant="contained"
									onClick={() => setLoginOpen(true)}
								>
									Login
								</Button>
							</Box>
						) : (
							<img
								className="user-avatar"
								src={
									authMember?.memberImage
										? `${serverApi}/${authMember?.memberImage}`
										: "/icons/default-user.svg"
								}
								onClick={handleLogoutClick}
								alt="user.img"
							/>
						)}
						<Menu
							onClick={handleCloseLogout}
							onClose={handleCloseLogout}
							id="account-menu"
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							PaperProps={{
								elevation: 0,
								sx: {
									overflow: "visible",
									filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
									mt: 1.5,
									"& .MuiAvatar-root": {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
									"&:before": {
										content: '""',
										display: "block",
										position: "absolute",
										top: 0,
										right: 14,
										width: 10,
										height: 10,
										bgcolor: "background.paper",
										transform: "translateY(-50%) rotate(45deg)",
										zIndex: 0,
									},
								},
							}}
							transformOrigin={{ horizontal: "right", vertical: "top" }}
							anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
						>
							<MenuItem onClick={handleLogoutRequest}>
								<ListItemIcon>
									<Logout fontSize="small" style={{ color: "blue" }} />
								</ListItemIcon>
								Logout
							</MenuItem>
						</Menu>
					</Stack>
				</Stack>
				<Stack className="header-frame">
					<Stack className="detail">
						<Box className="head-txt">World`s Most Delicious Cousine</Box>
						<Box className="wel-txt">The Choice, not just a choice</Box>
						<Box className="service-txt">24 hours service</Box>
						<Box className="signup">
							{!authMember ? (
								<Button
									variant={"contained"}
									className="signup-btn"
									onClick={() => setSignUpOpen(true)}
								>
									Signup
								</Button>
							) : null}
						</Box>
					</Stack>
					<Stack className="logo-frame">
						<div className="logo-img"></div>
					</Stack>
				</Stack>
			</Container>
		</div>
	);
};

export default HomeNavbar;
