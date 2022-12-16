
import axios from '../../utils/axios'
import { GET_PROFILE, UPDATE_TOGGLE, UPDATE_TOKEN } from '../type/authType'
import { UPLOAD_IMAGES_REQUEST,UPLOAD_IMAGES_SUCCESS,UPLOAD_IMAGES_FAILURE } from '../type/contentType'

export const getProfile = () => async (dispatch) => {
  try {
    const data = await axios.get('/me')
    dispatch({
      type: GET_PROFILE,
      profile: data.user.username,
    })
  } catch (error) {
    console.log(error)
  }
}
export const doLogin = async(body) => {
  try {
    const { data } = await axios.post('/login', body)
  
    localStorage.setItem('_q', data.data.accessToken)
    window.location.reload()
  } catch (error) {}
}
export const doRegister = (body) => async (dispatch) => {
  try {
    await axios.post('/register', body)
    dispatch({
      type: UPDATE_TOGGLE,
      data: true,
    })
  } catch (error) {
  }
}
export const changeToggle = (body) => async (dispatch) =>{
  dispatch({
    type: UPDATE_TOGGLE,
    data: body,
  })
}
export const doLogout = () => {
    localStorage.removeItem('_q')
    window.location.reload()
  
}
export const updateToken = () => (dispatch) => {
  const data = localStorage.getItem('_q')
  if (data===null||data.length===0) {
    dispatch({
      type: UPDATE_TOKEN,
      data:false,
    })
  } else {
    dispatch({
      type: UPDATE_TOKEN,
      data:true,
    })
  }
}
export const uploadImages = ({ images }) => (dispatch) => {
  images.forEach(async (image) => {
    const formData = new FormData();
    formData.append(image.name, image.imageFile);

    try {
      dispatch({ type: UPLOAD_IMAGES_REQUEST });

      const response = await axios.post("http://test.com", formData);

      dispatch({
        type: UPLOAD_IMAGES_SUCCESS,
        payload: [...(images || [])],
      });
    } catch (error) {
      dispatch({ type: UPLOAD_IMAGES_FAILURE });
    }
  });
};
