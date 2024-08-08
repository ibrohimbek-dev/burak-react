import React, { useEffect } from "react";
import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import { setFinishedOrders, setPausedOrders, setProcessOrders } from "./slice";
import { Dispatch } from "@reduxjs/toolkit";
import { Order, OrderInquiry } from "../../../lib/types/order";
import { useDispatch } from "react-redux";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";

// REDUX SLICE & SELECTOR:
const actionDispatch = (dispatch: Dispatch) => ({
	setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
	setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
	setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

const OrdersPage = () => {
	const { setPausedOrders, setProcessOrders, setFinishedOrders } =
		actionDispatch(useDispatch());
	const [value, setValue] = useState("1");
  // SAVOL => setOrderInquiry() nega ishlatilmadi?
  
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
		page: 1,
		limit: 5,
		orderStatus: OrderStatus.PAUSE,
	});

	useEffect(() => {
		const orderService = new OrderService();

		orderService
			.getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PAUSE })
			.then((data) => setPausedOrders(data))
			.catch((err) => console.log(err));

		orderService
			.getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PROCESS })
			.then((data) => setProcessOrders(data))
			.catch((err) => console.log(err));

		orderService
			.getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.FINISH })
			.then((data) => setFinishedOrders(data))
			.catch((err) => console.log(err));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderInquiry]);

	// HANDLERS:
	const handleChange = (e: SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<div className="order-page">
			<Container className="order-container">
				<Stack className="order-left">
					<TabContext value={value}>
						<Box className="order-nav-frame">
							<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
								<Tabs
									onChange={handleChange}
									aria-label="basic tabs example"
									className="table-list"
									value={value}
								>
									<Tab label="PAUSED ORDERS" value={"1"} />
									<Tab label="PROCESS ORDERS" value={"2"} />
									<Tab label="FINISHED ORDERS" value={"3"} />
								</Tabs>
							</Box>
						</Box>

						<Stack className="order-main-content">
							<PausedOrders />
							<ProcessOrders />
							<FinishedOrders />
						</Stack>
					</TabContext>
				</Stack>

				<Stack className="order-right">
					<Box className="order-info-box">
						<Box className="member-box">
							<div className="order-user-img">
								<img
									alt=""
									src={"/mit-students/brian.webp"}
									className="order-user-avatar"
								/>

								<div className="order-user-icon-box">
									<img
										alt=""
										src={"/icons/restaurant.svg"}
										className="order-user-prof-img"
									/>
								</div>
							</div>

							<span className="order-user-name">Brian</span>
							<span className="order-user-name">Restaurant</span>
						</Box>
						<Box className="linea"></Box>

						<Box className="order-user-address">
							<div style={{ display: "flex" }}>
								<LocationOnIcon />
							</div>
							<div className="spec-address-txt">Daegu, Geyongsan-si</div>
						</Box>
					</Box>

					<Box className={"order-info-box"} sx={{ mt: "15px" }}>
						<input
							type={"text"}
							name={"cardNumber"}
							placeholder={"Card number : **** 4090 2002 7495"}
							className={"card-input"}
						/>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<input
								type={"text"}
								name={"cardPeriod"}
								placeholder={"07 / 26"}
								className={"card-half-input"}
							/>
							<input
								type={"text"}
								name={"cardCVV"}
								placeholder={"CVV : 010"}
								className={"card-half-input"}
							/>
						</div>
						<input
							type={"text"}
							name={"cardCreator"}
							placeholder={"Ibrohimbek Alisherov"}
							className={"card-input"}
						/>
						<div className={"cards-box"}>
							<img alt="" src={"/icons/western-card.svg"} />
							<img alt="" src={"/icons/master-card.svg"} />
							<img alt="" src={"/icons/paypal-card.svg"} />
							<img alt="" src={"/icons/visa-card.svg"} />
						</div>
					</Box>
				</Stack>
			</Container>
		</div>
	);
};

export default OrdersPage;
