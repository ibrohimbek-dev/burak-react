import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../lib/types/screen";

const selectOrderPage = (state: AppRootState) => state.orderPage;

export const retrievePausedOrders = createSelector(
	selectOrderPage,
	(OrderPage) => OrderPage.pausedOrders
);

export const retieveProcessOrders = createSelector(
	selectOrderPage,
	(OrderPage) => OrderPage.processOrders
);

export const retrieveFinishedOrders = createSelector(
	selectOrderPage,
	(OrderPage) => OrderPage.finishedOrders
);
