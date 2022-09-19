import './App.css';
import { todoData } from './api/Data';
import Header from './components/Header';
import TodoLists from './components/TodoLists';

function App() {
  return (
    <>
      <Header />
      {todoData.map((data, i) => (
        <TodoLists key={i} lists={data} />
      ))}
    </>
  );
}

export default App;
