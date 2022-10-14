import { combineReducers } from 'redux';
// import todoSlice from './todoSlice';
import todos from './todoSlice';

const reducers = combineReducers({
  todos: todos,
});

export default reducers;
