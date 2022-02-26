import React, { useState } from 'react'

export const Input = ({handleTodo}) => {
    const [text, setText] = useState("");
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleClick = ()=>{
        handleTodo(text)
        setText("")
    }
  return (
    <div>
        <input value={text} onChange={handleChange} placeholder='Type todo' />
        <button onClick={handleClick} >Add </button>
    </div>
  )
}
