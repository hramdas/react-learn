import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getTodo } from '../store/action'

export const TodoList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getTodos()
    }, []);
     
    const  getTodos =()=>{
        fetch("http://localhost:3001/todos")
        .then(req=>req.json())
        .then(res=>dispatch(getTodo(res)))
        .catch(e=>console.group(e.message))
    }

    const todos = useSelector((state)=>state.TodoReducer)
    console.log(todos)
  return (
    <div>
        { todos ? todos.map((e, i)=>(
            <div key={i}>{e.title}</div>
        )):<span></span>}

    </div>
  )
}
