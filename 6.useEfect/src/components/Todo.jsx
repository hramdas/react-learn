import { useEffect, useState } from "react"

export const Todo = () =>{
    const  [text, setText] = useState("")
    const [todos, setTodos] = useState([])
    const [page, setpage] = useState(1)

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

    const handlePage = (page)=>{
        setpage(page)
        
    }
    useEffect(()=>{
        getTodo()
    }, [page])

    const getTodo = ()=>{

        fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
        .then(res => res.json())
        .then(result => {
            setTodos(result)
        })
    }

    return <div>
        <input
        onChange={(e)=> setText(e.target.value)} 
        value={text} type="text" placeholder="Enter todo" />

        <button onClick={addTodo}>Add todo</button>

        {todos.map((e)=>(<p key={e.id} >{e.title}</p>))}

        <button disabled={page===1} onClick={()=>handlePage(page-1)}>Prev</button>
        <h2>{page}</h2>
        <button onClick={()=>handlePage(page+1)}>Next</button>
    </div>
}