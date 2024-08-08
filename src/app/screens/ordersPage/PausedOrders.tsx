import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { createSelector } from "@reduxjs/toolkit";
import { retrievePausedOrders } from "./selector";
import { useSelector } from "react-redux";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { Messages, serverApi } from "../../../lib/config";
import OrderService from "../../services/OrderService";
import { T } from "../../../lib/types/common";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { OrderStatus } from "../../../lib/enums/order.enum";
import { useGlobals } from "../../hooks/useGlobals";

// REDUX SLICE & SELECTOR
const pausedOrdersRetriever = createSelector(
	retrievePausedOrders,
	(pausedOrders) => ({ pausedOrders })
);

interface PausedOrderProps {
	setValue: (input: string) => void;
}

const PausedOrders = (props: PausedOrderProps) => {
	const { authMember, setOrderBuilder } = useGlobals();
	const { pausedOrders } = useSelector(pausedOrdersRetriever);
	const { setValue } = props;

	// HANDLERS:
	const deleteOrderHandler = async (e: T) => {
		try {
			if (!authMember) throw new Error(Messages.LOGIN_REQUIRED);

			const orderId = e.target.value;
			const input: OrderUpdateInput = {
				orderId: orderId,
				orderStatus: OrderStatus.DELETE,
			};

			const confirmation = window.confirm("Do you want to cancel this order?");

			if (confirmation) {
				const orderService = new OrderService();

				await orderService.updateOrder(input);

				setOrderBuilder(new Date());
			}
		} catch (error) {
			console.log("Error on deleteOrderHandler =>", error);
			sweetErrorHandling(error).then();
		}
	};

	const processOrderHandler = async (e: T) => {
		try {
			if (!authMember) throw new Error(Messages.LOGIN_REQUIRED);

			// PAYMENT PROCESS...

			const orderId = e.target.value;
			const input: OrderUpdateInput = {
				orderId: orderId,
				orderStatus: OrderStatus.PROCESS,
			};

			const confirmation = window.confirm(
				"Do you want to proceed with payment?"
			);

			if (confirmation) {
				const orderService = new OrderService();
				await orderService.updateOrder(input);

        // NAVIGATE TO PORCESS ORDER
        setValue("2")
				setOrderBuilder(new Date());
			}
		} catch (error) {
			console.log("Error on processOrderHandler =>", error);
			sweetErrorHandling(error).then();
		}
	};

	return (
		<TabPanel value="1">
			<Stack>
				{pausedOrders?.map((order: Order) => {
					return (
						<Box key={order._id} className="order-main-box">
							<Box className="order-box-scroll">
								{order?.orderItems?.map((orderItem: OrderItem) => {
									const product: Product = order.productData.filter(
										(ele: Product) => {
											return orderItem.productId === ele._id;
										}
									)[0];

									const imagePath = `${serverApi}/${product.productImages[0]}`;

									return (
										<Box key={orderItem._id} className="orders-name-price">
											<img alt="" src={imagePath} className="order-dish-img" />
											<p className="title-dish">{product.productName}</p>

											<Box className="price-box">
												<p>${orderItem.itemPrice}</p>
												<img src={"/icons/close.svg"} alt="" />
												<p>{orderItem.itemQuantity}</p>
												<img src={"/icons/pause.svg"} alt="" />
												<p style={{ marginLeft: "15px" }}>
													${orderItem.itemQuantity * orderItem.itemPrice}
												</p>
											</Box>
										</Box>
									);
								})}
							</Box>

							<Box className="total-price-box">
								<Box className="box-total">
									<p>Product price</p>
									<p>${order.orderTotal - order.orderDelivery}</p>
									<img
										alt=""
										src={"/icons/plus.svg"}
										style={{ marginLeft: "20px" }}
									/>
									<p>Delivery cost</p>
									<p>${order.orderDelivery}</p>
									<img
										alt=""
										src={"/icons/pause.svg"}
										style={{ marginLeft: "20px" }}
									/>
									<p>Total</p>
									<p>${order.orderTotal}</p>
								</Box>

								<Button
									value={order._id}
									variant="contained"
									color="secondary"
									className="cancel-button"
									onClick={deleteOrderHandler}
								>
									Cancel
								</Button>

								<Button
									value={order._id}
									variant="contained"
									className="payment-button"
									onClick={processOrderHandler}
								>
									Payment
								</Button>
							</Box>
						</Box>
					);
				})}

				{!pausedOrders ||
					(pausedOrders.length === 0 && (
						<Box
							display={"flex"}
							flexDirection={"row"}
							justifyContent={"center"}
						>
							<img
								alt=""
								src={"/icons/noimage-list.svg"}
								style={{ width: 300, height: 300 }}
							/>
						</Box>
					))}
			</Stack>
		</TabPanel>
	);
};

export default PausedOrders;
