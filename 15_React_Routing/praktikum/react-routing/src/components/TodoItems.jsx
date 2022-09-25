import '../assets/styles/TodoItems.css';

const TodoItems = ({ todos, removeTodo, checkTodo }) => {
  const todoItems = todos.map((list) => {
    return (
      <li key={list.id}>
        <p>
          <input
            type='checkbox'
            defaultChecked={list.isDone}
            onChange={() => checkTodo(list.id)}
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
              removeTodo(list.id);
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
