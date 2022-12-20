import axios from "../../utils/axios";
import { GET_SCORE } from "../type/contentType";

export const getScore = () => async (dispatch) => {
	try {
		const { data } = await axios.get("/user/gamescore");
		dispatch({
			type: GET_SCORE,
			score: data.data,
		});
	} catch (error) {
		console.log(error);
	}
};
