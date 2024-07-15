import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

const ProcessOrders = () => {
	const orderBox: number[] = [1, 2, 3];
	const orderProcess: number[] = [1, 2, 3, 4];

	return (
		<TabPanel value="2">
			<Stack>
				{orderBox?.map((ele, index) => (
					<Box key={index} className="order-main-box">
						<Box className="order-box-scroll">
							{orderProcess?.map((ele, index) => (
								<Box key={index} className="orders-name-price">
									<img
										src={"/img/lavash.webp"}
										alt=""
										className="order-dish-img"
									/>
									<p className="title-dish">Lavash</p>

									<Box className="price-box">
										<p>$15</p>
										<img src={"/icons/close.svg"} alt="" />
										<p>2</p>
										<img src={"/icons/pause.svg"} alt="" />
										<p style={{ marginLeft: "15px" }}>${15 * 2}</p>
									</Box>
								</Box>
							))}
						</Box>

						<Box className="total-price-box">
							<Box className="box-total">
								<p>Product price</p>
								<p>${30 * 4}</p>
								<img
									alt=""
									src={"/icons/plus.svg"}
									style={{ marginLeft: "20px" }}
								/>
								<p>Delivery cost</p>
								<p>$3</p>
								<img
									src={"/icons/pause.svg"}
									style={{ marginLeft: "20px" }}
									alt=""
								/>
								<p>Total</p>
								<p>${30 * 4 + 3}</p>
							</Box>

							<p className="data-compl">{moment().format("YY-MM-DD HH:mm")}</p>

							<Button variant="contained" className="verify-button">
								Verify to Fulfill
							</Button>
						</Box>
					</Box>
				))}

				{orderBox?.length === 0 && (
					<Box display="flex" flexDirection={"row"} justifyContent={"center"}>
						<img
							src={"/icons/noimage-list.svg"}
							alt=""
							style={{ width: 300, height: 300 }}
						/>
					</Box>
				)}
			</Stack>
		</TabPanel>
	);
};

export default ProcessOrders;
