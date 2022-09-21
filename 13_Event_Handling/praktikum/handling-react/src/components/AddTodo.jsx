import React, { Component } from 'react';
import '../assets/styles/AddTodo.css';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: '',
    };
  }

  handleChange = (e) => {
    this.setState({ newList: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newList);
    this.setState({ newList: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className='input-field'
          type='text'
          placeholder='Create new todo'
          value={this.state.newList}
          onChange={this.handleChange}
        />
        <button className='create-btn' type='submit'>
          Create Todo
        </button>
      </form>
    );
  }
}

export default AddTodo;
