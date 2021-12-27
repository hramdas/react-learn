import React from "react";

function TodoList({item, handleStatus}){

    // const handleStatus = (id) =>{
    //     handleStatus(id)
    // }

    return (
        <>
        <div>
            <span>{item.title} - {item.status ? "Done" : "Not done"}</span>
            <button onClick={()=>handleStatus(item.id, item)}>Mark done</button>
        </div>
      
  
        </>
    )
}

export default TodoList