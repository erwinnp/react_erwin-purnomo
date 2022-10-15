import '../assets/styles/TodoItems.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { checkTodo } from '../store/features/todoSlice';
import { fetchTodo, deleteTodo, updateTodo } from '../store/features/todoSlice';

const TodoItems = () => {
  const todos = useSelector((state) => state.todos.data);
  // const fetchStatus = useSelector((state) => state.todos.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const removedTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const checkedTodo = (id) => {
    dispatch(updateTodo(id));
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
