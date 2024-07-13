import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";

const ProductPage = () => {
	const productsRoute = useRouteMatch();

	return (
		<div className="products-page">
			<Switch>
				<Route path={`${productsRoute.path}/:productId`}>
					<ChosenProduct />
				</Route>
				<Route path={`${productsRoute.path}`}>
          <Products />          
				</Route>
			</Switch>
		</div>
	);
};

export default ProductPage;
