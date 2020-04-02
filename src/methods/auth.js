import { SET_CURRENT_USER, GET_ERRORS } from "../types"
import API from "../API"
import { googleAuthProvider } from "../providers"

export const loginUser = () => dispatch => {
  API.auth().signInWithPopup(googleAuthProvider).then(result => {
    dispatch(setCurrentUser(result.user))
  }).catch(error => {
    dispatch({
      type: GET_ERRORS,
      payload: error
    })
  })
}

export const isLoggedIn = () => dispatch => {
  API.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(setCurrentUser(user))
    } else {
      dispatch(setCurrentUser({}))
    }
  })
}

export const setCurrentUser = (result) => {
  return {
    type: SET_CURRENT_USER,
    payload: result
  }
}

export const logoutUser = () => dispatch => {
  dispatch(setCurrentUser({}))
}
