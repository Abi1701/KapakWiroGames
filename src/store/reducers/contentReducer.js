import { UPLOAD_IMAGES_REQUEST,UPLOAD_IMAGES_FAILURE,UPLOAD_IMAGES_SUCCESS,GET_SCORE } from '../type/contentType'
const initialState = {
  avatar:null,
  score:null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
          case UPLOAD_IMAGES_REQUEST:
            return {
              ...state,
              imageUploadCount: state.imageUploadCount + 1,
            }
          case UPLOAD_IMAGES_SUCCESS:
            return {
              ...state,
              imageUploadCount: state.imageUploadCount - 1,
              images: action.payload
            };
          case UPLOAD_IMAGES_FAILURE:
            return {
              ...state,
              imageUploadCount: state.imageUploadCount - 1,
            };
            case GET_SCORE:
              return{
                ...state,
                score:action.data
              }

    default:
      return state
  }
}
export default authReducer