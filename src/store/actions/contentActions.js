import axios from '../../utils/axios'
import { UPLOAD_IMAGES_REQUEST,UPLOAD_IMAGES_SUCCESS,UPLOAD_IMAGES_FAILURE, GET_SCORE } from '../type/contentType'

export const uploadImages = ({ images }) => (dispatch) => {
  images.forEach(async (image) => {
    const formData = new FormData();
    formData.append(image.name, image.imageFile);
    try {
      dispatch({ type: UPLOAD_IMAGES_REQUEST });
      await axios.put("/user/avatar", formData);
      dispatch({
        type: UPLOAD_IMAGES_SUCCESS,
        payload: [...(images || [])],
      });
    } catch (error) {
      dispatch({ type: UPLOAD_IMAGES_FAILURE });
    }
  });
};
export const getScore = () => (dispatch) => {
    axios.get('/user/gamescore', body)
    dispatch({
      type: GET_SCORE,
      data: true,
    })
}