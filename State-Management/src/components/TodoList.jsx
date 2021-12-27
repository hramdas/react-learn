import React from "react";

function TodoList({item}){
    const handleStatus = (id) =>{
        item.status = !item.status
    }
    
    return (
        <>
        <span>
        <h2>{item.title} - {item.status ? "Done" : "Not done"}</h2>
        <button onClick={()=>handleStatus(item.id)}></button>
        </span>
        </>
    )
}

export default TodoList