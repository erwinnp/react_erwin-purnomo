import React, { useState } from 'react';
import '../assets/styles/Main.css';

import AddTodo from './AddTodo';
import Header from './Header';
import Sidebar from './Sidebar';
import TodoItems from './TodoItems';

const Main = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSide = () => {
    setSidebar((prevSidebar) => !prevSidebar);
  };

  return (
    <>
      <div className='main-app'>
        <Sidebar unhideSidebar={toggleSide} sidebar={sidebar} />
        <Header />
        <AddTodo />
        <TodoItems />
      </div>
    </>
  );
};

export default Main;
