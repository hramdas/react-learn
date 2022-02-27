import React from 'react'

function TodoInput({getData}){
    const [text, setText] = React.useState("")
   const handlChange = (e) =>{
        setText(e.target.value)
    }

    const handleClick = ()=>{
        getData(text)
    }

    return(
        <>
        <input onChange={handlChange} placeholder="Enter todo" type="text" />
        <button onClick={handleClick}>Add</button>
        </>
    )
}

export default TodoInput