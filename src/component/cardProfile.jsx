import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Grid, Paper, styled, TextField } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { getEmail, getProfile } from "../store/actions/authActions";
import { ContentInput } from "./profilePage";

const BoxProfile = styled("label")({
	position: "relative",
	width: "200px",
	height: "200px",
	cursor: "pointer",
	color: "transparent",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	"&:hover": {
		color: "white",
	},
});
const BoxTitle = styled(Box)({
	position: "absolute",
	display: "flex",
	justifyContent: "space-around",
});
const Image = styled("img")({
	width: "200px",
	height: "200px",
	objectFit: "cover",
	borderRadius: "50%",
	transition: "all .3s ease",
	"&:hover": {
		filter: "brightness(60%)",
	},
});
export default function OutlinedCard() {
	const dispatch = useDispatch();
	const profile = useSelector((state) => state.authReducer.profile);
	const email = useSelector((state) => state.authReducer.email);

	let ignore = true;
	useEffect(() => {
		if (ignore) fetchData();
		return () => {
			ignore = false;
		};
	}, []);
	const fetchData = async () => {
		await dispatch(getProfile());
		await dispatch(getEmail());
	};
	return (
		<Container>
			<Paper
				sx={{
					padding: "2rem",
					display: "flex",
					flexDirection: "column",
					background: "transparent",
					border: "none",
				}}>
				<Typography color="white" fontSize={24} textAlign="center" mb={3}>
					My Profile
				</Typography>
				<Grid container spacing={3}>
					<Grid
						display="flex"
						justifyContent="center"
						alignItems="center"
						item
						xs={12}
						sm={12}
						lg={6}
						xl={6}
						md={6}>
						<BoxProfile htmlFor="upload-profile">
							<Image
								src="https://i.ibb.co/CHNnP0g/mankagoose-eddie.png"
								alt="profile"
							/>
							<BoxTitle>
								<CameraAlt />
								<Typography variant="body1">Upload Profile</Typography>
							</BoxTitle>
							<input
								hidden
								accept="image/*"
								multiple
								type="file"
								id="upload-profile"
							/>
						</BoxProfile>
						{/* <Typography>
            
          </Typography> */}
					</Grid>
					<Grid item xs={12} sm={12} lg={6} xl={6} md={6}>
						<Typography variant="body1" fontWeight="bold" color="white">
							username
						</Typography>
						<ContentInput value={profile && profile} disabled fullWidth />
						<Typography variant="body1" fontWeight="bold" color="white">
							Email
						</Typography>
						<ContentInput value={profile && email} disabled fullWidth />
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
}
