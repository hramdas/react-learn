
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addCounter} from '../features/Counter/action'

export const  Counter =()=> {

  // const counter = useSelector(state=>state.CounterState.count)
  // const dispatch = useDispatch()
  const [count, setcount] = useState(0);
  const [num, setnum] = useState(0);

  console.log('fun1' ,count, num)
  const handleClick = ()=>{
  
    setcount(count+1)
    setnum(num+1)
  }
  console.log(count, num)
 

  return (
    <div >
      <h1>Counter : {count}</h1>
      {/* <button onClick={()=>{dispatch(addCounter(1))}} >ADD 1</button> */}
      <button onClick={handleClick} >ADD 1</button>
      
    </div>
  );
}


