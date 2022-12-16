import { GET_PROFILE, UPDATE_TOGGLE, UPDATE_TOKEN} from '../type/authType'
import { UPLOAD_IMAGES_REQUEST,UPLOAD_IMAGES_FAILURE,UPLOAD_IMAGES_SUCCESS } from '../type/contentType'


const initialState = {
  profile: null,
  toggle: true,
  token:false,
  avatar:null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
      case UPDATE_TOGGLE:
        return {
          ...state,
          toggle: action.data,
        }
        case UPDATE_TOKEN:
          return {
            ...state,
            token: action.data,
          }
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

    default:
      return state
  }
}
export default authReducer
