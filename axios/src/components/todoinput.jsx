import React, { useEffect } from 'react'
import axios from 'axios'
import {todos} from '../utils/requests'

export const Todo =()=> {
    let [todolist, setTodoList] = React.useState([])
    let [text, setText] = React.useState("")

    const handleChange = (e)=> {
        setText(e.target.value)
    }

    useEffect( async ()=>{
        // fetch('http://localhost:3001/todos')
        // .then((d)=>d.json())
        // .then((res)=>{
        //     setTodoList(res)
        // })
        
        const {data} = await todos.get('/')
        setTodoList(data)

    },[])

    const getTodos = async () =>{
        // fetch('http://localhost:3001/todos')
        // .then((d)=>d.json())
        // .then(setTodoList)

        const {data} = await todos.get('/')
        setTodoList(data)
    }
    

    const handleAdd = async () =>{
        // fetch('http://localhost:3001/todos', {
        //     method : "POST",
        //     body : JSON.stringify({
        //         title : text,
        //         status : false
        //     }),
        //     headers : {
        //         "Content-Type" : "application/json"
        //     }
        // }).then(getTodos)
        // setText("")

       const {data} = await todos.post('/', {
            title : text,
            status : false
        })
        getTodos();
    }

    const handleToggle = async (id, s) =>{
        // fetch(`http://localhost:3001/todos/${id}`, {
        //     method : "PATCH",
        //     body : JSON.stringify({
        //         status : !s
        //     }),
        //     headers : {
        //         "Content-Type" : "application/json"
        //     }
        // }).then(getTodos)
        const { data } = await todos.patch(`/${id}`,{
            status : !s
        })
        getTodos();
    }

    const handleDelete = async (id) =>{
        // fetch(`http://localhost:3001/todos/${id}`, {
        //     method : "DELETE",
        //     headers : {
        //         "Content-Type" : "application/json"
        //     }
        // }).then(getTodos)

        const {data} = await todos.delete(`/${id}`)
        getTodos();

    }

    return(
        <div id='main'>
            <input value={text} type="text" placeholder="Enter Text" onChange={handleChange} />

            <button onClick={handleAdd}>Add</button>

            {todolist.map((e)=>(<div>{e.title} - <span>{e.status ? "Done" : "Not Done" }</span>
            
            <button onClick= {()=>{handleToggle(e.id, e.status)}}>Change Status</button>

            <button onClick= {()=>{handleDelete(e.id)}}>DELETE</button>
            </div>))}
        </div>
        
    )
}