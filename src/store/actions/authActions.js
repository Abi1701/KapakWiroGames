import axios from 'axios'
import { GET_PROFILE } from '../type/authType'

export const getProfile = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/profile')
    dispatch({
      type: GET_PROFILE,
      data: response.data,
    })
  } catch (error) {
    console.log(error)
  }
}
