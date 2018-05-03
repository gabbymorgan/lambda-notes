import { combineReducers } from 'redux';
import notesReducer from './notes';
import userReducer from './user';

export default combineReducers({ notesReducer, userReducer });
