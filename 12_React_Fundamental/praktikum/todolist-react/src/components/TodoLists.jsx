function TodoLists({ lists }) {
  return (
    <div className='list-wrapper'>
      <p
        className='list-wrapper_content'
        style={{ textDecoration: lists.todo ? 'line-through' : 'none' }}
      >
        {lists.title}
      </p>
    </div>
  );
}

export default TodoLists;
