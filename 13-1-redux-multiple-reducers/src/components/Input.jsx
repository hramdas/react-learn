import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/action';
import { todos } from '../utils/request';

export const Input = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleClick = async ()=>{
        
        const {data} = await todos.post('/',{
             title :text,
            status:false
        })
        dispatch(addTodo(data))
        setText("")
    }

  return (
    <div>
        <input value={text} type="text"onChange={handleChange} placeholder='Enter todo'/>
        <button onClick={handleClick} >Add </button>
    </div>
  )
}
