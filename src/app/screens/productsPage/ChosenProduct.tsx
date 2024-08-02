import React, { useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Divider from "../../components/divider";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { setChosenProduct, setRestaurant } from "./slice";
import { Product } from "../../../lib/types/product";
import { retrieveChosenProduct, retrieveRestaurant } from "./selector";
import { useParams } from "react-router-dom";
import ProductService from "../../services/ProductService";
import MemberService from "../../services/MemberServce";
import { Member } from "../../../lib/types/member";
import { useDispatch, useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";

// REDUX SLICE & SELECTOR
// SAVOL3 => setRestaurant nomlari bir xil bo'lsa, slice.ts tarkibidagi methodlar bilan almashib ketmaydimi?
const actionDispatch = (dispatch: Dispatch) => ({
	setRestaurant: (data: Member) => dispatch(setRestaurant(data)),
	setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
});

const chosenProductRetriever = createSelector(
	retrieveChosenProduct,
	(chosenProduct) => ({
		chosenProduct,
	})
);

const restaurantRetriever = createSelector(
	retrieveRestaurant,
	(restaurant) => ({
		restaurant,
	})
);

export default function ChosenProduct() {
	const { productId } = useParams<{ productId: string }>();
	const { setRestaurant, setChosenProduct } = actionDispatch(useDispatch());

	const { chosenProduct } = useSelector(chosenProductRetriever);
	const { restaurant } = useSelector(restaurantRetriever);

	useEffect(() => {
		const productService = new ProductService();
		const memberService = new MemberService();

		productService
			.getProductById(productId)
			.then((data) => setChosenProduct(data))
			.catch((err) => console.log("error on ChosenProduct.tsx =>", err));

		memberService
			.getRestaurant()
			.then((data) => setRestaurant(data))
			.catch((err) =>
				console.log("Error on getRestaurant in ChosenProduct.tsx", err)
			);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productId]);

  if (!chosenProduct) return null;
  
    
	return (
		<div className={"chosen-product"}>
			<Box className={"title"}>Product Detail</Box>
			<Container className={"product-container"}>
				<Stack className={"chosen-product-slider"}>
					<Swiper
						loop={true}
						spaceBetween={10}
						navigation={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className="swiper-area"
					>
						{chosenProduct?.productImages.map(
							(image: string, index: number) => {
								const imagePath = `${serverApi}/${image}`;
								return (
									<SwiperSlide key={index}>
										<img alt="" className="slider-image" src={imagePath} />
									</SwiperSlide>
								);
							}
						)}
					</Swiper>
				</Stack>
				<Stack className={"chosen-product-info"}>
					<Box className={"info-box"}>
						<strong className={"product-name"}>
							{chosenProduct?.productName}
						</strong>
						<span className={"resto-name"}>{restaurant?.memberNick}</span>
						<span className={"resto-name"}>{restaurant?.memberPhone}</span>
						<Box className={"rating-box"}>
							<Rating name="half-rating" defaultValue={2.5} precision={0.5} />
							<div className={"evaluation-box"}>
								<div className={"product-view"}>
									<RemoveRedEyeIcon sx={{ mr: "10px" }} />
									<span>{chosenProduct?.productViews}</span>
								</div>
							</div>
						</Box>
						<p className={"product-desc"}>
							{chosenProduct?.productDesc
								? chosenProduct?.productDesc
								: "No description found!"}
						</p>
						<Divider height="1" width="100%" bg="#000000" />
						<div className={"product-price"}>
							<span>Price:</span>
							<span>${chosenProduct?.productPrice}</span>
						</div>
						<div className={"button-box"}>
							<Button variant="contained">Add To Basket</Button>
						</div>
					</Box>
				</Stack>
			</Container>
		</div>
	);
}
