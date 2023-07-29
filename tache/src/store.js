// store.js
import { createStore, combineReducers } from 'redux';
import noteReducer from './reducers/noteReducer';


const rootReducer = combineReducers({
  notes: noteReducer,
});

const store = createStore(rootReducer);

export default store;
