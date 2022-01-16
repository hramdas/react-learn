import { useSelector, useDispatch } from "react-redux";
import {getLoading, getError, getTodo } from "../store/action";
import { useEffect } from "react";

export const Todo = () => {
    const {loading, todos, error} = useSelector((state)=>(
      state
    ))
    const dispatch = useDispatch()
    useEffect(() => {
        handleTodos()
    }, []);

    const handleTodos = ()=>{
        dispatch(getLoading())
        fetch('http://localhost:3001/todos')
        .then(req=>req.json())
        .then(res=>{
            dispatch(getTodo(res))
        })
    }

    const handleToggle = (id, status)=>{
        fetch(`http://localhost:3001/todos/${id}`,{
            method : "PATCH",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                status : status
            })
        })
        .then(req=>req.json())
        .then(res=> {
            handleTodos()
        })
    }
    const handleRemove = (id)=>{
        fetch(`http://localhost:3001/todos/${id}`,{
            method : "DELETE",
            headers : {
                "content-type" : "application/json"
            }
        })
        .then(req=>req.json())
        .then(res=> {
            handleTodos()
        })
    }

    return (
        <div className="todos">
            {todos.map((todo)=>
                <div className={todo.status? "completed" : "notComplete"} id="todo" key={todo.id}>
                    <span>{todo.title}</span>
                    <span>
                        <button onClick={()=>handleToggle(todo.id, !todo.status)}>{todo.status?"Done":"Not done"}</button>
                        <button  onClick={()=>handleRemove(todo.id)}>Remove</button>
                    </span>
                   
                </div>
            )}
        </div>
    )
}
