import '../assets/styles/TodoItems.css';

import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, checkTodo } from '../store/features/todoSlice';

const TodoItems = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const removedTodo = (remove) => {
    dispatch(removeTodo(remove));
  };

  const checkedTodo = (check) => {
    dispatch(checkTodo(check));
  };

  const todoItems = todos.map((list) => {
    return (
      <li key={list.id}>
        <p>
          <input
            type='checkbox'
            defaultChecked={list.isDone}
            onChange={() => checkedTodo(list.id)}
          />
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
          <button
            onClick={() => {
              removedTodo(list.id);
            }}
          >
            Remove
          </button>
        </div>
      </li>
    );
  });

  return <ul>{todoItems}</ul>;
};

export default TodoItems;
