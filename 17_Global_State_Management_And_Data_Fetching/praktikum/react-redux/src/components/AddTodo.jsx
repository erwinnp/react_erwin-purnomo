import React, { useState } from 'react';
import '../assets/styles/AddTodo.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/features/todoSlice';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [newList, setNewList] = useState('');

  const handleNewList = (e) => {
    setNewList(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(newList));
    setNewList('');
    return newList;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input-field'
        type='text'
        placeholder='Create new todo'
        value={newList}
        onChange={handleNewList}
      />
      <button className='create-btn' type='submit'>
        Create Todo
      </button>
    </form>
  );
};

export default AddTodo;
