import './App.css';
import Timer from './components/Timer'
import {useState} from 'react'
import styled from 'styled-components';

const Form = styled.form`
  display : flex;
  flex-direction:column;
  width : 200px;
  margin : 20px auto auto;
  background-color:#FF9B6A;
  padding : 20px;
  border-radius : 15px 3px ;

  & > input{
    margin: 5px 0;
    font-size:20px;
    padding : 3px;
    background-color: none;
  }
`
const Button = styled.button`
  
    background-color:#77D970;
    color : #ce0764;
    font-size:23px;
    font-weight : 600;
    margin : 10px;
    border : none;
    padding : 5px 16px;
    border-radius : 10px;
`

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
    // console.log()
    setShowtime(!showtime)
  }

 return(
   <div className='App'>

      { showtime ? < Timer data={time}  /> : null}

      <Form>
        <input  type="number" name="start" placeholder='Start value' onChange={handleChange}  />
        <input type="number" name="end" placeholder='Final value' onChange={handleChange} />

        <Button onClick={ handleClick} >{showtime ? "Hide" : "Show"}</Button>
      </Form>

   </div>
 )
}

export default App;
