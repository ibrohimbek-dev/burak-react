import React from "react";
import {createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import theme from "./CustomMUITheme";
// --------------------------------------
// css
import "./css/index.css";

const container = document.getElementById("root")!;
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<App />
				</Router>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
