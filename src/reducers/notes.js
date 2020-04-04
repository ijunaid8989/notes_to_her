import { ADD_NOTE, NOTE_LOADING, GET_NOTES } from "../types"

const initialState = {
  notes: [],
  loading: false,
  closeModal: false
}

export default function(state = initialState, action) {
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
        loading: false,
        closeModal: true
      };
    default:
      return state;
  }
}
