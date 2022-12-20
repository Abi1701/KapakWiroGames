import {
	GET_PROFILE,
	UPDATE_TOGGLE,
	UPDATE_TOKEN,
	GET_EMAIL,
} from "../type/authType";

const initialState = {
	email: null,
	profile: null,
	toggle: true,
	token: false,
	avatar: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_EMAIL:
			return {
				...state,
				email: action.email,
			};
		case GET_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		case UPDATE_TOGGLE:
			return {
				...state,
				toggle: action.data,
			};
		case UPDATE_TOKEN:
			return {
				...state,
				token: action.data,
			};

		default:
			return state;
	}
};
export default authReducer;
