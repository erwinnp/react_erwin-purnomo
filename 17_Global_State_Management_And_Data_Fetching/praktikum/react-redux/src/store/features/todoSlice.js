import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    todo: 'ReactRedux',
    isDone: false,
  },
  {
    id: uuidv4(),
    todo: 'ReactPersist',
    isDone: false,
  },
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const ADDTODO = { id: uuidv4(), todo: action.payload, isDone: false };
      return [...state, ADDTODO];
    },
    removeTodo: (state, action) => {
      return state.filter((list) => list.id !== action.payload);
    },
    checkTodo: (state, action) => {
      return state.map((list) => {
        if (list.id === action.payload) {
          return { ...list, isDone: !list.isDone };
        } else {
          return list;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, checkTodo } = todoSlice.actions;

export default todoSlice.reducer;
