import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const TodoItem = ()=>{
    const {id} = useParams()
    const [todo, setTodo] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/todos/${id}`)
        .then(d=>d.json())
        .then((res)=>setTodo(res))
    }, []);

    const handleUpdate = (s)=>{
        fetch(`http://localhost:3001/todos/${id}`,{
            method : "PATCH",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({ status : s })
        })
        .then(d=>d.json())
        .then(res=>setTodo(res))
    }
    
    return(
        <div>
            Todo Item {id}

            <h3>{todo.title}</h3>
            <span>{todo.status ? "Done" :" Not Done"} <button onClick={()=>handleUpdate(!todo.status)}>Change</button> </span>
            <br />
            <br />
            <button onClick={()=>handleUpdate()}>Edit</button>
        </div>
    )
}