import * as React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles/CssVarsProvider";

import { CardOverflow } from "@mui/joy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const productList = [
	{ productName: "Lavash", imagePath: "/img/lavash.webp" },
	{ productName: "Cutlet", imagePath: "/img/cutlet.webp" },
	{ productName: "kebab", imagePath: "/img/kebab.webp" },
	{ productName: "Kebab Fresh", imagePath: "/img/kebab-fresh.webp" },
];

const PopularDishes = () => {
	return (
		<div className="popular-dishes-frame">
			<Container>
				<Stack className="popular-section">
					<Box className="category-title">Popular Dishes</Box>
					<Stack className="cards-frame">
						{productList?.length > 0 ? (
							productList.map((product, index) => (
								<CssVarsProvider key={index}>
									<Card className="card">
										<CardCover>
											<img
												src={product?.imagePath}
												alt={product?.productName}
											/>
										</CardCover>
										<CardCover className="card-cover" />
										<CardContent sx={{ justifyContent: "flex-end" }}>
											<Stack
												flexDirection={"row"}
												justifyContent={"space-between"}
											>
												<Typography
													level="h2"
													fontSize={"lg"}
													textColor={"#fff"}
													mb={1}
												>
													{product?.productName}
												</Typography>

												<Typography
													sx={{
														fontWeight: "md",
														color: "neutral.300",
														alignItems: "center",
														display: "flex",
													}}
												>
													{Math.floor(Math.random() * 600)}
													<VisibilityIcon
														sx={{ fontSize: 25, marginLeft: "5px" }}
													/>
												</Typography>
											</Stack>
										</CardContent>

										<CardOverflow
											sx={{
												display: "flex",
												gap: 1.5,
												py: 1.5,
												px: "var(--Card-padding)",
												borderTop: "1px solid",
												height: "60px",
											}}
										>
											<Typography
												startDecorator={<DescriptionOutlinedIcon />}
												textColor={"neutral.300"}
											>
												This is delicious meal
											</Typography>
										</CardOverflow>
									</Card>
								</CssVarsProvider>
							))
						) : (
							<Box>No products are not available</Box>
						)}
					</Stack>
				</Stack>
			</Container>
		</div>
	);
};

export default PopularDishes;
