import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Divider from "../../components/divider";
import VisibilityIcon from "@mui/icons-material/Visibility";

const NewDishes = () => {
	const newDishesData = [
		{ productName: "Cutlet", imagePath: "/img/cutlet.webp" },
		{ productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
		{ productName: "Kebab", imagePath: "/img/kebab.webp" },
		{ productName: "Lavash", imagePath: "/img/lavash.webp" },
  ];
  
  const productSizes = ["Small Size", "Normal Size", "Large Size", "Set"]

	return (
		<div className="new-products-frame">
			<Container>
				<Stack className="main">
					<Box className="category-title">Fresh Menu</Box>
					<Stack className="cards-frame">
						<CssVarsProvider>
							{newDishesData?.length > 0 ? (
								newDishesData?.map((dish, index) => (
									<Card key={index} variant="outlined" className="card">
										<CardOverflow>
                      <div className="product-sale">
                        {productSizes[Math.floor(Math.random() * productSizes?.length)]}
                      </div>
											<AspectRatio ratio="1">
												<img src={dish?.imagePath} alt="" />
											</AspectRatio>
										</CardOverflow>

										<CardOverflow variant="soft" className="product-detail">
											<Stack className="info">
												<Stack flexDirection={"row"}>
													<Typography className="title">
														{dish?.productName}
													</Typography>

													<Divider width="2" height="24" bg="#d9d9d9" />

													<Typography className="price">
														${Math.floor(Math.random() * 30)}
													</Typography>
												</Stack>

												<Stack>
													<Typography className="views">
														{Math.floor(Math.random() * 500)}
														<VisibilityIcon
															sx={{ fontSize: 20, marginLeft: "5px" }}
														/>
													</Typography>
												</Stack>
											</Stack>
										</CardOverflow>
									</Card>
								))
							) : (
								<Box className="no-data">New dishes are not available</Box>
							)}
						</CssVarsProvider>
					</Stack>
				</Stack>
			</Container>
		</div>
	);
};

export default NewDishes;
