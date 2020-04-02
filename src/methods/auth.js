import { SET_CURRENT_USER, GET_ERRORS } from "../types"
import API from "../API"
import { googleAuthProvider } from "../providers"

export const loginUser = () => dispatch => {
  API.auth().signInWithPopup(googleAuthProvider).then(result => {
    console.log(result)
    dispatch(setCurrentUser(result))
  }).catch(error => {
    dispatch({
      type: GET_ERRORS,
      payload: error
    })
  });
}

export const setCurrentUser = (result) => {
  return {
    type: SET_CURRENT_USER,
    payload: result
  }
}
