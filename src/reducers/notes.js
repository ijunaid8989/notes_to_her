import { ADD_NOTE, NOTE_LOADING, GET_NOTES } from "../types"
import isEmpty from "../validation/is-empty"

const initialState = {
  notes: [],
  loading: false
}

export default function(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case NOTE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
        loading: false
      };
    default:
      return state;
  }
}
