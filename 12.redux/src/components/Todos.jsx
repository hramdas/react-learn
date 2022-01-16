import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addTodoLoading, addTodoSuccess, getTodoSuccess} from '../store/action'

export const Todos = ()=>{
    const [text, setText] = useState("")
    const {loading, todos, error} = useSelector(state=>({
        loading : state.loading,
        todos : state.todos,
        error:  state.error
    }))

    console.log(todos)

    // function (prev, curr){
    //     if(prev.loading == curr.loading ){

    //     }
    // }
    const dispatch = useDispatch()

    useEffect(() => {
        req()
    }, []);
    async function req(){
        try{
            fetch('http://localhost:3001/todos')
            .then((req)=>req.json())
            .then((res)=>{
                // console.log(res)
                dispatch(getTodoSuccess(res))
            })
        } catch(err) {
            return err }
    }
    
    return <div>
        <input value = {text} type="text" placeholder="Enter Todo" onChange={(e)=>{
            setText(e.target.value)
        }} />
        <button onClick={()=>{
            dispatch(addTodoLoading());
            fetch("http://localhost:3001/todos",{
                method : "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({ status : false, title : text })
            })
            .then((d)=>d.json())
            .then((res)=>dispatch(addTodoSuccess(res)))
        }} >ADD TODO</button>

        <div>
            
        </div>
    </div>
}