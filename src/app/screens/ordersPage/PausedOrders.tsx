import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { createSelector } from "@reduxjs/toolkit";
import { retrievePausedOrders } from "./selector";
import { useSelector } from "react-redux";
import { Order, OrderItem } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";

// REDUX SLICE & SELECTOR
const pausedOrdersRetriever = createSelector(
	retrievePausedOrders,
	(pausedOrders) => ({ pausedOrders })
);

const PausedOrders = () => {	
	const { pausedOrders } = useSelector(pausedOrdersRetriever);

	// HANDLERS:
	const deleteOrderHandler = () => {
		alert("Your order cancelled successfully!");
	};

	const processOrderHandler = () => {
		alert("Payment processed successfully!");
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
