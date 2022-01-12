import {Todos} from './components/Todos.js'
import './App.css';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Todos />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
