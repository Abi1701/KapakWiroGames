import { toast } from "react-toastify";
import axios from "../../utils/axios";
import Router from "next/router";
import {
	GET_EMAIL,
	GET_PROFILE,
	UPDATE_TOGGLE,
	UPDATE_TOKEN,
} from "../type/authType";

export const getProfile = () => async (dispatch) => {
	try {
		const { data } = await axios.get("/me");
		dispatch({
			type: GET_PROFILE,
			profile: data.user.username,
		});
	} catch (error) {
		console.log(error);
	}
};
export const getEmail = () => async (dispatch) => {
	try {
		const { data } = await axios.get("/me");
		dispatch({
			type: GET_EMAIL,
			email: data.user.email,
		});
	} catch (error) {
		console.log(error);
	}
};
export const doLogin = async (body) => {
	try {
		const { data } = await axios.post("/login", body);
		localStorage.setItem("_q", data.data.accessToken);
		Router.push("/");
	} catch (error) {}
};
export const doRegister = (body) => async (dispatch) => {
	try {
		await axios.post("/register", body);
		dispatch({
			type: UPDATE_TOGGLE,
			data: true,
		});
		toast.success("User Registered");
	} catch (error) {
		toast.error(error.message);
	}
};
export const changeToggle = (body) => async (dispatch) => {
	dispatch({
		type: UPDATE_TOGGLE,
		data: body,
	});
};
export const doLogout = () => {
	localStorage.removeItem("_q");
	window.location.reload();
};
export const updateToken = () => (dispatch) => {
	const data = localStorage.getItem("_q");
	if (data === null || data.length === 0) {
		dispatch({
			type: UPDATE_TOKEN,
			data: false,
		});
	} else {
		dispatch({
			type: UPDATE_TOKEN,
			data: true,
		});
	}
};
