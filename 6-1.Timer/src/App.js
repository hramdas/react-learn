import './App.css';
import Timer from './components/Timer'
import {useState} from 'react'

function App() {
  const [showtime, setShowtime] = useState(false)
  const [time, setTime] = useState({})
  // const [end, setEnd] = useState(null)

  const handleChange = (e)=>{
    let {name, value} = e.target
  
    setTime({...time, [name] : value})
  }
  const handleClick = (e)=>{
    e.preventDefault()
    console.log()
    setShowtime(!showtime)
  }

 return(
   <div className='App'>

      { showtime ? < Timer data={time}  /> : null}

      <input  type="number" name="start" placeholder='Start value' onChange={handleChange}  />
      <input type="number" name="end" placeholder='Final value' onChange={handleChange} />

      <button onClick={ handleClick} >{showtime ? "Hide" : "Show"}</button>


   </div>
 )
}

export default App;
