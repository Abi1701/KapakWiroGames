import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { getEmail, getProfile } from "../store/actions/authActions";
import {
	CardProfile,
	ContentContainer,
	ContentInput,
	ContentLabel,
	ContentForm,
	CardTittle,
	ContentInputUpload,
} from "./profilePage";

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
		<ContentContainer>
			<CardProfile htmlFor="upload-profile">
				<CardTittle>My Profile</CardTittle>
				<Image
					src="/assets/drStrange.png"
					width={300}
					height={275}
					sizes="100vw"
					alt="avatarprofile"
				/>
				<ContentInputUpload
					accept="image/*"
					multiple
					type="file"
					id="upload-profile"
					hidden
				/>
				<ContentForm>
					<ContentLabel>Username</ContentLabel>
					<ContentInput value={profile && profile} />
					<ContentLabel>Email</ContentLabel>
					<ContentInput value={profile && email} />
				</ContentForm>
			</CardProfile>
		</ContentContainer>
	);
}
