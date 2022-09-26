import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../assets/styles/Main.css';

import AddTodo from './AddTodo';
import Header from './Header';
import Sidebar from './Sidebar';
import TodoItems from './TodoItems';

const Main = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      todo: 'todoHooks1',
      isDone: false,
    },
    {
      id: uuidv4(),
      todo: 'todoHooks2',
      isDone: false,
    },
  ]);

  const [newList, setNewList] = useState('');

  const [sidebar, setSidebar] = useState(false);

  const toggleSide = () => {
    setSidebar((prevSidebar) => !prevSidebar);
  };

  const handleNewList = (e) => {
    setNewList(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4, todo: newList, completed: false },
    ]);
    setNewList('');
  };

  const removeTodo = (remove) => {
    const removeTodo = todos.filter((list) => {
      return list.id !== remove;
    });
    setTodos(removeTodo);
  };

  const checkTodo = (check) => {
    const checkedTodo = todos.map((todo) => {
      if (todo.id === check) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodos(checkedTodo);
  };

  return (
    <>
      <div className='main-app'>
        <Sidebar unhideSidebar={toggleSide} sidebar={sidebar} />
        <Header />
        <AddTodo
          todos={todos}
          newList={newList}
          handleNewList={handleNewList}
          addTodo={handleSubmit}
        />
        <TodoItems
          todos={todos}
          removeTodo={removeTodo}
          checkTodo={checkTodo}
        />
      </div>
    </>
  );
};

export default Main;
