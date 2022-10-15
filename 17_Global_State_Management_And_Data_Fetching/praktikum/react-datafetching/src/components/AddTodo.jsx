import React, { useState } from 'react';
import '../assets/styles/AddTodo.css';
import { useDispatch } from 'react-redux';
import { createNewTodo } from '../store/features/todoSlice';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');

  const handleNewList = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewTodo({ todo }));
    setTodo('');
    // return todo;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input-field'
        type='text'
        placeholder='Create new todo'
        value={todo}
        onChange={handleNewList}
      />
      <button className='create-btn' type='submit'>
        Create Todo
      </button>
    </form>
  );
};

export default AddTodo;
