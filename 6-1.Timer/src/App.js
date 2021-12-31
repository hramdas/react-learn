import './App.css';
import Counter from './components/Counter'
import Timer from './components/Timer'
import {useState} from 'react'

function App() {
  const [showcounter, setShowcounter] = useState(false)
 return(
   <div className='App'>

      < Timer />
      <hr />

      { showcounter ? < Counter /> : null}

      <button onClick={ ()=>setShowcounter(!showcounter)} >{showcounter ? "Hide" : "Show"}</button>
   </div>
 )
}

export default App;
