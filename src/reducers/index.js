import { combineReducers } from "redux"
import auth from "./auth"
import errors from "./errors"
import notes from "./notes"

export default combineReducers({
  auth: auth,
  errors: errors,
  notes: notes
})
