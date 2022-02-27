
import {useSelector, useDispatch} from 'react-redux'
import {addCounter} from '../features/Counter/action'

export const  Counter =()=> {

  const counter = useSelector(state=>state.CounterState.count)
  const dispatch = useDispatch()

  return (
    <div >
      <h1>Counter : {counter}</h1>
      <button onClick={()=>{
        dispatch(addCounter(1))

      }} >ADD 1</button>
      
    </div>
  );
}


