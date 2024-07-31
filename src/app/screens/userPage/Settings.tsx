import React from "react";
import { Box } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";

const Settings = () => {
	return (
		<Box className="settings">
			<Box className="member-media-frame">
				<img src={"/mit-students/brian.webp"} className="mb-image" alt="" />

				<div className="media-change-box">
					<span>Upload Image</span>
					<p>only these formats are allowed: JPG, JPEG, PNG</p>
					<div className="up-del-box">
						<Button component="label">
							<CloudDownloadIcon />
							<input type="file" hidden />
						</Button>
					</div>
				</div>
			</Box>

			<Box className="input-frame">
				<div className="long-input">
					<label className="spec-label">User Name</label>
					<input
						className="spec-input mb-nick"
						type="text"
						placeholder="Martin"
						value={"Brian"}
						name="memberNick"
					/>
				</div>
			</Box>

			<Box className="input-frame">
				<div className="short-input">
					<label className="spec-label">Phone</label>
					<input
						className="spec-input mb-phone"
						type="text"
						placeholder="no phone"
						value={"+82 10 7699 6622"}
						name="memberPhone"
					/>
				</div>

				<div className="short-input">
					<label className="spec-label">Address</label>
					<input
						className="spec-input mb-address"
						type="text"
						placeholder="Daegu, Geyogsan-si"
						value={"Daegu, Geyogsan-si"}
						name="memberAdress"
					/>
				</div>
			</Box>

			<Box className="input-frame">
				<div className="long-input">
					<label className="spec-label">Description</label>
					<textarea
						className="spec-textarea mb-description"
						placeholder="Enjoy Life!"
						value={"Enjoy Life!"}
						name="memberDesc"
					/>
				</div>
			</Box>

			<Box className="save-box">
				<Button variant="contained">Save</Button>
			</Box>
		</Box>
	);
};

export default Settings;

