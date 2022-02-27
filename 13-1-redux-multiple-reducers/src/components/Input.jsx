import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/action';

export const Input = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleClick = ()=>{
        const payload = {
            title :text,
            status:false
        }
        fetch("http://localhost:3001/todos",{
            method:"POST",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(payload)
        }).then(req=>req.json())
        .then(res=>dispatch(addTodo(res)))
        .catch(e=>console.log(e.message))
        setText("")
    }
  return (
    <div>
        <input value={text} onChange={handleChange} placeholder='Enter todo' />
        <button onClick={handleClick} >Add </button>
    </div>
  )
}
