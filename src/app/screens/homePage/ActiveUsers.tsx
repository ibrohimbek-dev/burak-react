import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ActiveUsers = () => {
	const activeUsers = [
		{ memberNick: "Brian", memberImage: "/mit-students/brian.webp" },
		{ memberNick: "Daniel", memberImage: "/mit-students/daniel.webp" },
		{ memberNick: "David", memberImage: "/mit-students/david.webp" },
		{ memberNick: "Din", memberImage: "/mit-students/din.webp" },
		{ memberNick: "Ethan", memberImage: "/mit-students/ethan.webp" },
		{ memberNick: "Jackson", memberImage: "/mit-students/jackson.webp" },
		{ memberNick: "James", memberImage: "/mit-students/james.webp" },
		{ memberNick: "John", memberImage: "/mit-students/john.webp" },
		{ memberNick: "Johnbek", memberImage: "/mit-students/johnbek.webp" },
		{ memberNick: "Joseph", memberImage: "/mit-students/joseph.webp" },
		{ memberNick: "Martin", memberImage: "/mit-students/martin.webp" },
		{ memberNick: "Max", memberImage: "/mit-students/max.webp" },
		{ memberNick: "Robert", memberImage: "/mit-students/robert.webp" },
	];

	SwiperCore.use([Autoplay, Navigation, Pagination]);

	return (
		<div className="active-users-frame">
			<Container>
				<Stack className="main">
					<Box className="category-title">Active Users</Box>
					<Swiper
						className="cards-frame"
						slidesPerView={"auto"}
						centeredSlides={true}
						spaceBetween={30}
						loop={true}
						initialSlide={1}
						navigation={{
							nextEl: ".user-swiper-button-next",
							prevEl: ".user-swiper-button-prev",
						}}
						pagination={{
							el: ".user-swiper-pagination",
							clickable: true,
						}}
						autoplay={{
							delay: 5000,
							disableOnInteraction: true,
						}}
					>
						{activeUsers?.length > 0 ? (
							activeUsers.map((user, index) => (
								<SwiperSlide key={index} className="user-card-frame">
									<CssVarsProvider>
										<Card variant="outlined" className="card">
											<CardOverflow>
												<AspectRatio ratio="1">
													<img src={user.memberImage} alt={user.memberNick} />
												</AspectRatio>
											</CardOverflow>
											<CardOverflow>
												<Typography className="member-nickname">
													{user.memberNick}
												</Typography>
											</CardOverflow>
										</Card>
									</CssVarsProvider>
								</SwiperSlide>
							))
						) : (
							<Box className="no-data">No Active Users!</Box>
						)}
					</Swiper>

					<Box className="user-prev-next-frame">
						<img
							className="user-swiper-button-prev"
							src="/icons/arrow-right.svg"
							alt=""
						/>
						<div className="user-dot-frame-pagination user-swiper-pagination"></div>
						<img
							src="/icons/arrow-right.svg"
							className="user-swiper-button-next"
							style={{ transform: "rotate(-180deg)" }}
							alt=""
            />                        
					</Box>
				</Stack>
			</Container>
		</div>
	);
};

export default ActiveUsers;
