import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import { ProductsPageProps } from "../../../lib/types/common";


const ProductPage = (props: ProductsPageProps) => {
	const { onAdd } = props;
	const productsRoute = useRouteMatch();

	return (
		<div className="products-page">
			<Switch>
				<Route path={`${productsRoute.path}/:productId`}>
					<ChosenProduct onAdd={onAdd} />
				</Route>
				<Route path={`${productsRoute.path}`}>
					<Products onAdd={onAdd} />
				</Route>
			</Switch>
		</div>
	);
};

export default ProductPage;
