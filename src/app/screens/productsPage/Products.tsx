import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import {
	Search,
	MonetizationOn,
	RemoveRedEye,
	ArrowBack,
	ArrowForward,
} from "@mui/icons-material";
import { Pagination, PaginationItem } from "@mui/material";
import Badge from "@mui/material/Badge";

const productsData = [
	{ productName: "Cutlet", imagePath: "/img/cutlet.webp" },
	{ productName: "Kebab Fresh", imagePath: "/img/kebab-fresh.webp" },
	{ productName: "Kebab", imagePath: "/img/kebab.webp" },
	{ productName: "Lavash", imagePath: "/img/lavash.webp" },
	{ productName: "Cutlet", imagePath: "/img/cutlet.webp" },
	{ productName: "Kebab Fresh", imagePath: "/img/kebab-fresh.webp" },
	{ productName: "Kebab", imagePath: "/img/kebab.webp" },
	{ productName: "Lavash", imagePath: "/img/lavash.webp" },
];

const Products = () => {
	const productSizes: string[] = [
		"Small Size",
		"Normal Size",
		"Large Size",
		"Set",
	];

	return (
		<div className="products">
			<Container>
				<Stack flexDirection={"column"} alignItems={"center"}>
					{/* This section is done */}
					<Stack className="avatar-big-box">
						<Stack className={"top-text"}>
							<p>Burak Restaurant</p>
							<Stack className={"single-search-big-box"}>
								<input
									type={"search"}
									className={"single-search-input"}
									name={"singleResearch"}
									placeholder={"Type here"}
									value={""}
								/>
								<Button
									className={"single-button-search"}
									variant="contained"
									endIcon={<Search />}
								>
									Search
								</Button>
							</Stack>
						</Stack>
					</Stack>

					{/* This section is done */}
					<Stack className="dishes-filter-section">
						<Stack className="dishes-filter-box">
							<Button variant="contained" color="primary" className="order">
								New
							</Button>
							<Button variant="contained" color="secondary" className="order">
								Price
							</Button>
							<Button variant="contained" color="info" className="order">
								Views
							</Button>
						</Stack>
					</Stack>

					{/* This section is done */}
					<Stack className="list-category-section">
						<Stack className="product-category">
							<div className="category-main">
								<Button variant="contained" color="secondary">
									Other
								</Button>
								<Button variant="contained" color="secondary">
									Dessert
								</Button>
								<Button variant="contained" color="secondary">
									Drink
								</Button>
								<Button variant="contained" color="secondary">
									Salad
								</Button>
								<Button variant="contained" color="secondary">
									Dish
								</Button>
							</div>
						</Stack>

						<Stack className="product-wrapper">
							{productsData?.length > 0 ? (
								productsData?.map((product, index) => (
									<Stack key={index} className="product-card">
										<Stack
											className="product-img"
											sx={{ backgroundImage: `url(${product?.imagePath})` }}
										>
											<div className="product-sale">
												{
													productSizes[
														Math.floor(Math.random() * productSizes?.length)
													]
												}
											</div>

											<Button className="shop-btn">
												<img
													src={"/icons/shopping-cart.svg"}
													style={{ display: "flex" }}
													alt=""
												/>
											</Button>

											<Button className="view-btn" sx={{ right: "36px" }}>
												<Badge badgeContent={20} color="secondary">
													<RemoveRedEye sx={{ color: 20 ? "gray" : "white" }} />
												</Badge>
											</Button>
										</Stack>
										<Box className="product-desc">
											<span className="product-title">
												{product?.productName}
											</span>

											<div className="product-desc">
												<MonetizationOn />
												{Math.floor(Math.random() * 26)}
											</div>
										</Box>
									</Stack>
								))
							) : (
								<Box className="no-data">Products are not availabe!</Box>
							)}
						</Stack>
					</Stack>

					{/* This section is done */}
					<Stack className="pagination-section">
						<Pagination
							count={3}
							page={1}
							renderItem={(item) => (
								<PaginationItem
									components={{
										previous: ArrowBack,
										next: ArrowForward,
									}}
									{...item}
									color={"secondary"}
								/>
							)}
						/>
					</Stack>
				</Stack>
			</Container>

			{/* This section is done */}
			<div className="brands-logo">
				<Container className={"family-brands"}>
					<Box className={"category-title"}>Our Family Brands</Box>
					<Stack className={"brand-list"}>
						<Box className={"review-box"}>
							<img alt="" src={"/img/gurme.webp"} />
						</Box>
						<Box className={"review-box"}>
							<img alt="" src={"/img/sweets.webp"} />
						</Box>
						<Box className={"review-box"}>
							<img alt="" src={"/img/seafood.webp"} />
						</Box>
						<Box className={"review-box"}>
							<img alt="" src={"/img/doner.webp"} />
						</Box>
					</Stack>
				</Container>
			</div>

			{/* This section is done */}
			<div className="address">
				<Container>
					<Stack className="address-area">
						<Box className="title">Our Address</Box>

						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79719.75571487255!2d69.06089604377561!3d41.27730409022483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a31ca66d417%3A0x5755ff29b7bf33a!2sRayhon%20National%20Meals%20Restaurant!5e0!3m2!1sen!2skr!4v1720854608989!5m2!1sen!2skr"
							title="My Embedded Content"
							style={{ marginTop: "60px" }}
							loading="lazy"
							width={"1320"}
							height={"500"}
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</Stack>
				</Container>
			</div>
		</div>
	);
};

export default Products;
