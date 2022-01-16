import {useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, addLoading, addError, getTodo } from "../store/action";

export const Input = () => {
    const [text, setText] = useState("")
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const dispatch = useDispatch()
    
    const handleClick = ()=>{
        dispatch(addLoading())
        fetch('http://localhost:3001/todos',{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                status : false,
                title : text
            })
        })
        .then(req=>req.json())
        .then((res)=>{
            dispatch(addTodo(res))
        })
    }

    return (
        <div>
            <input onChange={handleChange} type="text" placeholder="Enter Todo" />
            <button onClick={()=>handleClick()}>Add todo</button>
        </div>
    )
}

