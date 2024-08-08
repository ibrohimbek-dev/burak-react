import React, { useState } from "react";
import { Box } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";
import { useGlobals } from "../../hooks/useGlobals";
import { MemberUpdateInput } from "../../../lib/types/member";
import { T } from "../../../lib/types/common";
import {
	sweetErrorHandling,
	sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Messages, serverApi } from "../../../lib/config";
import MemberService from "../../services/MemberService";

const Settings = () => {
	const { authMember, setAuthMember } = useGlobals();
	const [memberImage, setMemberImage] = useState<string>(
		authMember?.memberImage
			? `${serverApi}/${authMember.memberImage}`
			: "/icons/default-user.svg"
	);

	const [memberUpdateInput, setMemberUpdateInput] = useState<MemberUpdateInput>(
		{
			memberNick: authMember?.memberNick,
			memberPhone: authMember?.memberPhone,
			memberAddress: authMember?.memberAddress,
			memberDesc: authMember?.memberDesc,
			memberImage: authMember?.memberImage,
		}
	);

	// HANDLERS
	const memberNickHandler = (e: T) => {
		memberUpdateInput.memberNick = e.target.value;
		setMemberUpdateInput({ ...memberUpdateInput });
	};

	const memberPhoneHandler = (e: T) => {
		memberUpdateInput.memberPhone = e.target.value;
		setMemberUpdateInput({ ...memberUpdateInput });
	};

	const memberAdressHandler = (e: T) => {
		memberUpdateInput.memberAddress = e.target.value;
		setMemberUpdateInput({ ...memberUpdateInput });
	};

	const memberDescHandler = (e: T) => {
		memberUpdateInput.memberDesc = e.target.value;
		setMemberUpdateInput({ ...memberUpdateInput });
	};

	const handleSubmitButton = async () => {
		try {
			if (!authMember) throw new Error(Messages.LOGIN_REQUIRED);
			if (Object.values(memberUpdateInput).some((value) => value === "")) {
				throw new Error(Messages.INCOMPLETE_INPUT);
			}

			const memberService = new MemberService();
			const result = await memberService.updateMember(memberUpdateInput);

			setAuthMember(result);

			// SAVOL => Nega .then() yoki await qo'yib ketyapmiz?
			await sweetTopSmallSuccessAlert(Messages.MODIFIED_SUCCESSFULLY, 700);
		} catch (error) {
			console.log("Error on handleSubmitButton =>", error);
			sweetErrorHandling(error).then();
		}
	};

	// IMAGE PREVIEW HANDLER
	const handleImageViewer = (e: T) => {
		const file = e.target.files[0];
		const fileType = file.type;

		const validateImageTypes = ["image/jpg", "image/jpeg", "image/png"];

		if (!validateImageTypes.includes(fileType)) {
			sweetErrorHandling(Messages.INVALID_IMAGE_FORMAT).then();
		} else {
			if (file) {
				memberUpdateInput.memberImage = file;
				setMemberUpdateInput({ ...memberUpdateInput });
				setMemberImage(URL.createObjectURL(file));
			}
		}
	};

	return (
		<Box className="settings">
			<Box className="member-media-frame">
				<img src={memberImage} className="mb-image" alt="" />

				<div className="media-change-box">
					<span>Upload Image</span>
					<p>only these formats are allowed: JPG, JPEG, PNG</p>
					<div className="up-del-box">
						<Button onChange={handleImageViewer} component="label">
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
						placeholder={"Your name..."}
						value={memberUpdateInput.memberNick}
						name="memberNick"
						onChange={memberNickHandler}
					/>
				</div>
			</Box>

			<Box className="input-frame">
				<div className="short-input">
					<label className="spec-label">Phone</label>
					<input
						className="spec-input mb-phone"
						type="text"
						// SAVOL => 'no phone' shartini kiritishimiz shart emasmi?
						placeholder={"Your phone number..."}
						value={memberUpdateInput.memberPhone}
						name="memberPhone"
						onChange={memberPhoneHandler}
					/>
				</div>

				<div className="short-input">
					<label className="spec-label">Address</label>
					<input
						className="spec-input mb-address"
						type="text"
						placeholder={"Your address..."}
						value={memberUpdateInput.memberAddress}
						name="memberAdress"
						onChange={memberAdressHandler}
					/>
				</div>
			</Box>

			<Box className="input-frame">
				<div className="long-input">
					<label className="spec-label">Description</label>
					<textarea
						className="spec-textarea mb-description"
						placeholder={"About yourself..."}
						value={memberUpdateInput.memberDesc}
						name="memberDesc"
						onChange={memberDescHandler}
					/>
				</div>
			</Box>

			<Box className="save-box">
				<Button onClick={handleSubmitButton} variant="contained">
					Save
				</Button>
			</Box>
		</Box>
	);
};

export default Settings;
