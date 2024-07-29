import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

// SAVOL => reselect'ni qayerdan import qilyapmiz?
// SAVOL => selectHomePage bu function'mi?
const selectHomePage = (state: AppRootState) => state.homePage;
export const retrievePopularDishes = createSelector(
	selectHomePage,
	(HomePage) => HomePage.popularDishes
);

export const retrieveNewDishes = createSelector(
	selectHomePage,
	(HomePage) => HomePage.newDishes
);

export const retrieveTopUsers = createSelector(
	selectHomePage,
	(HomePage) => HomePage.topUsers
);
