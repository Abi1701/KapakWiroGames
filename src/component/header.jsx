import React, { useEffect, useState } from "react";
import {
	NavContainer,
	NavLogo,
	NavContent,
	NavContents,
	NavTittle,
	NavContainerContent,
} from "./headerStyled";
import { useDispatch, useSelector } from "react-redux";
import {
	doLogout,
	updateToken,
	getProfile,
} from "../store/actions/authActions";
import { Divider } from "@mui/material";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import Meditation from "../../public/assets/meditation.json";

export default function Header() {
	const dispatch = useDispatch();
	const profile = useSelector((state) => state.authReducer.profile);
	let ignore = true;
	useEffect(() => {
		if (ignore) fetchData();
		return () => {
			ignore = false;
		};
	}, []);
	const fetchData = async () => {
		await dispatch(getProfile());
	};

	const logOut = () => {
		doLogout();
	};

	return (
		<NavContainer>
			<Player
				autoplay
				loop
				src={Meditation}
				style={{
					background: "transparent",
					position: "absolute",
					top: "0",
					left: "3%",
					width: 70,
				}}
			/>
			<NavContainerContent>
				<NavContent>
					<NavTittle>
						<Link href="/">Home</Link>
					</NavTittle>
				</NavContent>
				<NavContents>
					{!profile ? (
						<NavTittle>hello,Visitor</NavTittle>
					) : (
						<Link href="/profilepage">
							<NavTittle>Hello, {profile && profile}</NavTittle>{" "}
						</Link>
					)}
				</NavContents>
				<NavContents>
					{!profile ? (
						<Link href="/user/auth">
							<NavTittle>Login or Register</NavTittle>
						</Link>
					) : (
						<NavTittle onClick={logOut}>LogOut</NavTittle>
					)}
				</NavContents>
			</NavContainerContent>
		</NavContainer>
	);
}
