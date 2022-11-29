
import axios from '../../utils/axios'
import { GET_PROFILE, UPDATE_TOGGLE, UPDATE_TOKEN } from '../type/authType'

export const getProfile = () => async (dispatch) => {
  try {
    const response = await axios.get('/pokemon/1')
    dispatch({
      type: GET_PROFILE,
      profile: response.data,
    })
  } catch (error) {
    console.log(error)
  }
}
export const doLogin = async(body) => {
  try {
    const { data } = await axios.post('/auth/login', body)
    localStorage.setItem('_q', data.token)
    window.location.reload()
  } catch (error) {}
}
export const doRegister = (body) => async (dispatch) => {
  try {
    await axios.post('/auth/register', body)
    dispatch({
      type: UPDATE_TOGGLE,
      data: true,
    })
  } catch (error) {}
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
