import './App.css';
import Timer from './components/Timer'
import {useState} from 'react'

function App() {
  const [showtime, setShowtime] = useState(true)
  const [start, setStart] = useState(0)
  const end = 3

 return(
   <div className='App'>
      {/* < Timer initial={start} end={end}  /> */}

      { showtime ? < Timer initial={start} end={end}  /> : null}

      <button onClick={ ()=>setShowtime(!showtime)} >{showtime ? "Hide" : "Show"}</button>
      
   </div>
 )
}

export default App;
