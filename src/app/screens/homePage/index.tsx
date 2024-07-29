import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";

// Quyidagi component home screen sectional component hisoblanadi
const Home = () => {
  // Selector: Store => Data

  
  useEffect(() => {
    // Backend server data request => DATA

    // Slice: Data => Store
  }, [])


	return (
		<div className="home-page">
			<Statistics />
			<PopularDishes />
			<NewDishes />
			<Advertisement />
			<ActiveUsers />
			<Events />
		</div>
	);
};

export default Home;
