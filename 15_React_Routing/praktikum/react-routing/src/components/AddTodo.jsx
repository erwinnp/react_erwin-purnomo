import React from 'react';
import '../assets/styles/AddTodo.css';

const AddTodo = ({ newList, handleNewList, addTodo }) => {
  return (
    <form onSubmit={addTodo}>
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
