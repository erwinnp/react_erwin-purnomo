import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../assets/styles/Main.css';

import Header from './Header';
import AddTodo from './AddTodo';
import TodoItems from './TodoItems';

const todos = [
  {
    id: uuidv4(),
    todo: 'todo1',
    isDone: false,
  },
  {
    id: uuidv4(),
    todo: 'todo2',
    isDone: false,
  },
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { todos };
  }

  addNewTodo = (task) => {
    if (task === '') {
      alert('add task');
      return;
    }
    todos.push({
      id: uuidv4(),
      todo: task,
      isDone: false,
    });
    this.setState({ todos });
  };

  removeTodo = (remove) => {
    const todos = this.state.todos.filter((list) => {
      return list.id !== remove;
    });
    this.setState({ todos });
  };

  checkTodo = (index) => {
    todos[index].isDone = !todos[index].isDone;
    this.setState({ todos });
  };

  render() {
    return (
      <div className='main-app'>
        <Header />
        <AddTodo addNewTodo={this.addNewTodo} />
        <TodoItems
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          checkTodo={this.checkTodo}
        />
      </div>
    );
  }
}

export default Main;
