import { useParams, Navigate, Link } from "react-router-dom"
import { useEffect, useState } from "react"

export const TodoItem = ()=>{
    const {id} = useParams()
    const [todo, setTodo] = useState({})
    const [show, setShow] = useState(false)
    const [edittext, setEdittext] = useState()

    useEffect(() => {
        fetch(`http://localhost:3001/todos/${id}`)
        .then(d=>d.json())
        .then((res)=>setTodo(res))
    }, [show]);

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

    const handleRemove = (id)=>{
        fetch(`http://localhost:3001/todos/${id}`,{
            method : "DELETE",
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(d=>d.json())
        .then(res=>{
            // navgate()
        })
    }
    const showEdit = (text)=>{
        setShow(true)
        setEdittext(text)
    }
    const handleEdit = (e)=>{
        setEdittext(e.target.value)
    }
    const saveEdit = (i) =>{
        fetch(`http://localhost:3001/todos/${id}`,{
            method : "PATCH",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({ title : i })
        })
        .then(d=>d.json())
        .then((res)=>{
            setShow(false)
        })
    }

    return(
        <div>
            Todo Item {id}
            <h3>{todo.title}</h3>
            <div>{todo.status ? "Done" :" Not Done"} <button onClick={()=>handleUpdate(!todo.status)}>Change</button> </div>

            <span id="btnspan">
                <button onClick={()=>showEdit(todo.title)}>Edit</button>
                <Link to="/">
                <button onClick={()=>handleRemove(todo.id)}>Remove</button>
                </Link>
            </span>

            {show?
             <div>
                 <textarea value={edittext} onChange={handleEdit} />
                 <button onClick={()=>saveEdit(edittext)}>Save</button>
             </div> : <span></span>
             }
             <br />
              <Link to="/">Go toHome</Link>
           
        </div>
    )
}