import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";

import { CssBaseline } from "@mui/material";
import theme from "./CustomMUITheme";
// --------------------------------------
// css
import "./css/index.css";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);

reportWebVitals();
