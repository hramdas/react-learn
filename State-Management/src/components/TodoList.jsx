import React from "react";

function TodoList({item}){
    const handleStatus = () =>{
        item.status = !item.status
    }
    return (
        <>
        <span>
        <h2>{item.title}</h2>
        <button onClick={handleStatus}>{item.status === true ? "True" : "False"}</button>
        </span>
        </>
    )
}

export default TodoList