import React from "react";
import { Box, Button, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartItem } from "../../../lib/types/search";
import { Messages, serverApi } from "../../../lib/config";
import { BasketProps } from "../../../lib/types/common";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";
import OrderService from "../../services/OrderService";
import { useHistory } from "react-router-dom";

const Basket = (props: BasketProps) => {
	const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const { authMember } = useGlobals();
	const history = useHistory();

	const itemsPrice: number = cartItems.reduce(
		(a: number, c: CartItem): number => {
			return a + c.quantity * c.price;
		},
		0
	);
	const open = Boolean(anchorEl);

	const shippingCost = itemsPrice < 100 ? 5 : 0;
	const totalPrice = (itemsPrice + shippingCost).toFixed(1);

	/** HANDLERS **/
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
  };
    

	const proceedOrderHandler = async () => {
		try {
			handleClose();

			if (!authMember) throw new Error(Messages.LOGIN_REQUIRED);

			const orderService = new OrderService();
			await orderService.createOrder(cartItems);

			onDeleteAll();

			// REFRESH VIA CONTEXT
			history.push("/orders");
		} catch (err) {
			console.log("Error on processOrderHandler =>", err);
			sweetErrorHandling(err).then();
		}
	};

	return (
		<Box className={"hover-line"}>
			<IconButton
				aria-label="cart"
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<Badge badgeContent={cartItems.length} color="secondary">
					<img alt="" src={"/icons/shopping-cart.svg"} />
				</Badge>
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				// onClick={handleClose}
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
				<Stack className={"basket-frame"}>
					<Box className={"all-check-box"}>
						{cartItems.length > 0 ? (
							<Stack
								display={"flex"}
								flexDirection={"row"}
								justifyContent={"space-between"}
								width={"100%"}
							>
								<div>Cart Products</div>
								<DeleteForeverIcon
									sx={{ ml: "5px", cursor: "pointer" }}
									color={"primary"}
									onClick={onDeleteAll}
								/>
							</Stack>
						) : (
							<div>Cart is empty!</div>
						)}
					</Box>

					<Box className={"orders-main-wrapper"}>
						<Box className={"orders-wrapper"}>
							{cartItems.map((item: CartItem) => {
								const imagePath = `${serverApi}/${item.image}`;
								return (
									<Box key={item._id} className={"basket-info-box"}>
										<div className={"cancel-btn"}>
											<CancelIcon
												onClick={() => onDelete(item)}
												color={"primary"}
											/>
										</div>
										<img alt="" src={imagePath} className={"product-img"} />
										<span className={"product-name"}>{item.name}</span>
										<p className={"product-price"}>
											${item.price} x {item.quantity}
										</p>
										<Box sx={{ minWidth: 120 }}>
											<div className="col-2">
												<button
													onClick={() => onRemove(item)}
													className="remove"
												>
													-
												</button>{" "}
												<button onClick={() => onAdd(item)} className="add">
													+
												</button>
											</div>
										</Box>
									</Box>
								);
							})}
						</Box>
					</Box>

					{cartItems.length > 0 ? (
						<Box className={"basket-order"}>
							<span className={"price"}>
								Total: ${totalPrice} ({itemsPrice} + {shippingCost})
							</span>
							<Button
								onClick={proceedOrderHandler}
								startIcon={<ShoppingCartIcon />}
								variant={"contained"}
							>
								Order
							</Button>
						</Box>
					) : (
						""
					)}
				</Stack>
			</Menu>
		</Box>
	);
};

export default Basket;
