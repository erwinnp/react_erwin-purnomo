import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TodoAPI from '../../apis/todo.api';

const initialState = {
  data: [],
  error: null,
};

export const fetchTodo = createAsyncThunk('fetch/todo', async () => {
  try {
    const response = await TodoAPI.getAllTodos();
    return response.data.todoapp_todolist;
  } catch (error) {
    console.log(error);
  }
});

export const createNewTodo = createAsyncThunk('post/todo', async (todo) => {
  try {
    const response = await TodoAPI.createTodo(todo);
    return response.data.insert_todoapp_todolist_one;
  } catch (error) {
    console.log(error);
  }
});

export const deleteTodo = createAsyncThunk('delete/todo', async (id) => {
  try {
    const response = await TodoAPI.deleteTodo(id);
    return response.data.delete_todoapp_todolist.returning[0];
  } catch (error) {
    console.log(error);
  }
});

export const updateTodo = createAsyncThunk('update/todo', async (id) => {
  try {
    const response = await TodoAPI.updateTodo(id);
    return response.data.update_todoapp_todolist_by_pk;
  } catch (error) {
    console.log(error);
  }
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchTodo.fulfilled, (state, action) => {
        return (state = {
          ...state,
          data: action.payload,
        });
      })
      .addCase(createNewTodo.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.data = state.data.filter((list) => list.id !== action.payload.id);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.data = state.data.map((list) => {
          if (list.id === action.payload.id) {
            return { ...list, isDone: !list.isDone };
          } else {
            return list;
          }
        });
      });
  },
});

export default todoSlice.reducer;
