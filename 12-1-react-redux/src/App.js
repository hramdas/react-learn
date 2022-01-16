import {Todos} from './components/Todos'
import './App.css';
import {Route, Routes} from 'react-router-dom'
import { TodoItem } from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Todos />}></Route>
        <Route path='/todo/:id' element={<TodoItem />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
