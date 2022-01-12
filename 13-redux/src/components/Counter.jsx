
import {useSelector, useDispatch} from 'react-redux'
import {addCounter} from './store/action'

function Counter() {
  const counter = useSelector(state=>state.counter)
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

export default Counter;
