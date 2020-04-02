import { SET_CURRENT_USER } from "../types"
import isEmpty from "../validation/is-empty"

const initialState = {
  isAuthenticated: false,
  user: {},
  credential: {} 
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
    return {
      ...state,
      isAuthenticated: !isEmpty(action.payload),
      user: action.payload.user,
      credential: action.payload.credential
    }
    default:
      return state
  }
}
