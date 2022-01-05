import './App.css';
import Counter from './components/Counter'
import {Todo} from './components/Todo'
import {useState} from 'react'

function App() {
  const [showcounter, setShowcounter] = useState(false)
 return(
   <div className='App'>

      < Todo />
      <hr />

      { showcounter ? < Counter /> : null}

      <button onClick={ ()=>setShowcounter(!showcounter)} >{showcounter ? "Hide" : "Show"}</button>
   </div>
 )
}

export default App;
