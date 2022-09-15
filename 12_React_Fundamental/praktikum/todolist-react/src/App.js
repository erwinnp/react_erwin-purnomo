import './App.css';
import { todoData } from './api/Data';
import Header from './components/Header';
import TodoLists from './components/TodoLists';

function App() {
  return (
    <>
      <Header />
      <TodoLists
        
        lists={todoData[0]}
      />
      <TodoLists lists={todoData[1]} />
      <TodoLists lists={todoData[2]} />
      <TodoLists lists={todoData[3]} />
      <TodoLists lists={todoData[4]} />
    </>
  );
}

export default App;
