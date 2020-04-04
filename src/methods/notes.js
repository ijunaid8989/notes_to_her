import isEmpty from "../validation/is-empty"
import API from "../API"

import 'firebase/database';

import {
  ADD_NOTE,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_NOTES,
  NOTE_LOADING,
} from '../types';

export const getNotes = (userId) => dispatch => {
  dispatch(setNoteLoading());
  API
    .database()
    .ref('notes/' + userId)
    .once('value').then((nts) => {
      let notes = []
      nts.forEach(note => { notes.push(note.val()) })
      dispatch({
        type: GET_NOTES,
        payload: notes
      })
    })
};

export const addNote = (data) => dispatch => {
  dispatch(setNoteLoading())
  if (isEmpty(data.note) || isEmpty(data.emoji)) {
    dispatch(getErrros({message: "Add something!"}))
  } else {
    dispatch(clearErrors({}))

    let noteVal = {
      emoji: data.emoji,
      note: data.note,
      date: + new Date(),
      count: data.note.length
    }

    API
      .database()
      .ref('notes/' + data.userId)
      .push(noteVal)
      .then(result => {
        dispatch(addNewNote(noteVal))
      })
      .catch(error => {
        console.log("err")
      })
  }
}

export const setNoteLoading = () => {
  return {
    type: NOTE_LOADING
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const getErrros = (result) => {
  return {
    type: GET_ERRORS,
    payload: result
  }
}

export const addNewNote = (result) => {
  return {
    type: ADD_NOTE,
    payload: result
  }
}
