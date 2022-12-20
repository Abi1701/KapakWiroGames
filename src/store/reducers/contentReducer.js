import {
	UPLOAD_IMAGES_REQUEST,
	UPLOAD_IMAGES_FAILURE,
	UPLOAD_IMAGES_SUCCESS,
	GET_SCORE,
} from "../type/contentType";
const initialState = {
	avatar: null,
	score: [],
};

const contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_SCORE:
			return {
				...state,
				score: action.data,
			};
		default:
			return state;
	}
};
export default contentReducer;
