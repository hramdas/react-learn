import { useEffect, useState } from "react"

export const Todo = () =>{
    const  [text, setText] = useState("")
    const [todos, setTodos] = useState([])

    const addTodo = ()=>{
        const payload = {
            title : text,
            status : false
        }
        fetch("http://localhost:3001/todos",{
            "method" : "POST",
            "headers" : {
                "content-type" : "application/json"
            },
            "body": JSON.stringify(payload)
        })
        .then(()=>{
            getTodo()
            setText("")
        })
    }

    const getTodo = ()=>{

        fetch("http://localhost:3001/todos")
        .then(res => res.json())
        .then(result => {
            setTodos(result)
        })

    }
    useEffect(()=>{
        getTodo()
    }, [])
   

    return <div>
        <input
        onChange={(e)=> setText(e.target.value)} 
        value={text} type="text" placeholder="Enter todo" />

        <button onClick={addTodo}>Add todo</button>

        {todos.map((e)=>(<p key={e.id} >{e.title}</p>))}
    </div>
}