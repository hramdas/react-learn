import logo from './logo.svg';
import './App.css';
import {Todo} from './components/Todo'
import {Input} from './components/Input'

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      < Input />
      < Todo />
    </div>
  );
}

export default App;
