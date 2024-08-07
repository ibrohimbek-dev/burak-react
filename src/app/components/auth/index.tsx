import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Fab, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import { AuthModalProps, T } from "../../../lib/types/common";
import { Messages } from "../../../lib/config";
import { LoginInput, MemberInput } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";

// SAVOL => Nega type'larni alohida faylda yozmadik?

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 2, 2),
	},
}));

const ModalImg = styled.img`
	width: 62%;
	height: 100%;
	border-radius: 10px;
	background: #000;
	margin-top: 9px;
	margin-left: 10px;
`;

export default function AuthenticationModal(props: AuthModalProps) {
	const { signUpOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
	const classes = useStyles();

	// Initialization section:
	const [memberNick, setMemberNick] = useState<string>("");
	const [memberPhone, setMemberPhone] = useState<string>("");
	const [memberPassword, setMemberPassword] = useState<string>("");
	const { setAuthMember } = useGlobals();

	// Handlers:
	const handleUserName = (e: T) => {
		setMemberNick(e.target.value);
	};

	const handleUserPhone = (e: T) => {
		setMemberPhone(e.target.value);
	};

	const handleUserPassword = (e: T) => {
		setMemberPassword(e.target.value);
	};

	const handlePasswordKeyDown = (e: T) => {
		if (e.key === "Enter" && signUpOpen) {
			handleSignUpRequest().then();
		} else if (e.key === "Enter" && loginOpen) {
			handleLoginRequest().then();
		}
	};

	const handleSignUpRequest = async () => {
		try {
			const isFulfill =
				memberNick !== "" && memberPhone !== "" && memberPassword !== "";
			if (!isFulfill) throw new Error(Messages.INCOMPLETE_INPUT);

			const signUpInput: MemberInput = {
				memberNick: memberNick,
				memberPhone: memberPhone,
				memberPassword: memberPassword,
			};

			const memberService = new MemberService();

			const result = await memberService.userSignUp(signUpInput);

			setAuthMember(result);

			handleSignupClose();
		} catch (err: any) {
			sweetErrorHandling(err).then();
			handleSignupClose();
		}
	};

	const handleLoginRequest = async () => {
		try {
			const isFulfill = memberNick !== "" && memberPassword !== "";
			if (!isFulfill) throw new Error(Messages.INCOMPLETE_INPUT);
			const loginInput: LoginInput = {
				memberNick: memberNick,
				memberPassword: memberPassword,
			};

			const memberService = new MemberService();

			const result = await memberService.userLogin(loginInput);

			setAuthMember(result);

			handleLoginClose();
		} catch (err) {
			handleLoginClose();
			sweetErrorHandling(err).then();
		}
	};

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={signUpOpen}
				onClose={handleSignupClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={signUpOpen}>
					<Stack
						className={classes.paper}
						direction={"row"}
						sx={{ width: "800px" }}
					>
						<ModalImg src={"/img/auth.webp"} alt="camera" />
						<Stack sx={{ marginLeft: "69px", alignItems: "center" }}>
							<h2>Signup Form</h2>
							<TextField
								sx={{ marginTop: "7px" }}
								id="outlined-basic"
								label="username"
								variant="outlined"
								onChange={handleUserName}
							/>
							<TextField
								sx={{ my: "17px" }}
								id="outlined-basic"
								label="phone number"
								variant="outlined"
								onChange={handleUserPhone}
								type="number"
							/>
							<TextField
								id="outlined-basic"
								label="password"
								variant="outlined"
								onChange={handleUserPassword}
								onKeyDown={handlePasswordKeyDown}
							/>
							<Fab
								sx={{ marginTop: "30px", width: "120px" }}
								variant="extended"
								color="primary"
								onClick={handleSignUpRequest}
							>
								<LoginIcon sx={{ mr: 1 }} />
								Signup
							</Fab>
						</Stack>
					</Stack>
				</Fade>
			</Modal>

			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={loginOpen}
				onClose={handleLoginClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={loginOpen}>
					<Stack
						className={classes.paper}
						direction={"row"}
						sx={{ width: "700px" }}
					>
						<ModalImg src={"/img/auth.webp"} alt="camera" />
						<Stack
							sx={{
								marginLeft: "65px",
								marginTop: "25px",
								alignItems: "center",
							}}
						>
							<h2>Login Form</h2>
							<TextField
								id="outlined-basic"
								label="username"
								variant="outlined"
								sx={{ my: "10px" }}
								onChange={handleUserName}
							/>
							<TextField
								id={"outlined-basic"}
								label={"password"}
								variant={"outlined"}
								type={"password"}
								onChange={handleUserPassword}
								onKeyDown={handlePasswordKeyDown}
							/>
							<Fab
								sx={{ marginTop: "27px", width: "120px" }}
								variant={"extended"}
								color={"primary"}
								onClick={handleLoginRequest}
							>
								<LoginIcon sx={{ mr: 1 }} />
								Login
							</Fab>
						</Stack>
					</Stack>
				</Fade>
			</Modal>
		</div>
	);
}
