import { combineReducers } from 'redux';
import clientSlice from './clientSlice';

export const rootReducer = combineReducers({
  clients: clientSlice,
});
