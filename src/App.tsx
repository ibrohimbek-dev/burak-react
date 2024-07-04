import React from "react";

import "./css/app.css";
import { train } from "./etc/train";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

const App = () => {
	// FOR MIT 14 TASKS
	train();

	return (
		<Container maxWidth="sm">
			<Stack flexDirection={"column"}>
				<Box sx={{ my: 4 }}>
					<Typography variant="h4" component={"h4"}>
						Hello World! and App on Type Scriptwith REDUX
					</Typography>
        </Box>
        
        <Button variant="contained">This is contained button</Button>
			</Stack>
		</Container>
	);
};

export default App;
