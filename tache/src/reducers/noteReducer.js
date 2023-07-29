// noteReducer.js
import { ADD_NOTE, DELETE_NOTE } from '../actions/types';

const initialState = [];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
};

export default noteReducer;
