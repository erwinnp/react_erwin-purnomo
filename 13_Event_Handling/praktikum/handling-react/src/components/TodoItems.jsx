import React, { Component } from 'react';
import '../assets/styles/TodoItems.css';

class TodoItems extends Component {
  removeTodo = (remove) => {
    this.props.removeTodo(remove);
  };

  checkTodo = (index) => {
    this.props.checkTodo(index);
  };

  render() {
    return (
      <ul>
        {this.props.todos.map((list, index) => {
          return (
            <li key={list.id}>
              <p onClick={() => this.checkTodo(index)}>
                <input type='checkbox' readOnly checked={list.isDone} />
                <span
                  style={
                    list.isDone
                      ? { textDecoration: 'line-through' }
                      : { textDecoration: 'none' }
                  }
                >
                  {list.todo}
                </span>
              </p>
              <div className='wrapper-btn'>
                <button onClick={() => this.removeTodo(list.id)}>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TodoItems;
